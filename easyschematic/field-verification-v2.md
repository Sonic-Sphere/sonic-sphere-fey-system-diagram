# Sonic Sphere Fey EasySchematic Field Verification

Use this checklist after importing `sonic-sphere-fey-system-v2.easyschematic.json`.

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
