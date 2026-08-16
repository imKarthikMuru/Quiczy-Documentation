# Quiczy POS — Product Documentation & User Manual

Welcome to the **Quiczy POS Official Documentation** repository. This project powers the complete user manual, operational guides, and hardware documentation website built using [Docusaurus](https://docusaurus.io/) and hosted on **GitHub Pages**.

---

## 🚀 Quick Start & Local Development

### Prerequisites
- Node.js version 18.x or 20.x+
- npm version 9.x+

### 1. Install Dependencies
```bash
cd Quiczy-Documentation
npm install
```

### 2. Run Local Development Server
```bash
npm start
```
By default, the documentation server opens at `http://localhost:3000/Quiczy-Documentation/` with instant hot reloading.

### 3. Build for Production
```bash
npm run build
```
This bundles all Markdown/MDX pages, compiles client bundles, processes search indexes (`@easyops-cn/docusaurus-search-local`), and outputs the static site to the `build/` directory.

### 4. Test Production Build Locally
```bash
npm run serve
```

---

## 📁 Repository Structure

```text
Quiczy-Documentation/
├── docs/                               # Markdown/MDX documentation source files
│   ├── getting-started/                # Onboarding, licensing, login & shift opening
│   ├── dashboard/                      # Main command center, shift till & peripherals
│   ├── billing/                        # Counter sales, dine-in, modifiers, taxes & checkout
│   ├── tables/                         # Floor plan, table operations & visual designer
│   ├── orders/                         # Order history, held carts & refunds/voids
│   ├── kitchen/                        # KDS, multi-station KOT routing & expo pass
│   ├── products/                       # Product catalog, categories, bundles & stock
│   ├── customers/                      # Customer directory & purchase history
│   ├── payments/                       # Cash, UPI dynamic QR, split tenders & reconciliation
│   ├── printers/                       # Thermal ESC/POS printers, Bluetooth & LAN routing
│   ├── staff-permissions/              # RBAC matrix, 6 roles & 17 permissions
│   ├── reports/                        # Daily sales, hourly analytics & X/Z reports
│   ├── settings/                       # Business info, tax rules, app settings & backup
│   ├── offline-mode/                   # Offline resilience, sync engine & P2P LAN sync
│   └── troubleshooting/                # Diagnostic guides & merchant FAQs
├── static/
│   ├── img/                            # Official Quiczy brand SVGs and icons
│   └── screenshots/                    # Real application screenshots organized by module
│       ├── getting-started/
│       ├── authentication/
│       ├── dashboard/
│       └── offline-mode/
├── src/
│   ├── components/                     # Custom React components & module cards
│   ├── css/                            # Custom styling tokens & dark/light themes
│   └── pages/                          # Landing homepage (index.tsx)
├── .github/workflows/
│   └── deploy-docs.yml                 # Automated GitHub Pages CI/CD workflow
├── docusaurus.config.ts                # Docusaurus site & search plugin configuration
├── sidebars.ts                         # Sidebar navigation hierarchy
└── package.json
```

---

## 📸 Managing Screenshots

All screenshots are stored in `static/screenshots/<module>/` using descriptive semantic naming:
- `static/screenshots/getting-started/welcome-screen.png`
- `static/screenshots/authentication/business-registration.png`
- `static/screenshots/authentication/terminal-login.png`
- `static/screenshots/getting-started/store-selection.png`
- `static/screenshots/getting-started/terminal-selection.png`
- `static/screenshots/getting-started/add-new-terminal-dialog.png`
- `static/screenshots/authentication/staff-selection-empty.png`
- `static/screenshots/authentication/staff-pin-entry-empty.png`
- `static/screenshots/authentication/staff-pin-entry-filled.png`
- `static/screenshots/dashboard/dashboard-overview.png`
- `static/screenshots/getting-started/day-open.png`
- `static/screenshots/offline-mode/cloud-sync-dialog.png`

### To Update an Existing Screenshot:
Simply replace the PNG file in `static/screenshots/<module>/` with the new capture keeping the same filename.

---

## ✍️ Adding a New Documentation Page

1. Create a new `.md` file inside the appropriate `docs/<module>/` folder (e.g., `docs/billing/bar-service.md`).
2. Add the standard frontmatter at the top of the file:
   ```markdown
   ---
   id: bar-service
   title: High-Velocity Bar Service
   sidebar_label: Bar Service
   sidebar_position: 8
   ---
   ```
3. Add the page ID into `sidebars.ts` under the respective category.
4. Follow the standard page structure (Overview, Prerequisites, Steps, Annotated Screenshot, Available Actions, Permissions, Troubleshooting).

---

## 🏷️ Adding a Future Documentation Version

Docusaurus supports seamless semantic versioning:
1. When releasing a major app update (e.g. `v2.0.0`), run:
   ```bash
   npm run docusaurus docs:version 2.0.0
   ```
2. Docusaurus copies the current `docs/` to `versioned_docs/version-2.0.0/` and creates `versioned_sidebars/version-2.0.0-sidebars.json`.
3. The navbar will automatically display a version dropdown allowing users to toggle between **Current (v2.x)** and previous versions.

---

## 🌐 Deploying to GitHub Pages

The repository includes a pre-configured GitHub Actions workflow at `.github/workflows/deploy-docs.yml`.

### Deployment Steps:
1. Push changes to the `main` or `master` branch of your GitHub repository.
2. In your GitHub repository settings:
   - Navigate to **Settings** → **Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. The workflow automatically builds the site, validates all internal links, indexes the search corpus, and publishes the static documentation to GitHub Pages.

---

## 📄 License & Ownership
Copyright © 2026 HitaSoft. All rights reserved. Quiczy POS Enterprise Documentation.
