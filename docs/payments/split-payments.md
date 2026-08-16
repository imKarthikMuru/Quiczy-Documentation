---
id: split-payments
title: Split-Tender Payments & Multi-Card Checkout
sidebar_label: Split Payments
sidebar_position: 3
---

# Split-Tender Payments & Multi-Card Checkout

When guests choose to pay a single bill using a combination of payment methods (e.g. part cash, part card, part gift coupon), Quiczy POS provides a seamless **Split-Tender Console**.

---

## 🧮 Step-by-Step Split Settlement

```text
┌────────────────────────────────────────────────────────────┐
│ SPLIT TENDER CONSOLE - TOTAL DUE: $60.00                   │
├────────────────────────────────────────────────────────────┤
│ Tender 1: [💵 Cash       ] Amount: $20.00  [✓ Added]       │
│ Tender 2: [📱 UPI QR     ] Amount: $15.00  [✓ Added]       │
│ ────────────────────────────────────────────────────────── │
│ Total Tendered: $35.00          REMAINING DUE: $25.00      │
│                                                            │
│ Tender 3: [💳 Credit Card] Amount: $25.00                  │
│                                            [ADD TENDER]    │
├────────────────────────────────────────────────────────────┤
│ [CANCEL]                               [FINALIZE SETTLEMENT]│
└────────────────────────────────────────────────────────────┘
```

1. In Checkout, tap **Split Payment**.
2. Type the first tender portion (e.g. `$20.00`) and select the payment type (**Cash**). Tap **Add Tender**.
3. Type the next tender portion (e.g. `$15.00`) and select **UPI QR**. Tap **Add Tender**.
4. The remaining balance automatically displays `$25.00`. Select **Card**.
5. When remaining balance reaches `$0.00`, tap **Finalize Settlement**.
6. The printed invoice clearly itemizes each partial tender and method for customer and tax records.
