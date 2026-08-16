---
id: cart-discounts-taxes
title: Cart Management, Discounts & Tax Calculation
sidebar_label: Cart, Discounts & Taxes
sidebar_position: 5
---

# Cart Management, Discounts & Tax Calculation

Quiczy POS features a high-precision calculation engine designed to handle multi-item carts, quantity adjustments, line-item vs. order-level discounts, composite taxes (CGST/SGST/VAT/Service Tax), and cash rounding.

---

## 🛒 Cart Features & Controls

Within the active cart panel:
- **Quantity Steppers**: Tap `+` or `-` to adjust unit quantities or tap the quantity number to type a custom bulk amount.
- **Swipe to Remove**: Swipe any item tile to the left to delete it from the cart.
- **Price Override**: Tap the item unit price to edit it directly (requires `canEditProductPrice` permission).
- **Hold Cart**: Tap **Hold** to park the entire transaction and open a clean cart for the next waiting customer.

---

## 🏷️ Applying Discounts

Quiczy POS supports two distinct discount tiers:

### 1. Order-Level Discounts (Whole Bill)
- **Percentage Discount**: (e.g. `10% Corporate Discount`, `15% Military Discount`).
- **Fixed Amount Discount**: (e.g. `-$5.00 Voucher`, `-$10.00 Promo Coupon`).
- **How to Apply**:
  1. Tap the **Discount** pill below the cart subtotal.
  2. Select a pre-configured promotional discount or enter a custom amount/percentage.
  3. Enter manager authorization if the discount exceeds cashier threshold limits.

### 2. Item-Level Discounts (Specific Product)
- Tap the specific line item in the cart and select **Line Discount** to discount only that individual product without affecting the rest of the bill.

---

## 📊 Comprehensive Tax Engine

Quiczy POS supports inclusive and exclusive tax configurations:

| Tax Model | Formula | Behavior |
| :--- | :--- | :--- |
| **Tax Exclusive (Standard)** | `Subtotal + (Subtotal × Tax Rate)` | Item prices are displayed net; taxes are added at the bottom of the invoice. |
| **Tax Inclusive (GST/VAT)** | `Base = Price / (1 + Tax Rate)` | Item sticker prices already include tax. The cart automatically breaks down CGST, SGST, or VAT for statutory receipts. |

---

## 🔢 Cash Rounding Methods

In cash retail environments, fractions of cents or low-denomination coins may not be in circulation. Quiczy POS supports automated rounding:
- **Round to Nearest 0.05 / 0.10 / 0.50 / 1.00**
- **Always Round Down / Round Up**
- Configurable in [Tax & Fee Settings](../settings/tax-rules.md).
