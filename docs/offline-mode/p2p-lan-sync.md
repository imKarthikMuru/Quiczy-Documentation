---
id: p2p-lan-sync
title: Multi-Terminal Peer-to-Peer (P2P) LAN Synchronization
sidebar_label: P2P LAN Sync
sidebar_position: 3
---

# Multi-Terminal Peer-to-Peer (P2P) LAN Synchronization

Restaurants and stores with multiple cashier counters, waiter tablets, and kitchen display screens need instantaneous, sub-second order sharing—even when the store's broadband internet cable is completely severed.

---

## ⚡ How Local P2P LAN Sync Works

```mermaid
graph TD
    subgraph Local Store Wi-Fi Router (No Internet Required)
        A[Master POS Terminal - Register #1] <-->|Encrypted LAN Socket| B[Waiter Tablet A]
        A <-->|Encrypted LAN Socket| C[Waiter Tablet B]
        A <-->|Encrypted LAN Socket| D[Kitchen KDS Display]
        A <-->|Encrypted LAN Socket| E[Bar KDS Display]
    end
```

1. **Automatic Device Discovery (mDNS / NSD)**: All Quiczy POS devices on the same local Wi-Fi router discover each other automatically using Android Network Service Discovery.
2. **Master-Node Topology**: The primary billing register acts as the local LAN coordination server (`P2pMaster`).
3. **Sub-Second Ticket Transmission**: When a server taps "Send to Kitchen" on a waiter tablet, the ticket transmits directly across the local LAN to the kitchen KDS screen in less than 50 milliseconds.
4. **Table Lock Prevention**: Real-time table lock packets prevent two servers from modifying the same dining table simultaneously.

---

## 🛠️ Configuring P2P LAN Sync

1. Go to **Settings** → **App Settings** → **P2P Multi-Terminal Sync**.
2. **On the Main Register**:
   - Toggle **Enable P2P Service** to ON.
   - Select **Role: Master Server**.
   - Note the assigned local IP (e.g., `192.168.1.100:8888`).
3. **On Waiter Tablets & KDS Screens**:
   - Toggle **Enable P2P Service** to ON.
   - Select **Role: Client Node** and tap **Auto-Connect to Master**.
4. The status pill indicates **"P2P Connected (X Nodes Active)"**.
