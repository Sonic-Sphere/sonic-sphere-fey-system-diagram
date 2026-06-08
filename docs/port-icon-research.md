# Port Icon Research

Date observed: 2026-06-08

## Source Inventory

Local source of truth:

- Exact connector inventory: `easyschematic/sonic-sphere-fey-device-library-v2.json`
- Current page port categories: `assets/sonic-fey-redesign.js`
- Cable-path vocabulary: `easyschematic/sonic-sphere-fey-cable-schedule-v2.csv`

The exact connector types present in the device library are:

```text
db25
hdmi
iec
none
phoenix
rca
rj45
sfp
terminal-block
trs-quarter
usb-a
usb-c
wireless
xlr-3
```

The current page collapses these into broader display categories:

```text
usb
wireless
power
rj45
db25
rca
speaker
xlr
```

## Best Free Icon Set Found

Best immediate fit: Pictogrammers Material Design Icons.

- License: Apache 2.0 for Material Design Icons and `@mdi/js` / `@mdi/svg`.
- License source: https://pictogrammers.com/docs/general/license/
- Icon pages expose React/Vue/Home Assistant/Webfont examples and stable icon names.
- It has strong connector coverage for audio, network, USB, HDMI, Bluetooth, speaker, and generic power.

This is the best practical option I found for a single free icon family. It is not perfect for exact rack connector silhouettes: DB25, Phoenix/Euroblock speaker terminals, SFP, IEC C14 inlet, and quarter-inch TRS need either a specialist source or small custom SVGs if exactness matters.

## Recommended Mapping

| Connector or page type | Devices using it | Recommended icon | Source | Fit |
| --- | --- | --- | --- | --- |
| `rj45` / Dante / Ethernet / PoE | TASCAM ML-32D, USB-C adapter, TP-Link switch, Dante AVIO, PoE injectors, EdgePoint R6 | `mdi:ethernet` or `mdi:ethernet-cable` | https://pictogrammers.com/library/mdi/icon/ethernet/ | Strong for RJ45/Ethernet. Use a small bolt/status overlay for PoE if needed. |
| `usb-c` / Thunderbolt / USB-C power | MacBook Air M2, USB-C multiport adapter | `mdi:usb-c-port` | https://pictogrammers.com/library/mdi/icon/usb-c-port/ | Strong. |
| `usb-a` | USB-C multiport adapter | `mdi:usb-port` | https://pictogrammers.com/library/mdi/icon/usb-port/ | Good generic USB port. |
| `hdmi` | USB-C multiport adapter | `mdi:hdmi-port` | https://pictogrammers.com/library/mdi/icon/hdmi-port/ | Strong. |
| `wireless` / Bluetooth audio | Dante AVIO Bluetooth | `mdi:bluetooth` or `mdi:bluetooth-connect` | https://pictogrammers.com/library/mdi/icon/bluetooth/ | Strong for the Bluetooth input. |
| `none` / Dante Virtual Soundcard software Tx | MacBook Air M2 | `mdi:lan` or `mdi:access-point-network` | https://pictogrammers.com/library/mdi/icon/lan/ | Conceptual, not a physical port. Label should carry "software". |
| `db25` | TASCAM ML-32D, DB25 fanout cables | `mdi:serial-port` | https://pictogrammers.com/library/mdi/icon/serial-port/ | Usable D-sub metaphor, but not exact DB25. Needs better research if precision matters. |
| `rca` | Dayton amps, DB25-to-RCA fanouts, DI-003 sub path | `mdi:audio-input-rca` | https://pictogrammers.com/library/mdi/icon/audio-input-rca/ | Strong. |
| `xlr-3` / current `xlr` | Devine DI-003, Devine Onyx 18SXA, DB25-to-XLR candidate | `mdi:audio-input-xlr` | https://pictogrammers.com/library/mdi/icon/audio-input-xlr/ | Strong. |
| `trs-quarter` | Devine DI-003 channel input/thru | `mdi:audio-input-stereo-minijack` | https://pictogrammers.com/library/mdi/icon/audio-input-stereo-minijack/ | Conceptual jack icon, not exact quarter-inch TRS. Needs better research if exactness matters. |
| `phoenix` / speaker output terminal | Dayton MA1240a, Dayton MA1260 | `mdi:speaker` or custom terminal icon | https://pictogrammers.com/library/mdi/icon/speaker/ | Speaker-role fit, not connector-shape fit. |
| `terminal-block` speaker input | Focal 100 OD8 | `mdi:speaker` or custom terminal icon | https://pictogrammers.com/library/mdi/icon/speaker/ | Speaker-role fit, not connector-shape fit. |
| `terminal-block` DC power input | Ubiquiti EdgePoint R6 | `mdi:power-plug` | https://pictogrammers.com/library/mdi/icon/power-plug/ | Power-role fit, not terminal-block shape. |
| `iec` / AC In | TASCAM, Dayton amps, Devine sub, PoE injectors | `mdi:power-plug` | https://pictogrammers.com/library/mdi/icon/power-plug/ | Good generic power, not exact IEC C14 inlet. |
| `sfp` | Ubiquiti EdgePoint R6 | `mdi:ethernet` with fiber/uplink label, or custom SFP icon | https://pictogrammers.com/library/mdi/icon/ethernet/ | Weak. No exact free MDI SFP icon found. |

