---
id: registration
title: New Business Registration
sidebar_label: Business Registration
sidebar_position: 4
---

# New Business Registration

If you are a new merchant onboarding onto Quiczy POS, the Registration screen creates your business profile, provisions your initial store, and creates the primary administrator account.

---

## 📸 Screen Overview

![Business Registration Screen](/screenshots/authentication/business-registration.png)

_Figure 1: Quiczy POS Business Onboarding & Account Creation Form._

---

## 📋 Required Information

To complete your business registration, enter the following details in the registration form:

| Field Name | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| **Business Name** | Text | Legal trading name of your business or franchise. | `Acme Retail / Cafe Bistro` |
| **Owner Full Name** | Text | Full legal name of the primary business owner. | `John Doe` |
| **Email Address** | Email | Primary administrative email for reports and license notifications. | `john@example.com` |
| **Phone Number** | Phone | Contact mobile number with country code. | `+1 234 567 890` |
| **Industry Category** | Dropdown | Select your trade type (`Restaurant`, `Retail`, `Grocery`, `Cafe`, `Hardware`). | `Restaurant` |
| **Admin Username** | Text | Unique login username for the master terminal operator. | `admin_john` |
| **Admin Password** | Password | Secure password for administrator access (minimum 6 characters). | `••••••••` |

---

## 🚀 Step-by-Step Registration Procedure

1. From the [Welcome Screen](welcome.md), tap **Create Account**.
2. Fill in all business and owner details in the right-hand panel.
3. Select your **Industry Category** from the dropdown list.
4. Set a secure **Admin Username** and **Password**.
5. Tap the **Create Account** button.
6. Upon successful registration:
   - Your business tenant is initialized on the cloud server.
   - An automated digital trial/standard license is provisioned.
   - The app automatically transitions into the [Store Setup & Store Selection](store-selection.md) flow.

---

## 🛡️ Security & Enterprise Notes
- All credentials and sensitive data transmission to the Quiczy server are secured with **End-to-End TLS 1.3 encryption**.
- The primary owner account created here automatically receives the **`OWNER`** role with full administrative privileges across all stores.
