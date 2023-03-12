import * as React from 'react';
import {
  GrinderyIcon,
  HubspotIcon,
  InboundLabsIcon,
  KeyyIcon,
  TungaIcon,
} from '../components/common/icons';
import { A } from '../components/common/links';
import {
  APP_TYPE,
  LANGUAGES,
  LOCATION,
  PRODUCTS,
  ROLES,
  SEVERITY,
  SKILLS,
  TAG_COLORS,
} from './constants';
import {
  BountyInput,
  EducationInput,
  ExperienceInput,
  GeneralCompanyInput,
  GeneralTagInput,
  ProjectInput,
  asCompanyRecord,
} from './types';
import { cleanCompanyObject, overrideIconClassName } from './utils';

export const COMPANIES = asCompanyRecord({
  ALCHEMER: {
    name: 'Alchemer (formerly SurveyGizmo)',
    website: 'https://www.alchemer.com',
  },
  BUTTERFLYWORKS: {
    name: 'ButterflyWorks',
    website: 'https://www.butterflyworks.org',
  },
  GRINDERY: {
    name: 'Grindery',
    website: 'https://www.grindery.io',
    icon: {
      icon: GrinderyIcon,
      className: 'text-grindery dark:text-inherit',
    },
  },
  HUBSPOT: {
    name: 'HubSpot',
    website: 'https://www.hubspot.com',
    icon: {
      icon: HubspotIcon,
      className: 'text-hubspot dark:text-inherit',
    },
  },
  INBOUNDLABS: {
    name: 'InboundLabs',
    website: 'https://w.inboundlabs.co',
    icon: {
      icon: InboundLabsIcon,
      className: 'text-inboundlabs dark:text-inherit',
    },
  },
  KEYY: {
    name: 'Keyy',
    website: 'https://www.keyy.org',
    icon: KeyyIcon,
  },
  PERMOBIL: {
    name: 'Permobil',
    website: 'https://www.permobil.com',
  },
  PRESSBOARD: {
    name: 'Pressboard',
    website: 'https://www.pressboardmedia.com',
  },
  TMG: {
    name: 'Telegraaf Media Groep (TMG)',
    website: 'https://www.telegraaf.nl',
  },
  TRUE_AFRICAN: {
    name: 'True African',
    website: 'https://www.trueafrican.com',
    location: `${LOCATION.KAMPALA} / ${LOCATION.NAIROBI}`,
  },
  TUNGA: {
    name: 'Tunga',
    website: 'https://tunga.io',
    location: `${LOCATION.AMSTERDAM} / ${LOCATION.KAMPALA} / ${LOCATION.LAGOS}`,
    icon: {
      icon: TungaIcon,
      className: 'text-tunga dark:text-inherit',
    },
  },
});

export const HIGHLIGHTED_COMPANIES: Array<GeneralCompanyInput> = [
  COMPANIES.HUBSPOT,
  COMPANIES.PERMOBIL,
  COMPANIES.PRESSBOARD,
  COMPANIES.GRINDERY,
  COMPANIES.INBOUNDLABS,
  COMPANIES.TUNGA,
  COMPANIES.BUTTERFLYWORKS,
  COMPANIES.TMG,
].filter(Boolean);

export const BIO = {
  NAME: 'David Semakula',
  OCCUPATION: `${ROLES.SOFTWARE_ENGINEER} & ${ROLES.SYSTEM_ARCHITECT}`,
  BYLINE: (
    <>
      <p className="mb-1">
        I enjoy solving complex problems with technology and I'm always up for a
        challenge.
      </p>
      <p>
        I’ve worked as a technical lead on projects for{' '}
        {HIGHLIGHTED_COMPANIES.map(
          (company: GeneralCompanyInput, idx: number) => {
            const { name, website } = cleanCompanyObject(company);
            return (
              <>
                {website ? (
                  <A
                    href={website}
                    target="_blank"
                  >
                    {name}
                  </A>
                ) : (
                  name
                )}
                {idx < HIGHLIGHTED_COMPANIES.length - 1 ? (
                  <span>, </span>
                ) : null}
              </>
            );
          }
        )}{' '}
        and many more companies.
      </p>
    </>
  ),
  LOCATION: LOCATION.KAMPALA,
  EMAIL: 'hello@davidsemakula.com',
  WEBSITE: 'davidsemakula.com',
  GITHUB_USERNAME: 'davidsemakula',
  TWITTER_USERNAME: 'davidsemakula',
};

