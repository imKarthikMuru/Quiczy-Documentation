---
id: manager-approval
title: Manager Override & PIN Authorization
sidebar_label: Manager Approval
sidebar_position: 3
---

# Manager Override & PIN Authorization

To balance cashier operational speed with loss prevention, high-risk actions attempted by junior staff trigger an inline **Manager PIN Authorization Dialog**.

---

## 🛑 Actions Requiring Manager Approval

When attempted by a cashier or staff member without direct permissions:
1. **Voiding a Line Item After KOT Printing**
2. **Applying Discounts Exceeding Maximum Cashier Limits (e.g. > 15%)**
3. **Overriding Product Unit Price**
4. **Processing High-Value Refunds**
5. **Manually Kicking the Cash Drawer Without a Sale**
6. **Clearing or Deleting Active Carts**

---

## 🔑 How the Authorization Overlay Works

```mermaid
sequenceDiagram
    participant Cashier as Cashier Operator
    participant POS as Quiczy POS
    participant Manager as Shift Manager

    Cashier->>POS: Attempts to Void $45.00 Steak (Post-KOT)
    POS->>POS: Evaluate Permissions (canVoidTransactions == false)
    POS->>Cashier: Displays "Manager Authorization Required" Dialog
    Manager->>POS: Enters 4-Digit Manager / Owner PIN
    POS->>POS: Validates PIN & Checks Manager Role
    POS->>POS: Executes Void & Logs Event in Audit Trail
    POS-->>Cashier: Returns to Active Cart
```

---

## 📜 Audit Trail Logging

Every manager override is permanently logged in the **Global Audit Log** recording:
- Timestamp & Terminal ID
- Action Attempted
- Requesting Cashier Name
- Authorizing Manager Name
- Reason entered (if applicable)
