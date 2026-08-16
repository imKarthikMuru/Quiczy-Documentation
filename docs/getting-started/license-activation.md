---
id: license-activation
title: License Activation & Device Binding
sidebar_label: License Activation
sidebar_position: 5
---

# License Activation & Device Binding

Quiczy POS uses cryptographic device binding to ensure your POS licenses remain secure and tamper-proof. Each physical device running the application must be activated with a valid subscription license.

---

## 🎯 When Is License Activation Needed?

- Adding a new POS register to an existing store.
- Setting up a waiter tablet or kitchen display unit.
- Re-installing the application or replacing terminal hardware.
- Reactivating a renewed subscription license.

---

## 📲 Activation Methods

Quiczy POS provides two convenient ways to activate a device:

### Method 1: QR Code License Scanning (Fastest)
1. From the [Welcome Screen](welcome.md), tap **Activate Terminal**.
2. Point the device camera at the **License QR Code** provided in your Quiczy Web Admin Portal or invoice email.
3. The app automatically scans, extracts the cryptographic signature, binds the hardware hash, and activates the terminal.

### Method 2: Manual 29-Character License Key
1. Tap **Enter License Key Manually**.
2. Type the formatted license key (e.g., `XXXX-XXXX-XXXX-XXXX-XXXX`).
3. Tap **Validate & Activate**.

---

## 🔒 Cryptographic Device Binding

When activated, Quiczy POS generates a unique hardware signature (`deviceHash`) combining:
- Android Secure ID
- Device Serial / MAC signature
- Terminal brand and hardware fingerprint

This signature is securely verified against the Quiczy licensing server. Once bound, the device downloads the local offline license certificate, allowing full offline POS operations without constant internet validation.

---

## ⚠️ Common Activation Issues

| Issue | Reason | Solution |
| :--- | :--- | :--- |
| **"License Limit Exceeded"** | The maximum active terminals allowed by your subscription plan has been reached. | Deactivate an unused terminal in your Super Admin panel or upgrade your plan in [Subscription Settings](../settings/subscription-plans.md). |
| **"Invalid License Key"** | Typographical error in the license string or expired trial. | Double-check characters or scan the QR code directly. |
| **"Device Clock Mismatch"** | System date/time on the Android tablet is incorrect. | Ensure automatic date and time are enabled in Android System Settings. |
