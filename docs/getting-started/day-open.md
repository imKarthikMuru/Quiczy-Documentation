---
id: day-open
title: Day Opening & Starting Cash Float
sidebar_label: Day Open & Float
sidebar_position: 10
---

# Day Opening & Starting Cash Float

Before ringing up the first sale of the day, Quiczy POS requires an opening cashier or shift manager to record the **Day Opening Entry**. This establishes strict financial accountability for physical cash in the drawer.

---

## 📸 Screen Overview

![Day Opening Screen](/screenshots/getting-started/day-open.png)

_Figure 1: Day Opening Reception screen with expected float, previous shift summary, and float numpad._

---

## 📊 Opening Reception Data Breakdown

The Day Opening screen presents a clear summary of historical and opening financial data:

### 1. Expected Starting Float
- Displays the system-calculated starting cash amount (e.g., `$1,000.00`).
- **Calculation**: Exactly matches the recorded closing cash balance from the previous shift/day close.

### 2. Previous Shift Summary
- **Total Orders**: Number of completed sales in the preceding shift (e.g., `12`).
- **Average Ticket**: Mean transaction value (e.g., `$463.60`).
- **Variance**: Any cash over/short variance recorded on last close (e.g., `$0.00`).
- **Last Closed At**: Timestamp of the previous session closure (e.g., `Aug 16, 2026 at 08:19 PM`).
- **Closed By**: Staff member who sealed the previous shift (e.g., `Ajith`).

---

## 🔢 Step-by-Step Day Opening Procedure

1. **Count Physical Cash**: Count all bills and coins physically present in the cash drawer till.
2. **Enter Starting Cash Float**:
   - Use the touch-screen numeric keypad on the right to enter the exact physical cash amount.
   - If starting with zero cash float, enter `0.00`.
3. **Add Opening Notes (Optional)**:
   - Tap the **Opening Notes** text field to note special instructions, pet cash adjustments, or till bag numbers.
4. **Confirm Opening**:
   - Verify that your entered physical count matches the expected float.
   - Tap the **Confirm & Open Day** button.
5. **Completion**:
   - The register creates a new **PosSession** entity in the database.
   - The cash drawer kicks open (if connected) to receive the starting float.
   - The app navigates directly to the [Main Dashboard](../dashboard/dashboard-overview.md).

---

## 🔐 Required Permissions
- Permission: `canOpenCashDrawer` or `canManageUsers`
- Roles: <span className="badge-role">OWNER</span> <span className="badge-role">ADMIN</span> <span className="badge-role">MANAGER</span> <span className="badge-role">CASHIER</span>
