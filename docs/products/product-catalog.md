---
id: product-catalog
title: Product Catalog & Item Creation
sidebar_label: Product Catalog
sidebar_position: 1
---

# Product Catalog & Item Creation

The **Product Catalog** in Quiczy POS manages items, retail barcodes, SKUs, sales prices, cost prices, tax classifications, and kitchen station routing.

---

## ➕ Creating a New Product

1. Navigate to **Inventory** → **Products** and tap **+ Add Product**.
2. **Basic Information**:
   - **Product Name**: (e.g., `Classic Cheeseburger`).
   - **SKU / Item Code**: Unique inventory code (e.g., `BUR-001`).
   - **Barcode / UPC**: Scan a physical retail barcode or generate one.
   - **Primary Category**: Assign to a category (e.g., `Burgers`).
3. **Pricing & Taxes**:
   - **Retail Sales Price**: Base selling price (e.g., `$11.00`).
   - **Cost Price**: Unit cost for gross margin calculation (e.g., `$4.20`).
   - **Tax Class**: Assign tax rate (e.g., `GST 5%`, `VAT 12%`, `Tax Exempt`).
4. **Kitchen Routing**:
   - Assign the default kitchen station (`Main Kitchen`, `Bar`, `Grill`, `Bakery`).
5. **Inventory Tracking**:
   - Toggle **Track Stock** ON if real-time deduction is required.
   - Enter **Opening Quantity** and **Low Stock Warning Threshold**.
6. Tap **Save Product**.

---

## 🔐 Required Permissions
- Creating/Editing Products: `canManageProducts`
- Editing Prices: `canEditProductPrice`
- Stock Adjustments: `canAdjustStockLevels`
