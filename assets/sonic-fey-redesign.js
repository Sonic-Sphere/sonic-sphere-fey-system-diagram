(function () {
  const portStatusMeta = {
    connected: { label: "connected" },
    disconnected: { label: "disconnected" },
    unknown: { label: "unknown" },
  };

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
      path: "M10,2C8.89,2 8,2.89 8,4V7C8,8.11 8.89,9 10,9H11V11H2V13H6V15H5C3.89,15 3,15.89 3,17V20C3,21.11 3.89,22 5,22H9C10.11,22 11,21.11 11,20V17C11,15.89 10.11,15 9,15H8V13H16V15H15C13.89,15 13,15.89 13,17V20C13,21.11 13.89,22 15,22H19C20.11,22 21,21.11 21,20V17C21,15.89 20.11,15 19,15H18V13H22V11H13V9H14C15.11,9 16,8.11 16,7V4C16,2.89 15.11,2 14,2H10M10,4H14V7H10V4M5,17H9V20H5V17M15,17H19V20H15V17Z",
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
    { pattern: /software|virtual soundcard|dvs/i, key: "lan" },
    { pattern: /db25|d-sub|dsub/i, key: "serialPort" },
    { pattern: /rca/i, key: "audioInputRca" },
    { pattern: /xlr/i, key: "audioInputXlr" },
    { pattern: /1\/4|quarter|3\.5|trigger|trs|mini/i, key: "audioInputStereoMinijack" },
    { pattern: /speaker|phoenix|terminal/i, key: "speaker" },
    { pattern: /sfp|fiber|uplink/i, key: "ethernet" },
    { pattern: /iec|dc|power|charger|pd/i, key: "powerPlug" },
    { pattern: /usb/i, key: "usbPort" },
  ];

  const scriptUrl = document.currentScript?.src || new URL("assets/sonic-fey-redesign.js", window.location.href).href;
  const photoBasePath = new URL("equipment-photos/", scriptUrl).href;

  const equipmentItems = [
    equipment("MacBook Air M2 (2022)", "Playback computer and Dante control surface", "Runs Dante Controller and the playback source, then sends Dante audio through wired Ethernet.", ["DVS", "USB-C", "software source"], [
      photo("macbook-air-m2.jpg", "MacBook Air M2 used as the Dante playback computer"),
    ]),
    equipment("Anker 543 USB-C Hub", "MacBook wired network breakout", "Anker 543/A8365 6-in-1 USB-C hub with Ethernet, HDMI, USB-C data, two USB-A data ports, and USB-C PD input.", ["Anker 543", "RJ45", "HDMI", "PD"], [
      photo("usb-c-multiport-adapter.jpg", "Anker 543 USB-C Hub with Ethernet for the MacBook"),
    ]),
    equipment("TP-Link 5-Port Ethernet Switch", "Dante network center", "5-port switch with four occupied ports in the rack.", ["5 ports", "RJ45", "Dante"], [
      photo("tp-link-5-port-switch.jpg", "TP-Link 5-port Ethernet switch in the rack"),
    ]),
    equipment("TASCAM ML-32D", "Dante to 32-channel analog converter", "Dante Primary RJ45 feeds D/A conversion. Four connected analog output D-sub blocks carry the speaker/sub fanouts.", ["32 out", "D-sub 25-pin", "Dante"], [
      photo("tascam-ml-32d-front.jpg", "Front panel of the TASCAM ML-32D", "Front"),
      photo("tascam-ml-32d-back.jpg", "Rear panel of the TASCAM ML-32D showing Dante and D-sub connectors", "Back"),
    ]),
    equipment("Dante AVIO Bluetooth ADP-BT-AU-2X1", "Bluetooth source into Dante", "RJ45 Dante endpoint. PoE power source still needs endpoint tracing.", ["Bluetooth", "PoE", "RJ45"], [
      photo("dante-avio-bluetooth.jpg", "Dante AVIO Bluetooth adapter"),
    ]),
    equipment("Dayton MA1240a Top Amp", "Top amplifier", "Top amp in the rack stack. Current map uses channels 1-6 for Focal speakers 25-30.", ["RCA in", "speaker out", "IEC"], [
      photo("dayton-ma1240a-top-front.jpg", "Front panel of the Dayton MA1240a top amplifier", "Front"),
      photo("dayton-ma1240a-top-back.jpg", "Rear panel of the Dayton MA1240a top amplifier", "Back"),
    ]),
    equipment("Dayton MA1260 Middle Amp", "Middle amplifier", "Middle amp in the rack stack. Current map uses channels 1-12 for Focal speakers 13-24.", ["12 channels", "RCA in", "speaker out"], [
      photo("dayton-ma1260-middle-front.jpg", "Front panel of the Dayton MA1260 middle amplifier", "Front"),
      photo("dayton-ma1260-middle-back.jpg", "Rear panel of the Dayton MA1260 middle amplifier", "Back"),
    ]),
    equipment("Dayton MA1260 Bottom Amp", "Bottom amplifier", "Bottom amp in the rack stack. Current map uses channels 1-12 for Focal speakers 1-12.", ["12 channels", "RCA in", "speaker out"], [
      photo("dayton-ma1260-bottom-front.jpg", "Front panel of the Dayton MA1260 bottom amplifier", "Front"),
      photo("dayton-ma1260-bottom-back.jpg", "Rear panel of the Dayton MA1260 bottom amplifier", "Back"),
    ]),
    equipment("30x Focal 100 OD8", "Passive outdoor speaker array", "30-speaker passive outdoor array driven from the Dayton amp speaker outputs.", ["8 ohm", "passive", "speaker array"], [
      photo("focal-100-od8-array.jpg", "Focal 100 OD8 speaker array"),
    ]),
    equipment("Devine DI-003", "Subwoofer line interface", "Receives the TASCAM sub feed through Fanout 4 and sends XLR output to the subwoofer left input.", ["DI box", "sub path", "XLR out"], [
      photo("devine-di-003.jpg", "Devine DI-003 subwoofer line interface"),
    ]),
    equipment("Devine Onyx 18SXA", "Powered subwoofer", "Powered subwoofer fed from the Devine DI-003 into the left line input.", ["powered sub", "left input", "XLR in"], [
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
    equipment("TP-Link POE150S / TL-POE150S", "PoE injector", "Local-network/power hardware. LAN and PoE endpoints remain unknown.", ["RJ45", "PoE", "48 V"], [
      photo("tp-link-poe150s.jpg", "TP-Link POE150S PoE injector"),
    ]),
    equipment("Ubiquiti GP-H240-125G", "24 V PoE injector", "Local-network/power hardware. LAN and PoE endpoints remain unknown.", ["RJ45", "24 V PoE", "endpoint TBD"], [
      photo("ubiquiti-gp-h240-125g.jpg", "Ubiquiti GP-H240-125G 24 V PoE injector"),
    ]),
    equipment("Ubiquiti EdgePoint R6", "Site network router/control point", "Local-network hardware. Active Dante role is unknown until the ports are traced.", ["eth0-eth4", "SFP", "24 V PoE"], [
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
        port("USB-C / Thunderbolt", "usb", "USB-C", "Connected to Anker 543 USB-C Hub host cable.", "connected"),
        port("Dante Virtual Soundcard Tx", "wireless", "software", "Transmits Dante audio channels over the adapter Ethernet path.", "connected"),
        port("Power / charger", "power", "power", "Normal MacBook power path.", "connected"),
      ],
    },
    {
      name: "Anker 543 USB-C Hub",
      role: "MacBook breakout",
      group: "network",
      note: "User-confirmed Anker 543/A8365 hub. Port layout follows the 6-in-1 product spec; active system path is host USB-C to MacBook and Ethernet to switch.",
      ports: [
        port("USB-C Host Cable", "usb", "USB-C", "Connected to MacBook Air M2 USB-C / Thunderbolt.", "connected"),
        port("Ethernet RJ45", "rj45", "RJ45", "Connected to TP-Link switch Port 1 carrying Dante network traffic.", "connected"),
        port("USB-C Power Delivery In", "power", "USB-C PD", "Pass-through charger connection not traced.", "unknown"),
        port("HDMI Out", "usb", "HDMI", "No active system connection documented.", "disconnected"),
        port("USB-C Data", "usb", "USB-C data", "No active system connection documented.", "disconnected"),
        port("USB-A Data 1", "usb", "USB-A", "No active system connection documented.", "disconnected"),
        port("USB-A Data 2", "usb", "USB-A", "No active system connection documented.", "disconnected"),
      ],
    },
    {
      name: "TP-Link 5-Port Ethernet Switch",
      role: "Dante switch",
      group: "network",
      note: "The page treats this as the simple single-switch Dante network until a field trace proves otherwise.",
      ports: [
        port("Port 1", "rj45", "RJ45", "Connected to Anker 543 USB-C Hub Ethernet.", "connected"),
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
      note: "Kept as one logical device card. Individual speaker labels should be verified on-site.",
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
      note: "The sub feed runs through the DI-003.",
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
      note: "Present in the rack, but not proven as part of the Dante signal path.",
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
    return { name, role, detail, tags, photos };
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

  function resolvePortIconKey(value) {
    const text = String(value || "");
    return portIconRules.find((rule) => rule.pattern.test(text))?.key || null;
  }

  function renderPortIcon(item) {
    const key = resolvePortIconKey(item.connector) || resolvePortIconKey(item.jack) || "lan";
    const icon = mdiIcons[key] || mdiIcons.lan;

    return `
      <svg
        class="port-icon ${escapeHtml(item.jack)}"
        data-icon="${escapeHtml(icon.name)}"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="${icon.path}"></path>
      </svg>
    `;
  }

  function renderEquipmentPhotos(item) {
    return `
      <div class="equipment-photos" data-photo-count="${item.photos.length}">
        ${item.photos
          .map(
            (image) => `
              <figure
                class="equipment-photo-frame"
                data-photo-file="${escapeHtml(image.file)}"
                role="button"
                tabindex="0"
                aria-label="Open larger image: ${escapeHtml(image.alt)}"
              >
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
          <article class="equipment-card">
            ${renderEquipmentPhotos(item)}
            <div class="equipment-top">
              <div>
                <h3 class="equipment-name">${escapeHtml(item.name)}</h3>
                <p class="equipment-role">${escapeHtml(item.role)}</p>
              </div>
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

  function renderAudioSchematicConnectors() {
    return `
      <svg class="schematic-svg schematic-svg-desktop" viewBox="0 0 1000 360" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <marker id="schematic-arrow-audio" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z"></path>
          </marker>
          <marker id="schematic-arrow-sub" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z"></path>
          </marker>
        </defs>
        <path class="schematic-path schematic-path-audio" d="M220 95H260" marker-end="url(#schematic-arrow-audio)" />
        <path class="schematic-path schematic-path-audio" d="M460 95H500" marker-end="url(#schematic-arrow-audio)" />
        <path class="schematic-path schematic-path-audio" d="M700 95H740" marker-end="url(#schematic-arrow-audio)" />
        <path class="schematic-path schematic-path-sub" d="M360 170V265H500" marker-end="url(#schematic-arrow-sub)" />
        <path class="schematic-path schematic-path-sub" d="M700 265H740" marker-end="url(#schematic-arrow-sub)" />
        <text class="schematic-label schematic-label-sub" x="432" y="248">sub send</text>
      </svg>
      <svg class="schematic-svg schematic-svg-mobile" viewBox="0 0 320 920" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <marker id="schematic-arrow-audio-mobile" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z"></path>
          </marker>
          <marker id="schematic-arrow-sub-mobile" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z"></path>
          </marker>
        </defs>
        <path class="schematic-path schematic-path-audio" d="M160 138V178" marker-end="url(#schematic-arrow-audio-mobile)" />
        <path class="schematic-path schematic-path-audio" d="M160 298V338" marker-end="url(#schematic-arrow-audio-mobile)" />
        <path class="schematic-path schematic-path-audio" d="M160 458V498" marker-end="url(#schematic-arrow-audio-mobile)" />
        <path class="schematic-path schematic-path-sub" d="M102 298V658" marker-end="url(#schematic-arrow-sub-mobile)" />
        <path class="schematic-path schematic-path-sub" d="M160 778V818" marker-end="url(#schematic-arrow-sub-mobile)" />
        <text class="schematic-label schematic-label-sub" x="114" y="634">sub send</text>
      </svg>
    `;
  }

  function renderNetworkSchematicConnectors() {
    return `
      <svg class="schematic-svg schematic-svg-desktop" viewBox="0 0 1000 340" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <marker id="schematic-arrow-network" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z"></path>
          </marker>
        </defs>
        <path class="schematic-path schematic-path-network" d="M313 95H353" marker-end="url(#schematic-arrow-network)" />
        <path class="schematic-path schematic-path-network" d="M646 95H686" marker-end="url(#schematic-arrow-network)" />
      </svg>
      <svg class="schematic-svg schematic-svg-mobile" viewBox="0 0 320 920" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <marker id="schematic-arrow-network-mobile" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z"></path>
          </marker>
        </defs>
        <path class="schematic-path schematic-path-network" d="M160 138V178" marker-end="url(#schematic-arrow-network-mobile)" />
        <path class="schematic-path schematic-path-network" d="M160 298V338" marker-end="url(#schematic-arrow-network-mobile)" />
      </svg>
    `;
  }

  function renderConnectionDiagrams() {
    return `
      <div class="diagram-stack">
        <article class="abstract-diagram">
          <h3>Audio and speaker path</h3>
          <p class="diagram-note">The 30-speaker path is grouped at device level, while the sub branch is shown separately from the Dayton amp stack.</p>
          <div class="schematic-canvas audio-schematic">
            ${renderAudioSchematicConnectors()}
            ${diagramNode("audio flow-source", "digital audio", "Dante Virtual Soundcard Tx", [
              "MacBook transmit source",
              "Channels 1-30 speakers",
              "Channel 31 sub/LFE",
            ])}
            ${diagramNode("audio flow-tascam", "conversion", "TASCAM ML-32D", [
              "Dante receive on Primary",
              "D/A to four output D-sub blocks",
              "Sub send to DI-003 on Fanout 4",
            ])}
            ${diagramNode("audio flow-amps", "amplification", "Dayton amp stack", [
              "MA1240a Top: speakers 25-30",
              "MA1260 Middle: speakers 13-24",
              "MA1260 Bottom: speakers 1-12",
            ])}
            ${diagramNode("audio flow-speakers", "loads", "Focal 100 OD8 speaker array", [
              "30 passive speakers",
              "Driven from Dayton speaker outputs",
            ])}
            ${diagramNode("audio flow-di", "sub interface", "Devine DI-003", [
              "From Fanout 4 RCA Ch 07",
              "XLR output to sub left input",
            ])}
            ${diagramNode("audio flow-sub", "subwoofer", "Devine Onyx 18SXA", [
              "Powered subwoofer",
              "Left line input connected",
            ])}
          </div>
        </article>

        <article class="abstract-diagram">
          <h3>Local network</h3>
          <p class="diagram-note">Network hardware is shown separately so the Dante signal path stays readable.</p>
          <div class="schematic-canvas network-schematic">
            ${renderNetworkSchematicConnectors()}
            ${diagramNode("network net-sources", "sources", "MacBook + AVIO Bluetooth", [
              "MacBook through Anker 543 Ethernet",
              "Bluetooth adapter through Dante RJ45 + PoE",
            ])}
            ${diagramNode("network net-switch", "switch", "TP-Link 5-port switch", [
              "Port 1: Anker 543 hub",
              "Port 2: TASCAM Primary",
              "Port 3: AVIO Bluetooth",
              "Port 4: occupied, endpoint unknown",
            ])}
            ${diagramNode("network net-receiver", "receiver", "TASCAM ML-32D", [
              "Primary Dante connected",
              "Secondary Dante disconnected",
            ])}
            ${diagramNode("network trace trace-poe", "power trace", "TP-Link POE150S", [
              "LAN In endpoint unknown",
              "PoE Out endpoint unknown",
            ])}
            ${diagramNode("network trace trace-ubiquiti", "power trace", "Ubiquiti GP-H240-125G", [
              "24 V passive PoE injector",
              "Endpoints unknown",
            ])}
            ${diagramNode("network trace trace-edge", "site network", "Ubiquiti EdgePoint R6", [
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
                        ${renderPortIcon(item)}
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
    const images = Array.from(document.querySelectorAll(".equipment-photo-frame img"));

    if (images.length === 0) return;

    const markLoaded = (image) => {
      const frame = image.closest(".equipment-photo-frame");
      if (frame) frame.classList.add("is-loaded");
    };

    const markMissing = (image) => {
      const frame = image.closest(".equipment-photo-frame");
      if (frame) {
        frame.classList.add("is-missing");
        frame.removeAttribute("role");
        frame.removeAttribute("tabindex");
        frame.removeAttribute("aria-label");
      }
      image.hidden = true;
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

  function setupPhotoLightbox() {
    const existing = document.querySelector(".photo-lightbox");
    if (existing) existing.remove();

    const root = document.getElementById("root");
    let previousFocus = null;
    const lightbox = document.createElement("div");
    lightbox.className = "photo-lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Equipment photo preview");
    lightbox.hidden = true;
    lightbox.innerHTML = `
      <button class="photo-lightbox-close" type="button" aria-label="Close image preview">Close</button>
      <div class="photo-lightbox-content">
        <img alt="" />
        <p class="photo-lightbox-caption"></p>
      </div>
    `;
    document.body.appendChild(lightbox);

    const preview = lightbox.querySelector("img");
    const caption = lightbox.querySelector(".photo-lightbox-caption");
    const closeButton = lightbox.querySelector(".photo-lightbox-close");

    const closeLightbox = () => {
      if (lightbox.hidden) return;
      lightbox.hidden = true;
      document.body.classList.remove("lightbox-open");
      if (preview) {
        preview.removeAttribute("src");
        preview.alt = "";
      }
      if (caption) caption.textContent = "";
      if (previousFocus && typeof previousFocus.focus === "function") {
        previousFocus.focus({ preventScroll: true });
      }
      previousFocus = null;
    };

    const openLightbox = (frame) => {
      const image = frame?.querySelector("img");
      if (!image || image.hidden || !image.complete || image.naturalWidth === 0) return;
      if (!frame.classList.contains("is-loaded") || frame.classList.contains("is-missing")) return;

      previousFocus = document.activeElement;
      const label = frame.querySelector("figcaption")?.textContent.trim() || image.alt;
      if (preview) {
        preview.src = image.currentSrc || image.src;
        preview.alt = image.alt;
      }
      if (caption) caption.textContent = label;
      lightbox.hidden = false;
      document.body.classList.add("lightbox-open");
      closeButton?.focus({ preventScroll: true });
    };

    root?.addEventListener("click", (event) => {
      const frame = event.target.closest(".equipment-photo-frame");
      if (!frame) return;
      openLightbox(frame);
    });

    root?.addEventListener("keydown", (event) => {
      const frame = event.target.closest(".equipment-photo-frame");
      if (!frame || (event.key !== "Enter" && event.key !== " ")) return;
      event.preventDefault();
      openLightbox(frame);
    });

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });

    closeButton?.addEventListener("click", closeLightbox);

    document.addEventListener("keydown", (event) => {
      if (lightbox.hidden) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      }
      if (event.key === "Tab") {
        event.preventDefault();
        closeButton?.focus({ preventScroll: true });
      }
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
            </div>
            ${renderConnectionDiagrams()}
          </section>

          <section class="section" id="ports">
            <div class="section-head">
              <div>
                <p class="label">03 / Per-device logical port layout</p>
                <h2>Each device in isolation</h2>
              </div>
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
    setupPhotoLightbox();
    setupFilters();
  }

  renderApp();
})();
