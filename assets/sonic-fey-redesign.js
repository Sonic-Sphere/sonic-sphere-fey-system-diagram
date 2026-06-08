(function () {
  const equipmentStatusMeta = {
    confirmed: { label: "confirmed" },
  };

  const portStatusMeta = {
    connected: { label: "connected" },
    disconnected: { label: "disconnected" },
    unknown: { label: "unknown" },
  };

  const photoBasePath = "/SonicSphereFeySystemDiagram/assets/equipment-photos/";

  const equipmentItems = [
    equipment("MacBook Air M2 (2022)", "Playback computer and Dante control surface", "Runs Dante Controller and the playback source, then sends Dante audio through wired Ethernet.", ["DVS", "USB-C", "software source"], [
      photo("macbook-air-m2.jpg", "MacBook Air M2 used as the Dante playback computer"),
    ]),
    equipment("USB-C Multiport Adapter", "MacBook wired network breakout", "Known port set: 3x USB-A, Ethernet, HDMI, and USB-C power input. Exact adapter model still unknown.", ["host adapter", "RJ45", "model TBD"], [
      photo("usb-c-multiport-adapter.jpg", "USB-C multiport adapter with Ethernet for the MacBook"),
    ]),
    equipment("TP-Link 5-Port Ethernet Switch", "Dante network center", "Confirmed 5-port switch with four occupied ports in the rack.", ["5 ports", "Dante", "confirmed present"], [
      photo("tp-link-5-port-switch.jpg", "TP-Link 5-port Ethernet switch in the rack"),
    ]),
    equipment("TASCAM ML-32D", "Dante to 32-channel analog converter", "Dante Primary RJ45 feeds D/A conversion. Four connected analog output D-sub blocks carry the speaker/sub fanouts.", ["32 out", "D-sub 25-pin", "Dante primary"], [
      photo("tascam-ml-32d-front.jpg", "Front panel of the TASCAM ML-32D", "Front"),
      photo("tascam-ml-32d-back.jpg", "Rear panel of the TASCAM ML-32D showing Dante and D-sub connectors", "Back"),
    ]),
    equipment("Dante AVIO Bluetooth ADP-BT-AU-2X1", "Bluetooth source into Dante", "RJ45 Dante endpoint. PoE power source still needs endpoint tracing.", ["Bluetooth", "PoE", "RJ45"], [
      photo("dante-avio-bluetooth.jpg", "Dante AVIO Bluetooth adapter"),
    ]),
    equipment("Dayton MA1240a Top Amp", "Confirmed top amplifier", "Top amp in the rack stack. Current map uses channels 1-6 for Focal speakers 25-30.", ["12 channels", "6 used", "6 spare"], [
      photo("dayton-ma1240a-top-front.jpg", "Front panel of the Dayton MA1240a top amplifier", "Front"),
      photo("dayton-ma1240a-top-back.jpg", "Rear panel of the Dayton MA1240a top amplifier", "Back"),
    ]),
    equipment("Dayton MA1260 Middle Amp", "Confirmed middle amplifier", "Middle amp in the rack stack. Current map uses channels 1-12 for Focal speakers 13-24.", ["12 channels", "RCA in", "speaker out"], [
      photo("dayton-ma1260-middle-front.jpg", "Front panel of the Dayton MA1260 middle amplifier", "Front"),
      photo("dayton-ma1260-middle-back.jpg", "Rear panel of the Dayton MA1260 middle amplifier", "Back"),
    ]),
    equipment("Dayton MA1260 Bottom Amp", "Confirmed bottom amplifier", "Bottom amp in the rack stack. Current map uses channels 1-12 for Focal speakers 1-12.", ["12 channels", "RCA in", "speaker out"], [
      photo("dayton-ma1260-bottom-front.jpg", "Front panel of the Dayton MA1260 bottom amplifier", "Front"),
      photo("dayton-ma1260-bottom-back.jpg", "Rear panel of the Dayton MA1260 bottom amplifier", "Back"),
    ]),
    equipment("30x Focal 100 OD8", "Passive outdoor speaker array", "Confirmed 30-speaker passive outdoor array driven from the Dayton amp speaker outputs.", ["8 ohm", "passive", "speaker array"], [
      photo("focal-100-od8-array.jpg", "Focal 100 OD8 speaker array"),
    ]),
    equipment("Devine DI-003", "Subwoofer line interface", "Receives the TASCAM sub feed through Fanout 4 and sends XLR output to the subwoofer left input.", ["DI box", "sub path", "XLR out"], [
      photo("devine-di-003.jpg", "Devine DI-003 subwoofer line interface"),
    ]),
    equipment("Devine Onyx 18SXA", "Powered subwoofer", "Confirmed powered subwoofer fed from the Devine DI-003 into the left line input.", ["powered sub", "left input", "LFE"], [
      photo("devine-onyx-18sxa.jpg", "Devine Onyx 18SXA powered subwoofer"),
    ]),
    equipment("DB25 to RCA Fanout 1", "Analog fanout, TASCAM outputs 1-8", "Connected between TASCAM Analog Out D-sub 1 and bottom MA1260 line inputs 1-8.", ["DB25", "8x RCA", "connected"], [
      photo("db25-rca-fanout.jpg", "DB25 to RCA fanout cable"),
    ]),
    equipment("DB25 to RCA Fanout 2", "Analog fanout, TASCAM outputs 9-16", "Connected between TASCAM Analog Out D-sub 2, bottom MA1260 inputs 9-12, and middle MA1260 inputs 1-4.", ["DB25", "8x RCA", "connected"], [
      photo("db25-rca-fanout.jpg", "DB25 to RCA fanout cable"),
    ]),
    equipment("DB25 to RCA Fanout 3", "Analog fanout, TASCAM outputs 17-24", "Connected between TASCAM Analog Out D-sub 3 and middle MA1260 line inputs 5-12.", ["DB25", "8x RCA", "connected"], [
      photo("db25-rca-fanout.jpg", "DB25 to RCA fanout cable"),
    ]),
    equipment("DB25 to RCA Fanout 4", "Analog fanout, TASCAM outputs 25-32", "Connected between TASCAM Analog Out D-sub 4, top MA1240a inputs 1-6, the DI-003 sub path, and one spare tail.", ["DB25", "8x RCA", "connected"], [
      photo("db25-rca-fanout.jpg", "DB25 to RCA fanout cable"),
    ]),
    equipment("TP-Link POE150S / TL-POE150S", "Confirmed PoE injector", "Confirmed local-network/power hardware. LAN and PoE endpoints remain unknown.", ["PoE", "48 V", "endpoint TBD"], [
      photo("tp-link-poe150s.jpg", "TP-Link POE150S PoE injector"),
    ]),
    equipment("Ubiquiti GP-H240-125G", "Confirmed 24 V PoE injector", "Confirmed local-network/power hardware. LAN and PoE endpoints remain unknown.", ["24 V PoE", "endpoint TBD"], [
      photo("ubiquiti-gp-h240-125g.jpg", "Ubiquiti GP-H240-125G 24 V PoE injector"),
    ]),
    equipment("Ubiquiti EdgePoint R6", "Confirmed site network router/control point", "Confirmed local-network hardware. Active Dante role is unknown until the ports are traced.", ["eth0-eth4", "SFP", "role TBD"], [
      photo("ubiquiti-edgepoint-r6.jpg", "Ubiquiti EdgePoint R6 site network device"),
    ]),
  ];

  const devices = [
    {
      name: "MacBook Air M2 (2022)",
      role: "Playback computer",
      group: "core",
      note: "Logical source for Dante Virtual Soundcard transmit channels. Physical audio output is not the Mac headphone path.",
      ports: [
        port("USB-C / Thunderbolt", "usb", "USB-C", "Connected to USB-C multiport adapter host port.", "connected"),
        port("Dante Virtual Soundcard Tx", "wireless", "software", "Transmits Dante audio channels over the adapter Ethernet path.", "connected"),
        port("Power / charger", "power", "power", "Normal MacBook power path.", "connected"),
      ],
    },
    {
      name: "USB-C Multiport Adapter",
      role: "MacBook breakout",
      group: "network",
      note: "Exact adapter model is not known; only the observed port set is represented.",
      ports: [
        port("USB-C Host", "usb", "USB-C", "Connected to MacBook Air M2 USB-C / Thunderbolt.", "connected"),
        port("Ethernet RJ45", "rj45", "RJ45", "Connected to TP-Link switch Port 1 carrying Dante network traffic.", "connected"),
        port("USB-C Power In", "power", "USB-C power", "Pass-through charger connection not traced.", "unknown"),
        port("HDMI Out", "usb", "HDMI", "No active system connection documented.", "disconnected"),
        port("USB-A 1", "usb", "USB-A", "No active system connection documented.", "disconnected"),
        port("USB-A 2", "usb", "USB-A", "No active system connection documented.", "disconnected"),
        port("USB-A 3", "usb", "USB-A", "No active system connection documented.", "disconnected"),
      ],
    },
    {
      name: "TP-Link 5-Port Ethernet Switch",
      role: "Dante switch",
      group: "network",
      note: "The page treats this as the simple single-switch Dante network until a field trace proves otherwise.",
      ports: [
        port("Port 1", "rj45", "RJ45", "Connected to USB-C multiport adapter Ethernet.", "connected"),
        port("Port 2", "rj45", "RJ45", "Connected to TASCAM ML-32D Primary Dante.", "connected"),
        port("Port 3", "rj45", "RJ45", "Connected to Dante AVIO Bluetooth RJ45 + PoE path.", "connected"),
        port("Port 4", "rj45", "RJ45", "Occupied, destination endpoint unknown.", "unknown"),
        port("Port 5", "rj45", "RJ45", "No active connection documented.", "disconnected"),
        port("Power Input", "power", "power", "Switch power path or PoE capability is model-dependent.", "unknown"),
      ],
    },
    {
      name: "TASCAM ML-32D",
      role: "Dante/analog converter",
      group: "core",
      note: "TASCAM analog I/O is balanced line-level on D-sub 25-pin female connectors, grouped 8 channels per connector.",
      ports: [
        port("PRIMARY Dante", "rj45", "RJ45", "Connected to TP-Link switch Port 2.", "connected"),
        port("SECONDARY Dante", "rj45", "RJ45", "Disconnected. Use only with a separate redundant Dante network.", "disconnected"),
        port("Analog Out D-sub 1, ch 1-8", "dsub25", "D-sub 25-pin female", "Connected to DB25 to RCA Fanout 1.", "connected"),
        port("Analog Out D-sub 2, ch 9-16", "dsub25", "D-sub 25-pin female", "Connected to DB25 to RCA Fanout 2.", "connected"),
        port("Analog Out D-sub 3, ch 17-24", "dsub25", "D-sub 25-pin female", "Connected to DB25 to RCA Fanout 3.", "connected"),
        port("Analog Out D-sub 4, ch 25-32", "dsub25", "D-sub 25-pin female", "Connected to DB25 to RCA Fanout 4.", "connected"),
        port("Analog In D-sub 1, ch 1-8", "dsub25", "D-sub 25-pin female", "Disconnected.", "disconnected"),
        port("Analog In D-sub 2, ch 9-16", "dsub25", "D-sub 25-pin female", "Disconnected.", "disconnected"),
        port("Analog In D-sub 3, ch 17-24", "dsub25", "D-sub 25-pin female", "Disconnected.", "disconnected"),
        port("Analog In D-sub 4, ch 25-32", "dsub25", "D-sub 25-pin female", "Disconnected.", "disconnected"),
        port("AC In", "power", "IEC", "Connected to rack mains power.", "connected"),
      ],
    },
    fanoutDevice(1, "TASCAM Analog Out D-sub 1, ch 1-8", [
      "Dayton MA1260 Bottom Amp Line In Ch 01",
      "Dayton MA1260 Bottom Amp Line In Ch 02",
      "Dayton MA1260 Bottom Amp Line In Ch 03",
      "Dayton MA1260 Bottom Amp Line In Ch 04",
      "Dayton MA1260 Bottom Amp Line In Ch 05",
      "Dayton MA1260 Bottom Amp Line In Ch 06",
      "Dayton MA1260 Bottom Amp Line In Ch 07",
      "Dayton MA1260 Bottom Amp Line In Ch 08",
    ]),
    fanoutDevice(2, "TASCAM Analog Out D-sub 2, ch 9-16", [
      "Dayton MA1260 Bottom Amp Line In Ch 09",
      "Dayton MA1260 Bottom Amp Line In Ch 10",
      "Dayton MA1260 Bottom Amp Line In Ch 11",
      "Dayton MA1260 Bottom Amp Line In Ch 12",
      "Dayton MA1260 Middle Amp Line In Ch 01",
      "Dayton MA1260 Middle Amp Line In Ch 02",
      "Dayton MA1260 Middle Amp Line In Ch 03",
      "Dayton MA1260 Middle Amp Line In Ch 04",
    ]),
    fanoutDevice(3, "TASCAM Analog Out D-sub 3, ch 17-24", [
      "Dayton MA1260 Middle Amp Line In Ch 05",
      "Dayton MA1260 Middle Amp Line In Ch 06",
      "Dayton MA1260 Middle Amp Line In Ch 07",
      "Dayton MA1260 Middle Amp Line In Ch 08",
      "Dayton MA1260 Middle Amp Line In Ch 09",
      "Dayton MA1260 Middle Amp Line In Ch 10",
      "Dayton MA1260 Middle Amp Line In Ch 11",
      "Dayton MA1260 Middle Amp Line In Ch 12",
    ]),
    fanoutDevice(4, "TASCAM Analog Out D-sub 4, ch 25-32", [
      "Dayton MA1240a Top Amp Line In Ch 01",
      "Dayton MA1240a Top Amp Line In Ch 02",
      "Dayton MA1240a Top Amp Line In Ch 03",
      "Dayton MA1240a Top Amp Line In Ch 04",
      "Dayton MA1240a Top Amp Line In Ch 05",
      "Dayton MA1240a Top Amp Line In Ch 06",
      "Devine DI-003 Ch 1 Input",
      "Spare / disconnected",
    ]),
    ampDevice({
      name: "Dayton MA1240a Top Amp",
      model: "MA1240a",
      role: "Top amplifier, speakers 25-30",
      lineInputs: [
        ...range(1, 6).map((ch) => `Connected from DB25 to RCA Fanout 4 RCA Ch ${pad(ch)}.`),
        ...range(7, 12).map(() => "Spare / disconnected."),
      ],
      speakerOutputs: [
        ...range(25, 30).map((speaker) => `Connected to Focal 100 OD8 Speaker ${pad(speaker)}.`),
        ...range(7, 12).map(() => "Spare / disconnected."),
      ],
    }),
    ampDevice({
      name: "Dayton MA1260 Middle Amp",
      model: "MA1260",
      role: "Middle amplifier, speakers 13-24",
      lineInputs: [
        ...range(5, 8).map((tail) => `Connected from DB25 to RCA Fanout 2 RCA Ch ${pad(tail)}.`),
        ...range(1, 8).map((tail) => `Connected from DB25 to RCA Fanout 3 RCA Ch ${pad(tail)}.`),
      ],
      speakerOutputs: range(13, 24).map((speaker) => `Connected to Focal 100 OD8 Speaker ${pad(speaker)}.`),
    }),
    ampDevice({
      name: "Dayton MA1260 Bottom Amp",
      model: "MA1260",
      role: "Bottom amplifier, speakers 1-12",
      lineInputs: [
        ...range(1, 8).map((tail) => `Connected from DB25 to RCA Fanout 1 RCA Ch ${pad(tail)}.`),
        ...range(1, 4).map((tail) => `Connected from DB25 to RCA Fanout 2 RCA Ch ${pad(tail)}.`),
      ],
      speakerOutputs: range(1, 12).map((speaker) => `Connected to Focal 100 OD8 Speaker ${pad(speaker)}.`),
    }),
    {
      name: "Focal 100 OD8 Speaker Array",
      role: "30 passive speakers",
      group: "core",
      note: "Kept as one logical device card. Individual speaker labels should be confirmed on-site.",
      ports: [
        port("Speaker Inputs 01-12", "speaker", "speaker terminal", "Connected from Dayton MA1260 Bottom Amp Speaker Out Ch 01-12.", "connected"),
        port("Speaker Inputs 13-24", "speaker", "speaker terminal", "Connected from Dayton MA1260 Middle Amp Speaker Out Ch 01-12.", "connected"),
        port("Speaker Inputs 25-30", "speaker", "speaker terminal", "Connected from Dayton MA1240a Top Amp Speaker Out Ch 01-06.", "connected"),
      ],
    },
    {
      name: "Devine DI-003",
      role: "Subwoofer interface",
      group: "core",
      note: "Only channel 1 is represented as active in the current logical sub path.",
      ports: [
        port("Ch 1 Input", "rca", "RCA/adapted input", "Connected from DB25 to RCA Fanout 4 RCA Ch 07.", "connected"),
        port("Ch 1 Thru", "rca", "1/4 in thru", "No active connection documented.", "disconnected"),
        port("Ch 1 XLR Out", "xlr", "XLR-3", "Connected to Devine Onyx 18SXA left line input.", "connected"),
        port("Ch 2 Input", "rca", "1/4 in input", "No active connection documented.", "disconnected"),
        port("Ch 2 Thru", "rca", "1/4 in thru", "No active connection documented.", "disconnected"),
        port("Ch 2 XLR Out", "xlr", "XLR-3", "No active connection documented.", "disconnected"),
      ],
    },
    {
      name: "Devine Onyx 18SXA",
      role: "Powered subwoofer",
      group: "core",
      note: "The sub feed is confirmed through the DI-003.",
      ports: [
        port("Left Line Input", "xlr", "XLR-3", "Connected from Devine DI-003 Ch 1 XLR Out.", "connected"),
        port("Right Line Input", "xlr", "XLR-3", "No active connection documented.", "disconnected"),
        port("AC In", "power", "IEC", "Connected to mains power at the sub location.", "connected"),
      ],
    },
    {
      name: "Dante AVIO Bluetooth ADP-BT-AU-2X1",
      role: "Bluetooth Dante endpoint",
      group: "network",
      note: "PoE source is the important field question: switch PoE versus inline injector.",
      ports: [
        port("Bluetooth Audio", "wireless", "Bluetooth", "Available for phone, tablet, or computer pairing.", "unknown"),
        port("Dante RJ45 + PoE", "rj45", "RJ45 + PoE", "Connected to TP-Link switch Port 3; PoE source still to verify.", "connected"),
      ],
    },
    {
      name: "TP-Link POE150S / TL-POE150S",
      role: "48 V PoE injector",
      group: "power",
      note: "Confirmed present, but not proven as part of the Dante signal path.",
      ports: [
        port("LAN In", "rj45", "RJ45", "Source switch/router port not traced.", "unknown"),
        port("PoE Out", "rj45", "RJ45 + PoE", "Powered device not traced.", "unknown"),
        port("AC In", "power", "power", "Connected to mains power.", "connected"),
      ],
    },
    {
      name: "Ubiquiti GP-H240-125G",
      role: "24 V PoE injector",
      group: "power",
      note: "Do not assume this powers Dante gear; 24 V passive PoE is a separate site-network concern until traced.",
      ports: [
        port("LAN In", "rj45", "RJ45", "Endpoint not traced.", "unknown"),
        port("24 V PoE Out", "rj45", "RJ45 + 24 V PoE", "Powered endpoint not traced.", "unknown"),
        port("AC In", "power", "power", "Connected to mains power.", "connected"),
      ],
    },
    {
      name: "Ubiquiti EdgePoint R6",
      role: "Site router/control point",
      group: "power",
      note: "Represented separately so it does not clutter the Dante/audio signal flow.",
      ports: [
        port("eth0", "rj45", "RJ45", "Connection unknown; may be uplink, PoE, or site network.", "unknown"),
        port("eth1", "rj45", "RJ45", "Connection unknown.", "unknown"),
        port("eth2", "rj45", "RJ45", "Connection unknown.", "unknown"),
        port("eth3", "rj45", "RJ45", "Connection unknown.", "unknown"),
        port("eth4", "rj45", "RJ45", "Connection unknown.", "unknown"),
        port("SFP", "sfp", "SFP", "Fiber/uplink role not documented.", "unknown"),
        port("24 V DC / PoE In", "power", "power", "Power source not traced.", "unknown"),
      ],
    },
  ];

  function equipment(name, role, detail, tags, photos) {
    return { name, role, status: "confirmed", detail, tags, photos };
  }

  function photo(file, alt, caption = "") {
    return {
      src: `${photoBasePath}${file}`,
      file,
      alt,
      caption,
    };
  }

  function port(label, jack, connector, to, state) {
    return { label, jack, connector, to, state };
  }

  function pad(number) {
    return String(number).padStart(2, "0");
  }

  function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }

  function fanoutDevice(number, source, destinations) {
    return {
      name: `DB25 to RCA Fanout ${number}`,
      role: `Analog breakout ${number}`,
      group: "cabling",
      note: "Physical fanout is verified connected. RCA tail labels should still be mirrored onto the cable loom.",
      ports: [
        port("DB25 connector", "dsub25", "DB25", `Connected from ${source}.`, "connected"),
        ...destinations.map((destination, index) =>
          port(`RCA Ch ${pad(index + 1)}`, "rca", "RCA", destination.includes("Spare") ? destination : `Connected to ${destination}.`, destination.includes("Spare") ? "disconnected" : "connected"),
        ),
      ],
    };
  }

  function ampDevice({ name, model, role, lineInputs, speakerOutputs }) {
    return {
      name,
      role,
      group: "core",
      note: `${model} rear panel shown as individual physical connectors: bus, trigger, line inputs, speaker outputs, and AC.`,
      ports: [
        port("AC In", "power", "IEC", "Connected to rack mains power.", "connected"),
        ...["BUS 1 In L", "BUS 1 In R", "BUS 2 In L", "BUS 2 In R"].map((label) =>
          port(label, "rca", "RCA", "No active connection documented.", "disconnected"),
        ),
        ...["BUS 1 Out L", "BUS 1 Out R", "BUS 2 Out L", "BUS 2 Out R"].map((label) =>
          port(label, "rca", "RCA", "No active connection documented.", "disconnected"),
        ),
        port("Trigger In", "mini", "3.5 mm trigger", "No active connection documented.", "disconnected"),
        port("Trigger Out", "mini", "3.5 mm trigger", "No active connection documented.", "disconnected"),
        ...range(1, 12).map((channel) => {
          const destination = lineInputs[channel - 1] || "Spare / disconnected.";
          return port(`Line In Ch ${pad(channel)}`, "rca", "RCA", destination, destination.includes("disconnected") ? "disconnected" : "connected");
        }),
        ...range(1, 12).map((channel) => {
          const destination = speakerOutputs[channel - 1] || "Spare / disconnected.";
          return port(`Speaker Out Ch ${pad(channel)}`, "speaker", "Phoenix", destination, destination.includes("disconnected") ? "disconnected" : "connected");
        }),
      ],
    };
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function equipmentStatusChip(status) {
    const meta = equipmentStatusMeta[status] || equipmentStatusMeta.confirmed;
    return `<span class="status-chip ${status}">${escapeHtml(meta.label)}</span>`;
  }

  function renderEquipmentPhotos(item) {
    return `
      <div class="equipment-photos" data-photo-count="${item.photos.length}">
        ${item.photos
          .map(
            (image) => `
              <figure class="equipment-photo-frame" data-photo-file="${escapeHtml(image.file)}">
                <img
                  src="${escapeHtml(image.src)}"
                  alt="${escapeHtml(image.alt)}"
                  loading="eager"
                  decoding="async"
                  data-photo-file="${escapeHtml(image.file)}"
                />
                ${image.caption ? `<figcaption>${escapeHtml(image.caption)}</figcaption>` : ""}
                <span class="missing-photo">Missing photo: ${escapeHtml(image.file)}</span>
              </figure>
            `,
          )
          .join("")}
      </div>
    `;
  }

  function renderEquipment() {
    return equipmentItems
      .map(
        (item) => `
          <article class="equipment-card" data-status="${escapeHtml(item.status)}">
            ${renderEquipmentPhotos(item)}
            <div class="equipment-top">
              <div>
                <h3 class="equipment-name">${escapeHtml(item.name)}</h3>
                <p class="equipment-role">${escapeHtml(item.role)}</p>
              </div>
              ${equipmentStatusChip(item.status)}
            </div>
            <p class="equipment-detail">${escapeHtml(item.detail)}</p>
            <div class="equipment-tags">
              ${item.tags.map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join("")}
            </div>
          </article>
        `,
      )
      .join("");
  }

  function diagramNode(kind, kicker, title, lines) {
    return `
      <div class="diagram-node ${kind}">
        <div>
          <div class="node-kicker">${escapeHtml(kicker)}</div>
          <div class="node-title">${escapeHtml(title)}</div>
        </div>
        <ul class="node-lines">
          ${lines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  function arrow(className = "") {
    return `<div class="arrow-cell ${escapeHtml(className)}" aria-hidden="true"><div class="arrow-line"></div></div>`;
  }

  function renderConnectionDiagrams() {
    return `
      <div class="diagram-stack">
        <article class="abstract-diagram">
          <h3>Audio and speaker path</h3>
          <p class="diagram-note">The 30-speaker path is grouped at device level, while the sub branch is shown separately from the Dayton amp stack.</p>
          <div class="audio-flow-grid">
            ${diagramNode("audio flow-source", "digital audio", "Dante Virtual Soundcard Tx", [
              "MacBook transmit source",
              "Channels 1-30 speakers",
              "Channel 31 sub/LFE",
            ])}
            ${arrow("flow-arrow-1")}
            ${diagramNode("audio flow-tascam", "conversion", "TASCAM ML-32D", [
              "Dante receive on Primary",
              "D/A to four output D-sub blocks",
              "Sub send to DI-003 on Fanout 4",
            ])}
            ${arrow("flow-arrow-2")}
            ${diagramNode("audio flow-amps", "amplification", "Dayton amp stack", [
              "MA1240a Top: speakers 25-30",
              "MA1260 Middle: speakers 13-24",
              "MA1260 Bottom: speakers 1-12",
            ])}
            ${arrow("flow-arrow-3")}
            ${diagramNode("audio flow-speakers", "loads", "Focal 100 OD8 speaker array", [
              "30 confirmed passive speakers",
              "Driven from Dayton speaker outputs",
            ])}
            <div class="branch-drop branch-drop-tascam" aria-hidden="true"></div>
            ${arrow("flow-arrow-sub-feed sub-feed-arrow")}
            ${diagramNode("audio flow-di", "sub interface", "Devine DI-003", [
              "From Fanout 4 RCA Ch 07",
              "XLR output to sub left input",
            ])}
            ${arrow("flow-arrow-sub")}
            ${diagramNode("audio flow-sub", "subwoofer", "Devine Onyx 18SXA", [
              "Powered subwoofer",
              "Left line input connected",
            ])}
          </div>
        </article>

        <article class="abstract-diagram">
          <h3>Local network</h3>
          <p class="diagram-note">Network hardware is shown separately so the Dante signal path stays readable.</p>
          <div class="diagram-lane">
            ${diagramNode("network", "sources", "MacBook + AVIO Bluetooth", [
              "MacBook through USB-C Ethernet adapter",
              "Bluetooth adapter through Dante RJ45 + PoE",
            ])}
            ${arrow()}
            ${diagramNode("network", "switch", "TP-Link 5-port switch", [
              "Port 1: MacBook adapter",
              "Port 2: TASCAM Primary",
              "Port 3: AVIO Bluetooth",
              "Port 4: occupied, endpoint unknown",
            ])}
            ${arrow()}
            ${diagramNode("network", "receiver", "TASCAM ML-32D", [
              "Primary Dante connected",
              "Secondary Dante disconnected",
            ])}
          </div>
          <div class="branch-row">
            ${diagramNode("network trace", "confirmed hardware", "TP-Link POE150S", [
              "LAN In endpoint unknown",
              "PoE Out endpoint unknown",
            ])}
            ${diagramNode("network trace", "confirmed hardware", "Ubiquiti GP-H240-125G", [
              "24 V passive PoE injector",
              "Endpoints unknown",
            ])}
            ${diagramNode("network trace", "confirmed hardware", "Ubiquiti EdgePoint R6", [
              "Site-network role unknown",
              "Keep separate until traced",
            ])}
          </div>
          <div class="legend-row">
            <span class="chip">Dante / Ethernet</span>
            <span class="chip">Analog audio</span>
            <span class="chip">Unknown endpoint</span>
          </div>
        </article>
      </div>
    `;
  }

  function renderPortLayouts() {
    return devices
      .map(
        (device) => `
          <article class="device-card ${escapeHtml(device.group)}" data-device-group="${escapeHtml(device.group)}">
            <header class="device-header">
              <div>
                <h3 class="device-title">${escapeHtml(device.name)}</h3>
                <p class="device-role">${escapeHtml(device.role)}</p>
              </div>
            </header>
            <div class="device-body">
              <div class="logical-face">
                ${device.ports
                  .map(
                    (item) => `
                      <div class="port-row ${escapeHtml(item.state)}">
                        <span class="jack ${escapeHtml(item.jack)}" aria-hidden="true"></span>
                        <div>
                          <div class="port-label-line">
                            <span class="port-label">${escapeHtml(item.label)}</span>
                            <span class="port-type">${escapeHtml(item.connector)}</span>
                          </div>
                          <p class="port-to">${escapeHtml(item.to)}</p>
                          <span class="port-status">${escapeHtml(portStatusMeta[item.state]?.label || item.state)}</span>
                        </div>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
              <p class="device-note">${escapeHtml(device.note)}</p>
            </div>
          </article>
        `,
      )
      .join("");
  }

  function setupPhotoStatus() {
    const report = document.getElementById("photo-report");
    const images = Array.from(document.querySelectorAll(".equipment-photo-frame img"));
    const missing = new Set();
    let pending = images.length;

    if (!report || images.length === 0) return;

    const finish = () => {
      if (pending > 0) return;

      const missingFiles = Array.from(missing).sort();
      if (missingFiles.length === 0) {
        report.classList.remove("has-missing");
        report.classList.add("is-complete");
        report.innerHTML = `All required equipment photos are available in <code>assets/equipment-photos/</code>.`;
        return;
      }

      report.classList.remove("is-complete");
      report.classList.add("has-missing");
      report.innerHTML = `
        <strong>Missing equipment photos in <code>assets/equipment-photos/</code>:</strong>
        <span class="missing-photo-list">${missingFiles.map((file) => `<span>${escapeHtml(file)}</span>`).join(" ")}</span>
      `;
    };

    const markLoaded = (image) => {
      image.closest(".equipment-photo-frame")?.classList.add("is-loaded");
      pending -= 1;
      finish();
    };

    const markMissing = (image) => {
      const file = image.getAttribute("data-photo-file");
      const frame = image.closest(".equipment-photo-frame");
      if (file) missing.add(file);
      if (frame) frame.classList.add("is-missing");
      image.hidden = true;
      pending -= 1;
      finish();
    };

    images.forEach((image) => {
      if (image.complete) {
        if (image.naturalWidth > 0) {
          markLoaded(image);
        } else {
          markMissing(image);
        }
        return;
      }

      image.addEventListener("load", () => markLoaded(image), { once: true });
      image.addEventListener("error", () => markMissing(image), { once: true });
    });
  }

  function setupFilters() {
    const buttons = document.querySelectorAll("[data-filter]");
    const cards = document.querySelectorAll("[data-device-group]");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        buttons.forEach((candidate) => {
          candidate.classList.toggle("is-active", candidate === button);
        });

        cards.forEach((card) => {
          const group = card.getAttribute("data-device-group");
          card.classList.toggle("is-hidden", filter !== "all" && group !== filter);
        });
      });
    });
  }

  function renderApp() {
    const root = document.getElementById("root");
    if (!root) return;

    root.innerHTML = `
      <div class="app-shell">
        <header class="site-header">
          <div class="site-header-inner">
            <div class="brand">
              <div class="brand-title">Fey Sonic Sphere System Description</div>
              <div class="brand-subtitle">30.1 Fey Sonic Sphere playback system</div>
            </div>
            <nav class="top-nav" aria-label="Page sections">
              <a href="#equipment">Equipment</a>
              <a href="#connections">Signal Flow</a>
              <a href="#ports">Port Layouts</a>
            </nav>
          </div>
        </header>

        <main>
          <section class="section section-first" id="equipment">
            <div class="section-head">
              <div>
                <p class="label">01 / Equipment list</p>
                <h1>What is in the system</h1>
              </div>
              <p>Confirmed equipment inventory. Connection state is handled in the per-device port layouts below.</p>
            </div>
            <div class="photo-report" id="photo-report" aria-live="polite">
              Checking equipment photos in <code>assets/equipment-photos/</code>.
            </div>
            <div class="equipment-grid">
              ${renderEquipment()}
            </div>
          </section>

          <section class="section" id="connections">
            <div class="section-head">
              <div>
                <p class="label">02 / High level signal flow</p>
                <h2>High level signal flow</h2>
              </div>
              <p>Audio path first, local network second. The diagrams stay abstract so the rack wiring remains readable.</p>
            </div>
            ${renderConnectionDiagrams()}
          </section>

          <section class="section" id="ports">
            <div class="section-head">
              <div>
                <p class="label">03 / Per-device logical port layout</p>
                <h2>Each device in isolation</h2>
              </div>
              <p>Phone-first port cards show every active logical jack, including disconnected and unknown endpoints.</p>
            </div>
            <div class="layout-toolbar" aria-label="Port layout filters">
              <button class="filter-button is-active" type="button" data-filter="all">All devices</button>
              <button class="filter-button" type="button" data-filter="core">Core audio</button>
              <button class="filter-button" type="button" data-filter="network">Network</button>
              <button class="filter-button" type="button" data-filter="cabling">Fanouts</button>
              <button class="filter-button" type="button" data-filter="power">Power/site</button>
            </div>
            <div class="port-layout-grid">
              ${renderPortLayouts()}
            </div>
          </section>
        </main>

        <footer class="footer">
          Local source data: README notes, generated EasySchematic v2 device library, cable schedule, and local manufacturer reference pack.
        </footer>
      </div>
    `;

    setupPhotoStatus();
    setupFilters();
  }

  renderApp();
})();
