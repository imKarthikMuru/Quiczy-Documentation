---
id: staff-management
title: Staff Management & User Creation
sidebar_label: Staff Management
sidebar_position: 1
---

# Staff Management & User Creation

Quiczy POS centralizes employee profiles, shift assignments, assigned branches, 4-digit clock-in PINs, and security roles.

---

## ➕ Adding a New Staff Member

1. Navigate to **Settings** → **Users & Permissions** → **Staff Members**.
2. Tap **+ Add Staff**.
3. **Staff Details**:
   - **Full Name**: (e.g., `Sarah Jenkins`).
   - **Email / Phone Number**: Contact information.
   - **Assigned Role**: Select from `<span className="badge-role">MANAGER</span>`, `<span className="badge-role">CASHIER</span>`, or `<span className="badge-role">STAFF</span>`.
   - **Assigned Store(s)**: Check which branch locations this employee can access.
   - **4-Digit Security PIN**: Set the PIN used for quick clock-in on the [Staff Selection Screen](../getting-started/staff-selection.md).
4. Tap **Save Staff Profile**.
5. The staff member can immediately clock in on any terminal assigned to their branch.

---

## 🔒 Deactivating or Resetting Staff PINs

- **PIN Reset**: Open the staff profile, tap **Reset PIN**, enter a new 4-digit code, and tap Save.
- **Deactivate Staff**: Toggle **Active Status** to OFF when an employee leaves. Their credentials and PIN are immediately invalidated across all registers.

---

## 🔐 Required Permissions
- Creating/Editing Staff: `canManageUsers` (<span className="badge-role">OWNER</span> <span className="badge-role">ADMIN</span>)
