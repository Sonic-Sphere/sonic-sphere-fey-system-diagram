#!/usr/bin/env python3
"""Generate the EasySchematic documentation pack for Sonic Sphere Fey."""

from __future__ import annotations

import csv
import json
from copy import deepcopy
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "easyschematic"

PROJECT_NAME = "Sonic Sphere Fey"
SLUG = "sonic-sphere-fey"
PACK_VERSION = "v2"
SCHEMA_VERSION = 39

SYSTEM_FILE = f"{SLUG}-system-{PACK_VERSION}.easyschematic.json"
DEVICE_LIBRARY_JSON_FILE = f"{SLUG}-device-library-{PACK_VERSION}.json"
DEVICE_LIBRARY_CSV_FILE = f"{SLUG}-device-library-{PACK_VERSION}.csv"
CABLE_SCHEDULE_CSV_FILE = f"{SLUG}-cable-schedule-{PACK_VERSION}.csv"
MANIFEST_FILE = f"manifest-{PACK_VERSION}.json"
README_FILE = f"README-{PACK_VERSION}.md"
FIELD_VERIFICATION_FILE = f"field-verification-{PACK_VERSION}.md"

SOURCE_FILES = [
    "README.md",
    "references/README.md",
    "project-root pasted Sonic Sphere Fey system note",
]

EASYSCHMATIC_LIBRARY_SOURCE = {
    "repository": "duremovich/EasySchematic",
    "treeSha": "08b55504224fd80b19c9ce4e8c4d11a012ff31cc",
    "treeUrl": "https://github.com/duremovich/EasySchematic/tree/master/src/devices",
    "checkedDate": "2026-06-08",
}

EASYSCHMATIC_LIBRARY_MATCHES: dict[str, dict[str, Any]] = {
    "sonic-sphere-fey-tascam-ml-32d": {
        "status": "none-found",
        "notes": "No bundled TASCAM ML-32D template found. Reviewed Focusrite RedNet A16R as a similar Dante DB25 interface, but it is 16x16 and not a valid model substitute.",
        "reviewedTemplates": [
            {
                "id": "c0a80101-0037-4000-8000-000000000055",
                "label": "Focusrite RedNet A16R",
                "modelNumber": "RedNet A16R MkII",
                "sourceFile": "src/devices/audio.ts",
            }
        ],
    },
    "sonic-sphere-fey-dayton-ma1240a": {
        "status": "none-found",
        "notes": "No bundled Dayton MA1240a template found; keep custom 12-channel RCA-to-speaker template.",
    },
    "sonic-sphere-fey-dayton-ma1260": {
        "status": "none-found",
        "notes": "No bundled Dayton MA1260 template found; keep custom 12-channel RCA-to-speaker template.",
    },
    "sonic-sphere-fey-focal-100-od8": {
        "status": "none-found",
        "notes": "No bundled Focal 100 OD8 template found; keep confirmed custom speaker template.",
    },
    "sonic-sphere-fey-devine-onyx-18sxa": {
        "status": "none-found",
        "notes": "No bundled Devine Onyx 18SXA powered subwoofer template found.",
    },
    "sonic-sphere-fey-devine-di-003": {
        "status": "none-found",
        "notes": "No bundled Devine DI-003 or generic DI-box template found in the checked source files.",
    },
    "sonic-sphere-fey-dante-avio-bluetooth": {
        "status": "family-only",
        "notes": "Bundled Audinate AVIO templates exist for analog input, analog output, and USB, but not Bluetooth. Do not substitute them as exact matches.",
        "reviewedTemplates": [
            {
                "id": "c0a80101-009c-4000-8000-000000000156",
                "label": "Audinate AVIO Input",
                "modelNumber": "AVIO Analog Input 2ch",
                "sourceFile": "src/devices/audio.ts",
            },
            {
                "id": "c0a80101-009d-4000-8000-000000000157",
                "label": "Audinate AVIO Output",
                "modelNumber": "AVIO Analog Output 2ch",
                "sourceFile": "src/devices/audio.ts",
            },
            {
                "id": "c0a80101-009e-4000-8000-000000000158",
                "label": "Audinate AVIO USB",
                "modelNumber": "AVIO USB",
                "sourceFile": "src/devices/audio.ts",
            },
        ],
    },
    "sonic-sphere-fey-macbook-air-m2": {
        "status": "generic-compatible",
        "matchedTemplate": {
            "id": "c0a80101-0027-4000-8000-000000000039",
            "label": "Computer",
            "modelNumber": "",
            "sourceFile": "src/devices/sources.ts",
        },
        "notes": "Bundled generic Computer template exists, but not MacBook Air M2. Keep custom Apple model and DVS software port.",
    },
    "sonic-sphere-fey-usb-c-multiport-adapter": {
        "status": "none-found",
        "notes": "No bundled USB-C multiport Ethernet adapter template found.",
    },
    "sonic-sphere-fey-tp-link-5-port-switch-tbd": {
        "status": "generic-compatible",
        "matchedTemplate": {
            "id": "c0a80101-0026-4000-8000-000000000038",
            "label": "Ethernet Switch (8-port)",
            "modelNumber": "",
            "sourceFile": "src/devices/networking.ts",
        },
        "notes": "Bundled generic 8-port switch is closest available; exact TP-Link 5-port model remains trace-required.",
    },
    "sonic-sphere-fey-tp-link-poe150s": {
        "status": "none-found",
        "notes": "No bundled TP-Link POE150S injector template found.",
    },
    "sonic-sphere-fey-ubiquiti-gp-h240-125g": {
        "status": "none-found",
        "notes": "No bundled Ubiquiti GP-H240-125G injector template found.",
    },
    "sonic-sphere-fey-ubiquiti-edgepoint-r6": {
        "status": "none-found",
        "notes": "No bundled Ubiquiti EdgePoint R6 template found.",
    },
    "sonic-sphere-fey-db25-to-rca-fanout": {
        "status": "family-only",
        "reviewedTemplates": [
            {
                "id": "c0a80101-00e1-4000-8000-000000000341",
                "label": "Audio Snake DB25 (8-ch) Break-out",
                "modelNumber": "",
                "sourceFile": "src/devices/cable-accessories.ts",
            }
        ],
        "notes": "Bundled DB25 break-out is XLR-based; our confirmed signal path needs RCA fanouts, so keep custom RCA connector template.",
    },
    "sonic-sphere-fey-db25-to-xlr-fanout-candidate": {
        "status": "generic-compatible",
        "matchedTemplate": {
            "id": "c0a80101-00e1-4000-8000-000000000341",
            "label": "Audio Snake DB25 (8-ch) Break-out",
            "modelNumber": "",
            "sourceFile": "src/devices/cable-accessories.ts",
        },
        "notes": "Bundled DB25 8-channel break-out topology matches the candidate DB25-to-XLR output direction; exact cable model/direction remains unresolved.",
    },
}

DEVICE_CSV_HEADERS = [
    "model_number",
    "manufacturer",
    "label",
    "device_type",
    "reference_url",
    "height_mm",
    "width_mm",
    "depth_mm",
    "weight_kg",
    "power_draw_w",
    "voltage",
    "port_label",
    "port_direction",
    "port_signal_type",
    "port_connector_type",
    "port_section",
]

CABLE_CSV_HEADERS = [
    "Source Device",
    "Source Port",
    "Destination Device",
    "Destination Port",
    "Signal Type",
    "Source Room",
    "Destination Room",
    "Notes",
    "Status",
]

