---
id: synchronization
title: Cloud Data Synchronization & Conflict Resolution
sidebar_label: Cloud Synchronization
sidebar_position: 2
---

# Cloud Data Synchronization & Conflict Resolution

Quiczy POS utilizes an automated, multi-tiered synchronization engine that reconciles catalog updates from head office while securely pushing local store sales up to the cloud.

---

## 📸 Screen Overview

![Syncing Data Dialog](/screenshots/offline-mode/cloud-sync-dialog.png)

_Figure 1: Quiczy POS Real-time End-to-End Encrypted Cloud Synchronization Dialog._

---

## 🔄 Synchronization Phases

When a manual or automated sync triggers, the progress dialog details the active phase:

1. **Pushing Local Updates (`DONE`)**:
   - Compresses and uploads all new local orders, customer profiles, shift opens/closes, and stock adjustments.
2. **Pulling Remote Updates (`IN_PROGRESS`)**:
   - Downloads new products, updated prices, tax rule adjustments, and active promotional discounts pushed by the owner from the web portal.
3. **End-to-End Encrypted Sync**:
   - All network payloads are encrypted via TLS 1.3 to guarantee data privacy.

---

## ⚔️ Handling Data Conflicts

If the same product's price or description was modified simultaneously on two different terminals while offline:
- Quiczy POS prompts the manager with the **Data Conflict Resolution Dialog**.
- Displays **Local Terminal Version** vs. **Cloud / Master Version** with timestamps.
- Manager chooses **Keep Local** or **Accept Server Version** to cleanly resolve the record.
