---
id: printer-setup
title: Thermal Printer Setup & Hardware Pairing
sidebar_label: Printer Setup
sidebar_position: 1
---

# Thermal Printer Setup & Hardware Pairing

Quiczy POS interfaces with ESC/POS standard thermal receipt printers via **Network LAN (Ethernet/Wi-Fi)**, **Bluetooth (SPP)**, **USB OTG**, and **Integrated POS Printers**.

---

## 🔌 Connection Interfaces

### 1. Network / LAN Ethernet Printers (Recommended)
- **Use Case**: High-traffic cashier counters and kitchen order printers located across the building.
- **Setup Steps**:
  1. Connect an RJ45 Ethernet cable from your network switch/router to the thermal printer.
  2. Ensure the printer has a static IP address or DHCP reservation on your POS subnet (e.g., `192.168.1.200`).
  3. In Quiczy POS, go to **Settings** → **Printer Settings** → **+ Add Printer**.
  4. Select **Network (TCP/IP)**.
  5. Enter the printer IP address and port (default `9100`).
  6. Tap **Test Connection** to print a diagnostic strip.

### 2. Bluetooth Thermal Printers
- **Use Case**: Mobile waiter tablets, table-side ordering, and compact food truck setups.
- **Setup Steps**:
  1. Power on the Bluetooth thermal printer and enable pairing mode.
  2. In Android Settings, pair with the printer (PIN usually `0000` or `1234`).
  3. In Quiczy POS, go to **Printer Settings** → **Add Printer** → **Bluetooth**.
  4. Select the paired device from the list.

### 3. USB Thermal Printers
- **Use Case**: Direct USB cable connection to Android POS terminals.
- **Setup Steps**:
  1. Connect the printer via USB-A or USB OTG adapter.
  2. Grant the Android USB permission prompt when displayed.
  3. Select **USB** in Quiczy Printer Settings.

---

## ⚙️ Paper Width Configuration

- **80mm (3-inch)**: Standard full-size thermal printer (48 or 42 character line width). Recommended for restaurant dining receipts and multi-item KOTs.
- **58mm (2-inch)**: Compact thermal printer (32 character line width). Recommended for mobile counters and takeaway tokens.
