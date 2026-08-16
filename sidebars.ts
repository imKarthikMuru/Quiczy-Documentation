import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  manualSidebar: [
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/system-requirements',
        'getting-started/welcome',
        'getting-started/registration',
        'getting-started/license-activation',
        'getting-started/login',
        'getting-started/store-selection',
        'getting-started/terminal-selection',
        'getting-started/staff-selection',
        'getting-started/day-open',
      ],
    },
    {
      type: 'category',
      label: '📊 Main Dashboard',
      collapsed: false,
      items: [
        'dashboard/dashboard-overview',
        'dashboard/quick-actions',
        'dashboard/shift-cash-status',
        'dashboard/peripheral-monitoring',
      ],
    },
    {
      type: 'category',
      label: '🛒 Billing & POS Operations',
      collapsed: false,
      items: [
        'billing/billing-overview',
        'billing/dine-in',
        'billing/takeaway',
        'billing/product-modifiers',
        'billing/cart-discounts-taxes',
        'billing/checkout-payments',
        'billing/order-success-receipts',
      ],
    },
    {
      type: 'category',
      label: '🪑 Tables & Floor Plan',
      collapsed: true,
      items: [
        'tables/floor-plan',
        'tables/table-operations',
        'tables/floor-designer',
      ],
    },
    {
      type: 'category',
      label: '📋 Order Management',
      collapsed: true,
      items: [
        'orders/order-history',
        'orders/held-orders',
        'orders/refunds-cancellations',
      ],
    },
    {
      type: 'category',
      label: '🍳 Kitchen Display (KDS & KOT)',
      collapsed: true,
      items: [
        'kitchen/kds-overview',
        'kitchen/ticket-management',
        'kitchen/expo-workflow',
      ],
    },
    {
      type: 'category',
      label: '📦 Products & Inventory',
      collapsed: true,
      items: [
        'products/product-catalog',
        'products/categories',
        'products/modifiers-attributes',
        'products/bundles-combos',
        'products/stock-management',
        'products/purchase-orders',
      ],
    },
    {
      type: 'category',
      label: '👥 Customer Directory',
      collapsed: true,
      items: [
        'customers/customer-directory',
        'customers/customer-history',
      ],
    },
    {
      type: 'category',
      label: '💳 Payments & Settlement',
      collapsed: true,
      items: [
        'payments/payment-methods',
        'payments/upi-qr-payments',
        'payments/split-payments',
        'payments/reconciliation-day-close',
      ],
    },
    {
      type: 'category',
      label: '🖨️ Thermal Printers & Hardware',
      collapsed: true,
      items: [
        'printers/printer-setup',
        'printers/receipt-printing',
        'printers/kitchen-routing',
        'printers/printer-troubleshooting',
      ],
    },
    {
      type: 'category',
      label: '🔐 Staff & Permissions (RBAC)',
      collapsed: true,
      items: [
        'staff-permissions/staff-management',
        'staff-permissions/roles-matrix',
        'staff-permissions/manager-approval',
      ],
    },
    {
      type: 'category',
      label: '📈 Reports & Analytics',
      collapsed: true,
      items: [
        'reports/daily-sales',
        'reports/product-category-reports',
        'reports/shift-history-x-z-reports',
      ],
    },
    {
      type: 'category',
      label: '⚙️ Settings & Administration',
      collapsed: true,
      items: [
        'settings/business-settings',
        'settings/tax-rules',
        'settings/app-preferences',
        'settings/cloud-backup-restore',
        'settings/subscription-plans',
      ],
    },
    {
      type: 'category',
      label: '🔄 Offline Mode & LAN Sync',
      collapsed: true,
      items: [
        'offline-mode/offline-billing',
        'offline-mode/synchronization',
        'offline-mode/p2p-lan-sync',
      ],
    },
    {
      type: 'category',
      label: '❓ Troubleshooting & FAQs',
      collapsed: true,
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/faqs',
      ],
    },
  ],
};

export default sidebars;
