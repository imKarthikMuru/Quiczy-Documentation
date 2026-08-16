---
id: offline-billing
title: Offline-First Billing & Data Resilience
sidebar_label: Offline Billing
sidebar_position: 1
---

# Offline-First Billing & Data Resilience

Quiczy POS is architected from the ground up as a **100% Offline-First POS system**. Unlike web-based or thin-client POS applications that freeze when internet connections drop, Quiczy POS continues ringing up orders without interruption.

---

## 🛡️ What Operates Fully Offline?

| Operation | Offline Capability | Notes |
| :--- | :---: | :--- |
| **Dine-In & Takeaway Billing** | ✅ 100% Functional | All cart math, item selections, and modifiers execute on local SQLite DB. |
| **Kitchen KOT & Receipt Printing** | ✅ 100% Functional | Direct TCP/IP LAN, Bluetooth, or USB communication without internet. |
| **Cash Drawer & Barcode Scanning** | ✅ 100% Functional | Hardware operates locally via USB/Bluetooth. |
| **Fast Staff PIN Switching** | ✅ 100% Functional | PIN verification checks local encrypted credentials. |
| **X/Z Shift Reports & Float Balancing** | ✅ 100% Functional | Shift records are stored locally and synced when internet returns. |
| **Multi-Terminal Order Sharing** | ✅ 100% Functional | Handled locally via [Peer-to-Peer (P2P) LAN Sync](p2p-lan-sync.md). |

---

## 📶 Network Recovery & Auto-Resync

When internet connectivity is restored:
1. The app detects the active network gateway.
2. The background **SyncService** automatically batches all offline transactions, shift logs, and new customers.
3. Records are uploaded to the cloud database with cryptographic timestamps.
4. The dashboard sync indicator turns green: **"Synced"**.
