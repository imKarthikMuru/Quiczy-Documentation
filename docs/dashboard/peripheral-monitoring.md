---
id: peripheral-monitoring
title: Peripheral & Hardware Health Monitoring
sidebar_label: Peripheral Monitoring
sidebar_position: 4
---

# Peripheral & Hardware Health Monitoring

Quiczy POS incorporates active device status polling to ensure cashiers are never caught off-guard by disconnected printers, jam errors, or network outages during peak hours.

---

## 🔍 Monitored Peripherals & States

The **Hardware & Sync** widget on the dashboard displays live indicators for 4 core subsystems:

```text
┌────────────────────────────────────────────────────────────┐
│ 🔌 HARDWARE & SYNC (4 Peripherals Monitored)                │
├────────────────────────────┬───────────────────────────────┤
│ 💻 Terminal: Connected     │ 🖨️ Printer: Standby           │
│   • Status: ONLINE (Local) │   • Status: ONLINE (ESC/POS)  │
├────────────────────────────┼───────────────────────────────┤
│ 💵 Drawer: Armed           │ ☁️ Cloud Sync: Synced         │
│   • Status: ONLINE (RJ11)  │   • Status: ONLINE (Encrypted)│
└────────────────────────────┴───────────────────────────────┘
```

### 1. Terminal (Network & Identity)
- **ONLINE**: Connected to local LAN and internet gateway.
- **OFFLINE**: Local Wi-Fi dropped or no route to gateway. The app automatically enters [Offline Mode](../offline-mode/offline-billing.md).

### 2. Printer (Thermal ESC/POS Link)
- **Standby**: Socket/Bluetooth link active; paper sensor reports ready.
- **Printing**: Currently outputting an active receipt or KOT ticket.
- **Offline / Error**: Printer powered off, out of paper, cover open, or IP unreachable.

### 3. Drawer (Cash Till Sensor)
- **Armed**: Ready to receive kick pulses on tender completion.
- **Open**: Cash drawer physically open (on supported hardware with drawer status micro-switches).

### 4. Cloud Sync Engine
- **Synced**: All local transactions, customers, and shifts are fully synchronized with the cloud database.
- **Syncing (X Pending)**: Inbound or outbound background synchronization in progress.
- **Conflict**: A sync conflict requires resolution in the [Sync Conflict Dialog](../offline-mode/synchronization.md).
