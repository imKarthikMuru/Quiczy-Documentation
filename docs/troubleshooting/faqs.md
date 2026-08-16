---
id: faqs
title: Frequently Asked Questions (FAQ)
sidebar_label: Frequently Asked Questions
sidebar_position: 2
---

# Frequently Asked Questions (FAQ)

Find quick answers to common questions about operating Quiczy POS.

---

### Q1: Can I ring up sales and print receipts if our store Wi-Fi or internet goes down?
**Yes, 100%.** Quiczy POS is an offline-first architecture. All products, categories, cart pricing engines, thermal printer drivers, and cash drawer kick routines execute completely locally on the Android device. All offline transactions automatically sync to the cloud as soon as internet connectivity returns.

---

### Q2: How do multiple waiter tablets share the same dining floor without internet?
Quiczy POS includes native **Peer-to-Peer (P2P) LAN Sync**. As long as all tablets and the main POS register are connected to the same local Wi-Fi router (even without external internet access), table orders and kitchen tickets synchronize directly over local network sockets.

---

### Q3: What happens if an employee forgets their 4-digit clock-in PIN?
A Store Owner, Admin, or Manager can instantly reset the staff member's PIN by navigating to **Settings** → **Users & Permissions** → **Staff Members** → tap the staff profile → tap **Reset PIN**.

---

### Q4: How do I print an intermediate sales audit without closing the shift?
Tap the **X-Report** quick action button on the Dashboard. This prints or previews the mid-shift totals without resetting daily counters.

---

### Q5: Can I connect both a front receipt printer and a kitchen order printer?
**Yes.** Under **Settings** → **Printer Settings**, you can configure multiple thermal printers and route specific food categories (e.g. burgers to Kitchen, drinks to Bar).

---

### Q6: How do I take a backup of my POS database?
Backups are automatically created daily during [Day Close](../payments/reconciliation-day-close.md). You can also tap **Create Backup Now** under **Settings** → **Backup & Restore** at any time.
