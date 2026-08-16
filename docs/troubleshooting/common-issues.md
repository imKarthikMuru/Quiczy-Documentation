---
id: common-issues
title: Troubleshooting Common Operational Issues
sidebar_label: Common Issues
sidebar_position: 1
---

# Troubleshooting Common Operational Issues

This diagnostic guide resolves common operational questions encountered by store managers and cashiers in POS environments.

---

## 🛠️ Diagnostics & Solutions

### 1. Inactivity Screen Keeps Locking Too Quickly
- **Cause**: The auto-lock timeout is set to 1 minute.
- **Fix**: Go to **Settings** → **App Settings** → **Auto-Lock Screen Inactivity** and increase the interval to 5 or 15 minutes.

---

### 2. Table Shows "Cooking" but Kitchen Claims No Ticket Printed
- **Cause**: Kitchen printer paper ran out or LAN cable unplugged.
- **Fix**:
  1. Open the [Kitchen Display Screen (KDS)](../kitchen/kds-overview.md) to view the live digital ticket.
  2. In Table Details, tap **Reprint KOT** to re-route the print job to an alternate printer.

---

### 3. "Permission Denied" When Cashier Attempts Void or Refund
- **Cause**: Cashier role lacks `canVoidTransactions` or `canRefund` permissions.
- **Fix**: Have the shift manager enter their PIN on the [Manager Approval Dialog](../staff-permissions/manager-approval.md) or update the cashier role permissions in **Settings** → **Users & Permissions**.

---

### 4. Barcode Scanner Does Not Read Product Barcodes
- **Cause**: Scanner not sending `ENTER` suffix or USB permission missing.
- **Fix**:
  1. Scan the "Add Enter / CR Suffix" barcode from your scanner's manual.
  2. Verify the product barcode number is entered correctly in the [Product Catalog](../products/product-catalog.md).