VALID_DIRECTIONS = {"input", "output", "bidirectional"}
VALID_SIGNAL_TYPES = {
    "sdi",
    "hdmi",
    "ndi",
    "dante",
    "avb",
    "analog-audio",
    "speaker-level",
    "bluetooth",
    "aes",
    "dmx",
    "madi",
    "usb",
    "ethernet",
    "fiber",
    "displayport",
    "hdbaset",
    "srt",
    "genlock",
    "gpio",
    "contact-closure",
    "rs422",
    "serial",
    "thunderbolt",
    "composite",
    "s-video",
    "vga",
    "dvi",
    "power",
    "power-l1",
    "power-l2",
    "power-l3",
    "power-neutral",
    "power-ground",
    "midi",
    "tally",
    "spdif",
    "adat",
    "ultranet",
    "aes50",
    "stageconnect",
    "wordclock",
    "aes67",
    "ydif",
    "rf",
    "st2110",
    "artnet",
    "sacn",
    "ir",
    "timecode",
    "gigaace",
    "dx5",
    "slink",
    "soundgrid",
    "fibreace",
    "dsnake",
    "dxlink",
    "gps",
    "dars",
    "rtmp",
    "rtsp",
    "mpeg-ts",
    "component-video",
    "digilink",
    "ebus",
    "control-voltage",
    "extron-exp",
    "pots",
    "blu-link",
    "cresnet",
    "sensor",
    "custom",
}

VALID_CONNECTOR_TYPES = {
    "bnc",
    "hdmi",
    "mini-hdmi",
    "displayport",
    "mini-displayport",
    "dvi",
    "vga",
    "xlr-3",
    "xlr-4",
    "xlr-5",
    "mini-xlr",
    "combo-xlr-trs",
    "trs-quarter",
    "trs-eighth",
    "trs-2.5mm",
    "rca",
    "din-5",
    "mini-din-4",
    "mini-din-7",
    "mini-din-8",
    "toslink",
    "rj45",
    "ethercon",
    "sfp",
    "lc",
    "sc",
    "opticalcon",
    "qsfp",
    "qsfp28",
    "mpo",
    "rj11",
    "rj12",
    "usb-a",
    "usb-b",
    "usb-c",
    "usb-mini",
    "usb-micro",
    "db9",
    "db15",
    "db25",
    "db37",
    "db7w2",
    "lemo-5pin",
    "iec",
    "iec-c5",
    "iec-c7",
    "iec-c15",
    "iec-c20",
    "powercon",
    "powercon-true1",
    "edison",
    "barrel",
    "l5-20",
    "l6-20",
    "l6-30",
    "l21-30",
    "cam-lok",
    "socapex",
    "pcie-6pin",
    "lemo-2pin",
    "lemo-4pin",
    "d-tap",
    "v-mount",
    "speakon",
    "banana",
    "binding-post",
    "binding-post-banana",
    "phoenix",
    "terminal-block",
    "multipin",
    "solder-cup",
    "punch-down-110",
    "punch-down-66",
    "krone-idc",
    "reverse-tnc",
    "sma",
    "f-connector",
    "wireless",
    "digilink",
    "d-hole-insert",
    "none",
    "other",
}

VALID_DEVICE_TYPES = {
    "amplifier",
    "assistive-listening",
    "audio-bar",
    "audio-dsp",
    "conference-system",
    "di-box",
    "equalizer",
    "headphone-amplifier",
    "monitor-controller",
    "personal-monitor",
    "expansion-chassis",
    "audio-embedder",
    "audio-interface",
    "audio-splitter",
    "stage-box",
    "cable-accessory",
    "table-box",
    "cloud-service",
    "codec",
    "mtr-pc",
    "video-bar",
    "button-panel",
    "control-expansion",
    "control-processor",
    "controller",
    "midi-device",
    "occupancy-sensor",
    "ptz-controller",
    "sync-generator",
    "tally-system",
    "timecode-generator",
    "touch-controller",
    "touch-screen",
    "display",
    "monitor",
    "tv",
    "da",
    "hdmi-splitter",
    "video-wall-controller",
    "change-over",
    "expansion-card",
    "battery",
    "company-switch",
    "frame",
    "patch-panel",
    "power-distribution",
    "wall-plate",
    "commentary-box",
    "intercom",
    "intercom-transceiver",
    "interpreter-desk",
    "phone-hybrid",
    "fiber-transmitter",
    "hdbaset-extender",
    "kvm-extender",
    "usb-extender",
    "led-cabinet",
    "led-processor",
    "dmx-node",
    "dmx-splitter",
    "led-fixture",
    "lighting-console",
    "lighting-processor",
    "moving-light",
    "media-server",
    "charging-station",
    "iem-transmitter",
    "wired-mic",
    "wireless-mic-receiver",
    "audio-mixer",
    "audio-meter",
    "video-scope",
    "access-point",
    "av-over-ip",
    "ndi-decoder",
    "ndi-encoder",
    "network-router",
    "network-switch",
    "network-wifi",
    "streaming-encoder",
    "dock",
    "keyboard",
    "mouse",
    "power-mixer",
    "adapter",
    "capture-card",
    "chromakey",
    "converter",
    "frame-sync",
    "multiviewer",
    "scaler",
    "projector",
    "screen",
    "recorder",
    "camera",
    "camera-ccu",
    "computer",
    "graphics",
    "media-player",
    "ptz-camera",
    "speaker",
    "studio-monitor",
    "external-storage",
    "nas",
    "storage-media",
    "presentation-system",
    "router",
    "switcher",
    "wireless-presentation",
    "antenna",
    "antenna-distribution",
    "wireless-video",
}


def aux(status: str, source: str, verification: str) -> list[dict[str, str]]:
    return [
        {"text": f"Status: {status}", "position": "footer"},
        {"text": f"Source: {source}", "position": "footer"},
        {"text": f"Verification: {verification}", "position": "footer"},
    ]


def library_match_summary(match: dict[str, Any]) -> str:
    matched = match.get("matchedTemplate")
    if matched:
        return f"EasySchematic library: {match['status']} -> {matched['label']} ({matched['id']})"
    reviewed = match.get("reviewedTemplates") or []
    if reviewed:
        labels = ", ".join(item["label"] for item in reviewed[:3])
        return f"EasySchematic library: {match['status']}; reviewed {labels}"
    return f"EasySchematic library: {match['status']}"


def port(
    pid: str,
    label: str,
    signal: str,
    direction: str,
    connector: str,
    section: str | None = None,
    **extra: Any,
) -> dict[str, Any]:
    data: dict[str, Any] = {
        "id": pid,
        "label": label,
        "signalType": signal,
        "direction": direction,
        "connectorType": connector,
    }
    if section:
        data["section"] = section
    data.update({k: v for k, v in extra.items() if v is not None})
    return data


def template(
    tid: str,
    label: str,
    device_type: str,
    ports: list[dict[str, Any]],
    *,
    manufacturer: str = "Generic",
    model: str | None = None,
    reference_url: str | None = None,
    status: str,
    source: str,
    verification: str,
    color: str = "#334155",
    search_terms: list[str] | None = None,
    **extra: Any,
) -> dict[str, Any]:
    match = EASYSCHMATIC_LIBRARY_MATCHES.get(tid)
    search = list(search_terms or [])
    if match:
        search.extend(["easyschematic-library", match["status"]])
        if match.get("matchedTemplate"):
            search.extend([match["matchedTemplate"]["id"], match["matchedTemplate"]["label"]])
    data: dict[str, Any] = {
        "id": tid,
        "version": 1,
        "label": label,
        "manufacturer": manufacturer,
        "deviceType": device_type,
        "ports": ports,
        "color": color,
        "searchTerms": search,
        "auxiliaryData": aux(status, source, verification),
    }
    if match:
        data["easySchematicLibraryMatch"] = match
        data["auxiliaryData"].append({"text": library_match_summary(match), "position": "footer"})
    if model:
        data["modelNumber"] = model
    if reference_url:
        data["referenceUrl"] = reference_url
    data.update({k: v for k, v in extra.items() if v is not None})
    return data


