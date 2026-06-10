(function () {
  const mdiIcons = {
    audioInputRca: {
      name: "mdi:audio-input-rca",
      path: "M11 6V12H5V6H7V2C7 1.45 7.45 1 8 1S9 1.45 9 2V6H11M5 14V16C5 17.3 5.84 18.4 7 18.82V23H9V18.82C10.16 18.4 11 17.3 11 16V14H5M17 6V2C17 1.45 16.55 1 16 1S15 1.45 15 2V6H13V12H19V6H17M13 14V16C13 17.3 13.84 18.4 15 18.82V23H17V18.82C18.16 18.4 19 17.3 19 16V14H13Z",
    },
    audioInputStereoMinijack: {
      name: "mdi:audio-input-stereo-minijack",
      path: "M11 4V3C11 2.45 11.45 2 12 2S13 2.45 13 3V4H11M13 9V5H11V9H9V15C9 16.3 9.84 17.4 11 17.82V22H13V17.82C14.16 17.4 15 16.3 15 15V9H13Z",
    },
    audioInputXlr: {
      name: "mdi:audio-input-xlr",
      path: "M12 4C16.41 4 20 7.59 20 12S16.41 20 12 20 4 16.41 4 12 7.59 4 12 4M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M13.5 16.5C13.5 15.67 12.83 15 12 15S10.5 15.67 10.5 16.5C10.5 17.33 11.17 18 12 18S13.5 17.33 13.5 16.5M9 12C9 11.17 8.33 10.5 7.5 10.5S6 11.17 6 12 6.67 13.5 7.5 13.5 9 12.83 9 12M18 12C18 11.17 17.33 10.5 16.5 10.5C15.67 10.5 15 11.17 15 12S15.67 13.5 16.5 13.5C17.33 13.5 18 12.83 18 12Z",
    },
    bluetoothConnect: {
      name: "mdi:bluetooth-connect",
      path: "M19,10L17,12L19,14L21,12M14.88,16.29L13,18.17V14.41M13,5.83L14.88,7.71L13,9.58M17.71,7.71L12,2H11V9.58L6.41,5L5,6.41L10.59,12L5,17.58L6.41,19L11,14.41V22H12L17.71,16.29L13.41,12M7,12L5,10L3,12L5,14L7,12Z",
    },
    ethernet: {
      name: "mdi:ethernet",
      path: "M7,15H9V18H11V15H13V18H15V15H17V18H19V9H15V6H9V9H5V18H7V15M4.38,3H19.63C20.94,3 22,4.06 22,5.38V19.63A2.37,2.37 0 0,1 19.63,22H4.38C3.06,22 2,20.94 2,19.63V5.38C2,4.06 3.06,3 4.38,3Z",
    },
    hdmiPort: {
      name: "mdi:hdmi-port",
      path: "M21 7H3C1.9 7 1 7.9 1 9V14C1 15.1 1.9 16 3 16H4L5.4 17.4C5.8 17.8 6.3 18 6.8 18H17.1C17.6 18 18.1 17.8 18.5 17.4L20 16H21C22.1 16 23 15.1 23 14V9C23 7.9 22.1 7 21 7M3 14V9H21V14H19.2L17.2 16H6.8L4.8 14H3M19 11H5V13H19V11Z",
    },
    lan: {
      name: "mdi:lan",
      path: "M10,2C8.89,2 8,2.89 8,4V7C8,8.11 8.89,9 10,9H11V11H2V13H6V15H5C3.89,15 3,15.89 3,17V20C3,21.11 3.89,22 5,22H9C10.11,22 11,21.11 11,20V17C11,15.89 10.11,15 9,15H8V13H16V15H15C13.89,15 13,15.89 13,17V20C13,21.11 13,22 15,22H19C20.11,22 21,21.11 21,20V17C21,15.89 20.11,15 19,15H18V13H22V11H13V9H14C15.11,9 16,8.11 16,7V4C16,2.89 15.11,2 14,2H10M10,4H14V7H10V4M5,17H9V20H5V17M15,17H19V20H15V17Z",
    },
    powerPlug: {
      name: "mdi:power-plug",
      path: "M16,7V3H14V7H10V3H8V7H8C7,7 6,8 6,9V14.5L9.5,18V21H14.5V18L18,14.5V9C18,8 17,7 16,7Z",
    },
    serialPort: {
      name: "mdi:serial-port",
      path: "M7,3H17V5H19V8H16V14H8V8H5V5H7V3M17,9H19V14H17V9M11,15H13V22H11V15M5,9H7V14H5V9Z",
    },
    speaker: {
      name: "mdi:speaker",
      path: "M12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12M12,20A5,5 0 0,1 7,15A5,5 0 0,1 12,10A5,5 0 0,1 17,15A5,5 0 0,1 12,20M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M17,2H7C5.89,2 5,2.89 5,4V20A2,2 0 0,0 7,22H17A2,2 0 0,0 19,20V4C19,2.89 18.1,2 17,2Z",
    },
    usbCPort: {
      name: "mdi:usb-c-port",
      path: "M6 12H18C18.55 12 19 12.45 19 13C19 13.55 18.55 14 18 14H6C5.45 14 5 13.55 5 13C5 12.45 5.45 12 6 12M6 10C4.34 10 3 11.34 3 13C3 14.66 4.34 16 6 16H18C19.66 16 21 14.66 21 13C21 11.34 19.66 10 18 10H6M6 8H18C20.76 8 23 10.24 23 13C23 15.76 20.76 18 18 18H6C3.24 18 1 15.76 1 13C1 10.24 3.24 8 6 8Z",
    },
    usbPort: {
      name: "mdi:usb-port",
      path: "M8 2C6.9 2 6 2.9 6 4V12H5V16L9 20V22H15V20L19 16V12H18V4C18 2.9 17.11 2 16 2M8 4H16V12H8M9 7V9H11V7M13 7V9H15V7Z",
    },
  };

  const portIconRules = [
    { pattern: /usb-c|thunderbolt/i, key: "usbCPort" },
    { pattern: /usb-a/i, key: "usbPort" },
    { pattern: /hdmi/i, key: "hdmiPort" },
    { pattern: /rj45|ethernet|dante|poe/i, key: "ethernet" },
    { pattern: /bluetooth|wireless/i, key: "bluetoothConnect" },
    { pattern: /software|virtual soundcard|dvs|none/i, key: "lan" },
    { pattern: /db25|d-sub|dsub/i, key: "serialPort" },
    { pattern: /rca/i, key: "audioInputRca" },
    { pattern: /xlr/i, key: "audioInputXlr" },
    { pattern: /1\/4|quarter|3\.5|trigger|trs|mini/i, key: "audioInputStereoMinijack" },
    { pattern: /speaker|phoenix|terminal/i, key: "speaker" },
    { pattern: /sfp|fiber|uplink/i, key: "ethernet" },
    { pattern: /iec|dc|power|charger|pd/i, key: "powerPlug" },
    { pattern: /usb/i, key: "usbPort" },
  ];

  const signalMeta = {
    dante: { label: "Ethernet", color: "#4ade80" },
    ethernet: { label: "Ethernet", color: "#4ade80" },
    thunderbolt: { label: "Thunderbolt / USB-C", color: "#a78bfa" },
    "analog-audio": { label: "Analog audio", color: "#f472b6" },
    "speaker-level": { label: "Speaker-level", color: "#facc15" },
    power: { label: "Power", color: "#ef4444" },
    bluetooth: { label: "Bluetooth", color: "#a984e9" },
  };

  const statusMeta = {
    confirmed: { label: "confirmed", rank: 1 },
    representative: { label: "representative", rank: 2 },
    probable: { label: "probable", rank: 3 },
    "trace-required": { label: "trace required", rank: 4 },
    candidate: { label: "candidate", rank: 5 },
    unmapped: { label: "unmapped", rank: 6 },
    spare: { label: "spare", rank: 7 },
  };

  const nodeWidthById = {
    "tascam-ml-32d": 380,
    "analog-input-placeholder": 330,
    "speaker-bank-top-rack": 315,
    "speaker-bank-middle-rack": 315,
    "speaker-bank-bottom-rack": 315,
    "devine-onyx-18sxa": 300,
  };

  const nodeGroupById = {
    "macbook-air-m2": "source",
    "usb-c-adapter": "source",
    "tp-link-switch": "network",
    "dante-avio-bt": "network",
    poe150s: "network",
    "ubiquiti-poe": "network",
    "edgepoint-r6": "network",
    "tascam-ml-32d": "conversion",
    "analog-input-placeholder": "candidate",
    "fanout-1": "fanout",
    "fanout-2": "fanout",
    "fanout-3": "fanout",
    "fanout-4": "fanout",
    "ma1260-bottom": "amplification",
    "ma1260-middle": "amplification",
    "ma1240a-top": "amplification",
    "devine-di-003": "amplification",
    "speaker-bank": "loads",
    "speaker-bank-top-rack": "loads",
    "speaker-bank-middle-rack": "loads",
    "speaker-bank-bottom-rack": "loads",
    "devine-onyx-18sxa": "loads",
  };

  const layoutOverrides = {
    "macbook-air-m2": { x: 84, y: 760 },
    "usb-c-adapter": { x: 390, y: 700 },
    "tp-link-switch": { x: 700, y: 760 },
    "dante-avio-bt": { x: 700, y: 455 },
    poe150s: { x: 390, y: 360 },
    "ubiquiti-poe": { x: 700, y: 82 },
    "edgepoint-r6": { x: 1035, y: 82 },
    "tascam-ml-32d": { x: 1035, y: 589 },
    "fanout-4": { x: 1485, y: 520 },
    "fanout-3": { x: 1485, y: 1380 },
    "fanout-2": { x: 1485, y: 2240 },
    "fanout-1": { x: 1485, y: 3100 },
    "ma1240a-top": { x: 1885, y: 535 },
    "ma1260-middle": { x: 1885, y: 1395 },
    "ma1260-bottom": { x: 1885, y: 3115 },
    "devine-di-003": { x: 1885, y: 4600 },
    "speaker-bank-top-rack": { x: 2295, y: 778 },
    "speaker-bank-middle-rack": { x: 2295, y: 1638 },
    "speaker-bank-bottom-rack": { x: 2295, y: 3358 },
    "devine-onyx-18sxa": { x: 2295, y: 4600 },
    "analog-input-placeholder": { x: 1035, y: 4600 },
  };

  const speakerBankVisuals = [
    {
      id: "speaker-bank-top-rack",
      edgeId: "visual-edge-top-amp-speaker-bank",
      sourceEdgeId: "edge-top-amp-speaker-bank",
      ampNodeId: "ma1240a-top",
      label: "Top Rack Speaker Bank (Speakers 25-30)",
      rackLabel: "Top rack amp",
      rangeLabel: "Speakers 25-30",
      count: 6,
    },
    {
      id: "speaker-bank-middle-rack",
      edgeId: "visual-edge-middle-amp-speaker-bank",
      sourceEdgeId: "edge-middle-amp-speaker-bank",
      ampNodeId: "ma1260-middle",
      label: "Middle Rack Speaker Bank (Speakers 13-24)",
      rackLabel: "Middle rack amp",
      rangeLabel: "Speakers 13-24",
      count: 12,
    },
    {
      id: "speaker-bank-bottom-rack",
      edgeId: "visual-edge-bottom-amp-speaker-bank",
      sourceEdgeId: "edge-bottom-amp-speaker-bank",
      ampNodeId: "ma1260-bottom",
      label: "Bottom Rack Speaker Bank (Speakers 1-12)",
      rackLabel: "Bottom rack amp",
      rangeLabel: "Speakers 1-12",
      count: 12,
    },
  ];

  function padded(value) {
    return String(value).padStart(2, "0");
  }

  function edgeRange(prefix, start, end, suffix = "") {
    return Array.from({ length: end - start + 1 }, (_, index) => `${prefix}${padded(start + index)}${suffix}`);
  }

  const visualEdgeGroups = [
    {
      id: "visual-tascam-out-01-08-fanout-1",
      label: "TASCAM Analog Out 01-08 -> Fanout 1",
      sourceLabel: "Analog Out 01-08",
      targetLabel: "DB25 Ch 01-08",
      edgeIds: edgeRange("edge-tascam-out-", 1, 8, "-fanout"),
      sourceAnchor: { section: "Analog Outputs 1-8", side: "right" },
      targetAnchor: { section: "Fanout", side: "left" },
      track: -3,
    },
    {
      id: "visual-tascam-out-09-16-fanout-2",
      label: "TASCAM Analog Out 09-16 -> Fanout 2",
      sourceLabel: "Analog Out 09-16",
      targetLabel: "DB25 Ch 01-08",
      edgeIds: edgeRange("edge-tascam-out-", 9, 16, "-fanout"),
      sourceAnchor: { section: "Analog Outputs 9-16", side: "right" },
      targetAnchor: { section: "Fanout", side: "left" },
      track: -1,
    },
    {
      id: "visual-tascam-out-17-24-fanout-3",
      label: "TASCAM Analog Out 17-24 -> Fanout 3",
      sourceLabel: "Analog Out 17-24",
      targetLabel: "DB25 Ch 01-08",
      edgeIds: edgeRange("edge-tascam-out-", 17, 24, "-fanout"),
      sourceAnchor: { section: "Analog Outputs 17-24", side: "right" },
      targetAnchor: { section: "Fanout", side: "left" },
      track: 1,
    },
    {
      id: "visual-tascam-out-25-31-fanout-4",
      label: "TASCAM Analog Out 25-31 documented -> Fanout 4",
      sourceLabel: "Analog Out 25-31 documented",
      targetLabel: "DB25 Ch 01-07",
      edgeIds: edgeRange("edge-tascam-out-", 25, 31, "-fanout"),
      sourceAnchor: { section: "Analog Outputs 25-32", side: "right" },
      targetAnchor: { section: "Fanout", side: "left" },
      track: 3,
    },
    {
      id: "visual-fanout-1-bottom-amp-01-08",
      label: "Fanout 1 RCA 01-08 -> Bottom amp inputs 01-08",
      sourceLabel: "RCA 01-08",
      targetLabel: "Line In 01-08",
      edgeIds: edgeRange("edge-fanout-", 1, 8, "-amp"),
      sourceAnchor: { section: "Fanout", side: "right" },
      targetAnchor: { section: "Line Inputs", side: "left" },
      track: -3,
    },
    {
      id: "visual-fanout-2-bottom-amp-09-12",
      label: "Fanout 2 RCA 01-04 -> Bottom amp inputs 09-12",
      sourceLabel: "RCA 01-04",
      targetLabel: "Line In 09-12",
      edgeIds: edgeRange("edge-fanout-", 9, 12, "-amp"),
      sourceAnchor: { section: "Fanout", side: "right" },
      targetAnchor: { section: "Line Inputs", side: "left" },
      track: -2,
    },
    {
      id: "visual-fanout-2-middle-amp-01-04",
      label: "Fanout 2 RCA 05-08 -> Middle amp inputs 01-04",
      sourceLabel: "RCA 05-08",
      targetLabel: "Line In 01-04",
      edgeIds: edgeRange("edge-fanout-", 13, 16, "-amp"),
      sourceAnchor: { section: "Fanout", side: "right" },
      targetAnchor: { section: "Line Inputs", side: "left" },
      track: 0,
    },
    {
      id: "visual-fanout-3-middle-amp-05-12",
      label: "Fanout 3 RCA 01-08 -> Middle amp inputs 05-12",
      sourceLabel: "RCA 01-08",
      targetLabel: "Line In 05-12",
      edgeIds: edgeRange("edge-fanout-", 17, 24, "-amp"),
      sourceAnchor: { section: "Fanout", side: "right" },
      targetAnchor: { section: "Line Inputs", side: "left" },
      track: 2,
    },
    {
      id: "visual-fanout-4-top-amp-01-06",
      label: "Fanout 4 RCA 01-06 -> Top amp inputs 01-06",
      sourceLabel: "RCA 01-06",
      targetLabel: "Line In 01-06",
      edgeIds: edgeRange("edge-fanout-", 25, 30, "-amp"),
      sourceAnchor: { section: "Fanout", side: "right" },
      targetAnchor: { section: "Line Inputs", side: "left" },
      track: 3,
    },
  ];

  const visualEdgeAnchorOverrides = {
    "visual-edge-top-amp-speaker-bank": {
      sourceAnchor: { section: "Line Inputs", side: "right" },
      targetAnchor: { section: "Speaker", side: "left" },
    },
    "visual-edge-middle-amp-speaker-bank": {
      sourceAnchor: { section: "Line Inputs", side: "right" },
      targetAnchor: { section: "Speaker", side: "left" },
    },
    "visual-edge-bottom-amp-speaker-bank": {
      sourceAnchor: { section: "Line Inputs", side: "right" },
      targetAnchor: { section: "Speaker", side: "left" },
    },
  };

  const portSectionOrderByNodeId = {
    "tascam-ml-32d": [
      "Dante",
      "Analog Outputs 25-32",
      "Analog Outputs 17-24",
      "Analog Outputs 9-16",
      "Analog Outputs 1-8",
      "Power",
      "Analog Inputs 1-8",
      "Analog Inputs 9-16",
      "Analog Inputs 17-24",
      "Analog Inputs 25-32",
    ],
  };

  const laneDefinitions = [
    { id: "source", label: "Source / control", left: 54, width: 590 },
    { id: "network", label: "Network / PoE", left: 360, width: 980 },
    { id: "conversion", label: "Dante conversion", left: 1005, width: 430 },
    { id: "fanout", label: "DB25 fanouts", left: 1455, width: 360 },
    { id: "amplification", label: "Amplification / DI", left: 1855, width: 390 },
    { id: "loads", label: "Speaker bank / sub", left: 2265, width: 370 },
  ];

  const scriptUrl = document.currentScript?.src || new URL("assets/full-system-diagram.js", window.location.href).href;
  const systemUrl = new URL("../easyschematic/sonic-sphere-fey-system-v2.easyschematic.json", scriptUrl);
  const scheduleUrl = new URL("../easyschematic/sonic-sphere-fey-cable-schedule-v2.csv", scriptUrl);
  const referenceBase = new URL("../", scriptUrl);

  const referenceImages = {
    "sonic-sphere-fey-tascam-ml-32d": {
      label: "Rear panel reference",
      src: new URL("references/extracted/tascam-ml-32d/tascam-ml-32d-rear-panel-preview.png", referenceBase).href,
    },
    "sonic-sphere-fey-dayton-ma1240a": {
      label: "Rear panel reference",
      src: new URL("references/extracted/dayton-ma1240a/previews/ma1240a-rear-panel-face-only-callout-free-content-filter-vector.png", referenceBase).href,
    },
    "sonic-sphere-fey-dayton-ma1260": {
      label: "Rear panel reference",
      src: new URL("references/extracted/dayton-ma1260/previews/ma1260-rear-panel-face-only-callout-free-content-filter-vector.png", referenceBase).href,
    },
  };

  const state = {
    sourceSystem: null,
    system: null,
    visualEdges: [],
    scheduleRows: [],
    layout: null,
    portIndex: new Map(),
    scale: 1,
    x: 24,
    y: 24,
    selected: null,
    scheduleFilter: "",
    activeTab: "diagram",
  };

  const root = document.getElementById("root");

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function attr(value) {
    return escapeHtml(value);
  }

  function slug(value) {
    return String(value || "unknown").replace(/[^a-z0-9_-]/gi, "-").toLowerCase();
  }

  function sectionKey(sectionName) {
    return slug(sectionName || "Ports");
  }

  function signalLabel(signalType) {
    return signalMeta[signalType]?.label || signalType || "signal";
  }

  function resolvePortIconKey(port) {
    const text = `${port.connectorType || ""} ${port.signalType || ""} ${port.label || ""}`;
    return portIconRules.find((rule) => rule.pattern.test(text))?.key || "lan";
  }

  function renderPortIcon(port) {
    const icon = mdiIcons[resolvePortIconKey(port)] || mdiIcons.lan;
    return `<svg class="port-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" data-icon="${attr(icon.name)}"><path d="${icon.path}"></path></svg>`;
  }

  function portKey(nodeId, portId) {
    return `${nodeId}::${portId}`;
  }

  function resolveHandleToPort(node, handle) {
    if (!node || !handle) return "";
    const direct = node.data.ports.find((port) => port.id === handle);
    if (direct) return direct.id;
    const stripped = handle.replace(/-(in|out)$/, "");
    const matched = node.data.ports.find((port) => port.id === stripped);
    return matched?.id || handle;
  }

  function cssEscape(value) {
    if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(String(value));
    return String(value).replace(/"/g, '\\"');
  }

  function parseCsv(text) {
    const rows = [];
    let row = [];
    let value = "";
    let inQuotes = false;

    for (let index = 0; index < text.length; index += 1) {
      const char = text[index];
      const next = text[index + 1];

      if (char === '"' && inQuotes && next === '"') {
        value += '"';
        index += 1;
        continue;
      }

      if (char === '"') {
        inQuotes = !inQuotes;
        continue;
      }

      if (char === "," && !inQuotes) {
        row.push(value);
        value = "";
        continue;
      }

      if ((char === "\n" || char === "\r") && !inQuotes) {
        if (char === "\r" && next === "\n") index += 1;
        row.push(value);
        if (row.some((cell) => cell.length > 0)) rows.push(row);
        row = [];
        value = "";
        continue;
      }

      value += char;
    }

    row.push(value);
    if (row.some((cell) => cell.length > 0)) rows.push(row);
    const headers = rows.shift() || [];

    return rows.map((cells) =>
      headers.reduce((record, header, index) => {
        record[header] = cells[index] || "";
        return record;
      }, {}),
    );
  }

  async function fetchText(url) {
    const response = await fetch(url.href);
    if (!response.ok) throw new Error(`Failed to load ${url.pathname}: HTTP ${response.status}`);
    return response.text();
  }

  async function fetchJson(url) {
    const response = await fetch(url.href);
    if (!response.ok) throw new Error(`Failed to load ${url.pathname}: HTTP ${response.status}`);
    return response.json();
  }

  function buildLayout(nodes) {
    const positions = new Map();
    let width = 0;
    let height = 0;

    nodes.forEach((node) => {
      const override = layoutOverrides[node.id];
      const x = override?.x ?? node.position.x + 64;
      const y = override?.y ?? node.position.y + 900;
      const nodeWidth = nodeWidthById[node.id] || (node.data.ports.length > 24 ? 330 : 286);
      positions.set(node.id, {
        x,
        y,
        width: nodeWidth,
      });
      width = Math.max(width, x + nodeWidth + 110);
      height = Math.max(height, y + 900);
    });

    return {
      positions,
      width,
      height,
    };
  }

  function worstStatus(statuses) {
    return statuses.reduce((worst, status) => {
      const current = statusMeta[status]?.rank || 99;
      const previous = statusMeta[worst]?.rank || 99;
      return current > previous ? status : worst;
    }, "confirmed");
  }

  function buildPortIndex(system) {
    const nodesById = new Map(system.nodes.map((node) => [node.id, node]));
    const index = new Map();

    system.nodes.forEach((node) => {
      node.data.ports.forEach((port) => {
        index.set(portKey(node.id, port.id), {
          node,
          port,
          edges: [],
          status: /spare|disconnected/i.test(port.notes || "") ? "spare" : "unmapped",
        });
      });
    });

    system.edges.forEach((edge) => {
      const sourceNode = nodesById.get(edge.source);
      const targetNode = nodesById.get(edge.target);
      const sourcePortId = resolveHandleToPort(sourceNode, edge.sourceHandle);
      const targetPortId = resolveHandleToPort(targetNode, edge.targetHandle);

      [portKey(edge.source, sourcePortId), portKey(edge.target, targetPortId)].forEach((key) => {
        const entry = index.get(key);
        if (!entry) return;
        entry.edges.push(edge);
        entry.status = worstStatus(entry.edges.map((item) => item.data?.status || "confirmed"));
      });
    });

    return index;
  }

  function countSystem(system) {
    return {
      nodes: system.nodes.length,
      ports: system.nodes.reduce((sum, node) => sum + node.data.ports.length, 0),
      edges: system.edges.length,
    };
  }

  function createSpeakerBankNode(sourceSpeakerBank, definition) {
    const sourceData = sourceSpeakerBank?.data || {};
    return {
      id: definition.id,
      type: "device",
      position: { x: 0, y: 0 },
      data: {
        id: `${sourceData.id || "sonic-sphere-fey-focal-100-od8"}-${definition.id}`,
        version: sourceData.version || 1,
        label: definition.label,
        manufacturer: sourceData.manufacturer || "Focal",
        deviceType: "speaker bank",
        ports: [
          {
            id: "speaker-in",
            label: definition.rangeLabel,
            signalType: "speaker-level",
            direction: "input",
            connectorType: "terminal-block",
            section: "Speaker",
            multiConnect: true,
            notes: `${definition.rackLabel}; viewer-only simplification for ${definition.count} documented Focal 100 OD8 speaker runs. Individual runs remain in the cable schedule.`,
          },
        ],
        color: sourceData.color || "#f59e0b",
        searchTerms: sourceData.searchTerms || [],
        auxiliaryData: [
          { text: `${definition.rackLabel}: ${definition.rangeLabel}`, position: "footer" },
          { text: `${definition.count} documented speaker runs represented here`, position: "footer" },
          { text: "Viewer-only derived node; source EasySchematic speaker-bank data is unchanged.", position: "footer" },
        ],
        sourceDerived: true,
        sourceNodeId: sourceSpeakerBank?.id || "speaker-bank",
      },
    };
  }

  function createSpeakerBankEdge(sourceSystem, definition) {
    const original = sourceSystem.edges.find((edge) => edge.id === definition.sourceEdgeId);
    return {
      ...(original || {}),
      id: definition.edgeId,
      source: definition.ampNodeId,
      sourceHandle: original?.sourceHandle || "speaker-out-01",
      target: definition.id,
      targetHandle: "speaker-in",
      data: {
        ...(original?.data || {}),
        signalType: original?.data?.signalType || "speaker-level",
        lineStyle: original?.data?.lineStyle || "dashed",
        sourceLabel: original?.data?.sourceLabel || "Speaker Out Ch 01",
        targetLabel: definition.rangeLabel,
        status: original?.data?.status || "representative",
        label: `${definition.rangeLabel} represented`,
        visualDerived: true,
      },
    };
  }

  function createVisualEdgeFromGroup(systemEdges, definition, usedEdgeIds) {
    const edges = definition.edgeIds.map((edgeId) => systemEdges.find((edge) => edge.id === edgeId)).filter(Boolean);
    edges.forEach((edge) => usedEdgeIds.add(edge.id));
    if (!edges.length) return null;

    const signalType = definition.signalType || edges[0].data?.signalType || "custom";
    const status = worstStatus(edges.map((edge) => edge.data?.status || "confirmed"));
    const hasDashed = edges.some((edge) => edge.data?.lineStyle === "dashed");

    return {
      id: definition.id,
      label: definition.label,
      source: edges[0].source,
      target: edges[0].target,
      sourceAnchor: definition.sourceAnchor,
      targetAnchor: definition.targetAnchor,
      sourceLabel: definition.sourceLabel || edges[0].data?.sourceLabel || edges[0].sourceHandle,
      targetLabel: definition.targetLabel || edges[0].data?.targetLabel || edges[0].targetHandle,
      edgeIds: edges.map((edge) => edge.id),
      runCount: edges.length,
      track: definition.track || 0,
      data: {
        signalType,
        lineStyle: hasDashed ? "dashed" : edges[0].data?.lineStyle || "solid",
        status,
        label: definition.label,
        visualGrouped: edges.length > 1,
      },
    };
  }

  function createVisualEdgeFromDetailedEdge(edge, track = 0) {
    const visualId = edge.id.startsWith("visual-") ? edge.id : `visual-${edge.id}`;
    const anchorOverride = visualEdgeAnchorOverrides[edge.id] || visualEdgeAnchorOverrides[visualId] || {};
    return {
      id: visualId,
      label: edge.data?.label || edge.id,
      source: edge.source,
      target: edge.target,
      sourceAnchor: anchorOverride.sourceAnchor,
      targetAnchor: anchorOverride.targetAnchor,
      sourceLabel: edge.data?.sourceLabel || edge.sourceHandle,
      targetLabel: edge.data?.targetLabel || edge.targetHandle,
      edgeIds: [edge.id],
      runCount: 1,
      track,
      data: {
        signalType: edge.data?.signalType || "custom",
        lineStyle: edge.data?.lineStyle || "solid",
        status: edge.data?.status || "confirmed",
        label: edge.data?.label || edge.id,
        visualGrouped: false,
      },
    };
  }

  function buildVisualEdges(systemEdges) {
    const usedEdgeIds = new Set();
    const groupedEdges = visualEdgeGroups
      .map((definition) => createVisualEdgeFromGroup(systemEdges, definition, usedEdgeIds))
      .filter(Boolean);
    const singleEdges = systemEdges
      .filter((edge) => !usedEdgeIds.has(edge.id))
      .map((edge, index) => createVisualEdgeFromDetailedEdge(edge, (index % 5) - 2));
    return [...groupedEdges, ...singleEdges];
  }

  function buildDisplaySystem(sourceSystem) {
    const sourceSpeakerBank = sourceSystem.nodes.find((node) => node.id === "speaker-bank");
    const nodes = [
      ...sourceSystem.nodes.filter((node) => node.id !== "speaker-bank"),
      ...speakerBankVisuals.map((definition) => createSpeakerBankNode(sourceSpeakerBank, definition)),
    ];
    const edges = [
      ...sourceSystem.edges.filter((edge) => edge.source !== "speaker-bank" && edge.target !== "speaker-bank"),
      ...speakerBankVisuals.map((definition) => createSpeakerBankEdge(sourceSystem, definition)),
    ];
    const visualEdges = buildVisualEdges(edges);
    const visualPortCount = nodes.reduce((sum, node) => sum + node.data.ports.length, 0);

    return {
      ...sourceSystem,
      nodes,
      edges,
      visualEdges,
      sourceCounts: countSystem(sourceSystem),
      visualCounts: {
        nodes: nodes.length,
        ports: visualPortCount,
        edges: visualEdges.length,
      },
    };
  }

  function groupPorts(node) {
    const groups = new Map();
    node.data.ports.forEach((port) => {
      const name = port.section || "Ports";
      if (!groups.has(name)) groups.set(name, []);
      groups.get(name).push(port);
    });
    const entries = Array.from(groups.entries());
    const preferredOrder = portSectionOrderByNodeId[node.id];
    if (!preferredOrder) return entries;

    const order = new Map(preferredOrder.map((name, index) => [name, index]));
    return entries.sort(([nameA], [nameB]) => {
      const rankA = order.has(nameA) ? order.get(nameA) : Number.MAX_SAFE_INTEGER;
      const rankB = order.has(nameB) ? order.get(nameB) : Number.MAX_SAFE_INTEGER;
      if (rankA !== rankB) return rankA - rankB;
      return 0;
    });
  }

  function signalForPort(port) {
    return signalMeta[port.signalType] || { label: port.signalType || "signal", color: "#9aa0a6" };
  }

  function displaySectionName(node, sectionName) {
    if (node.id === "tascam-ml-32d" && sectionName === "Dante") return "Ethernet";
    return sectionName;
  }

  function renderLaneBackgrounds() {
    return laneDefinitions
      .map(
        (lane) => `
          <div class="lane-band lane-${attr(lane.id)}" style="left:${lane.left}px;width:${lane.width}px;">
            <span>${escapeHtml(lane.label)}</span>
          </div>
        `,
      )
      .join("");
  }

  function renderNode(node) {
    const position = state.layout.positions.get(node.id);
    const data = node.data;
    const group = nodeGroupById[node.id] || "other";
    const image = referenceImages[data.templateId];

    return `
      <article
        class="system-node node-${attr(group)} status-${attr(data.status || "unknown")}"
        data-node-id="${attr(node.id)}"
        style="left:${position.x}px;top:${position.y}px;width:${position.width}px;--node-color:${attr(data.color || "#7c8795")};"
      >
        <header class="node-header">
          <div>
            <div class="node-kicker">${escapeHtml(data.deviceType || "device")} / ${escapeHtml(data.status || "unknown")}</div>
            <h2>${escapeHtml(data.label)}</h2>
          </div>
          <span class="node-count">${data.ports.length}</span>
        </header>
        <div class="node-meta">
          <span>${escapeHtml(group.replace("-", " "))}</span>
          <span>${escapeHtml(data.manufacturer || "Generic")}</span>
        </div>
        ${
          image
            ? `<button class="node-thumb" type="button" data-node-id="${attr(node.id)}" aria-label="Inspect ${attr(data.label)} reference image"><img src="${attr(image.src)}" alt="${attr(image.label)} for ${attr(data.label)}" loading="lazy" /></button>`
            : ""
        }
        <div class="port-groups">
          ${groupPorts(node)
            .map(
              ([groupName, ports]) => `
                <section class="port-group" data-section-key="${attr(sectionKey(groupName))}" data-port-count="${ports.length}">
                  <h3>${escapeHtml(displaySectionName(node, groupName))} <span>${ports.length}</span></h3>
                  <div class="port-grid ${ports.length > 4 ? "is-dense" : ""}">
                    ${ports
                      .map((port) => {
                        const entry = state.portIndex.get(portKey(node.id, port.id));
                        const status = entry?.status || "unmapped";
                        const signal = signalForPort(port);

                        return `
                          <button
                            class="port-pill signal-${attr(slug(port.signalType))} port-status-${attr(status)}"
                            type="button"
                            data-node-id="${attr(node.id)}"
                            data-port-id="${attr(port.id)}"
                            style="--port-color:${attr(signal.color)};"
                            title="${attr(port.label)} / ${attr(port.connectorType || "connector")} / ${attr(statusMeta[status]?.label || status)}"
                          >
                            ${renderPortIcon(port)}
                            <span class="port-name">${escapeHtml(port.label)}</span>
                            <span class="port-kind">${escapeHtml(port.connectorType || port.signalType || "")}</span>
                          </button>
                        `;
                      })
                      .join("")}
                  </div>
                </section>
              `,
            )
            .join("")}
        </div>
      </article>
    `;
  }

  function renderMarkers() {
    const edgeSource = state.visualEdges.length ? state.visualEdges : state.system.edges;
    const signals = Array.from(new Set(edgeSource.map((edge) => edge.data?.signalType || "custom")));
    return `
      <defs>
        ${signals
          .map((signal) => {
            const meta = signalMeta[signal] || { color: "#9aa0a6" };
            return `
              <marker id="full-arrow-${attr(slug(signal))}" viewBox="0 0 10 10" refX="8.6" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="${attr(meta.color)}"></path>
              </marker>
            `;
          })
          .join("")}
      </defs>
    `;
  }

  function renderStats(system, scheduleRows) {
    const source = system.sourceCounts || countSystem(system);
    const visual = system.visualCounts || countSystem(system);
    return `
      <div class="full-stats" aria-label="Diagram counts">
        <span><strong>${visual.nodes}</strong> visual components<small>${source.nodes} source components</small></span>
        <span><strong>${source.ports}</strong> source ports<small>${visual.ports} visible ports</small></span>
        <span><strong>${visual.edges}</strong> visual connectors<small>${source.edges} source edges</small></span>
        <span><strong>${scheduleRows.length}</strong> cable rows<small>loaded verbatim</small></span>
      </div>
    `;
  }

  function renderLegend() {
    const signals = ["thunderbolt", "ethernet", "analog-audio", "speaker-level", "power"];
    return `
      <div class="legend">
        ${signals
          .map((signal) => `<span style="--legend-color:${attr(signalMeta[signal].color)}"><i></i>${escapeHtml(signalMeta[signal].label)}</span>`)
          .join("")}
        <span class="status-token status-trace-required">trace required</span>
        <span class="status-token status-probable">probable</span>
        <span class="status-token status-representative">representative</span>
      </div>
    `;
  }

  function renderTabs() {
    return `
      <nav class="view-tabs" aria-label="Full-system views" role="tablist">
        <button class="tab-button is-active" type="button" role="tab" aria-selected="true" aria-controls="diagram-panel" id="diagram-tab" data-tab-target="diagram">System Diagram</button>
        <button class="tab-button" type="button" role="tab" aria-selected="false" aria-controls="schedule-panel" id="schedule-tab" data-tab-target="schedule">Cable Schedule</button>
      </nav>
    `;
  }

  function renderScheduleTable(rows) {
    return `
      <section class="schedule-panel" aria-label="Cable schedule">
        <div class="schedule-head">
          <div>
            <p class="panel-kicker">Cable schedule</p>
            <h2>Every documented run</h2>
          </div>
          <p class="schedule-count"><strong data-schedule-visible-count>${rows.length}</strong> / ${rows.length} rows</p>
          <label class="search-box">
            <span>Search</span>
            <input type="search" data-schedule-search placeholder="device, port, signal, status" />
          </label>
        </div>
        <div class="schedule-table-wrap">
          <table class="schedule-table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Destination</th>
                <th>Signal</th>
                <th>Status</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              ${rows
                .map(
                  (row, index) => `
                    <tr class="schedule-row" data-schedule-row="${index}" data-filter-text="${attr(Object.values(row).join(" ").toLowerCase())}">
                      <td><strong>${escapeHtml(row["Source Device"])}</strong><span>${escapeHtml(row["Source Port"])}</span></td>
                      <td><strong>${escapeHtml(row["Destination Device"])}</strong><span>${escapeHtml(row["Destination Port"])}</span></td>
                      <td><span class="signal-badge signal-${attr(slug(row["Signal Type"]))}">${escapeHtml(signalLabel(row["Signal Type"]))}</span></td>
                      <td><span class="status-token status-${attr(slug(row.Status))}">${escapeHtml(row.Status)}</span></td>
                      <td>${escapeHtml(row.Notes)}</td>
                    </tr>
                  `,
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  function renderInspector() {
    return `
      <aside class="inspector" aria-label="Selected detail">
        <div class="inspector-head">
          <p class="panel-kicker">Inspector</p>
          <button class="icon-button" type="button" data-clear-selection aria-label="Clear selection">x</button>
        </div>
        <div class="inspector-body" data-inspector-body>
          <p class="empty-state">Select a device, port, or cable path.</p>
        </div>
      </aside>
    `;
  }

  function renderApp(system, scheduleRows) {
    const source = system.sourceCounts || countSystem(system);
    const visual = system.visualCounts || countSystem(system);
    root.innerHTML = `
      <div class="full-system-shell">
        <header class="full-header">
          <div>
            <p class="panel-kicker">Hidden full-system view</p>
            <h1>Fey Sonic Sphere Full System Diagram</h1>
          </div>
          ${renderStats(system, scheduleRows)}
        </header>

        ${renderTabs()}

        <section class="tab-panel is-active" id="diagram-panel" role="tabpanel" aria-labelledby="diagram-tab" data-tab-panel="diagram">
          <main class="full-main">
            <section class="canvas-section" aria-label="Full system diagram">
              <div class="canvas-toolbar">
                ${renderLegend()}
                <div class="zoom-controls" aria-label="Canvas controls">
                  <button class="icon-button" type="button" data-zoom="out" aria-label="Zoom out">-</button>
                  <button class="icon-button" type="button" data-zoom="in" aria-label="Zoom in">+</button>
                  <button class="text-button" type="button" data-zoom="fit">Fit</button>
                  <button class="text-button" type="button" data-zoom="reset">Reset</button>
                </div>
              </div>
              <div class="system-viewport" data-system-viewport>
                <div class="system-world" data-system-world style="width:${state.layout.width}px;height:${state.layout.height}px;">
                  ${renderLaneBackgrounds()}
                  <svg class="edge-layer" data-edge-layer aria-hidden="true">${renderMarkers()}</svg>
                  <div class="node-layer">
                    ${system.nodes.map(renderNode).join("")}
                  </div>
                </div>
              </div>
            </section>

            ${renderInspector()}
          </main>
        </section>

        <section class="tab-panel" id="schedule-panel" role="tabpanel" aria-labelledby="schedule-tab" data-tab-panel="schedule" hidden>
          ${renderScheduleTable(scheduleRows)}
        </section>

        <footer class="full-footer">
          Data source: local EasySchematic v2 system JSON and cable schedule. Source pack remains ${source.nodes} components, ${source.ports} ports, ${source.edges} edges, and ${scheduleRows.length} cable rows. This view renders ${visual.nodes} visual components and ${visual.edges} simplified connectors with three viewer-only speaker banks.
        </footer>
      </div>
    `;
  }

  function getNode(nodeId) {
    return state.system.nodes.find((node) => node.id === nodeId);
  }

  function getPort(nodeId, portId) {
    return getNode(nodeId)?.data.ports.find((port) => port.id === portId);
  }

  function getEdge(edgeId) {
    return state.system.edges.find((edge) => edge.id === edgeId);
  }

  function getVisualEdge(visualEdgeId) {
    return state.visualEdges.find((edge) => edge.id === visualEdgeId);
  }

  function getVisualEdgeForDetailedEdge(edgeId) {
    return state.visualEdges.find((edge) => edge.edgeIds.includes(edgeId));
  }

  function formatAuxiliary(data) {
    return (data.auxiliaryData || [])
      .filter((item) => item.text && item.text !== "{{deviceType}}")
      .map((item) => `<li>${escapeHtml(item.text)}</li>`)
      .join("");
  }

  function edgeEndpoint(edge, endpoint) {
    const nodeId = endpoint === "source" ? edge.source : edge.target;
    const handle = endpoint === "source" ? edge.sourceHandle : edge.targetHandle;
    const node = getNode(nodeId);
    const portId = resolveHandleToPort(node, handle);
    const port = getPort(nodeId, portId);
    return {
      nodeId,
      portId,
      node,
      port,
      deviceLabel: node?.data?.label || nodeId,
      portLabel: port?.label || handle || portId,
    };
  }

  function oppositeEndpoint(edge, nodeId, portId) {
    const source = edgeEndpoint(edge, "source");
    const target = edgeEndpoint(edge, "target");
    const selectedIsSource = edge.source === nodeId && source.portId === portId;
    return {
      selected: selectedIsSource ? source : target,
      opposite: selectedIsSource ? target : source,
    };
  }

  function renderDetailedRun(edge) {
    const source = edgeEndpoint(edge, "source");
    const target = edgeEndpoint(edge, "target");
    return `
      <li>
        <button type="button" data-inspect-edge="${attr(edge.id)}">
          <strong>${escapeHtml(source.deviceLabel)} -> ${escapeHtml(target.deviceLabel)}</strong>
          <span>${escapeHtml(source.portLabel)} -> ${escapeHtml(target.portLabel)}</span>
          <small>${escapeHtml(edge.data?.label || edge.id)} / ${escapeHtml(edge.data?.status || "status")}</small>
        </button>
      </li>
    `;
  }

  function renderDetailedRunList(edges) {
    return `<ul class="edge-list run-list">${edges.map(renderDetailedRun).join("")}</ul>`;
  }

  function renderPortConnections(nodeId, portId, edges) {
    if (!edges.length) return `<p class="empty-state">No active edge in the schematic data.</p>`;
    return `
      <ul class="edge-list connection-list">
        ${edges
          .map((edge) => {
            const { opposite } = oppositeEndpoint(edge, nodeId, portId);
            return `
              <li>
                <button type="button" data-inspect-edge="${attr(edge.id)}">
                  <strong>Connected to ${escapeHtml(opposite.deviceLabel)}</strong>
                  <span>${escapeHtml(opposite.portLabel)}</span>
                  <small>${escapeHtml(edge.data?.label || edge.id)} / ${escapeHtml(edge.data?.status || "status")}</small>
                </button>
              </li>
            `;
          })
          .join("")}
      </ul>
    `;
  }

  function highlightVisualEdge(visualEdgeId) {
    root.querySelector(`[data-edge-id="${cssEscape(visualEdgeId)}"]`)?.classList.add("is-selected");
  }

  function updateInspector(selection) {
    state.selected = selection;
    const body = root.querySelector("[data-inspector-body]");
    if (!body) return;

    root.querySelectorAll(".is-selected").forEach((element) => element.classList.remove("is-selected"));

    if (!selection) {
      body.innerHTML = `<p class="empty-state">Select a device, port, or cable path.</p>`;
      return;
    }

    if (selection.type === "node") {
      const node = getNode(selection.nodeId);
      const data = node.data;
      const image = referenceImages[data.templateId];
      root.querySelector(`[data-node-id="${cssEscape(node.id)}"].system-node`)?.classList.add("is-selected");
      body.innerHTML = `
        <div class="selected-card">
          <p class="panel-kicker">Device</p>
          <h2>${escapeHtml(data.label)}</h2>
          <div class="selected-tags">
            <span>${escapeHtml(data.deviceType || "device")}</span>
            <span>${escapeHtml(data.status || "unknown")}</span>
            <span>${data.ports.length} ports</span>
          </div>
          ${image ? `<img class="reference-image" src="${attr(image.src)}" alt="${attr(image.label)} for ${attr(data.label)}" />` : ""}
          <ul class="detail-list">${formatAuxiliary(data)}</ul>
        </div>
      `;
      return;
    }

    if (selection.type === "port") {
      const node = getNode(selection.nodeId);
      const port = getPort(selection.nodeId, selection.portId);
      const entry = state.portIndex.get(portKey(selection.nodeId, selection.portId));
      const edgeList = entry?.edges || [];
      const portButton = root.querySelector(`.port-pill[data-node-id="${cssEscape(selection.nodeId)}"][data-port-id="${cssEscape(selection.portId)}"]`);
      portButton?.classList.add("is-selected");
      body.innerHTML = `
        <div class="selected-card">
          <p class="panel-kicker">Port</p>
          <h2>${escapeHtml(port.label)}</h2>
          <div class="selected-tags">
            <span>${escapeHtml(node.data.label)}</span>
            <span>${escapeHtml(port.connectorType || "connector")}</span>
          <span>${escapeHtml(signalLabel(port.signalType))}</span>
            <span>${escapeHtml(statusMeta[entry?.status]?.label || entry?.status || "unmapped")}</span>
          </div>
          ${port.notes ? `<p class="detail-note">${escapeHtml(port.notes)}</p>` : ""}
          <h3>Connected to</h3>
          ${renderPortConnections(selection.nodeId, selection.portId, edgeList)}
        </div>
      `;
      return;
    }

    if (selection.type === "visualEdge") {
      const visualEdge = getVisualEdge(selection.visualEdgeId);
      if (!visualEdge) return;
      const edges = visualEdge.edgeIds.map(getEdge).filter(Boolean);
      highlightVisualEdge(visualEdge.id);
      body.innerHTML = `
        <div class="selected-card">
          <p class="panel-kicker">Visual connector</p>
          <h2>${escapeHtml(visualEdge.label)}</h2>
          <div class="selected-tags">
            <span>${escapeHtml(signalLabel(visualEdge.data?.signalType))}</span>
            <span>${escapeHtml(statusMeta[visualEdge.data?.status]?.label || visualEdge.data?.status || "status")}</span>
            <span>${visualEdge.runCount} ${visualEdge.runCount === 1 ? "run" : "runs"}</span>
            <span>${visualEdge.data?.visualGrouped ? "grouped" : "single"}</span>
          </div>
          <dl class="path-detail">
            <dt>Source bank</dt>
            <dd>${escapeHtml(getNode(visualEdge.source)?.data?.label || visualEdge.source)}<span>${escapeHtml(visualEdge.sourceLabel)}</span></dd>
            <dt>Destination bank</dt>
            <dd>${escapeHtml(getNode(visualEdge.target)?.data?.label || visualEdge.target)}<span>${escapeHtml(visualEdge.targetLabel)}</span></dd>
          </dl>
          <h3>Underlying runs</h3>
          ${renderDetailedRunList(edges)}
        </div>
      `;
      return;
    }

    if (selection.type === "edge") {
      const edge = getEdge(selection.edgeId);
      if (!edge) return;
      const visualEdge = getVisualEdgeForDetailedEdge(edge.id);
      const source = getNode(edge.source);
      const target = getNode(edge.target);
      const sourcePort = getPort(edge.source, resolveHandleToPort(source, edge.sourceHandle));
      const targetPort = getPort(edge.target, resolveHandleToPort(target, edge.targetHandle));
      if (visualEdge) highlightVisualEdge(visualEdge.id);
      body.innerHTML = `
        <div class="selected-card">
          <p class="panel-kicker">Detailed run</p>
          <h2>${escapeHtml(edge.data?.label || edge.id)}</h2>
          <div class="selected-tags">
            <span>${escapeHtml(signalLabel(edge.data?.signalType))}</span>
            <span>${escapeHtml(edge.data?.status || "status")}</span>
            <span>${escapeHtml(edge.data?.lineStyle || "solid")}</span>
            ${visualEdge ? `<span>${escapeHtml(visualEdge.label)}</span>` : ""}
          </div>
          <dl class="path-detail">
            <dt>Source</dt>
            <dd>${escapeHtml(source.data.label)}<span>${escapeHtml(sourcePort?.label || edge.sourceHandle)}</span></dd>
            <dt>Destination</dt>
            <dd>${escapeHtml(target.data.label)}<span>${escapeHtml(targetPort?.label || edge.targetHandle)}</span></dd>
          </dl>
        </div>
      `;
    }
  }

  function applyTransform() {
    const world = root.querySelector("[data-system-world]");
    if (!world) return;
    world.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
    root.querySelector(".system-viewport")?.style.setProperty("--scale-label", `"${Math.round(state.scale * 100)}%"`);
  }

  function fitWorld() {
    const viewport = root.querySelector("[data-system-viewport]");
    if (!viewport) return;
    const scaleX = (viewport.clientWidth - 56) / state.layout.width;
    const scaleY = (viewport.clientHeight - 56) / state.layout.height;
    state.scale = Math.min(0.82, Math.max(0.34, Math.min(scaleX, scaleY)));
    state.x = 28;
    state.y = 28;
    applyTransform();
    requestAnimationFrame(drawEdges);
  }

  function resetWorld() {
    const viewport = root.querySelector("[data-system-viewport]");
    state.scale = viewport && viewport.clientWidth < 640 ? 0.46 : 0.72;
    state.x = 28;
    state.y = 28;
    applyTransform();
    requestAnimationFrame(drawEdges);
  }

  function getPortPoint(nodeId, portId) {
    const world = root.querySelector("[data-system-world]");
    const port = root.querySelector(`.port-pill[data-node-id="${cssEscape(nodeId)}"][data-port-id="${cssEscape(portId)}"]`);
    if (!world || !port) return null;

    const worldRect = world.getBoundingClientRect();
    const portRect = port.getBoundingClientRect();
    return {
      x: (portRect.left - worldRect.left + portRect.width / 2) / state.scale,
      y: (portRect.top - worldRect.top + portRect.height / 2) / state.scale,
    };
  }

  function getSectionPoint(nodeId, sectionName, side = "center") {
    const world = root.querySelector("[data-system-world]");
    const nodeElement = root.querySelector(`.system-node[data-node-id="${cssEscape(nodeId)}"]`);
    const groupElement = nodeElement?.querySelector(`.port-group[data-section-key="${cssEscape(sectionKey(sectionName))}"]`);
    if (!world || !nodeElement || !groupElement) return null;

    const worldRect = world.getBoundingClientRect();
    const nodeRect = nodeElement.getBoundingClientRect();
    const groupRect = groupElement.getBoundingClientRect();
    const edgeGap = 6;
    let x = nodeRect.left + nodeRect.width / 2;
    if (side === "left") x = nodeRect.left + edgeGap;
    if (side === "right") x = nodeRect.right - edgeGap;

    return {
      x: (x - worldRect.left) / state.scale,
      y: (groupRect.top - worldRect.top + groupRect.height / 2) / state.scale,
    };
  }

  function averagePoints(points) {
    if (!points.length) return null;
    const total = points.reduce(
      (sum, point) => ({
        x: sum.x + point.x,
        y: sum.y + point.y,
      }),
      { x: 0, y: 0 },
    );
    return {
      x: total.x / points.length,
      y: total.y / points.length,
    };
  }

  function getVisualEdgePoint(visualEdge, endpoint) {
    const nodeId = endpoint === "source" ? visualEdge.source : visualEdge.target;
    const anchor = endpoint === "source" ? visualEdge.sourceAnchor : visualEdge.targetAnchor;
    if (anchor?.section) {
      const anchoredPoint = getSectionPoint(nodeId, anchor.section, anchor.side);
      if (anchoredPoint) return anchoredPoint;
    }

    const points = visualEdge.edgeIds
      .map(getEdge)
      .filter(Boolean)
      .map((edge) => {
        const detailedEndpoint = edgeEndpoint(edge, endpoint);
        return getPortPoint(detailedEndpoint.nodeId, detailedEndpoint.portId);
      })
      .filter(Boolean);
    return averagePoints(points);
  }

  function orthogonalEdgePath(source, target, visualEdge) {
    const direction = target.x >= source.x ? 1 : -1;
    const minTrack = 42;
    const sourcePosition = state.layout.positions.get(visualEdge.source);
    const targetPosition = state.layout.positions.get(visualEdge.target);
    const sourceLeft = sourcePosition?.x ?? source.x;
    const sourceRight = sourcePosition ? sourcePosition.x + sourcePosition.width : source.x;
    const targetLeft = targetPosition?.x ?? target.x;
    const targetRight = targetPosition ? targetPosition.x + targetPosition.width : target.x;
    const trackOffset = (visualEdge.track || 0) * 10;
    let midX = source.x + (target.x - source.x) * 0.5 + trackOffset;

    if (direction > 0 && targetLeft > sourceRight) {
      const gapLeft = sourceRight + 18;
      const gapRight = targetLeft - 18;
      midX = (gapLeft + gapRight) / 2 + trackOffset;
      midX = Math.max(gapLeft, Math.min(gapRight, midX));
    } else if (direction < 0 && sourceLeft > targetRight) {
      const gapLeft = targetRight + 18;
      const gapRight = sourceLeft - 18;
      midX = (gapLeft + gapRight) / 2 + trackOffset;
      midX = Math.max(gapLeft, Math.min(gapRight, midX));
    }

    if (Math.abs(target.x - source.x) < minTrack * 2) {
      midX = source.x + minTrack * direction + trackOffset;
    }

    return `M ${source.x.toFixed(1)} ${source.y.toFixed(1)} H ${midX.toFixed(1)} V ${target.y.toFixed(1)} H ${target.x.toFixed(1)}`;
  }

  function drawEdges() {
    const svg = root.querySelector("[data-edge-layer]");
    const world = root.querySelector("[data-system-world]");
    if (!svg || !world || !state.system) return;

    const worldRect = world.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${state.layout.width} ${state.layout.height}`);
    svg.setAttribute("width", String(state.layout.width));
    svg.setAttribute("height", String(state.layout.height));
    svg.innerHTML = renderMarkers();

    const nodesById = new Map(state.system.nodes.map((node) => [node.id, node]));
    const visualEdges = state.visualEdges.length ? state.visualEdges : state.system.edges.map(createVisualEdgeFromDetailedEdge);

    visualEdges.forEach((visualEdge) => {
      const sourceNode = nodesById.get(visualEdge.source);
      const targetNode = nodesById.get(visualEdge.target);
      const source = getVisualEdgePoint(visualEdge, "source");
      const target = getVisualEdgePoint(visualEdge, "target");
      if (!source || !target || worldRect.width === 0) return;

      const signal = visualEdge.data?.signalType || "custom";
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const hitPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
      const pathData = orthogonalEdgePath(source, target, visualEdge);
      path.setAttribute("d", pathData);
      path.setAttribute("class", `edge-path ${visualEdge.data?.visualGrouped ? "edge-grouped" : "edge-single"} signal-${slug(signal)} edge-status-${slug(visualEdge.data?.status || "confirmed")} edge-style-${slug(visualEdge.data?.lineStyle || "solid")}`);
      path.setAttribute("data-edge-id", visualEdge.id);
      path.setAttribute("data-run-count", String(visualEdge.runCount));
      path.setAttribute("marker-end", `url(#full-arrow-${slug(signal)})`);
      title.textContent = `${visualEdge.label}: ${sourceNode?.data?.label || visualEdge.source} ${visualEdge.sourceLabel} to ${targetNode?.data?.label || visualEdge.target} ${visualEdge.targetLabel}`;
      path.appendChild(title);
      const inspectVisualEdge = (event) => {
        event.stopPropagation();
        updateInspector({ type: "visualEdge", visualEdgeId: visualEdge.id });
      };
      path.addEventListener("click", inspectVisualEdge);
      hitPath.setAttribute("d", pathData);
      hitPath.setAttribute("class", "edge-hit-path");
      hitPath.setAttribute("data-edge-hit-id", visualEdge.id);
      hitPath.addEventListener("click", inspectVisualEdge);
      svg.appendChild(path);
      svg.appendChild(hitPath);
    });

    if (state.selected?.type === "visualEdge") {
      highlightVisualEdge(state.selected.visualEdgeId);
    }
    if (state.selected?.type === "edge") {
      const visualEdge = getVisualEdgeForDetailedEdge(state.selected.edgeId);
      if (visualEdge) highlightVisualEdge(visualEdge.id);
    }
  }

  function finalizeWorldSize() {
    const world = root.querySelector("[data-system-world]");
    if (!world) return;
    let maxBottom = state.layout.height;
    root.querySelectorAll(".system-node").forEach((node) => {
      maxBottom = Math.max(maxBottom, node.offsetTop + node.offsetHeight + 80);
    });
    state.layout.height = maxBottom;
    world.style.height = `${state.layout.height}px`;
    resetWorld();
  }

  function setupSelection() {
    const viewport = root.querySelector("[data-system-viewport]");
    root.querySelectorAll(".system-node").forEach((node) => {
      node.addEventListener("click", (event) => {
        if (event.target.closest(".port-pill, .node-thumb")) return;
        updateInspector({ type: "node", nodeId: node.dataset.nodeId });
      });
    });

    root.querySelectorAll(".port-pill").forEach((port) => {
      port.addEventListener("click", (event) => {
        event.stopPropagation();
        updateInspector({ type: "port", nodeId: port.dataset.nodeId, portId: port.dataset.portId });
      });
    });

    root.querySelectorAll(".node-thumb").forEach((thumb) => {
      thumb.addEventListener("click", (event) => {
        event.stopPropagation();
        updateInspector({ type: "node", nodeId: thumb.dataset.nodeId });
      });
    });

    root.querySelector("[data-clear-selection]")?.addEventListener("click", () => updateInspector(null));
    viewport?.addEventListener("click", (event) => {
      if (event.target === viewport) updateInspector(null);
    });

    root.addEventListener("click", (event) => {
      const edgeButton = event.target.closest("[data-inspect-edge]");
      if (!edgeButton) return;
      updateInspector({ type: "edge", edgeId: edgeButton.dataset.inspectEdge });
    });
  }

  function setupZoomAndPan() {
    const viewport = root.querySelector("[data-system-viewport]");
    let panStart = null;

    root.querySelectorAll("[data-zoom]").forEach((button) => {
      button.addEventListener("click", () => {
        const action = button.dataset.zoom;
        if (action === "fit") return fitWorld();
        if (action === "reset") return resetWorld();
        const factor = action === "in" ? 1.12 : 0.88;
        state.scale = Math.min(1.35, Math.max(0.3, state.scale * factor));
        applyTransform();
        requestAnimationFrame(drawEdges);
      });
    });

    viewport?.addEventListener("pointerdown", (event) => {
      if (event.target.closest("button, input, a, .system-node, .edge-path")) return;
      panStart = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, startX: state.x, startY: state.y };
      viewport.setPointerCapture(event.pointerId);
      viewport.classList.add("is-panning");
    });

    viewport?.addEventListener("pointermove", (event) => {
      if (!panStart || panStart.pointerId !== event.pointerId) return;
      state.x = panStart.startX + event.clientX - panStart.x;
      state.y = panStart.startY + event.clientY - panStart.y;
      applyTransform();
    });

    viewport?.addEventListener("pointerup", (event) => {
      if (!panStart || panStart.pointerId !== event.pointerId) return;
      panStart = null;
      viewport.releasePointerCapture(event.pointerId);
      viewport.classList.remove("is-panning");
    });

    viewport?.addEventListener(
      "wheel",
      (event) => {
        if (!event.ctrlKey && !event.metaKey) return;
        event.preventDefault();
        const previous = state.scale;
        const factor = event.deltaY < 0 ? 1.08 : 0.92;
        state.scale = Math.min(1.35, Math.max(0.3, state.scale * factor));
        const rect = viewport.getBoundingClientRect();
        const focusX = event.clientX - rect.left;
        const focusY = event.clientY - rect.top;
        state.x = focusX - ((focusX - state.x) * state.scale) / previous;
        state.y = focusY - ((focusY - state.y) * state.scale) / previous;
        applyTransform();
        requestAnimationFrame(drawEdges);
      },
      { passive: false },
    );
  }

  function setupScheduleSearch() {
    const input = root.querySelector("[data-schedule-search]");
    const rows = Array.from(root.querySelectorAll(".schedule-row"));
    const counter = root.querySelector("[data-schedule-visible-count]");
    const applyFilter = () => {
      const query = input?.value.trim().toLowerCase() || "";
      let visibleRows = 0;
      rows.forEach((row) => {
        const hidden = query.length > 0 && !row.dataset.filterText.includes(query);
        row.hidden = hidden;
        if (!hidden) visibleRows += 1;
      });
      if (counter) counter.textContent = String(visibleRows);
      state.scheduleFilter = query;
    };
    if (input) {
      input.value = state.scheduleFilter;
      input.addEventListener("input", applyFilter);
    }
    applyFilter();
  }

  function activateTab(tab) {
    state.activeTab = tab;
    root.querySelectorAll("[data-tab-target]").forEach((button) => {
      const isActive = button.dataset.tabTarget === tab;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
      button.tabIndex = isActive ? 0 : -1;
    });
    root.querySelectorAll("[data-tab-panel]").forEach((panel) => {
      const isActive = panel.dataset.tabPanel === tab;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
    if (tab === "diagram") {
      requestAnimationFrame(() => {
        finalizeWorldSize();
        drawEdges();
      });
    }
  }

  function setupTabs() {
    root.querySelectorAll("[data-tab-target]").forEach((button) => {
      button.addEventListener("click", () => activateTab(button.dataset.tabTarget));
    });
    activateTab(state.activeTab);
  }

  function setupImageFallbacks() {
    root.querySelectorAll(".node-thumb img, .reference-image").forEach((image) => {
      image.addEventListener(
        "error",
        () => {
          image.closest(".node-thumb")?.remove();
          image.remove();
        },
        { once: true },
      );
    });
  }

  function setupResize() {
    let scheduled = false;
    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        drawEdges();
      });
    };
    window.addEventListener("resize", schedule);
    document.fonts?.ready.then(() => {
      finalizeWorldSize();
      drawEdges();
    });
    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(schedule);
      root.querySelectorAll(".system-node, [data-system-viewport]").forEach((element) => observer.observe(element));
    }
  }

  function renderLoading() {
    if (!root) return;
    root.innerHTML = `
      <div class="full-system-shell">
        <div class="loading-panel">
          <p class="panel-kicker">Loading</p>
          <h1>Fey Sonic Sphere Full System Diagram</h1>
        </div>
      </div>
    `;
  }

  function renderError(error) {
    root.innerHTML = `
      <div class="full-system-shell">
        <div class="loading-panel error-panel">
          <p class="panel-kicker">Load failed</p>
          <h1>Full-system data could not be loaded</h1>
          <pre>${escapeHtml(error.message || error)}</pre>
        </div>
      </div>
    `;
  }

  async function main() {
    if (!root) return;
    renderLoading();
    try {
      const [system, csvText] = await Promise.all([fetchJson(systemUrl), fetchText(scheduleUrl)]);
      const scheduleRows = parseCsv(csvText);
      const displaySystem = buildDisplaySystem(system);
      state.sourceSystem = system;
      state.system = displaySystem;
      state.visualEdges = displaySystem.visualEdges;
      state.scheduleRows = scheduleRows;
      state.layout = buildLayout(displaySystem.nodes);
      state.portIndex = buildPortIndex(displaySystem);
      renderApp(displaySystem, scheduleRows);
      setupTabs();
      setupSelection();
      setupZoomAndPan();
      setupScheduleSearch();
      setupImageFallbacks();
      setupResize();
      requestAnimationFrame(() => {
        finalizeWorldSize();
        drawEdges();
      });
    } catch (error) {
      renderError(error);
    }
  }

  main();
})();
