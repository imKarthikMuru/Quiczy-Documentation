---
id: refunds-cancellations
title: Refunds, Voids & Order Cancellations
sidebar_label: Refunds & Voids
sidebar_position: 3
---

# Refunds, Voids & Order Cancellations

Quiczy POS enforces strict transactional integrity, permission auditing, and inventory tracking for all refund, exchange, and cancellation operations.

---

## 🔁 1. Full vs. Partial Refunds

When a customer requests a return or refund for a completed purchase:

1. Navigate to **Order History** and locate the original transaction.
2. Tap **Issue Refund**.
3. **Select Refund Type**:
   - **Full Refund**: Refunds all items, service charges, and associated taxes.
   - **Partial Refund**: Check specific line items or adjust refunded quantities (e.g. refunding 1 damaged cold beverage out of 4 items).
4. **Restock Inventory Toggle**:
   - Toggle **Restock to Inventory** ON if the returned item is undamaged and suitable for resale.
   - Leave OFF if the product was spoiled, consumed, or discarded.
5. **Select Refund Tender**:
   - Original Payment Method (Cash, Card, Store Credit).
6. **Capture Reason**:
   - Select from standard reasons (`Customer Dissatisfaction`, `Defective Item`, `Wrong Order Ring-Up`, `Order Cancelled`) or type custom notes.
7. Tap **Process Refund**.

---

## 🚫 2. Order Voids & Pre-Settlement Cancellations

- **Pre-KOT Void**: If items have not yet been fired to the kitchen, lines can be deleted with a single swipe without audit impact.
- **Post-KOT Cancellation**: If food has already been sent to the kitchen, voiding an item automatically prints a **CANCELLATION KOT** ticket to the kitchen station to halt cooking and minimize waste.

---

## 🔐 Required Permissions & Manager Override

| Operation | Permission Required | Roles Allowed |
| :--- | :--- | :--- |
| **Issue Refund** | `canRefund` | <span className="badge-role">OWNER</span> <span className="badge-role">ADMIN</span> <span className="badge-role">MANAGER</span> <span className="badge-role">CASHIER</span> |
| **Void Active Transaction** | `canVoidTransactions` | <span className="badge-role">OWNER</span> <span className="badge-role">ADMIN</span> |
| **Manager Approval Overlay** | N/A | If a cashier lacks `canVoidTransactions`, the app displays a manager PIN prompt to authorize the action. |
