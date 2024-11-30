import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Profile from '@site/src/pages/components/profile.mdx';

function HomepageHeader() {
  return (
    <header className="hero hero--primary text--center padding-top--lg padding-bottom--md">
      <div className="container">
        <h1 className="hero__subtitle">Hello | Oli otya 👋</h1>
        <p>
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
        <div className="profile padding--lg">
          <div className="container">
            <Profile />
          </div>
        </div>
      </main>
    </Layout>
  );
}
