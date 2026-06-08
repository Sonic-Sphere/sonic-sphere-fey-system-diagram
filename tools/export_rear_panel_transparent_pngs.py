#!/usr/bin/env python3
from __future__ import annotations

import shutil
import subprocess
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "references/extracted/rear-panel-transparent-pngs"
TMP = Path("/private/tmp/rear-panel-transparent-renders")

PDFTOPPM = Path(
    "/Users/jeremyguillory/.cache/codex-runtimes/"
    "codex-primary-runtime/dependencies/bin/pdftoppm"
)


def run(command: list[str]) -> None:
    subprocess.run(command, check=True)


def render_pdf(
    pdf: Path,
    dest_stem: Path,
    dpi: int,
    crop: tuple[int, int, int, int] | None = None,
    page: int | None = None,
) -> Path:
    command = [
        str(PDFTOPPM),
        "-png",
        "-singlefile",
        "-r",
        str(dpi),
        "-thinlinemode",
        "solid",
    ]
    if page is not None:
        command.extend(["-f", str(page), "-l", str(page)])
    if crop:
        x, y, width, height = crop
        command.extend(["-x", str(x), "-y", str(y), "-W", str(width), "-H", str(height)])
    command.extend([str(pdf), str(dest_stem)])
    run(command)
    return dest_stem.with_suffix(".png")


def white_to_alpha(
    source: Path,
    dest: Path,
    *,
    rotate_180: bool = False,
    alpha_gain: float = 1.65,
    white_cutoff: float = 250.0,
    min_alpha: int = 0,
    target_width: int | None = None,
    alpha_dilate: int = 0,
) -> None:
    image = Image.open(source).convert("RGBA")
    if rotate_180:
        image = image.rotate(180, expand=True)

    rgba = np.array(image)
    rgb = rgba[:, :, :3].astype(np.float32)
    luminance = rgb[:, :, 0] * 0.299 + rgb[:, :, 1] * 0.587 + rgb[:, :, 2] * 0.114
    alpha = np.clip((255.0 - luminance) * alpha_gain, 0, 255).astype(np.uint8)
    alpha[luminance > white_cutoff] = 0
    alpha[alpha < 3] = 0
    if min_alpha:
        alpha[(alpha > 0) & (alpha < min_alpha)] = min_alpha

    output = np.full((rgba.shape[0], rgba.shape[1], 4), 255, dtype=np.uint8)
    output[:, :, :3] = 0
    output[alpha == 0, :3] = 255
    output[:, :, 3] = alpha

    ys, xs = np.where(alpha > 0)
    if len(xs) and len(ys):
        pad = 144
        x0 = max(int(xs.min()) - pad, 0)
        y0 = max(int(ys.min()) - pad, 0)
        x1 = min(int(xs.max()) + pad + 1, output.shape[1])
        y1 = min(int(ys.max()) + pad + 1, output.shape[0])
        output = output[y0:y1, x0:x1]

    final = Image.fromarray(output, "RGBA")
    if target_width and final.width > target_width:
        target_height = round(final.height * target_width / final.width)
        final = final.resize((target_width, target_height), Image.Resampling.LANCZOS)

    if alpha_dilate:
        alpha_img = final.getchannel("A").filter(ImageFilter.MaxFilter(alpha_dilate * 2 + 1))
        final.putalpha(alpha_img)
        final_rgb = Image.new("RGBA", final.size, (0, 0, 0, 0))
        final_rgb.putalpha(alpha_img)
        final = final_rgb

    final.save(dest)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    if TMP.exists():
        shutil.rmtree(TMP)
    TMP.mkdir(parents=True)

    jobs = [
        {
            "name": "dayton-ma1260-rear-panel-transparent.png",
            "pdf": ROOT
            / "references/extracted/dayton-ma1260/vector/ma1260-rear-panel-face-only-callout-free-content-filter-vector.pdf",
            "dpi": 3600,
            "target_width": 16000,
        },
        {
            "name": "dayton-ma1240a-rear-panel-transparent.png",
            "pdf": ROOT
            / "references/extracted/dayton-ma1240a/vector/ma1240a-rear-panel-face-only-callout-free-content-filter-vector.pdf",
            "dpi": 3600,
            "target_width": 16000,
        },
        {
            "name": "tascam-ml-32d-rear-panel-transparent.png",
            "pdf": ROOT / "references/manuals/tascam-ml-32d-ml-16d-outline.pdf",
            "dpi": 1440,
            # Crop measured from the 144 dpi outline render and scaled 10x for 1440 dpi.
            "crop": (5500, 600, 28200, 3100),
            "rotate_180": True,
            "alpha_gain": 48.0,
            "white_cutoff": 254.95,
            "min_alpha": 220,
            "alpha_dilate": 1,
            "target_width": 16000,
        },
    ]

    for index, job in enumerate(jobs, start=1):
        source_png = render_pdf(
            job["pdf"],
            TMP / f"render-{index:02d}",
            job["dpi"],
            crop=job.get("crop"),
            page=job.get("page"),
        )
        dest = OUT / job["name"]
        white_to_alpha(
            source_png,
            dest,
            rotate_180=bool(job.get("rotate_180", False)),
            alpha_gain=float(job.get("alpha_gain", 1.65)),
            white_cutoff=float(job.get("white_cutoff", 250.0)),
            min_alpha=int(job.get("min_alpha", 0)),
            target_width=job.get("target_width"),
            alpha_dilate=int(job.get("alpha_dilate", 0)),
        )
        with Image.open(dest) as output:
            print(f"{dest.relative_to(ROOT)} {output.width}x{output.height}")


if __name__ == "__main__":
    main()