def tascam_ports() -> list[dict[str, Any]]:
    ports: list[dict[str, Any]] = [
        port("dante-primary", "PRIMARY Dante", "dante", "bidirectional", "rj45", "Dante"),
        port("dante-secondary", "SECONDARY Dante", "dante", "bidirectional", "rj45", "Dante"),
        port("power-iec", "AC In", "power", "input", "iec", "Power"),
    ]
    for idx in range(1, 33):
        group = f"Analog Inputs {((idx - 1) // 8) * 8 + 1}-{((idx - 1) // 8) * 8 + 8}"
        ports.append(port(f"ain-{idx:02d}", f"Analog In {idx:02d}", "analog-audio", "input", "db25", group))
    for idx in range(1, 33):
        group = f"Analog Outputs {((idx - 1) // 8) * 8 + 1}-{((idx - 1) // 8) * 8 + 8}"
        ports.append(port(f"aout-{idx:02d}", f"Analog Out {idx:02d}", "analog-audio", "output", "db25", group))
    return ports


def amp_ports(prefix: str = "") -> list[dict[str, Any]]:
    ports = [port("power-iec", "AC In", "power", "input", "iec", "Power")]
    for idx in range(1, 13):
        ports.append(port(f"line-in-{idx:02d}", f"Line In Ch {idx:02d}", "analog-audio", "input", "rca", "Line Inputs"))
    for idx in range(1, 13):
        ports.append(port(f"speaker-out-{idx:02d}", f"Speaker Out Ch {idx:02d}", "speaker-level", "output", "phoenix", "Speaker Outputs"))
    return ports


def fanout_ports(output_connector: str) -> list[dict[str, Any]]:
    ports: list[dict[str, Any]] = []
    for idx in range(1, 9):
        ports.append(port(f"db25-ch-{idx:02d}", f"DB25 Ch {idx}", "analog-audio", "input", "db25", "DB25"))
    for idx in range(1, 9):
        ports.append(port(f"{output_connector}-ch-{idx:02d}", f"{output_connector.upper()} Ch {idx}", "analog-audio", "output", output_connector, "Fanout"))
    return ports


def build_templates() -> list[dict[str, Any]]:
    return [
        template(
            "sonic-sphere-fey-tascam-ml-32d",
            "TASCAM ML-32D",
            "audio-interface",
            tascam_ports(),
            manufacturer="TASCAM",
            model="ML-32D",
            reference_url="https://www.tascam.eu/en/ml-16d_ml-32d",
            status="confirmed",
            source="references/README.md and system note",
            verification="Confirmed system converter; use Primary RJ45 for simple Dante network.",
            color="#2563eb",
            search_terms=["tascam", "ml-32d", "dante", "db25", "32 channel"],
            rackForm="full",
        ),
        template(
            "sonic-sphere-fey-dayton-ma1240a",
            "Dayton Audio MA1240a",
            "amplifier",
            amp_ports(),
            manufacturer="Dayton Audio",
            model="MA1240a",
            reference_url="https://daytonaudio.com/product/1017/ma1240a-multi-zone-12-channel-amplifier",
            status="confirmed",
            source="references/README.md and user rack note",
            verification="Top amplifier in stack.",
            color="#dc2626",
            search_terms=["dayton", "ma1240a", "12 channel amplifier"],
            rackForm="full",
        ),
        template(
            "sonic-sphere-fey-dayton-ma1260",
            "Dayton Audio MA1260",
            "amplifier",
            amp_ports(),
            manufacturer="Dayton Audio",
            model="MA1260",
            reference_url="https://daytonaudio.com/product/1202/ma1260-multi-zone-12-channel-amplifier-60wpc",
            status="confirmed",
            source="references/README.md and user rack note",
            verification="Middle and bottom amplifier models.",
            color="#b91c1c",
            search_terms=["dayton", "ma1260", "12 channel amplifier"],
            rackForm="full",
        ),
        template(
            "sonic-sphere-fey-focal-100-od8",
            "Focal 100 OD8",
            "speaker",
            [port("speaker-in", "Speaker Input", "speaker-level", "input", "terminal-block", "Speaker")],
            manufacturer="Focal",
            model="100 OD8",
            reference_url="https://www.focal.com/products/100-od-8",
            status="confirmed",
            source="user correction and references/README.md",
            verification="Confirmed speaker model for all 30 Sonic Sphere Fey passive speakers.",
            color="#f59e0b",
            search_terms=["focal", "100 od8", "outdoor speaker", "sonic sphere"],
        ),
        template(
            "sonic-sphere-fey-devine-onyx-18sxa",
            "Devine Onyx 18SXA",
            "speaker",
            [
                port("left-line-in", "Left Line Input", "analog-audio", "input", "xlr-3", "Audio"),
                port("power-iec", "AC In", "power", "input", "iec", "Power"),
            ],
            manufacturer="Devine",
            model="Onyx 18SXA",
            reference_url="https://www.bax-shop.nl/actieve-subwoofers/devine-onyx-18sxa-actieve-subwoofer",
            status="confirmed",
            source="references/README.md and user rack note",
            verification="Confirmed powered subwoofer; source patch still to verify at rack.",
            color="#7c3aed",
            search_terms=["devine", "onyx", "18sxa", "subwoofer"],
        ),
        template(
            "sonic-sphere-fey-devine-di-003",
            "Devine DI-003",
            "di-box",
            [
                port("ch1-in", "Ch 1 Input", "analog-audio", "input", "trs-quarter", "Channel 1"),
                port("ch1-thru", "Ch 1 Thru", "analog-audio", "output", "trs-quarter", "Channel 1"),
                port("ch1-xlr-out", "Ch 1 XLR Out", "analog-audio", "output", "xlr-3", "Channel 1"),
                port("ch2-in", "Ch 2 Input", "analog-audio", "input", "trs-quarter", "Channel 2"),
                port("ch2-thru", "Ch 2 Thru", "analog-audio", "output", "trs-quarter", "Channel 2"),
                port("ch2-xlr-out", "Ch 2 XLR Out", "analog-audio", "output", "xlr-3", "Channel 2"),
            ],
            manufacturer="Devine",
            model="DI-003",
            reference_url="https://www.bax-shop.co.uk/di-boxes/devine-di-003-di-box",
            status="confirmed",
            source="references/README.md and user rack note",
            verification="Confirmed sub path component; one RCA/line channel feeds channel 1 input.",
            color="#9333ea",
            search_terms=["devine", "di-003", "di box"],
        ),
        template(
            "sonic-sphere-fey-dante-avio-bluetooth",
            "Dante AVIO Bluetooth ADP-BT-AU-2X1",
            "audio-interface",
            [
                port("bluetooth-audio", "Bluetooth Audio", "bluetooth", "input", "wireless", "Wireless"),
                port("dante-poe", "Dante RJ45 + PoE", "dante", "bidirectional", "rj45", "Network", multiConnect=True),
            ],
            manufacturer="Audinate",
            model="ADP-BT-AU-2X1",
            reference_url="https://www.getdante.com/avio",
            status="confirmed",
            source="references/README.md and user rack note",
            verification="Confirm Dante Controller device name.",
            color="#0891b2",
            search_terms=["dante", "avio", "bluetooth", "poe"],
        ),
        template(
            "sonic-sphere-fey-macbook-air-m2",
            "MacBook Air M2 (2022)",
            "computer",
            [
                port("usb-c-1", "USB-C / Thunderbolt", "thunderbolt", "bidirectional", "usb-c", "Computer"),
                port("dvs-tx", "Dante Virtual Soundcard Tx", "dante", "output", "none", "Software"),
            ],
            manufacturer="Apple",
            model="MacBook Air M2 (2022)",
            reference_url="https://support.apple.com/en-gb/111867",
            status="confirmed",
            source="system note and references/README.md",
            verification="Confirmed computer; DVS/subscription state should be captured in Dante Controller.",
            color="#64748b",
            search_terms=["apple", "macbook", "dante virtual soundcard"],
        ),
        template(
            "sonic-sphere-fey-usb-c-multiport-adapter",
            "USB-C Multiport Adapter",
            "adapter",
            [
                port("usb-c-host", "USB-C Host", "thunderbolt", "bidirectional", "usb-c", "Host"),
                port("ethernet", "Ethernet", "ethernet", "bidirectional", "rj45", "Network"),
                port("hdmi-out", "HDMI Out", "hdmi", "output", "hdmi", "Video"),
                port("usb-a-1", "USB-A 1", "usb", "bidirectional", "usb-a", "USB"),
                port("usb-a-2", "USB-A 2", "usb", "bidirectional", "usb-a", "USB"),
                port("usb-a-3", "USB-A 3", "usb", "bidirectional", "usb-a", "USB"),
                port("usb-c-power", "USB-C Power In", "power", "input", "usb-c", "Power"),
            ],
            status="trace-required",
            source="system note",
            verification="Exact manufacturer/model unknown; read adapter label or purchase record.",
            color="#94a3b8",
            search_terms=["usb-c", "ethernet", "multiport adapter"],
        ),
        template(
            "sonic-sphere-fey-tp-link-5-port-switch-tbd",
            "TP-Link 5-Port Ethernet Switch (model TBD)",
            "network-switch",
            [
                port(f"port-{idx}", f"Port {idx}", "ethernet", "bidirectional", "rj45", "Ethernet", addressable=False)
                for idx in range(1, 6)
            ],
            manufacturer="TP-Link",
            reference_url="https://www.tp-link.com/us/home-networking/5-port-switch/tl-sg105/",
            status="trace-required",
            source="references/README.md and system note",
            verification="Exact model and PoE capability still need physical confirmation.",
            color="#0f766e",
            search_terms=["tp-link", "5 port", "ethernet switch", "dante"],
        ),
        template(
            "sonic-sphere-fey-tp-link-poe150s",
            "TP-Link POE150S / TL-POE150S",
            "power-distribution",
            [
                port("lan-in", "LAN In", "ethernet", "input", "rj45", "Network"),
                port("poe-out", "PoE Out", "ethernet", "output", "rj45", "Network/Power"),
                port("ac-in", "AC In", "power", "input", "iec", "Power"),
            ],
            manufacturer="TP-Link",
            model="POE150S / TL-POE150S",
            reference_url="https://www.tp-link.com/uk/business-networking/omada-accessory-poe-adapter/poe150s/v6.20/",
            status="confirmed",
            source="references/README.md",
            verification="Model confirmed; powered endpoint still needs tracing.",
            color="#14b8a6",
            search_terms=["tp-link", "poe150s", "poe injector"],
            poeBudgetW=15.4,
        ),
        template(
            "sonic-sphere-fey-ubiquiti-gp-h240-125g",
            "Ubiquiti GP-H240-125G PoE Injector",
            "power-distribution",
            [
                port("lan-in", "LAN In", "ethernet", "input", "rj45", "Network"),
                port("poe-out", "24V PoE Out", "ethernet", "output", "rj45", "Network/Power"),
                port("ac-in", "AC In", "power", "input", "iec", "Power"),
            ],
            manufacturer="Ubiquiti",
            model="GP-H240-125G / GPH240-125G",
            reference_url="https://eu.store.ui.com/eu/en/products/poe-24-30w-g-wh",
            status="confirmed",
            source="references/README.md",
            verification="Present in rack/network hardware; powered endpoint still needs tracing.",
            color="#38bdf8",
            search_terms=["ubiquiti", "gph240", "poe injector"],
            poeBudgetW=30,
        ),
        template(
            "sonic-sphere-fey-ubiquiti-edgepoint-r6",
            "Ubiquiti EdgePoint R6",
            "network-router",
            [
                *[
                    port(f"eth{idx}", f"eth{idx}", "ethernet", "bidirectional", "rj45", "Ethernet", poeBudgetW=24)
                    for idx in range(0, 5)
                ],
                port("sfp", "SFP", "fiber", "bidirectional", "sfp", "Fiber"),
                port("dc-in", "24V DC In", "power", "input", "terminal-block", "Power"),
            ],
            manufacturer="Ubiquiti",
            model="EP-R6",
            reference_url="https://store.ui.com/us/en/products/ep-r6",
            status="confirmed",
            source="references/README.md and user update",
            verification="Present; verify whether it is active Dante path or separate site network.",
            color="#0284c7",
            search_terms=["ubiquiti", "edgepoint", "ep-r6", "router"],
        ),
        template(
            "sonic-sphere-fey-db25-to-rca-fanout",
            "DB25 to RCA Fanout (8 ch)",
            "cable-accessory",
            fanout_ports("rca"),
            status="trace-required",
            source="system note and references/README.md",
            verification="Exact manufacturer/model and balanced-to-unbalanced wiring need cable-label verification.",
            color="#f97316",
            search_terms=["db25", "rca", "fanout", "snake"],
        ),
        template(
            "sonic-sphere-fey-db25-to-xlr-fanout-candidate",
            "DB25 to XLR Fanout Candidate (8 ch)",
            "cable-accessory",
            fanout_ports("xlr-3"),
            status="candidate",
            source="system note and references/README.md",
            verification="DTM/DTF direction and connected ML-32D input/output side remain unresolved.",
            color="#fb923c",
            search_terms=["db25", "xlr", "fanout", "hosa", "dtm", "dtf"],
        ),
    ]


