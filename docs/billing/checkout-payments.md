---
id: checkout-payments
title: Checkout & Multi-Tender Payment Processing
sidebar_label: Checkout & Payments
sidebar_position: 6
---

# Checkout & Multi-Tender Payment Processing

When an order is ready for settlement, tapping **Pay Now →** opens the **Checkout Console**. Quiczy POS supports a rich suite of payment instruments including Cash, Card, Dynamic UPI QR codes, and Split-Tender payments.

---

## 💳 Supported Payment Methods

```text
┌────────────────────────────────────────────────────────────────────────┐
│ CHECKOUT TOTAL: $48.50                                                  │
├───────────────────┬────────────────────────────────────────────────────┤
│ 💵 Cash           │ Quick Tender: [$48.50 Exact] [$50.00] [$100.00]    │
│ 💳 Card / EDC     │ Tendered: $50.00          Change Due: $1.50        │
│ 📱 UPI Dynamic QR │ [Complete Cash Payment]                            │
│ ⚖️ Split Payment  │                                                    │
└───────────────────┴────────────────────────────────────────────────────┘
```

---

## 💵 1. Cash Payment Workflow

1. Tap **Cash** from the payment method tabs on the left.
2. The screen displays the exact total due along with fast denomination chips (`Exact`, `$50`, `$100`, etc.).
3. If the customer hands a different amount, type the tendered cash using the numpad.
4. The system calculates and displays the **Change Due** in large, clear green text.
5. Tap **Complete Cash Payment**:
   - The cash drawer opens immediately.
   - The thermal receipt printer outputs the final tax invoice.

---

## 📱 2. Dynamic UPI QR Payment Workflow

1. Tap **UPI QR Code**.
2. Quiczy POS dynamically embeds your store's VPA, exact order amount, invoice reference, and store name into a compliant UPI payment payload.
3. The dynamic QR code is rendered in high resolution on:
   - The main POS display.
   - Any connected secondary [Customer-Facing Display](../getting-started/system-requirements.md).
4. The customer scans the QR with any UPI payment app (Google Pay, PhonePe, Paytm, BHIM, Banking Apps).
5. Once the merchant confirms settlement on their soundbox/terminal or bank gateway, tap **Confirm Payment Received**.

---

## 💳 3. Card / EDC Terminal Payment Workflow

1. Tap **Card / EDC**.
2. Hand the external card reader or swipe/tap machine to the customer.
3. Enter the transaction approval code or swipe confirmation.
4. Tap **Authorize & Settle**.

---

## ⚖️ 4. Split-Tender Payments

When a customer or group wants to split a bill across multiple payment instruments (e.g. paying $20 in cash and $28.50 on a credit card):
1. Tap **Split Payment**.
2. Enter the first tender amount and select the method (e.g. `$20.00` → `Cash`).
3. Tap **Add Tender**. The remaining balance ($28.50) is recalculated automatically.
4. Select the second method (e.g. `Card`) for the remainder.
5. Once the balance reaches `$0.00`, tap **Finalize Split Bill**.
