---
id: quick-actions
title: Dashboard Quick Actions & Shortcuts
sidebar_label: Quick Actions
sidebar_position: 2
---

# Dashboard Quick Actions & Shortcuts

Located in the bottom-left deck of the Dashboard, **Quick Actions** allow operators to execute critical shift, register, and hardware operations without navigating deep into settings menus.

---

## ⚡ Available Quick Actions

### 1. 📄 X-Report (Mid-Shift Audit)
- **Description**: Prints or previews an intermediate financial reading of the current active shift without closing or resetting totals.
- **Data Included**:
  - Starting Float
  - Total Cash, Card, and UPI payments received
  - Total Discounts and Refunds applied
  - Current Expected Drawer Balance
- **Permissions**: `canViewReports`

---

### 2. 🔒 Close Shift (End-of-Shift Reconcile)
- **Description**: Concludes the active cashier's shift and opens the **Day/Shift Close** balancing screen.
- **Workflow**:
  1. Cashier enters closing physical cash count.
  2. The system compares physical count against expected cash and logs variances.
  3. Generates the final **Z-Report**.
  4. Returns the terminal to the [Staff Selection](../getting-started/staff-selection.md) screen for the next operator.
- **Permissions**: `canOpenCashDrawer` or `canManageUsers`

---

### 3. 🖨️ Test Print
- **Description**: Sends a formatted diagnostic test print ticket to the configured default receipt printer.
- **Diagnostics Verified**:
  - ESC/POS command interpretation
  - Thermal head density and alignment
  - Paper cut command execution
  - Baud rate / socket latency
- **Permissions**: `canManageHardware`

---

### 4. 💵 Pulse Drawer (Manual Kick)
- **Description**: Sends a 24V electrical pulse to the RJ11/RJ12 drawer connector through the receipt printer to pop open the cash drawer.
- **Security Audit**: Every manual drawer pulse is logged with timestamp, staff ID, and register ID in the [Global Audit Log](../settings/business-settings.md) to prevent unrecorded drawer openings.
- **Permissions**: `canOpenCashDrawer`
