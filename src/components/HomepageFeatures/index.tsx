import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type ModuleCard = {
  title: string;
  icon: string;
  link: string;
  description: string;
  badge?: string;
};

const ModulesList: ModuleCard[] = [
  {
    title: 'Getting Started',
    icon: '🚀',
    link: '/docs/getting-started/welcome',
    description: 'First launch, business registration, license activation, store selection, and day open float setup.',
    badge: 'Core',
  },
  {
    title: 'Billing & POS Checkout',
    icon: '🛒',
    link: '/docs/billing/billing-overview',
    description: 'High-speed counter checkout, takeaway tokens, custom item modifiers, composite taxes, and split payments.',
    badge: 'Operations',
  },
  {
    title: 'Tables & Dining Floor',
    icon: '🪑',
    link: '/docs/tables/floor-plan',
    description: 'Interactive 2D table status, visual floor designer, table transfers, bill merging, and seat covers.',
    badge: 'Restaurant',
  },
  {
    title: 'Kitchen Display (KDS)',
    icon: '🍳',
    link: '/docs/kitchen/kds-overview',
    description: 'Multi-station KOT routing, cooking timers, color-coded urgency badges, and expo pass window.',
    badge: 'Kitchen',
  },
  {
    title: 'Products & Inventory',
    icon: '📦',
    link: '/docs/products/product-catalog',
    description: 'Product catalog, modifier groups, combos/bundles, real-time stock alerts, and purchase orders.',
    badge: 'Management',
  },
  {
    title: 'Thermal Printers & Hardware',
    icon: '🖨️',
    link: '/docs/printers/printer-setup',
    description: 'ESC/POS thermal printers via LAN Ethernet, Bluetooth SPP, USB OTG, and cash drawer kicks.',
    badge: 'Hardware',
  },
  {
    title: 'Staff & Security (RBAC)',
    icon: '🔐',
    link: '/docs/staff-permissions/roles-matrix',
    description: '6 system roles, 17 granular operational permissions, fast 4-digit PIN clock-in, and manager overrides.',
    badge: 'Security',
  },
  {
    title: 'Reports & Daily Z-Reports',
    icon: '📊',
    link: '/docs/reports/daily-sales',
    description: 'Real-time sales KPIs, peak hourly analysis, product velocity, X-Reports, and shift reconciliation.',
    badge: 'Analytics',
  },
  {
    title: 'Offline & P2P LAN Sync',
    icon: '🔄',
    link: '/docs/offline-mode/offline-billing',
    description: '100% offline billing resilience and sub-second multi-terminal LAN socket synchronization.',
    badge: 'Enterprise',
  },
];

function ModuleItem({title, icon, link, description, badge}: ModuleCard) {
  return (
    <div className={clsx('col col--4', styles.moduleCol)}>
      <Link to={link} className={styles.moduleCard}>
        <div className={styles.moduleHeader}>
          <span className={styles.moduleIcon}>{icon}</span>
          {badge && <span className={styles.moduleBadge}>{badge}</span>}
        </div>
        <Heading as="h3" className={styles.moduleTitle}>{title}</Heading>
        <p className={styles.moduleDesc}>{description}</p>
        <span className={styles.moduleLink}>Explore documentation →</span>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2" className={styles.sectionTitle}>
            Complete Product Manual & Documentation
          </Heading>
          <p className={styles.sectionSubtitle}>
            Select a module below to explore step-by-step guides, verified workflows, and system rules.
          </p>
        </div>
        <div className="row">
          {ModulesList.map((props, idx) => (
            <ModuleItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
