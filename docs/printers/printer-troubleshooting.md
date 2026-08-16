---
id: printer-troubleshooting
title: Printer Troubleshooting & Diagnostic Guide
sidebar_label: Printer Troubleshooting
sidebar_position: 4
---

# Printer Troubleshooting & Diagnostic Guide

This guide resolves common thermal printer connection errors, paper jams, garbled text outputs, and network communication issues.

---

## 🛠️ Common Thermal Printer Issues & Solutions

### 1. Printer Status Shows "Offline" or "Cannot Connect"
- **For Network / LAN Printers**:
  1. Check if the printer's link LED (green/orange) on the Ethernet port is lit.
  2. Verify that the Android POS terminal and the printer are on the **exact same subnet** (e.g. both on `192.168.1.xxx`).
  3. Turn off the printer, hold the **FEED** button, and turn it on to print the printer's self-test IP configuration slip.
  4. Ensure the IP address matches the IP configured in Quiczy Printer Settings.
- **For Bluetooth Printers**:
  1. Ensure the printer is within 10 meters (30 feet) of the tablet.
  2. Unpair and re-pair the Bluetooth device in Android Settings.

---

### 2. Paper Feeds Blank (No Text Visible)
- **Cause**: Thermal paper roll is inserted upside down.
- **Fix**: Open the printer lid, flip the paper roll over so the heat-sensitive shiny side faces the thermal print head, and close the cover firmly.

---

### 3. Garbled / Strange Characters Output
- **Cause**: Baud rate mismatch or incorrect character code page.
- **Fix**: In **Printer Settings**, ensure the code page is set to `WPC1252` or `PC437` and baud rate matches your serial/USB interface (standard is `9600` or `115200`).

---

### 4. Cash Drawer Does Not Kick Open
- **Cause**: RJ11 drawer cable loose or plugged into wrong port.
- **Fix**:
  1. Ensure the RJ11 cable is plugged into the printer's drawer kick port, not a telephone socket.
  2. Verify the 24V drawer solenoid matches the printer's kick voltage.
  3. Test drawer manually via Dashboard → **Pulse Drawer**.