def port_handle(port_data: dict[str, Any], end: str) -> str:
    pid = port_data["id"]
    if port_data["direction"] == "bidirectional":
        return f"{pid}-out" if end == "source" else f"{pid}-in"
    return pid


def clone_template(template_data: dict[str, Any], label: str | None = None) -> dict[str, Any]:
    cloned = deepcopy(template_data)
    if label:
        cloned["label"] = label
    cloned["templateId"] = template_data["id"]
    cloned["templateVersion"] = template_data.get("version", 1)
    cloned["model"] = template_data["label"]
    return cloned


class SchematicBuilder:
    def __init__(self, templates: list[dict[str, Any]]) -> None:
        self.templates = {t["id"]: t for t in templates}
        self.nodes: list[dict[str, Any]] = []
        self.edges: list[dict[str, Any]] = []
        self.node_by_id: dict[str, dict[str, Any]] = {}

    def add_node(
        self,
        node_id: str,
        template_id: str,
        label: str,
        x: int,
        y: int,
        *,
        status: str,
        notes: str | None = None,
    ) -> None:
        data = clone_template(self.templates[template_id], label)
        data["label"] = label
        data["baseLabel"] = label
        data["status"] = status
        data["auxiliaryData"] = [
            {"text": "{{deviceType}}", "position": "header"},
            *data.get("auxiliaryData", []),
        ]
        if notes:
            data["notes"] = notes
            data["auxiliaryData"].append({"text": f"Note: {notes}", "position": "footer"})
        node = {
            "id": node_id,
            "type": "device",
            "position": {"x": x, "y": y},
            "data": data,
        }
        self.nodes.append(node)
        self.node_by_id[node_id] = node

    def node_port(self, node_id: str, port_id: str) -> dict[str, Any]:
        node = self.node_by_id[node_id]
        for p in node["data"]["ports"]:
            if p["id"] == port_id:
                return p
        raise KeyError(f"Missing port {port_id} on node {node_id}")

    def add_edge(
        self,
        edge_id: str,
        source: str,
        source_port: str,
        target: str,
        target_port: str,
        signal: str,
        *,
        label: str | None = None,
        status: str = "confirmed",
        line_style: str = "solid",
    ) -> None:
        sp = self.node_port(source, source_port)
        tp = self.node_port(target, target_port)
        data: dict[str, Any] = {
            "signalType": signal,
            "lineStyle": line_style,
            "sourceLabel": sp["label"],
            "targetLabel": tp["label"],
            "status": status,
        }
        if label:
            data["label"] = label
        self.edges.append(
            {
                "id": edge_id,
                "source": source,
                "sourceHandle": port_handle(sp, "source"),
                "target": target,
                "targetHandle": port_handle(tp, "target"),
                "data": data,
            }
        )


