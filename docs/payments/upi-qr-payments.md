---
id: upi-qr-payments
title: Dynamic UPI QR Payments & Instant Verification
sidebar_label: UPI QR Payments
sidebar_position: 2
---

# Dynamic UPI QR Payments & Instant Verification

Quiczy POS incorporates native **Dynamic UPI QR Code Generation**, generating real-time, amount-locked QR codes that eliminate manual entry errors by patrons.

---

## 📲 How Dynamic UPI Works

```mermaid
sequenceDiagram
    participant POS as Quiczy POS
    participant Screen as Customer Display
    participant Customer as Customer Phone (GPay / PhonePe)
    participant Bank as UPI Payment Network

    POS->>POS: Calculate Cart Total (e.g. $21.29)
    POS->>POS: Generate Dynamic UPI URI (vpa + amt + tr + tn)
    POS->>Screen: Display High-Res Dynamic QR Code
    Customer->>Screen: Scans QR with Banking/UPI App
    Customer->>Bank: Approves Payment (Exact amount pre-filled)
    Bank-->>POS: Payment Confirmation (Soundbox / Instant verification)
    POS->>POS: Complete Sale & Kick Drawer / Print Invoice
```

---

## 🛠️ Configuring Store UPI VPA

1. Navigate to **Settings** → **Payment Settings**.
2. Tap **UPI Configuration**.
3. **Enter Details**:
   - **Merchant VPA / UPI ID**: (e.g., `acmestore@okhdfcbank` or `billing.cafe@icici`).
   - **Payee Name**: (e.g., `Acme Retail POS`).
   - **Merchant Category Code (MCC)**: (Optional standard business code).
4. Tap **Save & Test UPI QR**.
5. The terminal renders a test QR code for validation with small test amounts ($1.00).
