import type { Config } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';

import rehypeExtLink from './plugins/rehype-ext-link';

const config: Config = {
  title: 'David Semakula',
  tagline: 'I write software, and design & analyze computational systems.',
  favicon: 'img/logo.svg',

  // Production URL.
  url: 'https://davidsemakula.com',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'davidsemakula',
  projectName: 'davidsemakula.github.io',
  deploymentBranch: 'master',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/davidsemakula/davidsemakula.github.io/tree/master/',
        },
        pages: {
          rehypePlugins: [rehypeExtLink],
        },
        theme: {
          customCss: require.resolve('./src/css/theme.css'),
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.svg',
    navbar: {
      title: 'David Semakula',
      logo: {
        alt: 'David Semakula',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/davidsemakula/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'My Projects',
          items: [
            {
              label: 'Wamu',
              href: 'https://github.com/wamutech/',
            },
            {
              label: 'pallet-verifier',
              href: 'https://github.com/davidsemakula/pallet-verifier',
            },
            {
              label: 'ink! analyzer',
              href: 'https://github.com/ink-analyzer/',
            },
          ],
        },
        {
          title: 'Useful links & info',
          items: [
            {
              html: '📍 Kampala, Uganda',
            },
            {
              label: '✉️ hello@davidsemakula.com',
              href: 'mailto:hello@davidsemakula.com',
            },
            {
              label: '💻 github.com/davidsemakula',
              href: 'https://github.com/davidsemakula',
            },
          ],
        },
        {
          title: 'Projects I independently contribute to',
          items: [
            {
              label: 'rust-lang/rust-analyzer',
              href: 'https://github.com/rust-lang/rust-analyzer/pulls?q=is%3Apr+author%3Adavidsemakula',
            },
            {
              label: 'endorlabs/MIRAI',
              href: 'https://github.com/endorlabs/MIRAI/pulls?q=is%3Apr+author%3Adavidsemakula'
            },
            {
              label: 'use-ink/ink',
              href: 'https://github.com/use-ink/ink/pulls?q=is%3Apr+author%3Adavidsemakula',
            },
            {
              label: 'webb-tools/cggmp-threshold-ecdsa',
              href: 'https://github.com/webb-tools/cggmp-threshold-ecdsa/pulls?q=is%3Apr+author%3Adavidsemakula',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://davidsemakula.com" target="_blank" class="footer__link-item">David Semakula</a>.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ['rust'],
    },
  },
};

export default config;
