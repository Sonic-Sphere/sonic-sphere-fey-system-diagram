#!/usr/bin/env python3
from __future__ import annotations

import io
import subprocess
from copy import deepcopy
from pathlib import Path

from PIL import Image
from pypdf import PdfReader, PdfWriter, Transformation
from pypdf.generic import ContentStream, NameObject
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "references/manuals/dayton-audio-ma1260-user-manual.pdf"
OUT = ROOT / "references/extracted/dayton-ma1260"
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
    """Convert 144 dpi render pixel crop box to PDF point crop box."""
    x0, y0, x1, y1 = box
    page_height_px = PAGE_SIZE[1] * scale
    return (x0 / scale, (page_height_px - y1) / scale, x1 / scale, (page_height_px - y0) / scale)


def render_preview(pdf_path: Path) -> None:
    if not PDFTOPPM.exists():
        return
    output_prefix = PREVIEWS / pdf_path.stem
    subprocess.run(
        [str(PDFTOPPM), "-singlefile", "-png", "-r", "288", str(pdf_path), str(output_prefix)],
        check=True,
    )


def render_pages() -> None:
    if not PDFTOPPM.exists():
        return
    subprocess.run(
        [
            str(PDFTOPPM),
            "-png",
            "-r",
            "144",
            str(PDF),
            str(PAGE_RENDERS / "page"),
        ],
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
    # Leader-line positions measured from the 144 dpi page render.
    vertical_leader_xs = [99.0, 140.5, 213.0, 254.25, 514.0]
    masks = []
    for x in vertical_leader_xs:
        masks.append((x - 1.5, 274.0, 3.0, 70.0))

    # Continue the IEC connector pointer below the rear-panel middle line.
    masks.append((512.6, 203.0, 2.8, 72.0))

    strokes = [
        # Zone 5 Y-shaped callout pointer.
        (388.5, 208.0, 388.5, 255.0, 1.6),
        (388.5, 255.0, 374.0, 273.0, 1.8),
        (388.5, 255.0, 403.0, 273.0, 1.8),
        # Lower part of IEC pointer where it reaches the bottom callout circle.
        (514.0, 203.0, 514.0, 238.0, 1.8),
    ]

    return masks, strokes


def rear_panel_callout_operation_ranges() -> list[tuple[int, int]]:
    # These operation ranges are the separate callout leader/pointer strokes
    # in page 2's InDesign PDF content stream. The crop excludes the numbered
    # bubbles, so deleting these paths is enough to keep panel labels intact.
    return [
        (46080, 46102),  # top leaders for callouts 3, 6, 7, and 8
        (46335, 46345),  # top leader for callout 11
        (46412, 46422),  # vertical leg of callout 10
        (46488, 46504),  # rectangular pointer for callout 9
        (46564, 46584),  # lower-left trigger callout pointers
        (46696, 46706),  # vertical leg of callout 12
        (46793, 46796),  # angled arms of callout 10
    ]


def main() -> None:
    ensure_dirs()
    render_pages()
    images = extract_images()

    crops = [
        (
            "ma1260-cover-front-panel-vector.pdf",
            1,
            px_box_to_pdf((280, 1290, 1135, 1495)),
            None,
            None,
        ),
        (
            "ma1260-front-panel-page2-vector.pdf",
            2,
            px_box_to_pdf((110, 595, 1120, 825)),
            None,
            None,
        ),
        (
            "ma1260-rear-panel-page2-with-callout-bubbles.pdf",
            2,
            px_box_to_pdf((120, 870, 1120, 1185)),
            None,
            None,
        ),
        (
            "ma1260-rear-panel-page2-tight-vector.pdf",
            2,
            px_box_to_pdf((130, 936, 1100, 1166)),
            None,
            None,
        ),
        (
            "ma1260-rear-panel-page4-no-number-callouts-vector.pdf",
            4,
            px_box_to_pdf((250, 315, 1055, 505)),
            None,
            None,
        ),
        (
            "ma1260-close-up-connections-page3-vector.pdf",
            3,
            px_box_to_pdf((635, 160, 1145, 600)),
            None,
            None,
        ),
        (
            "ma1260-typical-6-room-installation-page4-vector.pdf",
            4,
            px_box_to_pdf((220, 90, 1070, 705)),
            None,
            None,
        ),
        (
            "ma1260-caution-label-page4-vector.pdf",
            4,
            px_box_to_pdf((765, 1135, 1135, 1258)),
            None,
            None,
        ),
    ]

    written = []
    for filename, page_number, crop_box, masks, strokes in crops:
        written.append(crop_pdf(page_number, crop_box, VECTOR / filename, masks, strokes))

    masks, strokes = rear_panel_masks()
    clean = crop_pdf(
        2,
        px_box_to_pdf((130, 936, 1100, 1166)),
        VECTOR / "ma1260-rear-panel-page2-callout-free-overlay-vector.pdf",
        masks=masks,
        strokes=strokes,
    )
    written.append(clean)

    filtered = crop_pdf(
        2,
        px_box_to_pdf((130, 936, 1100, 1166)),
        VECTOR / "ma1260-rear-panel-page2-callout-free-content-filter-vector.pdf",
        remove_op_ranges=rear_panel_callout_operation_ranges(),
    )
    written.append(filtered)

    filtered_face = crop_pdf(
        2,
        (68.5, 216.0, 546.8, 315.5),
        VECTOR / "ma1260-rear-panel-face-only-callout-free-content-filter-vector.pdf",
        remove_op_ranges=rear_panel_callout_operation_ranges(),
    )
    written.append(filtered_face)

    for path in written:
        render_preview(path)

    print("embedded images")
    for path in images:
        print(path.relative_to(ROOT))
    print("vector PDFs")
    for path in written:
        print(path.relative_to(ROOT))


if __name__ == "__main__":
    main()
