---
id: roles-matrix
title: Role-Based Access Control (RBAC) & Permissions Matrix
sidebar_label: Roles & Permissions Matrix
sidebar_position: 2
---

# Role-Based Access Control (RBAC) & Permissions Matrix

Quiczy POS implements an enterprise Role-Based Access Control model featuring 6 predefined system roles and 17 granular operational permissions extracted directly from the application security architecture.

---

## 👥 System Roles Overview

1. <span className="badge-role">SUPER_ADMIN</span>: System engineer & master platform account. Full access across all tenants.
2. <span className="badge-role">OWNER</span>: Primary business owner. Full control over all stores, subscription licenses, and financial ledgers.
3. <span className="badge-role">ADMIN</span>: General store administrator. Manages business policies, tax rates, inventory, and staff rosters.
4. <span className="badge-role">MANAGER</span>: Floor and shift supervisor. Can view reports, adjust prices/stock, manage discounts, and approve refunds.
5. <span className="badge-role">CASHIER</span>: Front desk register operator. Can ring up orders, collect tenders, open cash drawer, and apply standard discounts.
6. <span className="badge-role">STAFF</span>: Waitstaff and kitchen runners. Restricted to table seating, order taking, and viewing assigned tasks.

---

## 📊 Complete 17-Permission Matrix

| Permission Name | In-App Purpose | SUPER_ADMIN | OWNER | ADMIN | MANAGER | CASHIER | STAFF |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| `canViewReports` | View sales KPIs, analytics, and X/Z reports | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| `canExportData` | Export CSV/PDF reports and customer databases | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| `canManageProducts` | Create, edit, or archive items in catalog | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| `canEditProductPrice` | Modify unit prices or sticker costs on the fly | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| `canAdjustStockLevels` | Record inventory write-offs, waste, and stock-in | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| `canManageUsers` | Provision staff profiles, roles, and PIN resets | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| `canApplyDiscount` | Apply promotional discounts or coupons to carts | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| `canManageDiscounts` | Create new promotional discount schemes | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| `canRefund` | Process customer item returns and cash refunds | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| `canVoidTransactions` | Cancel items or void completed bills | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| `canOpenCashDrawer` | Manual drawer pulse & access during cash tenders | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| `canEditTax` | Create and modify tax rates (CGST/SGST/VAT) | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| `canManageHardware` | Add/configure printers, barcode scanners, displays| ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| `canChangeStorePolicies`| Modify store business hours, floor plans, settings | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| `canManageCategories` | Add, reorder, or delete product categories | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| `canManageCombos` | Create and price multi-item combo meals | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| `canCheckout` | Access billing workspace and settle orders | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |

---

## 🎨 Custom Role Creation

Store Owners can create bespoke custom roles (e.g. *Head Bartender*, *Inventory Auditor*) with custom permission subsets under **Settings** → **Users & Permissions** → **Manage Roles**.
