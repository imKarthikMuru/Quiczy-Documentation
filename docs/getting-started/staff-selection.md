---
id: staff-selection
title: Staff Selection & Fast PIN Clock-In
sidebar_label: Staff Selection & PIN
sidebar_position: 9
---

# Staff Selection & Fast PIN Clock-In

In busy POS environments, cashiers and waitstaff frequently switch shifts or share the same front counter terminal. The **Staff Selection & PIN Clock-In** screen provides quick, secure switching between operators using a 4-digit security PIN.

---

## 📸 Screen Overview

### 1. Staff Directory (Unselected State)

![Staff Selection Screen](/screenshots/authentication/staff-selection-empty.png)

_Figure 1: Staff Directory showing registered operators, assigned roles, and live clock._

---

### 2. Fast PIN Entry & Clock-In

<div className="row">
<div className="col col--6">

![Staff PIN Entry Empty](/screenshots/authentication/staff-pin-entry-empty.png)
_Figure 2A: 4-Digit PIN Keypad Overlay._

</div>
<div className="col col--6">

![Staff PIN Entry Filled](/screenshots/authentication/staff-pin-entry-filled.png)
_Figure 2B: Masked 4-Digit PIN verification._

</div>
</div>

---

## 🕒 Step-by-Step Shift Clock-In Flow

1. **Locate Your Name**: In the left panel, scroll through the staff list or type your name in the search bar (`• Search for a staff...`).
2. **Select Operator**: Tap on your staff card (e.g. `Ajith - OWNER` or `Sarah - CASHIER`).
3. **Enter 4-Digit PIN**: In the right-hand numeric keypad:
   - Enter your personal 4-digit security PIN.
   - Use the **C** button to clear input if mistyped.
4. **Clock-In**: Tap the **Clock-in →** button.
5. **Validation**:
   - If the business day is not yet opened, the app advances to the [Day Opening Reception](day-open.md).
   - If an active day/shift session is already open, the app opens the [Main Dashboard](../dashboard/dashboard-overview.md) with your active user session.

---

## 🛡️ Security & Inactivity Locking

- **Inactivity Timeout**: When the POS terminal sits idle without touch input (configurable between 1 to 15 minutes in [App Preferences](../settings/app-preferences.md)), the screen automatically locks.
- **Unlocking**: Any staff member can tap their name and re-enter their 4-digit PIN to instantly resume billing without restarting the application or closing active carts.

---

## ⚠️ Forgot PIN Recovery

If a cashier forgets their PIN:
1. Tap the **• Forgot PIN? Contact Manager** link.
2. A user with the **`OWNER`**, **`ADMIN`**, or **`MANAGER`** role can reset staff PINs under **Settings → Users & Permissions → Staff Profile**.