## Icon Set Decision

Use Material Design Icons for the first implementation if the goal is a clean, consistent port vocabulary now:

- It covers every current display category in `assets/sonic-fey-redesign.js`.
- It covers most exact connectors well enough for a system diagram.
- It is permissively licensed and easy to inline as SVG.

Do not claim exact connector fidelity for:

- DB25: `mdi:serial-port` is only a generic D-sub/serial metaphor.
- Phoenix/Euroblock terminal outputs: `mdi:speaker` communicates role, not connector geometry.
- SFP: no exact MDI SFP cage/transceiver icon found.
- IEC C14: `mdi:power-plug` is generic mains power, not a C14 inlet.
- Quarter-inch TRS: `mdi:audio-input-stereo-minijack` is a jack metaphor, not a quarter-inch connector.

## Kimi Agent Swarm Prompt

Use this if we want a higher bar than the immediate MDI mapping above.

```markdown
You are the Kimi Agent Swarm coordinator for an icon research task. Do not claim to reproduce private Kimi internals. Use focused worker shards, keep evidence separate, and synthesize a final recommendation.

Goal:
Find an amazing, free, commercially usable, consistent SVG icon solution for every port/connector type in the Sonic Sphere Fey System Diagram.

Project context:
- Workspace: /Users/jeremyguillory/Documents/Sonic Sphere Fey System Diagram
- Exact connector source: easyschematic/sonic-sphere-fey-device-library-v2.json
- Current UI source: assets/sonic-fey-redesign.js
- Current page categories: usb, wireless, power, rj45, db25, rca, speaker, xlr
- Exact connector types: db25, hdmi, iec, none/software, phoenix, rca, rj45, sfp, terminal-block, trs-quarter, usb-a, usb-c, wireless, xlr-3

Known first-pass candidate:
Pictogrammers Material Design Icons, Apache 2.0, covers many connectors:
- rj45: mdi:ethernet or mdi:ethernet-cable
- usb-c: mdi:usb-c-port
- usb-a: mdi:usb-port
- hdmi: mdi:hdmi-port
- wireless/bluetooth: mdi:bluetooth
- rca: mdi:audio-input-rca
- xlr-3: mdi:audio-input-xlr
- generic power: mdi:power-plug
- speaker role: mdi:speaker
- software/DVS: mdi:lan or mdi:access-point-network

Research gaps needing better options:
- exact DB25 / D-sub 25 connector icon
- Phoenix / Euroblock speaker terminal connector icon
- SFP cage or SFP transceiver icon
- IEC C14 AC inlet icon
- quarter-inch TRS jack/plug icon

Global requirements:
- Prefer primary source pages and official GitHub repos.
- Accept only clearly free and commercially usable licenses: MIT, Apache 2.0, BSD, ISC, CC0, or similarly permissive. Reject unclear "free download" sites unless license terms are primary-source clear.
- Avoid Noun Project, Flaticon, Icons8, or SVG Repo entries unless the exact icon has a clear license URL and attribution/commercial rules are acceptable.
- Prefer SVG source, not icon fonts.
- Prefer a consistent visual family. If no single family covers everything exactly, propose a base family plus a small custom SVG gap set.
- Record date observed.
- Separate exact matches from role/metaphor matches.

Worker shards:

1. Role: Open-source icon set scout
Scope: Search major open icon families and aggregators for exact connector matches.
Exclusions: Do not inspect paid-only/proprietary packs.
Required sources: official icon set sites, official GitHub repos, Iconify only as an index with license cross-check.
Output schema: connector_type, icon_name, source_url, license, license_url, exactness, confidence, notes.
Done definition: At least one candidate for each connector type or a clear "not found".

2. Role: Pro-audio and AV connector specialist
Scope: Focus on DB25, RCA, XLR-3, quarter-inch TRS, Phoenix/Euroblock, IEC C14, SFP.
Exclusions: Do not recommend photo-realistic clipart or inconsistent filled illustrations unless no better vector option exists.
Required sources: manufacturer diagram symbols, open electronics/AV symbol sets, permissive SVG repos with primary license pages.
Output schema: connector_type, exact_physical_match, source_url, license, license_url, svg_available, confidence, notes.
Done definition: Confirm whether exact free SVGs exist for each hard connector.

3. Role: License and integration verifier
Scope: Verify the strongest candidates' license terms and integration path for a static web app.
Exclusions: Do not rely on marketplace summary pages without checking primary license.
Required sources: official license pages, package license files, GitHub LICENSE files.
Output schema: source_name, package_or_file, license, commercial_ok, attribution_required, redistribution_ok, implementation_notes, confidence.
Done definition: A usable legal/integration recommendation for the chosen set.

Conflict handling:
- If a candidate is visually perfect but license is unclear, mark it rejected or needs permission.
- If a candidate is licensed well but not visually exact, keep it as fallback and state the mismatch.
- If sources disagree, quote the primary source and preserve the conflict.

Final output:
- One concise recommendation.
- A CSV table with one row per connector type.
- A "best immediate implementation" mapping.
- A "custom SVG needed" list if any exact icons remain missing.
- Direct URLs for every accepted icon and license page.
```

