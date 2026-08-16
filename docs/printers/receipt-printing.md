---
id: receipt-printing
title: Receipt Customization & Cash Drawer Triggers
sidebar_label: Receipt Printing
sidebar_position: 2
---

# Receipt Customization & Cash Drawer Triggers

Store managers can tailor the thermal receipt typography, header details, tax disclosures, footer branding, and automated cash drawer triggers.

---

## 🎨 Receipt Header & Footer Configuration

Navigate to **Settings** → **Printer Settings** → **Receipt Customization**:

1. **Header Section**:
   - **Store Logo**: Print monochrome bitmap logo at top of receipt (high-contrast black/white).
   - **Business Legal Name & Trade Name**
   - **Store Address & Branch Location**
   - **Tax ID / GSTIN / VAT Number**
   - **Contact Phone & Website**
2. **Body Section**:
   - Show/Hide Line Item Modifiers
   - Show/Hide Item SKU / HSN Codes
   - Show/Hide Tax Percentage Breakdown per Line
3. **Footer Section**:
   - **Custom Thank-You Message**: (e.g., *Thank you for dining with us! Please review us on Google.*)
   - **Wi-Fi Password & Social Handles**
   - **Return Policy Notice**: (e.g., *Items may be exchanged within 7 days with original receipt.*)
   - **QR Code Link**: Embed a customer feedback survey QR code at the bottom of the receipt.

---

## 💵 Cash Drawer Kick Pulse

- **Auto-Kick on Cash Tender**: When enabled, the receipt printer pulses 24V on pin 2/5 to pop the cash drawer whenever a transaction containing a cash component is finalized.
- **Manual Kick**: Cashiers with `canOpenCashDrawer` permission can trigger the drawer via the **Pulse Drawer** action.
