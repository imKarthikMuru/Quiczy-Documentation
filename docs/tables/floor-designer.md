---
id: floor-designer
title: Visual Floor Plan Designer
sidebar_label: Floor Designer
sidebar_position: 3
---

# Visual Floor Plan Designer

The **Visual Floor Plan Designer** allows restaurant managers to customize dining areas, add dining sections, arrange tables, and configure chair layouts using an intuitive drag-and-drop 2D canvas.

---

## 🛠️ Accessing Floor Designer

- Navigate to **Settings** → **Floor Plan Designer** or tap the **⚙️ Edit Layout** button on the top-right of the Dine-In Floor Plan.
- **Required Permission**: `canChangeStorePolicies` or `canManageHardware` (<span className="badge-role">OWNER</span> <span className="badge-role">ADMIN</span> <span className="badge-role">MANAGER</span>).

---

## 📐 Designer Tools & Capabilities

### 1. Table Shapes & Types
- **Square Tables**: (2-Seater, 4-Seater)
- **Round Tables**: (4-Seater, 6-Seater, 8-Seater)
- **Rectangular Tables**: (6-Seater, 8-Seater, 10-Seater Banquet Tables)
- **Bar Stools & Counter Seats**: (Single seating nodes)

### 2. Section & Floor Management
- **Add Dining Section**: Create sections such as *Ground Floor*, *Balcony*, *Garden*, *VIP Lounge*.
- **Set Dimensions**: Define the grid size and spacing boundaries.

### 3. Drag, Rotate & Snap-to-Grid
- Tap and drag any table to reposition it on the dining floor.
- Use the rotation handle to angle tables in 45° increments.
- Snap-to-grid ensures neat, professional alignment of table rows.

### 4. Table Numbering & Capacity
- Tap any table to edit its display identifier (e.g. `T-01`, `BAR-3`, `VIP-A`) and seat capacity count.

---

## 💾 Saving & Synchronizing Layouts

Once changes are finalized, tap **Save Layout**. The new floor plan immediately synchronizes across all POS registers, waiter tablets, and host consoles via [P2P LAN sync](../offline-mode/p2p-lan-sync.md).
