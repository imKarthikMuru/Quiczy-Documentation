---
id: stock-management
title: Real-Time Stock Management & Low-Stock Alerts
sidebar_label: Stock Management
sidebar_position: 5
---

# Real-Time Stock Management & Low-Stock Alerts

Quiczy POS tracks on-hand inventory levels in real-time, decrementing stock automatically on completed sales and adjusting stock on returns, wastage, and manual audits.

---

## 📦 Stock Adjustments & Physical Audits

1. Navigate to **Inventory** → **Store Inventory**.
2. Search for the product or scan its barcode.
3. Tap **Adjust Stock**.
4. **Select Operation Type**:
   - **Stock In / Received**: Add newly received shipments from suppliers.
   - **Damage / Wastage**: Write off expired, spoiled, or dropped items with an audit reason.
   - **Physical Count Audit**: Set the absolute counted quantity following a periodic store audit.
5. Tap **Confirm Adjustment**.

---

## 🚨 Low-Stock & Out-of-Stock Warnings

- **Low-Stock Alert**: When on-hand quantities drop below the product's defined warning threshold, the product card displays an orange badge.
- **Out-of-Stock Restriction**: If stock reaches zero, the product tile turns red and displays **"Sold Out"**, preventing cashiers from ringing up unavailable goods.

---

## 🔐 Required Permissions
- `canAdjustStockLevels` (<span className="badge-role">OWNER</span> <span className="badge-role">ADMIN</span> <span className="badge-role">MANAGER</span>)
