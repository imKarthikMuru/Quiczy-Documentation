import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <img
            src="img/logo-icon.svg"
            alt="Quiczy POS Logo"
            className={styles.heroLogo}
          />
          <Heading as="h1" className="hero__title">
            Quiczy POS Documentation
          </Heading>
          <p className="hero__subtitle">
            Run your retail & restaurant operations with confidence. Complete user manual, workflow guides, and hardware documentation.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg margin-right--md"
              to="/docs/getting-started/welcome">
              Get Started →
            </Link>
            <Link
              className="button button--outline button--light button--lg margin-right--md"
              to="/docs/billing/billing-overview">
              Billing Operations
            </Link>
            <Link
              className="button button--outline button--light button--lg"
              to="/docs/offline-mode/offline-billing">
              Offline & P2P Sync
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Official Manual"
      description="Quiczy POS Complete Product & Operational Manual for Retail and Restaurant Operations.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
