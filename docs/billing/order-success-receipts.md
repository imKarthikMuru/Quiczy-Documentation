---
id: order-success-receipts
title: Order Success, Receipts & Digital Delivery
sidebar_label: Receipts & Order Success
sidebar_position: 7
---

# Order Success, Receipts & Digital Delivery

Upon successfully settling a payment, Quiczy POS transitions to the **Order Success Screen**, outputs physical thermal receipts, and provides digital invoice sharing options.

---

## 🧾 Physical Thermal Receipt Layout

Quiczy POS formats standard 58mm and 80mm ESC/POS thermal receipts with professional typography:

```text
========================================
             ACME BISTRO
         OM Sakthi Nagar, Main Rd
           GSTIN: 33AAAAA0000A1Z5
             Tel: +91 98765 43210
========================================
Invoice: #INV-2026-0816-042
Date: 16-Aug-2026 08:24 PM   Table: T-04
Cashier: Ajith               Server: Sarah
========================================
Item                 Qty   Price  Amount
----------------------------------------
Classic Cheeseburger   1   11.00   11.00
  + Extra Bacon                     1.50
Mango Iced Tea         2    4.50    9.00
----------------------------------------
Subtotal:                         $21.50
Discount (10% VIP):               -$2.15
CGST (2.5%):                       $0.48
SGST (2.5%):                       $0.48
----------------------------------------
NET TOTAL:                        $20.31
Tender: CASH ($50.00)  Change:   $29.69
========================================
        Thank You For Visiting!
      Powered by Quiczy POS Engine
========================================
```

---

## 📲 Post-Payment Actions

On the Order Success screen, operators can perform the following actions:

1. **Reprint Receipt**: Prints an exact duplicate receipt marked with `[DUPLICATE COPY]`.
2. **Share via WhatsApp**: Prompts for customer phone number to send a digital PDF receipt directly to WhatsApp.
3. **Email Receipt**: Sends an itemized HTML/PDF receipt to the customer's email.
4. **New Order**: Clears the workspace and returns instantly to the billing register for the next patron.

---

## 🔐 Required Permissions
- Reprinting past invoices: `canViewReports` or `canCheckout`
