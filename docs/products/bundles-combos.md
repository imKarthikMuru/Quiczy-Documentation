---
id: bundles-combos
title: Combo Meals, Bundles & Package Deals
sidebar_label: Bundles & Combos
sidebar_position: 4
---

# Combo Meals, Bundles & Package Deals

**Combos & Bundles** combine multiple individual inventory items into a single discounted package meal (e.g. *Burger + Fries + Drink Meal Deal* or *Executive Lunch Thali*).

---

## 🍔 Creating a Combo Package

1. Navigate to **Inventory** → **Bundles & Combos** and tap **+ Add Bundle**.
2. **Bundle Info**:
   - **Bundle Name**: (e.g., `Family Burger Meal`).
   - **Package Price**: (e.g., `$24.99` vs. `$31.00` individual total).
3. **Included Item Groups**:
   - **Main Item**: (e.g. 2x Choice of Burgers).
   - **Side Item**: (e.g. 2x Choice of Large Fries or Onion Rings).
   - **Drink Item**: (e.g. 2x Choice of Soft Drinks).
4. **Kitchen Routing**:
   - Items inside the bundle are automatically routed to their respective kitchen stations (drinks to bar, burgers to grill).
5. **Inventory Impact**:
   - Selling one combo meal automatically decrements the exact constituent ingredients and sub-items from stock.

---

## 🔐 Required Permissions
- `canManageCombos` (<span className="badge-role">OWNER</span> <span className="badge-role">ADMIN</span>)
