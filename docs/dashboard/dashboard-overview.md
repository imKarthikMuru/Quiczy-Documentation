---
id: dashboard-overview
title: Quiczy POS Main Dashboard Overview
sidebar_label: Dashboard Overview
sidebar_position: 1
---

# Quiczy POS Main Dashboard Overview

The **Quiczy POS Main Dashboard** is the command center for your store operations. It provides real-time visibility into sales metrics, active cashier shifts, cash drawer floats, connected hardware peripherals, cloud sync status, and one-tap quick actions.

---

## 📸 Screen Overview

![Quiczy POS Main Dashboard](/screenshots/dashboard/dashboard-overview.png)

_Figure 1: Quiczy POS Main Command Center Dashboard._

---

## 🧭 Dashboard Navigation Anatomy

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [Quiczy POS]   [Select Store: Front Counter • ONLINE]               [Aug 16, 2026 20:18]│
├──────────────┬─────────────────────────────────────────────────────────────────────────┤
│ 🏠 Home      │  📈 TODAY'S PERFORMANCE                                                 │
│ 🛒 Billing   │  ├── Total Revenue: $0.00                                               │
│ 📋 Orders    │  ├── Orders Received: 0                                                 │
│ 📦 Inventory │  └── Avg Order Value: $0.00                                             │
│ 📊 Reports   │                                                                         │
│ ⏱️ Shifts    │  💼 CURRENT SHIFT & TILL (Ajith • Shift #01)                            │
│ ⚙️ Settings  │  ├── Gross Sales: $0.00       Net Revenue: $0.00                        │
│ ──────────── │  ├── Cash in Till: $0.00      Expected Float: $0.00                     │
│ 👑 Admin     │  └── Refunds: $0.00 (0 refunds)                                         │
│ 🌐 Global    │                                                                         │
│ 💻 Terminals │  ⚡ QUICK ACTIONS            🔌 HARDWARE & SYNC (4 Monitored)           │
│              │  ├── [X-Report]              ├── Terminal: Connected (Online)           │
│              │  ├── [Close Shift]           ├── Printer: Standby (Online)              │
│              │  ├── [Test Print]            ├── Drawer: Armed (Online)                 │
│              │  └── [Pulse Drawer]          └── Cloud Sync: Synced (Online)            │
└──────────────┴─────────────────────────────────────────────────────────────────────────┘
```

---

## 📊 1. Performance KPIs

- **Total Revenue**: Live gross revenue generated today across all registers in this store.
- **Orders Received**: Cumulative number of completed bills and takeaway tickets today.
- **Avg Order Value (AOV)**: Average ticket size per paying customer.

---

## 💼 2. Live Shift & Till Status

- **Shift Header**: Displays the logged-in operator and shift sequence (e.g. `Ajith • Shift #01`).
- **Gross Sales & Net Revenue**: Item sales before and after applied taxes, discounts, and fee adjustments.
- **Cash in Till**: The real-time cash balance expected in the physical till (Starting Float + Cash Inflow - Cash Refunds).
- **Expected Float**: Starting float recorded during Day Open.
- **Refunds**: Total value and count of refunds issued during this shift.

---

## 🔌 3. Hardware & Peripheral Monitor

Quiczy POS continuously monitors connected devices:
1. **Terminal Register**: Online connectivity status with local IP indicator.
2. **Receipt Printer**: ESC/POS thermal printer connection (Standby / Printing / Offline).
3. **Cash Drawer**: Trigger state (Armed / Open / Error).
4. **Cloud Sync Engine**: Database synchronization state (`Synced` / `Syncing...` / `Pending`).

---

## 🔔 Terminal Restored / Restart Notice

When database backups or cloud catalogs are pulled from another device, Quiczy POS presents a prompt:

> **Terminal Restored**: *"Product catalog and orders have been successfully synchronized. To guarantee all background services and database connection pools are cleanly loaded under the restored state, we highly recommend restarting the app now."*
> - **LATER**: Continue operating without restart.
> - **RESTART NOW**: Gracefully reloads Hilt dependency singletons and SQLite connection pools.