export const MY_LANGUAGES: Array<LANGUAGES> = [
  LANGUAGES.ENGLISH,
  LANGUAGES.LUGANDA,
];

const web3Color = TAG_COLORS.VIOLET;

// Only highlights, can't include everything
export const MY_SKILLS: Array<GeneralTagInput> = [
  // Languages
  {
    name: SKILLS.RUST,
    color: web3Color,
  },
  {
    name: SKILLS.WEB_ASSEMBLY,
    color: web3Color,
  },
  SKILLS.PYTHON,
  SKILLS.TYPESCRIPT,
  {
    name: SKILLS.SOLIDITY,
    color: web3Color,
  },
  {
    name: SKILLS.INK,
    color: web3Color,
  },
  SKILLS.GO,
  SKILLS.SWIFT,
  SKILLS.KOTLIN,
  // Libraries & Frameworks
  SKILLS.REACT_JS,
  {
    name: SKILLS.WEB3_JS,
    color: web3Color,
  },
  {
    name: SKILLS.ETHERS_JS,
    color: web3Color,
  },
  {
    name: SKILLS.POLKADOT_JS,
    color: web3Color,
  },
  SKILLS.FLUTTER,
  SKILLS.ELECTRON,
  // Storage
  SKILLS.MONGODB,
  SKILLS.REDIS,
  {
    name: SKILLS.IPFS,
    color: web3Color,
  },
  // Paradigms
  SKILLS.GRAPHQL,
  // Tools
  SKILLS.ANSIBLE,
  SKILLS.DOCKER,
  SKILLS.KUBERNETES,
];

