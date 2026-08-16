---
id: system-requirements
title: System Requirements & Supported Hardware
sidebar_label: System Requirements
sidebar_position: 2
---

# System Requirements & Supported Hardware

This guide details the hardware specifications, operating systems, and peripheral hardware supported by Quiczy POS.

---

## 📱 Terminal Hardware Requirements

| Component | Minimum Specification | Recommended Specification |
| :--- | :--- | :--- |
| **Operating System** | Android 8.0 (API Level 26) | Android 11.0 to Android 14.0 |
| **RAM** | 2 GB | 4 GB to 8 GB |
| **Storage** | 16 GB eMMC (At least 2 GB free) | 32 GB / 64 GB UFS Storage |
| **Display Resolution** | 1280 x 800 (10.1-inch tablet) | 1920 x 1200 or 2560 x 1600 (10.1" to 15.6" POS) |
| **Screen Orientation** | Landscape mode recommended | Landscape (Dual screen supported) |
| **Connectivity** | Wi-Fi 802.11 b/g/n, Bluetooth 4.2 | Dual-band Wi-Fi 5 (802.11ac), Gigabit Ethernet, BT 5.0 |

---

## 🖨️ Supported Thermal Printers

Quiczy POS uses the standard industry **ESC/POS protocol** and supports:

1. **Ethernet / LAN Printers**: Recommended for high-reliability kitchen and counter printing (Static IP or DHCP with reservations).
2. **Bluetooth Printers (SPP)**: Supported for mobile waiter tablets and compact receipt printers (e.g. 58mm / 80mm).
3. **USB OTG Printers**: Supported for direct terminal cable connections.
4. **Built-in POS Terminal Printers**: Supported for all-in-one Android POS terminals (Sunmi, iMin, Telpo, POSIFLEX, Dspread).

---

## 💵 Supported Cash Drawers

- Standard RJ11 / RJ12 cash drawers connected directly through the receipt printer's drawer kick port (24V pulse).
- Triggered automatically on cash transaction completion or manually via the **Pulse Drawer** quick action.

---

## 🔍 Barcode Scanners & Input Devices

- **USB HID Scanners**: Plug-and-play USB barcode and 2D QR scanners (emulating standard keystrokes).
- **Bluetooth Scanners**: Handheld wireless scanners paired in HID mode.
- **Built-in Camera Scanner**: Built-in rear/front tablet camera barcode scanner powered by ML Kit.

---

## 🖥️ Secondary Customer Facing Displays

- **Dual-Screen POS Terminals**: Android `Presentation` API secondary screen support.
- **External HDMI / Type-C Secondary Displays**: Live order subtotal, itemized cart rendering, and dynamic UPI QR code presentation.
