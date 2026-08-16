---
id: takeaway
title: Takeaway, Counter Sales & Token Dispatch
sidebar_label: Takeaway Workflow
sidebar_position: 3
---

# Takeaway, Counter Sales & Token Dispatch

The **Takeaway & Counter Sales Workflow** is optimized for high-speed retail counters, food trucks, quick-service restaurants (QSR), bakeries, and grab-and-go outlets where speed-of-service is paramount.

---

## ⚡ Takeaway Flow Architecture

```mermaid
graph LR
    A[Counter Tap / Barcode Scan] --> B[Instant Cart Building]
    B --> C[Customer Attachment (Optional)]
    C --> D[One-Tap Cash / UPI Payment]
    D --> E[Auto-Print Receipt + Takeaway Token]
    E --> F[Order Dispatched to Kitchen KDS]
```

---

## 🎫 Automated Takeaway Tokens

Every takeaway transaction is automatically assigned a daily sequential **Token Number** (e.g. `Token #01`, `Token #02`, ..., resetting at each Day Open).

- **Customer Receipt**: Features a large, high-visibility Token Number banner at the top of the thermal ticket.
- **KDS Screen & Kitchen Ticket**: Displays the token number so cooks and expo staff can call out orders or display numbers on customer calling monitors.

---

## 🚀 Step-by-Step Counter Sale Procedure

1. Tap **Billing** → **Takeaway** (or directly select items from the standard counter view).
2. **Scan or Tap Items**:
   - Scan physical barcodes using a connected USB/Bluetooth scanner or camera.
   - Or tap product tiles on the screen.
3. **Attach Customer (Optional)**:
   - Tap **Add Customer** to search by mobile phone number or name for loyalty points.
4. **Apply Discounts (Optional)**:
   - Tap **Discount** to choose from pre-configured promotions (e.g., *Happy Hour 15%*, *Staff Meal*) or enter a manual percentage.
5. **Instant Payment**:
   - Tap **Cash**, **UPI QR**, or **Card**.
   - For cash, tap quick denomination shortcuts (`Exact`, `$10`, `$20`, `$50`, `$100`).
6. **Order Finalization**:
   - Cash drawer kicks open automatically.
   - Receipt and kitchen token print in under 1 second.
   - The screen resets instantly for the next customer in line.

---

## 🔐 Required Permissions
- Checkout operations: `canCheckout`
- Manual line-item discounts: `canApplyDiscount`
- Cash drawer opening on tender: `canOpenCashDrawer`