export const MY_PROJECTS: Array<ProjectInput> = [
  {
    name: 'Mukutu Router',
    website: 'https://safe.mukutu.tech/',
    role: ROLES.CREATOR,
    platforms: [
      {
        type: APP_TYPE.GNOSIS_SAFE_APP,
        url: 'https://app.safe.global/share/safe-app?appUrl=https://safe.mukutu.tech&chain=eth',
        name: '(Gnosis) Safe App',
      },
      {
        type: APP_TYPE.MOONBEAM_SAFE_APP,
        url: 'https://multisig.moonbeam.network/share/safe-app?appUrl=https://safe.mukutu.tech&chain=mbeam',
        name: 'Moonbeam Safe App',
      },
    ],
    details: (
      <>
        <p>
          Mukutu Router (formerly Safe Hyperlane Router) is a{' '}
          <A
            href="https://help.gnosis-safe.io/en/articles/4022022-what-are-safe-apps"
            target="_blank"
          >
            Safe app
          </A>{' '}
          for managing assets and interacting with smart contracts and dapps on
          multiple chains from one{' '}
          <A
            href="https://app.safe.global/"
            target="_blank"
          >
            Safe
          </A>{' '}
          account.
        </p>
      </>
    ),
    stack: [SKILLS.TYPESCRIPT, SKILLS.ETHERS_JS, SKILLS.REACT_JS],
    integrations: [PRODUCTS.GNOSIS_SAFE, PRODUCTS.HYPERLANE],
    awards: [
      {
        name: 'Top Prize: Moonbeam Illuminate/22 Hackathon | Best use of Hyperlane',
        url: 'https://twitter.com/MoonbeamNetwork/status/1610738659656962048',
        // https://safe.mukutu.tech
        // https://gitcoin.co/hackathon/illuminate/projects/17478/hyperlane-safe-app
        // Vidyard: https://share.vidyard.com/watch/RfCsNrC8r24hKGm7HTBBZY?
      },
    ],
    press: [
      {
        name: 'Gitcoin Blog Feature',
        url: 'https://go.gitcoin.co/blog/celebrating-the-best-in-cross-chain-from-moonbeams-illuminate-hack/22',
      },
    ],
  },
  {
    name: 'Grindery Pay',
    website:
      'https://chrome.google.com/webstore/detail/grindery-pay/ofnbfgahidjckegapdpkhigjljepcdme',
    icon: COMPANIES.GRINDERY.icon,
    role: `former ${ROLES.LEAD_DEVELOPER}`,
    platforms: [
      {
        type: APP_TYPE.CHROME,
        url: 'https://chrome.google.com/webstore/detail/grindery-pay/ofnbfgahidjckegapdpkhigjljepcdme',
      },
      {
        type: APP_TYPE.HARMONY,
        url: 'https://explorer.harmony.one/address/0xa9046B015C040897f2Ac1762C81B57ba1b78Fa8F',
      },
      {
        type: APP_TYPE.ETHEREUM,
        url: 'https://rinkeby.etherscan.io/address/0xa9046B015C040897f2Ac1762C81B57ba1b78Fa8F',
        name: 'Ethereum (Rinkeby)',
      },
    ],
    details: (
      <>
        <p>Create, manage and import decentralized payouts.</p>
        <p>
          Easily batch multiple payouts into a single transaction that can
          either be paid directly from a wallet or submitted as withdrawal
          requests to Aragon or Gnosis Safe to let members vote and
          automatically execute the transactions.
        </p>
      </>
    ),
    stack: [
      SKILLS.SOLIDITY,
      SKILLS.WEB3_JS,
      SKILLS.REACT_JS,
      SKILLS.HARDHAT,
      SKILLS.IPFS,
    ],
    integrations: [PRODUCTS.ARAGON, PRODUCTS.GNOSIS_SAFE],
    awards: [
      {
        name: '2nd Place: DAO global hackathon 2021 | Finance & Operations',
        url: 'https://hackforfreedom.org/past-hackathons#winners',
        // https://github.com/grindery-io/grindery-dao-hackathon
        // https://blog.aragon.org/dao-global-hackathon-thank-you/
        // https://gitcoin.co/hackathon/dao-global/projects/11739/grindery-meta
        // Vimeo: https://vimeo.com/655205768
      },
      // 2nd Place: Harmony - Bridging TradFi to DeFi Projects 2021 | Terra
      // https://github.com/grindery-io/grindery-connect
      // https://twitter.com/harmonyprotocol/status/1447654702204678146
      // https://gitcoin.co/hackathon/harmony-defi/projects/11108/grindery-connect
      // https://docs.google.com/presentation/d/1ZGrbKSaAdtzvMzVh0EVFBfUvA4SqiAeYVXGhJN7Orbs/edit#slide=id.gf208bfeaf3_0_30
    ],
    // More Links
    // Youtube: https://www.youtube.com/watch?v=2N2TPrqMLic
  },
  {
    name: 'Grindery Nexus',
    website: 'https://www.grindery.io',
    icon: COMPANIES.GRINDERY.icon,
    role: `former ${ROLES.TECHNICAL_LEAD}, former ${ROLES.STRATEGIC_ADVISOR}`,
    platforms: [
      {
        type: APP_TYPE.WEB,
        url: 'https://nexus.grindery.org',
      },
      APP_TYPE.ETHEREUM,
      APP_TYPE.ALGORAND,
      APP_TYPE.NEAR,
      APP_TYPE.BINANCE,
      APP_TYPE.FLOW,
    ],
    details: (
      <>
        <p>
          A framework that allows developers to create reusable services to
          connect smart contracts with other protocols, including web2 apps.
        </p>
        <p>
          A low/no-code interface that allows end-users to declare workflows
          with simple logic, making automation available to anyone without
          programming skills.
        </p>
        <p>
          A marketplace with incentives for decentralized nodes to execute the
          user-defined workflows as well as for developers to create more
          services.
        </p>
      </>
    ),
    stack: [
      SKILLS.SOLIDITY,
      SKILLS.RUST,
      SKILLS.WEB_ASSEMBLY,
      SKILLS.TYPESCRIPT,
      SKILLS.REACT_JS,
      SKILLS.IPFS,
    ],
    integrations: [],
    awards: [
      {
        name: 'Binance Labs Incubation Program S4 | Infrastructure',
        url: 'https://www.binance.com/en/blog/ecosystem/%E2%80%8Bbinance-labs-launches-season-4-of-its-incubation-program-with-14-earlystage-startups-421499824684903808',
        // https://www.binance.com/en/blog/ecosystem/season-4-of-binance-labs-incubation-program-how-to-build-invest-and-grow-startups-421499824684904005
      },
    ],
  },
  {
    name: `${COMPANIES.HUBSPOT.name} Inspire`,
    website: 'https://designers.hubspot.com/inspire',
    icon: COMPANIES.HUBSPOT.icon,
    role: `former ${ROLES.LEAD_DEVELOPER}, ${ROLES.CONSULTANT}`,
    company: COMPANIES.HUBSPOT,
    platforms: [
      {
        type: APP_TYPE.WEB,
        url: 'https://designers.hubspot.com/inspire',
      },
    ],
    details:
      'Browse and search a collection of websites built on HubSpot CMS Hub from all around the world.',
    stack: [
      SKILLS.NODE_JS,
      SKILLS.EXPRESS_JS,
      SKILLS.REDIS,
      PRODUCTS.ALGOLIA,
      PRODUCTS.HUBSPOT_CMS,
    ],
    integrations: [PRODUCTS.SLACK, PRODUCTS.HUBSPOT],
  },
  {
    name: COMPANIES.TUNGA.name,
    website: COMPANIES.TUNGA.website,
    icon: COMPANIES.TUNGA.icon,
    role: `former ${ROLES.LEAD_DEVELOPER}, ${ROLES.CONSULTANT}`,
    platforms: [
      {
        type: APP_TYPE.WEB,
        url: COMPANIES.TUNGA.website,
      },
    ],
    details:
      'Tunga is an online staff augmentation platform that connects companies worldwide to experienced African software engineers.',
    stack: [
      SKILLS.PYTHON,
      SKILLS.DJANGO,
      SKILLS.REACT_JS,
      SKILLS.MYSQL,
      SKILLS.REDIS,
      PRODUCTS.ALGOLIA,
      SKILLS.ANSIBLE,
    ],
    integrations: [
      PRODUCTS.GITHUB,
      PRODUCTS.SLACK,
      PRODUCTS.EXACT,
      PRODUCTS.HUBSPOT_CRM,
      PRODUCTS.PAYONEER,
      PRODUCTS.MANDRILL,
      PRODUCTS.METABASE,
    ],
  },
  {
    name: COMPANIES.KEYY.name,
    website: 'https://learn.keyy.org/explore',
    icon: COMPANIES.KEYY.icon,
    role: `former ${ROLES.LEAD_DEVELOPER}, ${ROLES.CONSULTANT}`,
    company: COMPANIES.KEYY,
    platforms: [
      {
        type: APP_TYPE.WEB,
        url: 'https://learn.keyy.org/explore',
      },
      {
        type: APP_TYPE.IOS,
        url: 'https://apps.apple.com/us/app/keyy/id1553782589?platform=iphone',
      },
      {
        type: APP_TYPE.ANDROID,
        url: 'https://play.google.com/store/apps/details?id=org.keyy.learn',
      },
      {
        type: APP_TYPE.MACOS,
        url: 'https://apps.apple.com/us/app/keyy/id1553782589?platform=mac',
      },
    ],
    details: (
      <>
        <p>
          Keyy brings learning and community into one place to help you
          collaborate, learn, and grow better together.
        </p>
        <p>
          Keyy helps students master new skills and unlock more greatness
          through community, content, collaboration, and support.
        </p>
        <p>
          Keyy helps creators organize their content, courses, and memberships
          into a centralized community app and grow a scalable education
          subscription business.
        </p>
      </>
    ),
    stack: [
      SKILLS.REACT_JS,
      SKILLS.NODE_JS,
      SKILLS.GRAPHQL,
      SKILLS.REDIS,
      SKILLS.RETHINKDB,
      PRODUCTS.ALGOLIA,
      SKILLS.APACHE_CORDOVA,
      SKILLS.ELECTRON,
      SKILLS.DOCKER,
      SKILLS.AWS,
    ],
    integrations: [
      PRODUCTS.SLACK,
      PRODUCTS.ZOOM,
      PRODUCTS.SENDGRID,
      PRODUCTS.AMPLITUDE,
    ],
  },
  {
    name: `${COMPANIES.HUBSPOT.name} Code Gallery`,
    website: 'https://designers.hubspot.com/code-gallery',
    icon: COMPANIES.HUBSPOT.icon,
    role: `former ${ROLES.LEAD_DEVELOPER}, ${ROLES.CONSULTANT}`,
    company: COMPANIES.HUBSPOT,
    platforms: [
      {
        type: APP_TYPE.WEB,
        url: 'https://designers.hubspot.com/code-gallery',
      },
    ],
    details:
      'A showcase of the open-source assets and projects the HubSpot developer community is working on.',
    stack: [
      SKILLS.NODE_JS,
      SKILLS.EXPRESS_JS,
      SKILLS.MONGODB,
      SKILLS.REDIS,
      PRODUCTS.HUBSPOT_CMS,
    ],
    integrations: [PRODUCTS.GITHUB, PRODUCTS.SLACK, PRODUCTS.HUBSPOT],
    // More Links
    // INBOUND 2019: InboundLabs Presentation
    // https://docs.google.com/presentation/d/1PsBHgVyVyuA8PMCiDy6j8HbYPOOax-zq_3RAFipkc4k/edit?usp=sharing
    // https://www.youtube.com/watch?v=VpArzDy5ny4&t=2590s
  },
  {
    name: 'Booya',
    website: 'https://booya.io',
    icon: overrideIconClassName(
      COMPANIES.INBOUNDLABS.icon,
      'text-booya dark:text-inherit'
    ),
    role: `former ${ROLES.LEAD_DEVELOPER}, ${ROLES.CONSULTANT}`,
    company: COMPANIES.INBOUNDLABS,
    platforms: [
      {
        type: APP_TYPE.ADMIN_CONSOLE,
        url: 'https://go.booya.io',
      },
      {
        type: APP_TYPE.LIBRARY,
        url: 'https://www.npmjs.com/package/@inboundlabs/booya-ui',
        name: 'JavaScript UI Library',
      },
      {
        type: APP_TYPE.INTEGRATION,
        url: 'https://ecosystem.hubspot.com/marketplace/apps/marketing/cms/booya-225187',
        name: 'HubSpot App',
      },
      // https://www.npmjs.com/package/@inboundlabs/booya-api-client
      // https://inboundlabsi.github.io/booya-docs/
    ],
    details:
      'Booya is the fastest and simplest way to add user authentication to HubSpot and transform it into a full-fledged user management system.',
    stack: [
      SKILLS.NODE_JS,
      SKILLS.EXPRESS_JS,
      SKILLS.MONGODB,
      SKILLS.REDIS,
      SKILLS.REACT_JS,
      SKILLS.GRAPHQL,
    ],
    integrations: [PRODUCTS.HUBSPOT, PRODUCTS.MAILGUN, PRODUCTS.STRIPE],
  },
];

