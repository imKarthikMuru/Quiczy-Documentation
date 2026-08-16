import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Quiczy POS Documentation',
  tagline: 'Complete Product & Operational Manual for Quiczy Android POS',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://imkarthikmuru.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: process.env.BASE_URL || '/Quiczy-Documentation/',

  organizationName: 'imKarthikMuru',
  projectName: 'Quiczy-Documentation',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/docs',
        indexBlog: false,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Quiczy POS',
      logo: {
        alt: 'Quiczy POS Logo',
        src: 'img/logo-icon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manualSidebar',
          position: 'left',
          label: 'User Manual',
        },
        {
          to: '/docs/billing/billing-overview',
          label: 'Billing',
          position: 'left',
        },
        {
          to: '/docs/tables/floor-plan',
          label: 'Tables & Dining',
          position: 'left',
        },
        {
          to: '/docs/kitchen/kds-overview',
          label: 'Kitchen KDS',
          position: 'left',
        },
        {
          to: '/docs/offline-mode/offline-billing',
          label: 'Offline & Sync',
          position: 'left',
        },
        {
          to: '/docs/troubleshooting/faqs',
          label: 'FAQ & Support',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Operations',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/welcome',
            },
            {
              label: 'Dashboard Overview',
              to: '/docs/dashboard/dashboard-overview',
            },
            {
              label: 'Billing & Checkout',
              to: '/docs/billing/billing-overview',
            },
            {
              label: 'Table Floor Plan',
              to: '/docs/tables/floor-plan',
            },
          ],
        },
        {
          title: 'Management',
          items: [
            {
              label: 'Kitchen Display (KDS)',
              to: '/docs/kitchen/kds-overview',
            },
            {
              label: 'Product Catalog',
              to: '/docs/products/product-catalog',
            },
            {
              label: 'Staff & Permissions (RBAC)',
              to: '/docs/staff-permissions/roles-matrix',
            },
            {
              label: 'Daily Sales & Reports',
              to: '/docs/reports/daily-sales',
            },
          ],
        },
        {
          title: 'Hardware & Reliability',
          items: [
            {
              label: 'Thermal Printers & Setup',
              to: '/docs/printers/printer-setup',
            },
            {
              label: 'Offline Mode & Local Data',
              to: '/docs/offline-mode/offline-billing',
            },
            {
              label: 'P2P LAN Multi-Terminal Sync',
              to: '/docs/offline-mode/p2p-lan-sync',
            },
            {
              label: 'Troubleshooting & Support',
              to: '/docs/troubleshooting/common-issues',
            },
          ],
        },
      ],
      copyright: `Copyright © 2026 HitaSoft. All rights reserved. Quiczy POS Enterprise Platform.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['kotlin', 'java', 'json', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
