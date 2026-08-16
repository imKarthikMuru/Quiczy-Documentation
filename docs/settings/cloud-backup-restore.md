---
id: cloud-backup-restore
title: Cloud Backup & Terminal Disaster Recovery
sidebar_label: Backup & Restore
sidebar_position: 4
---

# Cloud Backup & Terminal Disaster Recovery

Quiczy POS incorporates automated encrypted snapshots to guarantee that zero business data is lost even in the event of hardware damage, tablet theft, or hardware upgrades.

---

## 💾 Automated Cloud Backups

- **Trigger Schedule**: Automated encrypted backups are generated daily during [Day Close](../payments/reconciliation-day-close.md) and uploaded to secure cloud storage.
- **Manual Backup**: Managers can tap **Create Backup Now** under **Settings** → **Backup & Restore** at any time.

---

## 🔄 Disaster Recovery & Terminal Migration

To restore all products, historical sales, customers, and configuration onto a replacement tablet:

1. Install Quiczy POS on the new Android tablet.
2. Sign in using your master administrator account.
3. If an existing database backup is detected on the cloud, the app displays **Restore Backup**.
4. Tap **Restore From Cloud Snapshot**.
5. Once downloaded and validated:
   - Database tables are restored.
   - The app gracefully restarts to reload SQLite connection pools.
   - All store operations resume seamlessly.
