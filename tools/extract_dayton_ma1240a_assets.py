#!/usr/bin/env python3
from __future__ import annotations

import io
import subprocess
from copy import deepcopy
from pathlib import Path

from PIL import Image, ImageDraw
from pypdf import PdfReader, PdfWriter, Transformation
from pypdf.generic import ContentStream, NameObject
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "references/manuals/dayton-audio-ma1240a-user-manual.pdf"
OUT = ROOT / "references/extracted/dayton-ma1240a"
IMAGES = OUT / "all-images"
VECTOR = OUT / "vector"
PREVIEWS = OUT / "previews"
PAGE_RENDERS = OUT / "page-renders"

PDFTOPPM = Path(
    "/Users/jeremyguillory/.cache/codex-runtimes/"
    "codex-primary-runtime/dependencies/bin/pdftoppm"
)

PAGE_SIZE = (612.0, 792.0)


def ensure_dirs() -> None:
    for path in (IMAGES, VECTOR, PREVIEWS, PAGE_RENDERS):
        path.mkdir(parents=True, exist_ok=True)


def px_box_to_pdf(box: tuple[float, float, float, float], scale: float = 2.0) -> tuple[float, float, float, float]:
    x0, y0, x1, y1 = box
    page_height_px = PAGE_SIZE[1] * scale
    return (x0 / scale, (page_height_px - y1) / scale, x1 / scale, (page_height_px - y0) / scale)


def render_pages() -> None:
    if not PDFTOPPM.exists():
        return
    subprocess.run(
        [str(PDFTOPPM), "-png", "-r", "144", str(PDF), str(PAGE_RENDERS / "page")],
        check=True,
    )


def render_preview(pdf_path: Path) -> None:
    if not PDFTOPPM.exists():
        return
    output_prefix = PREVIEWS / pdf_path.stem
    subprocess.run(
        [str(PDFTOPPM), "-singlefile", "-png", "-r", "288", str(pdf_path), str(output_prefix)],
        check=True,
    )


def extract_images() -> list[Path]:
    reader = PdfReader(str(PDF))
    written: list[Path] = []
    for page_index, page in enumerate(reader.pages, start=1):
        for image_index, image_file in enumerate(page.images, start=1):
            suffix = Path(image_file.name).suffix or ".png"
            safe_name = f"page-{page_index:02d}-image-{image_index:02d}-{Path(image_file.name).stem}{suffix}"
            dest = IMAGES / safe_name
            if getattr(image_file, "image", None) is not None:
                image_file.image.save(dest)
            else:
                dest.write_bytes(image_file.data)
            written.append(dest)
    return written


def make_overlay_pdf(
    masks: list[tuple[float, float, float, float]] | None = None,
    strokes: list[tuple[float, float, float, float, float]] | None = None,
) -> io.BytesIO:
    data = io.BytesIO()
    c = canvas.Canvas(data, pagesize=PAGE_SIZE)
    c.setFillColorRGB(1, 1, 1)
    c.setStrokeColorRGB(1, 1, 1)

    for x, y, w, h in masks or []:
        c.rect(x, y, w, h, fill=1, stroke=0)

    for x0, y0, x1, y1, width in strokes or []:
        c.setLineWidth(width)
        c.line(x0, y0, x1, y1)

    c.save()
    data.seek(0)
    return data


def crop_pdf(
    page_number: int,
    crop_box: tuple[float, float, float, float],
    dest: Path,
    masks: list[tuple[float, float, float, float]] | None = None,
    strokes: list[tuple[float, float, float, float, float]] | None = None,
    remove_op_ranges: list[tuple[int, int]] | None = None,
) -> Path:
    reader = PdfReader(str(PDF))
    page = deepcopy(reader.pages[page_number - 1])

    if remove_op_ranges:
        content = ContentStream(page.get_contents(), reader)
        remove_indexes: set[int] = set()
        for start, end in remove_op_ranges:
            remove_indexes.update(range(start, end + 1))
        content.operations = [
            operation for index, operation in enumerate(content.operations) if index not in remove_indexes
        ]
        page[NameObject("/Contents")] = content

    if masks or strokes:
        overlay = PdfReader(make_overlay_pdf(masks, strokes)).pages[0]
        page.merge_page(overlay)

    x0, y0, x1, y1 = crop_box
    width = x1 - x0
    height = y1 - y0
    page.add_transformation(Transformation().translate(-x0, -y0))
    for box_name in ("mediabox", "cropbox", "trimbox", "artbox", "bleedbox"):
        box = getattr(page, box_name)
        box.lower_left = (0, 0)
        box.upper_right = (width, height)

    writer = PdfWriter()
    writer.add_page(page)
    with dest.open("wb") as handle:
        writer.write(handle)
    return dest