export const MY_BOUNTIES: Array<BountyInput> = [
  {
    name: 'Hyperlane',
    website: 'https://www.hyperlane.xyz/',
    location: 'New York, USA',
    date: 'Jan/2023',
    severity: SEVERITY.MEDIUM,
    details: (
      <>
        <p className="mb-1.5">
          <A href="https://www.hyperlane.xyz/">Hyperlane</A> is a modular
          cross-chain communication protocol deployed on{' '}
          <A href="https://docs.hyperlane.xyz/docs/developers-faq-and-troubleshooting/domains">
            Ethereum, Arbitrum, Avalanche, BSC, Celo, Optimism, Polygon and
            Moonbeam
          </A>
          .
        </p>
        <p className="mb-1.5">
          I discovered and reported a flaw in Hyperlane's{' '}
          <A href="https://docs.hyperlane.xyz/docs/developers/send">
            Interchain Account
          </A>{' '}
          <A href="https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/v1.0.0/solidity/contracts/OwnableMulticall.sol#L38-L59">
            implementation
          </A>{' '}
          that would lead to any native token (e.g ETH on Ethereum) sent to an
          interchain account being trapped/frozen because the interchain
          account's controller would have no way of withdrawing the native
          token.
        </p>
        <p className="mb-1.5">
          This flaw was caused by the assumption that interchain accounts
          couldn't receive native tokens (e.g ETH on Ethereum) because neither a{' '}
          <A href="https://docs.soliditylang.org/en/v0.8.17/contracts.html#receive-ether-function">
            receive ether
          </A>{' '}
          nor a{' '}
          <A href="https://docs.soliditylang.org/en/v0.8.17/contracts.html#fallback-function">
            payable fallback
          </A>{' '}
          function was implemented. However, this assumption wasn't true in some
          cases, most notably before the interchain account smart contract was
          deployed but the address was already{' '}
          <A href="https://docs.hyperlane.xyz/docs/developers/send#precomputing-addresses">
            precomputed
          </A>{' '}
          which is a normal usage pattern for interchain accounts.
        </p>
        <p>
          I additionally supported the Hyperlane team by reviewing their fix for
          the issue.
        </p>
      </>
    ),
    stack: [SKILLS.SOLIDITY, SKILLS.RUST, SKILLS.TYPESCRIPT],
  },
];