def build_schematic(templates: list[dict[str, Any]]) -> tuple[dict[str, Any], list[dict[str, str]]]:
    b = SchematicBuilder(templates)

    b.add_node("macbook-air-m2", "sonic-sphere-fey-macbook-air-m2", "MacBook Air M2 (2022)", 0, -360, status="confirmed")
    b.add_node("usb-c-adapter", "sonic-sphere-fey-usb-c-multiport-adapter", "USB-C Multiport Adapter", 260, -360, status="trace-required")
    b.add_node("tp-link-switch", "sonic-sphere-fey-tp-link-5-port-switch-tbd", "TP-Link 5-Port Ethernet Switch (model TBD)", 520, -360, status="trace-required")
    b.add_node("dante-avio-bt", "sonic-sphere-fey-dante-avio-bluetooth", "Dante AVIO Bluetooth ADP-BT-AU-2X1", 520, -580, status="confirmed")
    b.add_node("tascam-ml-32d", "sonic-sphere-fey-tascam-ml-32d", "TASCAM ML-32D", 760, -280, status="confirmed")

    fanout_positions = {
        1: (1080, -80, "DB25 to RCA Fanout 1 (Out 1-8)"),
        2: (1080, 140, "DB25 to RCA Fanout 2 (Out 9-16)"),
        3: (1080, 360, "DB25 to RCA Fanout 3 (Out 17-24)"),
        4: (1080, 580, "DB25 to RCA Fanout 4 (Out 25-32)"),
    }
    for idx, (x, y, label) in fanout_positions.items():
        b.add_node(f"fanout-{idx}", "sonic-sphere-fey-db25-to-rca-fanout", label, x, y, status="trace-required")

    b.add_node("ma1260-bottom", "sonic-sphere-fey-dayton-ma1260", "Dayton MA1260 Bottom Amp (Ch 1-12)", 1360, 20, status="confirmed")
    b.add_node("ma1260-middle", "sonic-sphere-fey-dayton-ma1260", "Dayton MA1260 Middle Amp (Ch 13-24)", 1360, 300, status="confirmed")
    b.add_node("ma1240a-top", "sonic-sphere-fey-dayton-ma1240a", "Dayton MA1240a Top Amp (Ch 25-30)", 1360, 580, status="confirmed")
    b.add_node("devine-di-003", "sonic-sphere-fey-devine-di-003", "Devine DI-003", 1360, 800, status="confirmed")
    b.add_node("devine-onyx-18sxa", "sonic-sphere-fey-devine-onyx-18sxa", "Devine Onyx 18SXA", 1620, 800, status="confirmed")

    b.add_node("poe150s", "sonic-sphere-fey-tp-link-poe150s", "TP-Link POE150S / TL-POE150S", 260, -660, status="confirmed")
    b.add_node("ubiquiti-poe", "sonic-sphere-fey-ubiquiti-gp-h240-125g", "Ubiquiti GP-H240-125G PoE Injector", 520, -800, status="confirmed")
    b.add_node("edgepoint-r6", "sonic-sphere-fey-ubiquiti-edgepoint-r6", "Ubiquiti EdgePoint R6", 760, -800, status="confirmed")

    b.add_node(
        "speaker-bank",
        "sonic-sphere-fey-focal-100-od8",
        "Focal 100 OD8 Speaker Bank (30x)",
        1660,
        300,
        status="confirmed",
        notes="Single representative speaker node; cable schedule preserves all 30 physical speaker runs.",
    )
    b.node_port("speaker-bank", "speaker-in")["multiConnect"] = True
    b.node_port("speaker-bank", "speaker-in")["notes"] = "Representative EasySchematic handle for all 30 Focal 100 OD8 speaker runs."

    b.add_node(
        "analog-input-placeholder",
        "sonic-sphere-fey-db25-to-xlr-fanout-candidate",
        "Optional DB25 to XLR Input Fanout Candidate",
        760,
        980,
        status="candidate",
        notes="Analog input path is documented but not treated as active routing.",
    )

    cable_rows: list[dict[str, str]] = []

    def schedule(
        source: str,
        source_port: str,
        target: str,
        target_port: str,
        signal: str,
        source_room: str,
        target_room: str,
        notes: str,
        status: str,
    ) -> None:
        cable_rows.append(
            {
                "Source Device": source,
                "Source Port": source_port,
                "Destination Device": target,
                "Destination Port": target_port,
                "Signal Type": signal,
                "Source Room": source_room,
                "Destination Room": target_room,
                "Notes": notes,
                "Status": status,
            }
        )

    def connect(
        edge_id: str,
        source_id: str,
        source_port: str,
        target_id: str,
        target_port: str,
        signal: str,
        *,
        label: str | None = None,
        status: str = "confirmed",
        line_style: str = "solid",
        source_room: str = "",
        target_room: str = "",
        notes: str = "",
    ) -> None:
        b.add_edge(edge_id, source_id, source_port, target_id, target_port, signal, label=label, status=status, line_style=line_style)
        source_label = b.node_by_id[source_id]["data"]["label"]
        target_label = b.node_by_id[target_id]["data"]["label"]
        schedule(
            source_label,
            b.node_port(source_id, source_port)["label"],
            target_label,
            b.node_port(target_id, target_port)["label"],
            signal,
            source_room,
            target_room,
            notes or (label or ""),
            status,
        )

    connect("edge-mac-usbc-adapter", "macbook-air-m2", "usb-c-1", "usb-c-adapter", "usb-c-host", "thunderbolt", label="USB-C adapter", status="confirmed")
    connect("edge-adapter-switch", "usb-c-adapter", "ethernet", "tp-link-switch", "port-1", "dante", label="DVS Dante over Ethernet", status="confirmed")
    connect("edge-switch-tascam", "tp-link-switch", "port-2", "tascam-ml-32d", "dante-primary", "dante", label="Dante Primary", status="confirmed")
    connect("edge-avio-switch", "dante-avio-bt", "dante-poe", "tp-link-switch", "port-3", "dante", label="Dante + PoE dependency", status="confirmed", line_style="dashed", notes="PoE source may be switch or injector; verify physical power path.")

    amp_map: list[tuple[int, str, int]] = []
    for idx in range(1, 13):
        amp_map.append((idx, "ma1260-bottom", idx))
    for idx in range(13, 25):
        amp_map.append((idx, "ma1260-middle", idx - 12))
    for idx in range(25, 31):
        amp_map.append((idx, "ma1240a-top", idx - 24))

    for out_idx, amp_node, amp_ch in amp_map:
        fanout_idx = ((out_idx - 1) // 8) + 1
        fanout_ch = ((out_idx - 1) % 8) + 1
        speaker_id = out_idx
        connect(
            f"edge-tascam-out-{out_idx:02d}-fanout",
            "tascam-ml-32d",
            f"aout-{out_idx:02d}",
            f"fanout-{fanout_idx}",
            f"db25-ch-{fanout_ch:02d}",
            "analog-audio",
            label=f"ML-32D Out {out_idx:02d}",
            status="trace-required",
            line_style="dashed",
            notes="Fanout label and balanced-to-unbalanced wiring require physical verification.",
        )
        connect(
            f"edge-fanout-{out_idx:02d}-amp",
            f"fanout-{fanout_idx}",
            f"rca-ch-{fanout_ch:02d}",
            amp_node,
            f"line-in-{amp_ch:02d}",
            "analog-audio",
            label=f"Speaker {speaker_id:02d} line feed",
            status="probable",
            line_style="dashed",
            notes="Bottom MA1260 carries channels 1-12, middle MA1260 carries 13-24, top MA1240a carries 25-30; confirm LINE IN switch state.",
        )
        schedule(
            b.node_by_id[amp_node]["data"]["label"],
            b.node_port(amp_node, f"speaker-out-{amp_ch:02d}")["label"],
            f"Focal 100 OD8 Speaker {speaker_id:02d}",
            "Speaker Input",
            "speaker-level",
            "",
            "",
            f"Sonic Sphere speaker {speaker_id:02d}; native schematic uses one representative speaker node.",
            "confirmed",
        )

    representative_edges = [
        ("edge-bottom-amp-speaker-bank", "ma1260-bottom", "speaker-out-01", "Speakers 1-12 represented"),
        ("edge-middle-amp-speaker-bank", "ma1260-middle", "speaker-out-01", "Speakers 13-24 represented"),
        ("edge-top-amp-speaker-bank", "ma1240a-top", "speaker-out-01", "Speakers 25-30 represented"),
    ]
    for edge_id, amp_node, source_port, label in representative_edges:
        b.add_edge(
            edge_id,
            amp_node,
            source_port,
            "speaker-bank",
            "speaker-in",
            "speaker-level",
            label=label,
            status="representative",
            line_style="dashed",
        )

    connect(
        "edge-tascam-out-31-fanout",
        "tascam-ml-32d",
        "aout-31",
        "fanout-4",
        "db25-ch-07",
        "analog-audio",
        label="Sub / LFE Out 31",
        status="trace-required",
        line_style="dashed",
        notes="Confirm source output 31 path at physical output/fanout.",
    )
    connect(
        "edge-fanout-31-di",
        "fanout-4",
        "rca-ch-07",
        "devine-di-003",
        "ch1-in",
        "analog-audio",
        label="Sub line into DI",
        status="trace-required",
        line_style="dashed",
        notes="TASCAM RCA channel into DI-003; connector adaptation may be present.",
    )
    connect(
        "edge-di-sub",
        "devine-di-003",
        "ch1-xlr-out",
        "devine-onyx-18sxa",
        "left-line-in",
        "analog-audio",
        label="DI output to sub left input",
        status="confirmed",
    )

    for spare_ch in range(7, 13):
        b.node_by_id["ma1240a-top"]["data"]["ports"][spare_ch + 12]["notes"] = "Spare MA1240a channel in current 30.1 logical map."
    b.node_port("tascam-ml-32d", "aout-32")["notes"] = "Spare ML-32D output in current 30.1 logical map."

    schematic = {
        "version": SCHEMA_VERSION,
        "name": PROJECT_NAME,
        "nodes": b.nodes,
        "edges": b.edges,
        "customTemplates": templates,
        "printPaperId": "tabloid",
        "printOrientation": "landscape",
        "printScale": 0.6,
        "titleBlock": {
            "showName": PROJECT_NAME,
            "venue": "Sonic Sphere Fey",
            "designer": "",
            "engineer": "",
            "date": "2026-06-08",
            "drawingTitle": "EasySchematic System Documentation Pack",
            "company": "",
            "revision": "draft-import-pack",
            "logo": "",
            "customFields": [
                {"id": "source", "label": "Source", "value": "Local Sonic Sphere Fey reference pack"},
                {"id": "schema", "label": "EasySchematic schema", "value": str(SCHEMA_VERSION)},
            ],
        },
        "signalColors": {
            "dante": "#0ea5e9",
            "ethernet": "#14b8a6",
            "analog-audio": "#f97316",
            "speaker-level": "#f59e0b",
            "bluetooth": "#8b5cf6",
            "power": "#ef4444",
        },
        "signalLineStyles": {
            "dante": "solid",
            "analog-audio": "dashed",
            "speaker-level": "solid",
        },
        "showCableIdLabels": False,
        "showCustomLabels": True,
        "autoRoute": True,
        "wrapDeviceLabels": True,
    }
    return schematic, cable_rows


def write_json(path: Path, data: Any) -> None:
    path.write_text(json.dumps(data, indent=2, ensure_ascii=True) + "\n", encoding="utf-8")


def write_device_csv(path: Path, templates: list[dict[str, Any]]) -> None:
    with path.open("w", newline="", encoding="utf-8") as fh:
        writer = csv.DictWriter(fh, fieldnames=DEVICE_CSV_HEADERS)
        writer.writeheader()
        for tmpl in templates:
            for p in tmpl["ports"]:
                writer.writerow(
                    {
                        "model_number": tmpl.get("modelNumber", ""),
                        "manufacturer": tmpl.get("manufacturer", ""),
                        "label": tmpl["label"],
                        "device_type": tmpl["deviceType"],
                        "reference_url": tmpl.get("referenceUrl", ""),
                        "height_mm": tmpl.get("heightMm", ""),
                        "width_mm": tmpl.get("widthMm", ""),
                        "depth_mm": tmpl.get("depthMm", ""),
                        "weight_kg": tmpl.get("weightKg", ""),
                        "power_draw_w": tmpl.get("powerDrawW", ""),
                        "voltage": tmpl.get("voltage", ""),
                        "port_label": p["label"],
                        "port_direction": p["direction"],
                        "port_signal_type": p["signalType"],
                        "port_connector_type": p.get("connectorType", ""),
                        "port_section": p.get("section", ""),
                    }
                )


def write_cable_schedule(path: Path, rows: list[dict[str, str]]) -> None:
    with path.open("w", newline="", encoding="utf-8") as fh:
        writer = csv.DictWriter(fh, fieldnames=CABLE_CSV_HEADERS)
        writer.writeheader()
        writer.writerows(rows)


def build_manifest(templates: list[dict[str, Any]], schematic: dict[str, Any], cable_rows: list[dict[str, str]]) -> dict[str, Any]:
    statuses: dict[str, int] = {}
    for tmpl in templates:
        status = next((row["text"].replace("Status: ", "") for row in tmpl.get("auxiliaryData", []) if row["text"].startswith("Status: ")), "unknown")
        statuses[status] = statuses.get(status, 0) + 1
    library_match_statuses: dict[str, int] = {}
    library_matches = []
    for tmpl in templates:
        match = tmpl.get("easySchematicLibraryMatch")
        if not match:
            continue
        match_status = match["status"]
        library_match_statuses[match_status] = library_match_statuses.get(match_status, 0) + 1
        matched = match.get("matchedTemplate")
        library_matches.append(
            {
                "templateId": tmpl["id"],
                "label": tmpl["label"],
                "status": match_status,
                "matchedTemplate": matched,
                "notes": match["notes"],
            }
        )
    unresolved = [
        {
            "item": tmpl["label"],
            "status": next(row["text"].replace("Status: ", "") for row in tmpl["auxiliaryData"] if row["text"].startswith("Status: ")),
            "verification": next(row["text"].replace("Verification: ", "") for row in tmpl["auxiliaryData"] if row["text"].startswith("Verification: ")),
        }
        for tmpl in templates
        if any(status in row["text"] for status in ["trace-required", "candidate"] for row in tmpl.get("auxiliaryData", []))
    ]
    return {
        "project": PROJECT_NAME,
        "slug": SLUG,
        "packVersion": PACK_VERSION,
        "generatedBy": "tools/generate_easyschematic_pack.py",
        "schemaVersion": SCHEMA_VERSION,
        "sourceFiles": SOURCE_FILES,
        "artifacts": [
            SYSTEM_FILE,
            DEVICE_LIBRARY_JSON_FILE,
            DEVICE_LIBRARY_CSV_FILE,
            CABLE_SCHEDULE_CSV_FILE,
            MANIFEST_FILE,
            README_FILE,
            FIELD_VERIFICATION_FILE,
        ],
        "counts": {
            "deviceTemplates": len(templates),
            "schematicNodes": len(schematic["nodes"]),
            "schematicEdges": len(schematic["edges"]),
            "cableScheduleRows": len(cable_rows),
            "focalSpeakerNodes": sum(1 for n in schematic["nodes"] if n["data"]["templateId"] == "sonic-sphere-fey-focal-100-od8"),
            "physicalFocalSpeakers": 30,
            "ma1260Nodes": sum(1 for n in schematic["nodes"] if n["data"]["templateId"] == "sonic-sphere-fey-dayton-ma1260"),
        },
        "templateStatuses": statuses,
        "easySchematicLibrarySource": EASYSCHMATIC_LIBRARY_SOURCE,
        "easySchematicLibraryMatchStatuses": library_match_statuses,
        "easySchematicLibraryMatches": library_matches,
        "unresolvedItems": unresolved,
        "validationPolicy": {
            "cloudSave": "not performed",
            "communitySubmission": "not performed",
            "localImport": "manual final acceptance gate",
        },
    }


def build_readme(manifest: dict[str, Any]) -> str:
    return f"""# {PROJECT_NAME} EasySchematic Pack

This directory contains EasySchematic-compatible documentation files for the Sonic Sphere Fey system.

## Files

- `{SYSTEM_FILE}` - native EasySchematic schematic save file, schema version {SCHEMA_VERSION}.
- `{DEVICE_LIBRARY_JSON_FILE}` - reusable device-template archive for Device Library import.
- `{DEVICE_LIBRARY_CSV_FILE}` - row-per-port CSV version of the device library.
- `{CABLE_SCHEDULE_CSV_FILE}` - cable schedule import file for the main signal flow.
- `{MANIFEST_FILE}` - generated inventory, counts, sources, and unresolved items.
- `{FIELD_VERIFICATION_FILE}` - physical verification checklist for remaining trace work.

## Import

### Native schematic

1. Open EasySchematic.
2. Use `File -> Open...`.
3. Select `{SYSTEM_FILE}`.
4. Review dashed/probable edges and status notes before treating the diagram as final field truth.

### Device library archive

1. Open the device library sidebar.
2. Choose `Create New Device -> Import from JSON or CSV`.
3. Import `{DEVICE_LIBRARY_JSON_FILE}` for the full structured archive.
4. Use `{DEVICE_LIBRARY_CSV_FILE}` only when a spreadsheet-style import is preferred.

### Cable schedule

1. Use `File -> Import Cable Schedule...`.
2. Import `{CABLE_SCHEDULE_CSV_FILE}`.
3. Map columns by their header names.
4. Leave the blank room columns unmapped or blank to avoid generated room boxes.

## Validation Summary

- Device templates: {manifest["counts"]["deviceTemplates"]}
- Schematic nodes: {manifest["counts"]["schematicNodes"]}
- Schematic edges: {manifest["counts"]["schematicEdges"]}
- Cable schedule rows: {manifest["counts"]["cableScheduleRows"]}
- Focal 100 OD8 speaker nodes shown in schematic: {manifest["counts"]["focalSpeakerNodes"]}
- Physical Focal 100 OD8 speaker runs retained in cable schedule: {manifest["counts"]["physicalFocalSpeakers"]}

The native schematic intentionally uses one representative Focal speaker node to keep the diagram readable. The cable schedule preserves all 30 speaker-level runs.

## Bundled Library Matching

Checked EasySchematic bundled device templates from `{EASYSCHMATIC_LIBRARY_SOURCE["repository"]}` tree `{EASYSCHMATIC_LIBRARY_SOURCE["treeSha"]}`.

- Exact model matches: {manifest["easySchematicLibraryMatchStatuses"].get("exact", 0)}
- Generic-compatible matches: {manifest["easySchematicLibraryMatchStatuses"].get("generic-compatible", 0)}
- Family-only / near matches: {manifest["easySchematicLibraryMatchStatuses"].get("family-only", 0)}
- No bundled match found: {manifest["easySchematicLibraryMatchStatuses"].get("none-found", 0)}

Generic-compatible and family-only matches are documented in `{MANIFEST_FILE}` but are not substituted as exact hardware models.

## Naming Rules

Use `Sonic Sphere Fey` for labels and `sonic-sphere-fey` for filenames/slugs.

## Source Scope

Generated from local project notes and references:

{chr(10).join(f"- `{src}`" for src in SOURCE_FILES)}

This pack intentionally preserves uncertainty. Unresolved devices and cable paths are included with `trace-required` or `candidate` status instead of being omitted.
"""


def build_field_verification() -> str:
    return f"""# {PROJECT_NAME} EasySchematic Field Verification

Use this checklist after importing `{SYSTEM_FILE}`.

## Network / Dante

1. Confirm the TP-Link 5-port switch exact model and whether any ports provide PoE.
2. Confirm the TASCAM ML-32D Primary RJ45 is the active Dante network port.
3. Leave TASCAM Secondary disconnected unless a physically separate Dante redundancy network exists.
4. Confirm the Dante AVIO Bluetooth device name in Dante Controller.
5. Trace whether the Dante AVIO Bluetooth adapter receives PoE from the switch, TP-Link POE150S, or another injector.
6. Trace the TP-Link POE150S powered endpoint.
7. Trace the Ubiquiti GP-H240-125G powered endpoint.
8. Trace Ubiquiti EdgePoint R6 ports and confirm whether it is in the active Dante path or separate site network.

## Analog / Amplifier

1. Read all DB25-to-RCA fanout labels and record model numbers.
2. Confirm balanced-to-unbalanced wiring from ML-32D outputs to Dayton RCA inputs.
3. Confirm Dayton amp input switches are set to LINE IN for discrete 30-channel playback.
4. Label MA1240a and MA1260 speaker output terminals by Sonic Sphere speaker number.
5. Confirm the logical channel map: speakers 1-12 on bottom MA1260, speakers 13-24 on middle MA1260, speakers 25-30 on top MA1240a.
6. Confirm ML-32D output 32 is spare.
7. Confirm top MA1240a channels 7-12 are spare.
8. Confirm bottom MA1260 left-side inputs are 1-12.

## Sub Path

1. Trace ML-32D analog output 31 to the DB25-to-RCA fanout output.
2. Confirm the TASCAM RCA/line channel enters Devine DI-003 channel 1.
3. Confirm Devine DI-003 channel 1 XLR output feeds Devine Onyx 18SXA left input.

## Optional Analog Input Path

1. Confirm whether any DB25-to-XLR fanout is connected to ML-32D analog inputs.
2. Record exact Hosa/cable model: DTF, DTM, DTP, or custom.
3. Confirm any external source is line-level before feeding ML-32D analog inputs.
"""


def validate_templates(templates: list[dict[str, Any]]) -> None:
    ids = set()
    for tmpl in templates:
        missing = [field for field in ["label", "manufacturer", "deviceType", "ports"] if not tmpl.get(field)]
        if missing:
            raise ValueError(f"{tmpl.get('id', tmpl.get('label'))} missing {missing}")
        if tmpl["deviceType"] not in VALID_DEVICE_TYPES:
            raise ValueError(f"{tmpl['label']} invalid deviceType {tmpl['deviceType']}")
        if tmpl["id"] in ids:
            raise ValueError(f"Duplicate template id {tmpl['id']}")
        ids.add(tmpl["id"])
        match = tmpl.get("easySchematicLibraryMatch")
        if not match:
            raise ValueError(f"{tmpl['label']} missing EasySchematic library match metadata")
        if match["status"] not in {"exact", "generic-compatible", "family-only", "none-found"}:
            raise ValueError(f"{tmpl['label']} invalid EasySchematic library match status {match['status']}")
        port_ids = set()
        for p in tmpl["ports"]:
            if p["id"] in port_ids:
                raise ValueError(f"{tmpl['label']} duplicate port id {p['id']}")
            port_ids.add(p["id"])
            if p["signalType"] not in VALID_SIGNAL_TYPES:
                raise ValueError(f"{tmpl['label']} {p['id']} invalid signalType {p['signalType']}")
            if p["direction"] not in VALID_DIRECTIONS:
                raise ValueError(f"{tmpl['label']} {p['id']} invalid direction {p['direction']}")
            if p.get("connectorType") not in VALID_CONNECTOR_TYPES:
                raise ValueError(f"{tmpl['label']} {p['id']} invalid connectorType {p.get('connectorType')}")


def validate_schematic(schematic: dict[str, Any]) -> None:
    if schematic["version"] != SCHEMA_VERSION:
        raise ValueError("Unexpected schema version")
    nodes = {n["id"]: n for n in schematic["nodes"]}
    for edge in schematic["edges"]:
        if edge["source"] not in nodes:
            raise ValueError(f"Edge {edge['id']} missing source {edge['source']}")
        if edge["target"] not in nodes:
            raise ValueError(f"Edge {edge['id']} missing target {edge['target']}")
        source_handles = {port_handle(p, "source") for p in nodes[edge["source"]]["data"]["ports"]}
        target_handles = {port_handle(p, "target") for p in nodes[edge["target"]]["data"]["ports"]}
        if edge["sourceHandle"] not in source_handles:
            raise ValueError(f"Edge {edge['id']} missing source handle {edge['sourceHandle']}")
        if edge["targetHandle"] not in target_handles:
            raise ValueError(f"Edge {edge['id']} missing target handle {edge['targetHandle']}")
        if edge["data"]["signalType"] not in VALID_SIGNAL_TYPES:
            raise ValueError(f"Edge {edge['id']} invalid signalType")

    expected = {
        "TASCAM ML-32D": 1,
        "Dayton MA1240a Top Amp (Ch 25-30)": 1,
        "Dayton MA1260 Middle Amp (Ch 13-24)": 1,
        "Dayton MA1260 Bottom Amp (Ch 1-12)": 1,
        "Devine Onyx 18SXA": 1,
        "Dante AVIO Bluetooth ADP-BT-AU-2X1": 1,
    }
    labels = [n["data"]["label"] for n in schematic["nodes"]]
    for label, count in expected.items():
        if labels.count(label) != count:
            raise ValueError(f"Expected {count} node(s) named {label}, got {labels.count(label)}")
    focal_count = sum(1 for n in schematic["nodes"] if n["data"]["templateId"] == "sonic-sphere-fey-focal-100-od8")
    if focal_count != 1:
        raise ValueError(f"Expected 1 representative Focal speaker node, got {focal_count}")
    ma1260_count = sum(1 for n in schematic["nodes"] if n["data"]["templateId"] == "sonic-sphere-fey-dayton-ma1260")
    if ma1260_count != 2:
        raise ValueError(f"Expected 2 Dayton MA1260 nodes, got {ma1260_count}")
    channel_targets: dict[int, tuple[str, str]] = {}
    for edge in schematic["edges"]:
        if edge["id"].startswith("edge-fanout-") and edge["id"].endswith("-amp"):
            channel = int(edge["id"].split("-")[2])
            channel_targets[channel] = (edge["target"], edge["targetHandle"])
    expected_channel_targets = {
        **{idx: ("ma1260-bottom", f"line-in-{idx:02d}") for idx in range(1, 13)},
        **{idx: ("ma1260-middle", f"line-in-{idx - 12:02d}") for idx in range(13, 25)},
        **{idx: ("ma1240a-top", f"line-in-{idx - 24:02d}") for idx in range(25, 31)},
    }
    for channel, expected_target in expected_channel_targets.items():
        actual_target = channel_targets.get(channel)
        if actual_target != expected_target:
            raise ValueError(f"Channel {channel} target mismatch: expected {expected_target}, got {actual_target}")
    tascam_x = nodes["tascam-ml-32d"]["position"]["x"]
    fanout_nodes = [nodes[f"fanout-{idx}"] for idx in range(1, 5)]
    fanout_xs = {node["position"]["x"] for node in fanout_nodes}
    fanout_ys = [node["position"]["y"] for node in fanout_nodes]
    if len(fanout_xs) != 1 or fanout_ys != sorted(fanout_ys):
        raise ValueError("Fanouts must be a single vertical stack")
    fanout_x = next(iter(fanout_xs))
    if fanout_x <= tascam_x:
        raise ValueError("Fanouts must be to the right of TASCAM")
    for amp_node_id in ["ma1260-bottom", "ma1260-middle", "ma1240a-top"]:
        if nodes[amp_node_id]["position"]["x"] <= fanout_x:
            raise ValueError(f"{amp_node_id} must be to the right of the fanout stack")
    representative_speaker_edges = [
        edge
        for edge in schematic["edges"]
        if edge["target"] == "speaker-bank"
        and edge["data"]["signalType"] == "speaker-level"
        and edge["data"]["status"] == "representative"
    ]
    if len(representative_speaker_edges) != 3:
        raise ValueError(f"Expected 3 representative speaker-bank edges, got {len(representative_speaker_edges)}")
    bluetooth_dante_edges = [
        edge
        for edge in schematic["edges"]
        if edge["source"] == "dante-avio-bt"
        and edge["target"] == "tp-link-switch"
        and edge["data"]["signalType"] == "dante"
    ]
    if len(bluetooth_dante_edges) != 1:
        raise ValueError(f"Expected 1 Bluetooth-Dante path, got {len(bluetooth_dante_edges)}")
    sub_path_edges = [
        edge
        for edge in schematic["edges"]
        if edge["id"] in {"edge-tascam-out-31-fanout", "edge-fanout-31-di", "edge-di-sub"}
    ]
    if len(sub_path_edges) != 3:
        raise ValueError(f"Expected complete 3-edge sub path, got {len(sub_path_edges)}")


def validate_csv_headers(out_dir: Path) -> None:
    checks = {
        out_dir / DEVICE_LIBRARY_CSV_FILE: DEVICE_CSV_HEADERS,
        out_dir / CABLE_SCHEDULE_CSV_FILE: CABLE_CSV_HEADERS,
    }
    for path, expected in checks.items():
        with path.open(newline="", encoding="utf-8") as fh:
            actual = next(csv.reader(fh))
        if actual != expected:
            raise ValueError(f"{path.name} header mismatch: {actual}")


def validate_cable_rows(cable_rows: list[dict[str, str]]) -> None:
    for idx, row in enumerate(cable_rows, start=1):
        if row["Source Room"] or row["Destination Room"]:
            raise ValueError(f"Cable row {idx} has room labels that would create EasySchematic room boxes")


def main() -> None:
    OUT_DIR.mkdir(exist_ok=True)
    templates = build_templates()
    validate_templates(templates)
    schematic, cable_rows = build_schematic(templates)
    validate_schematic(schematic)
    validate_cable_rows(cable_rows)

    write_json(OUT_DIR / DEVICE_LIBRARY_JSON_FILE, templates)
    write_json(OUT_DIR / SYSTEM_FILE, schematic)
    write_device_csv(OUT_DIR / DEVICE_LIBRARY_CSV_FILE, templates)
    write_cable_schedule(OUT_DIR / CABLE_SCHEDULE_CSV_FILE, cable_rows)
    validate_csv_headers(OUT_DIR)
    manifest = build_manifest(templates, schematic, cable_rows)
    write_json(OUT_DIR / MANIFEST_FILE, manifest)
    (OUT_DIR / README_FILE).write_text(build_readme(manifest), encoding="utf-8")
    (OUT_DIR / FIELD_VERIFICATION_FILE).write_text(build_field_verification(), encoding="utf-8")

    for path in [
        OUT_DIR / DEVICE_LIBRARY_JSON_FILE,
        OUT_DIR / SYSTEM_FILE,
        OUT_DIR / MANIFEST_FILE,
    ]:
        json.loads(path.read_text(encoding="utf-8"))

    print(f"Generated EasySchematic pack in {OUT_DIR}")
    print(json.dumps(manifest["counts"], indent=2))


if __name__ == "__main__":
    main()
