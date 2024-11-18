import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Profile from '@site/src/pages/components/profile.mdx';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          I write{' '}
          <a href="https://en.wikipedia.org/wiki/Software" target="_blank">
            software
          </a>
          , and design & analyze{' '}
          <a href="https://en.wikipedia.org/wiki/Computation" target="_blank">
            computational systems
          </a>
          .
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Welcome`} description={siteConfig.tagline}>
      <HomepageHeader />

      <main>
        <div className="hero">
          <div className="container">
            <Profile />
          </div>
        </div>
      </main>
    </Layout>
  );
}
