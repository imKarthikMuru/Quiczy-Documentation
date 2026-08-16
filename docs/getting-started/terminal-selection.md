---
id: terminal-selection
title: Terminal & Register Selection
sidebar_label: Terminal Selection
sidebar_position: 8
---

# Terminal & Register Selection

In environments with multiple billing counters, cashier desks, or mobile waiter stations, each physical device is mapped to a designated **Register / Terminal**. This allows individual cash float tracking, separate invoice number sequences, and independent daily shift closures.

---

## 📸 Screen Overview

![Terminal Selection Screen](/screenshots/getting-started/terminal-selection.png)

_Figure 1: Terminal & Register Selection Screen._

---

## ⚙️ Selecting an Existing Register

The screen displays all active registers configured for the currently selected store:
- **Register Cards**: (e.g. `Front Counter • Active`, `Hotel / Bar Counter • Active`).
- **Action**: Tap on any available register to bind this physical tablet to that counter register.

---

## ➕ Adding a New Terminal Register

If you are deploying a new counter or register station:

![Add New Terminal Dialog](/screenshots/getting-started/add-new-terminal-dialog.png)

_Figure 2: In-App Dialog to provision a new Terminal Register._

### Steps to Provision a Terminal:
1. Tap the **+ Add New Terminal** button.
2. In the dialog, type a unique, human-readable **Terminal Name** (e.g. `Takeaway Counter 2`, `Drive-Thru 1`, `Patio Tablet`).
3. Tap **Create & Setup**.
4. Quiczy POS generates a unique terminal UUID, registers it with your cloud account, and selects it as the active register.

---

## 💡 Why Terminal Identification Matters

1. **Independent Cash Drawers**: Cash counts and float reconciliations during [Day Open](day-open.md) and [Day Close](../payments/reconciliation-day-close.md) are strictly isolated per register.
2. **Order Prefixes**: Invoices and KOTs can include the terminal identifier to trace which desk placed the order.
3. **Audit Trails**: Security logs pinpoint transactions down to the exact register device.
