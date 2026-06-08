# Dayton Audio MA1240A PDF Image Extraction

Source PDF: `references/manuals/dayton-audio-ma1240a-user-manual.pdf`

Generated with:

```sh
/Users/jeremyguillory/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 tools/extract_dayton_ma1240a_assets.py
```

## Notes

- The PDF contains only one embedded raster image object, extracted to `all-images/page-04-image-01-Im0.png`.
- The product diagrams are vector page artwork, not embedded raster images. Those are preserved as cropped vector PDFs in `vector/`.
- PNG files in `previews/` are rendered previews of the vector PDFs, not the vector source.
- Full-page PNG renders are in `page-renders/`.

## Recommended Rear-Panel Files

- Best callout-free rear panel: `vector/ma1240a-rear-panel-face-only-callout-free-content-filter-vector.pdf`
- Wider callout-free rear panel crop: `vector/ma1240a-rear-panel-page2-callout-free-content-filter-vector.pdf`
- Raw page 2 rear panel with original callout bubbles: `vector/ma1240a-rear-panel-page2-with-callout-bubbles.pdf`
- Page 4 rear panel without numbered callouts but with wiring lines: `vector/ma1240a-rear-panel-page4-no-number-callouts-vector.pdf`

## Other Vector Crops

- `vector/ma1240a-cover-front-panel-vector.pdf`
- `vector/ma1240a-front-panel-page2-vector.pdf`
- `vector/ma1240a-close-up-connections-page3-vector.pdf`
- `vector/ma1240a-typical-6-room-installation-page4-vector.pdf`

## Preview

See `preview-contact-sheet.png` for a quick visual index of the rendered previews.
