---
id: reconciliation-day-close
title: End-of-Day Reconciliation & Shift Close (Z-Report)
sidebar_label: Day Close & Z-Report
sidebar_position: 4
---

# End-of-Day Reconciliation & Shift Close (Z-Report)

At the conclusion of the business day or cashier shift, the **Day Close** procedure balances physical cash drawers against system transactions and prints the definitive **Z-Report**.

---

## 🔒 Day Close Workflow

1. From the dashboard, tap **Close Shift** (or open **Shift Management** → **Day Close**).
2. **Denomination Cash Count**:
   - The cashier counts the physical currency in the cash drawer.
   - Enter counts for individual denominations ($100, $50, $20, $10, $5, $1, coins) or type the total physical cash counted.
3. **Variance Inspection**:
   - The system displays:
     - **Expected Cash**: Calculated by system.
     - **Counted Cash**: Entered by cashier.
     - **Variance**: Over / Short difference.
4. **Enter Closing Notes (Optional)**:
   - Provide explanations for any recorded cash variances or drawer drops.
5. **Confirm Day Close**:
   - Tap **Confirm & Close Day**.
   - The active shift session seals and locks against further modifications.
   - The thermal printer outputs the **Z-Report**.
   - Active totals reset for the next business day's [Day Open](../getting-started/day-open.md).

---

## 📄 Z-Report Financial Contents

The printed Z-Report contains non-resettable cumulative totals:
- Shift Start Time & End Time
- Register ID & Cashier Name
- Opening Cash Float
- Total Sales by Category
- Total Sales by Tender (Cash, Card, UPI, Vouchers)
- Total Tax Collected (CGST, SGST, VAT)
- Total Discounts & Refunds Given
- Cash Dropped to Safe & Cash Carried Over to Next Shift
- Over / Short Variance