def rear_panel_masks() -> tuple[list[tuple[float, float, float, float]], list[tuple[float, float, float, float, float]]]:
    vertical_leader_xs = [98.0, 138.5, 211.0, 249.3, 512.4]
    masks = []
    for x in vertical_leader_xs:
        masks.append((x - 1.5, 272.0, 3.0, 70.0))
    masks.append((511.0, 201.0, 3.0, 72.0))

    strokes = [
        (387.0, 202.0, 387.0, 254.5, 1.8),
        (387.0, 254.5, 379.7, 259.2, 1.8),
        (387.0, 254.5, 394.5, 259.2, 1.8),
        (512.4, 202.0, 512.4, 250.0, 1.8),
    ]
    return masks, strokes


def rear_panel_callout_operation_ranges() -> list[tuple[int, int]]:
    return [
        (22984, 23004),  # upper left front-panel callout leaders
        (23068, 23070),
        (23114, 23136),  # top leaders for callouts 3, 6, 7, and 8
        (23369, 23379),  # top leader for callout 11
        (23446, 23456),  # vertical leg of callout 10
        (23522, 23538),  # rectangular pointer for callout 9
        (23598, 23618),  # lower-left trigger callout pointers
        (23730, 23740),  # vertical leg of callout 12
        (23827, 23830),  # angled arms of callout 10
    ]


def make_contact_sheet() -> Path:
    files = sorted(PREVIEWS.glob("*.png"))
    thumbs = []
    for path in files:
        image = Image.open(path).convert("RGB")
        max_width = 760
        scale = min(1, max_width / image.width)
        thumb = image.resize((int(image.width * scale), int(image.height * scale)))
        thumbs.append((path.name, thumb))

    pad = 24
    label_h = 28
    width = max((thumb.width for _, thumb in thumbs), default=760) + pad * 2
    height = sum(thumb.height + label_h + pad for _, thumb in thumbs) + pad
    sheet = Image.new("RGB", (width, height), "white")
    draw = ImageDraw.Draw(sheet)
    y = pad
    for name, thumb in thumbs:
        draw.text((pad, y), name, fill=(0, 0, 0))
        y += label_h
        sheet.paste(thumb, (pad, y))
        y += thumb.height + pad

    dest = OUT / "preview-contact-sheet.png"
    sheet.save(dest)
    return dest


def main() -> None:
    ensure_dirs()
    render_pages()
    images = extract_images()

    crops = [
        (
            "ma1240a-cover-front-panel-vector.pdf",
            1,
            px_box_to_pdf((280, 1290, 1135, 1495)),
            None,
            None,
            None,
        ),
        (
            "ma1240a-front-panel-page2-vector.pdf",
            2,
            px_box_to_pdf((110, 600, 1120, 825)),
            None,
            None,
            None,
        ),
        (
            "ma1240a-rear-panel-page2-with-callout-bubbles.pdf",
            2,
            px_box_to_pdf((120, 875, 1120, 1185)),
            None,
            None,
            None,
        ),
        (
            "ma1240a-rear-panel-page2-tight-vector.pdf",
            2,
            px_box_to_pdf((130, 940, 1100, 1168)),
            None,
            None,
            None,
        ),
        (
            "ma1240a-rear-panel-page4-no-number-callouts-vector.pdf",
            4,
            px_box_to_pdf((210, 365, 1075, 555)),
            None,
            None,
            None,
        ),
        (
            "ma1240a-close-up-connections-page3-vector.pdf",
            3,
            px_box_to_pdf((620, 170, 1145, 610)),
            None,
            None,
            None,
        ),
        (
            "ma1240a-typical-6-room-installation-page4-vector.pdf",
            4,
            px_box_to_pdf((160, 95, 1090, 780)),
            None,
            None,
            None,
        ),
    ]

    written = []
    for filename, page_number, crop_box, masks, strokes, remove_ranges in crops:
        written.append(
            crop_pdf(
                page_number,
                crop_box,
                VECTOR / filename,
                masks=masks,
                strokes=strokes,
                remove_op_ranges=remove_ranges,
            )
        )

    masks, strokes = rear_panel_masks()
    overlay_clean = crop_pdf(
        2,
        px_box_to_pdf((130, 940, 1100, 1168)),
        VECTOR / "ma1240a-rear-panel-page2-callout-free-overlay-vector.pdf",
        masks=masks,
        strokes=strokes,
    )
    written.append(overlay_clean)

    content_clean = crop_pdf(
        2,
        px_box_to_pdf((130, 940, 1100, 1168)),
        VECTOR / "ma1240a-rear-panel-page2-callout-free-content-filter-vector.pdf",
        remove_op_ranges=rear_panel_callout_operation_ranges(),
    )
    written.append(content_clean)

    face_clean = crop_pdf(
        2,
        (67.0, 215.0, 545.5, 316.0),
        VECTOR / "ma1240a-rear-panel-face-only-callout-free-content-filter-vector.pdf",
        remove_op_ranges=rear_panel_callout_operation_ranges(),
    )
    written.append(face_clean)

    for path in written:
        render_preview(path)
    contact_sheet = make_contact_sheet()

    print("embedded images")
    for path in images:
        print(path.relative_to(ROOT))
    print("vector PDFs")
    for path in written:
        print(path.relative_to(ROOT))
    print("contact sheet")
    print(contact_sheet.relative_to(ROOT))


if __name__ == "__main__":
    main()
