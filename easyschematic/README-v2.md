# Sonic Sphere Fey EasySchematic Pack

This directory contains EasySchematic-compatible documentation files for the Sonic Sphere Fey system.

## Files

- `sonic-sphere-fey-system-v2.easyschematic.json` - native EasySchematic schematic save file, schema version 39.
- `sonic-sphere-fey-device-library-v2.json` - reusable device-template archive for Device Library import.
- `sonic-sphere-fey-device-library-v2.csv` - row-per-port CSV version of the device library.
- `sonic-sphere-fey-cable-schedule-v2.csv` - cable schedule import file for the main signal flow.
- `manifest-v2.json` - generated inventory, counts, sources, and unresolved items.
- `field-verification-v2.md` - physical verification checklist for remaining trace work.

## Import

### Native schematic

1. Open EasySchematic.
2. Use `File -> Open...`.
3. Select `sonic-sphere-fey-system-v2.easyschematic.json`.
4. Review dashed/probable edges and status notes before treating the diagram as final field truth.

### Device library archive

1. Open the device library sidebar.
2. Choose `Create New Device -> Import from JSON or CSV`.
3. Import `sonic-sphere-fey-device-library-v2.json` for the full structured archive.
4. Use `sonic-sphere-fey-device-library-v2.csv` only when a spreadsheet-style import is preferred.

### Cable schedule

1. Use `File -> Import Cable Schedule...`.
2. Import `sonic-sphere-fey-cable-schedule-v2.csv`.
3. Map columns by their header names.
4. Leave the blank room columns unmapped or blank to avoid generated room boxes.

## Validation Summary

- Device templates: 15
- Schematic nodes: 19
- Schematic edges: 70
- Cable schedule rows: 97
- Focal 100 OD8 speaker nodes shown in schematic: 1
- Physical Focal 100 OD8 speaker runs retained in cable schedule: 30

The native schematic intentionally uses one representative Focal speaker node to keep the diagram readable. The cable schedule preserves all 30 speaker-level runs.

## Bundled Library Matching

Checked EasySchematic bundled device templates from `duremovich/EasySchematic` tree `08b55504224fd80b19c9ce4e8c4d11a012ff31cc`.

- Exact model matches: 0
- Generic-compatible matches: 3
- Family-only / near matches: 2
- No bundled match found: 10

Generic-compatible and family-only matches are documented in `manifest-v2.json` but are not substituted as exact hardware models.

## Naming Rules

Use `Sonic Sphere Fey` for labels and `sonic-sphere-fey` for filenames/slugs.

## Source Scope

Generated from local project notes and references:

- `README.md`
- `references/README.md`
- `project-root pasted Sonic Sphere Fey system note`

This pack intentionally preserves uncertainty. Unresolved devices and cable paths are included with `trace-required` or `candidate` status instead of being omitted.