export const MY_EXPERIENCE: Array<ExperienceInput> = [
  {
    company: {
      name: 'Independent',
      location: LOCATION.KAMPALA,
    },
    role: [
      ROLES.SOFTWARE_ENGINEER,
      ROLES.SYSTEM_ARCHITECT,
      ROLES.CONSULTANT,
      ROLES.STRATEGIC_ADVISOR,
    ].join('/ '),
    period: 'April/2022 - Present',
    remote: true,
    details:
      'Consulting, strategic advice and full-stack software development.',
  },
  {
    company: COMPANIES.GRINDERY,
    role: `${ROLES.CO_FOUNDER} & ${ROLES.CTO}`,
    period: '2019 - April/2022',
    remote: true,
    details:
      'Grindery builds low/no-code middleware for Web3, as well as tools to put DAOs to work. ',
  },
  {
    company: COMPANIES.TUNGA,
    role: ROLES.CTO,
    period: '2016 - 2019',
    remote: true,
    details:
      'Tunga is a staff augmentation firm that works with African developers, allowing companies worldwide to add experienced software engineers to their teams within days via an online platform.',
  },
  {
    company: COMPANIES.TRUE_AFRICAN,
    role: `Senior ${ROLES.SOFTWARE_ENGINEER}`,
    period: '2015 - 2016',
    details: (
      <>
        <p>
          True African provides custom software solutions for financial services
          that addresses specific business needs.
        </p>
        <p>
          Software solutions include payment gateways to leading banks in the
          region, collection platforms to large utility service providers and
          both individual and corporate mobile and online wallets.
        </p>
      </>
    ),
  },
  {
    company: {
      name: 'Freelance',
      location: LOCATION.KAMPALA,
    },
    role: ROLES.SOFTWARE_ENGINEER,
    period: '2011 - 2015',
    details: 'Consulting and full-stack software development.',
  },
];

export const MY_EDUCATION: Array<EducationInput> = [
  {
    name: 'Makerere University',
    award: 'Bachelor of Science in Computer Science',
    location: LOCATION.KAMPALA,
    period: '2009 - 2012',
    website: 'https://cis.mak.ac.ug',
    details: 'Graduated with first-class honors.',
  },
];
