---
id: shift-cash-status
title: Real-Time Shift & Till Management
sidebar_label: Shift & Till Status
sidebar_position: 3
---

# Real-Time Shift & Till Management

Quiczy POS enforces continuous ledger auditing throughout every business shift. The **Current Shift & Till** section of the dashboard reflects real-time financial balances as orders are rung up, payments are settled, and refunds are disbursed.

---

## 🧮 How Cash in Till is Calculated

```text
Cash in Till = Starting Float + Cash Sales + Cash Additions - Cash Refunds - Cash Drops
```

| Field | Source | Description |
| :--- | :--- | :--- |
| **Gross Sales** | Completed Carts | Total face value of items sold in this shift before discounts and tax subtotals. |
| **Net Revenue** | Completed Invoices | Total collected revenue including taxes, minus applied discounts. |
| **Cash In Till** | Active Ledger | The exact amount of physical cash that should be in the register till right now. |
| **Expected Float** | Day Opening Record | The baseline starting cash float entered during Day Open. |
| **Refunds** | Refund Operations | Total value and count of returned or voided items processed during this shift. |

---

## 🕒 Multiple Shifts Per Day

A store can run multiple consecutive shifts in a single business day:
1. **Morning Shift**: Opened by Cashier A with starting float. Closed at 2:00 PM with an X/Z summary.
2. **Evening Shift**: Opened by Cashier B. The starting float can carry over from Cashier A's closing balance or be adjusted with a new float entry.

---

## 🔐 Role Access
- Viewing shift till metrics requires: `canViewReports` or `canOpenCashDrawer`.
