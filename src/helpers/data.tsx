import * as React from 'react';
import {
  GrinderyIcon,
  HubspotIcon,
  InboundLabsIcon,
  KeyyIcon,
  TungaIcon,
} from '../components/common/icons';
import {
  APP_TYPE,
  LANGUAGES,
  LOCATION,
  PRODUCTS,
  ROLES,
  SKILLS,
  TAG_COLORS,
} from './constants';
import { EducationInput, ExperienceInput, ProjectInput } from './types';

export const BIO = {
  NAME: 'David Semakula',
  OCCUPATION: `${ROLES.SOFTWARE_ENGINEER} & ${ROLES.SYSTEM_ARCHITECT}`,
  BYLINE:
    "I enjoy solving complex problems with technology and I'm always up for a challenge.",
  LOCATION: LOCATION.KAMPALA,
  EMAIL: 'work@davidsemakula.com',
  WEBSITE: 'davidsemakula.com',
  GITHUB_USERNAME: 'davidsemakula',
  TWITTER_USERNAME: 'davidsemakula',
};

export const MY_LANGUAGES = [LANGUAGES.ENGLISH, LANGUAGES.LUGANDA];

const web3Color = TAG_COLORS.PURPLE;
export const MY_SKILLS = [
  // Languages
  SKILLS.PYTHON,
  [SKILLS.SOLIDITY, web3Color],
  [SKILLS.RUST, web3Color],
  SKILLS.JAVA,
  SKILLS.KOTLIN,
  SKILLS.SWIFT,
  SKILLS.JAVASCRIPT,
  [SKILLS.WEB_ASSEMBLY, web3Color],
  SKILLS.NODE_JS,
  // Libraries & Frameworks
  SKILLS.REACT_JS,
  [SKILLS.WEB3_JS, web3Color],
  [SKILLS.ETHERS_JS, web3Color],
  SKILLS.EXPRESS_JS,
  SKILLS.DJANGO,
  SKILLS.FLUTTER,
  SKILLS.APACHE_CORDOVA,
  SKILLS.ELECTRON,
  // Paradigms
  SKILLS.GRAPHQL,
  SKILLS.REST,
  // Storage
  SKILLS.MYSQL,
  SKILLS.POSTGRESQL,
  SKILLS.MONGODB,
  SKILLS.REDIS,
  SKILLS.RETHINKDB,
  [SKILLS.IPFS, web3Color],
  // Tools
  SKILLS.ANSIBLE,
  SKILLS.DOCKER,
  SKILLS.KUBERNETES,
  // Platforms
  SKILLS.AWS,
  SKILLS.GOOGLE_CLOUD,
];

export const MY_PROJECTS: Array<ProjectInput> = [
  {
    name: 'Grindery Pay',
    website:
      'https://chrome.google.com/webstore/detail/grindery-pay/ofnbfgahidjckegapdpkhigjljepcdme',
    icon: [GrinderyIcon, 'text-grindery dark:text-inherit'],
    role: ROLES.LEAD_DEVELOPER,
    platforms: [
      [
        'https://chrome.google.com/webstore/detail/grindery-pay/ofnbfgahidjckegapdpkhigjljepcdme',
        'Chrome Extension',
        APP_TYPE.CHROME,
      ],
      [
        'https://explorer.harmony.one/address/0xa9046B015C040897f2Ac1762C81B57ba1b78Fa8F',
        'Harmony',
        APP_TYPE.HARMONY,
      ],
      [
        'https://rinkeby.etherscan.io/address/0xa9046B015C040897f2Ac1762C81B57ba1b78Fa8F',
        'Ethereum (Rinkeby)',
        APP_TYPE.ETHEREUM,
      ],
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
    stack: [SKILLS.SOLIDITY, SKILLS.WEB3_JS, SKILLS.REACT_JS, SKILLS.IPFS],
    integrations: [PRODUCTS.ARAGON, PRODUCTS.GNOSIS_SAFE],
    awards: [
      [
        '2nd Place: DAO global hackathon | Finance & Operations',
        'https://hackforfreedom.org',
        // https://github.com/grindery-io/grindery-dao-hackathon
        // https://blog.aragon.org/dao-global-hackathon-thank-you/
        // https://gitcoin.co/hackathon/dao-global/projects/11739/grindery-meta
        // Vimeo: https://vimeo.com/655205768
      ],
      // 2nd Place: Harmony - Bridging TradFi to DeFi Projects | Terra
      // https://github.com/grindery-io/grindery-connect
      // https://twitter.com/harmonyprotocol/status/1447654702204678146
      // https://gitcoin.co/hackathon/harmony-defi/projects/11108/grindery-connect
      // https://docs.google.com/presentation/d/1ZGrbKSaAdtzvMzVh0EVFBfUvA4SqiAeYVXGhJN7Orbs/edit#slide=id.gf208bfeaf3_0_30
    ],
    // More Links
    // Youtube: https://www.youtube.com/watch?v=2N2TPrqMLic
  },
  {
    name: 'Keyy',
    website: 'https://learn.keyy.org/explore',
    icon: KeyyIcon,
    role: `${ROLES.LEAD_DEVELOPER}, ${ROLES.CONSULTANT}`,
    company: ['Keyy', 'https://www.keyy.org', KeyyIcon],
    platforms: [
      ['https://learn.keyy.org/explore', 'Web', APP_TYPE.WEB],
      ['https://apps.apple.com/us/app/keyy/id1553782589', 'iOS', APP_TYPE.IOS],
      [
        'https://play.google.com/store/apps/details?id=org.keyy.learn',
        'Android',
        APP_TYPE.ANDROID,
      ],
      [
        'https://apps.apple.com/us/app/keyy/id1553782589',
        'macOS',
        APP_TYPE.MACOS,
      ],
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
    name: 'HubSpot Inspire',
    website: 'https://designers.hubspot.com/inspire',
    icon: [HubspotIcon, 'text-hubspot dark:text-inherit'],
    role: `${ROLES.LEAD_DEVELOPER}, ${ROLES.CONSULTANT}`,
    company: [
      'HubSpot',
      'https://www.hubspot.com',
      [HubspotIcon, 'text-hubspot dark:text-inherit'],
    ],
    platforms: [['https://designers.hubspot.com/inspire', 'Web', APP_TYPE.WEB]],
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
    name: 'Tunga',
    website: 'https://tunga.io',
    icon: [TungaIcon, 'text-tunga dark:text-inherit'],
    role: `${ROLES.LEAD_DEVELOPER}, ${ROLES.CONSULTANT}`,
    company: [
      'Tunga',
      'https://tunga.io',
      [TungaIcon, 'text-tunga dark:text-inherit'],
    ],
    platforms: [['https://tunga.io', 'Web', APP_TYPE.WEB]],
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
    name: 'Booya',
    website: 'https://booya.io',
    icon: [InboundLabsIcon, 'text-booya dark:text-inherit'],
    role: `${ROLES.LEAD_DEVELOPER}, ${ROLES.CONSULTANT}`,
    company: [
      'InboundLabs',
      'https://w.inboundlabs.co',
      [InboundLabsIcon, 'text-inboundlabs dark:text-inherit'],
    ],
    platforms: [
      ['https://go.booya.io', 'Admin Console', APP_TYPE.ADMIN_CONSOLE],
      [
        'https://www.npmjs.com/package/@inboundlabs/booya-ui',
        'JavaScript UI Library',
        APP_TYPE.LIBRARY,
      ],
      [
        'https://ecosystem.hubspot.com/marketplace/apps/marketing/cms/booya-225187',
        'HubSpot App',
        APP_TYPE.INTEGRATION,
      ],
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
  {
    name: 'HubSpot Code Gallery',
    website: 'https://designers.hubspot.com/code-gallery',
    icon: [HubspotIcon, 'text-hubspot dark:text-inherit'],
    role: `${ROLES.LEAD_DEVELOPER}, ${ROLES.CONSULTANT}`,
    company: [
      'HubSpot',
      'https://www.hubspot.com',
      [HubspotIcon, 'text-hubspot dark:text-inherit'],
    ],
    platforms: [
      ['https://designers.hubspot.com/code-gallery', 'Web', APP_TYPE.WEB],
    ],
    details:
      'A showcase of the open-source assets and projects our developer community is working on.',
    stack: [
      SKILLS.NODE_JS,
      SKILLS.EXPRESS_JS,
      SKILLS.MONGODB,
      SKILLS.REDIS,
      PRODUCTS.HUBSPOT_CMS,
    ],
    integrations: [PRODUCTS.GITHUB, PRODUCTS.SLACK, PRODUCTS.HUBSPOT],
    // More Links
    // INBOUND 2019: InboundLabs Presentation | https://docs.google.com/presentation/d/1PsBHgVyVyuA8PMCiDy6j8HbYPOOax-zq_3RAFipkc4k/edit?usp=sharing
    // TODO: Find youtube video for above presentation
  },
];

export const MY_EXPERIENCE: Array<ExperienceInput> = [
  {
    company: 'Freelance',
    role: BIO.OCCUPATION,
    location: `${BIO.LOCATION} (Remote)`,
    period: 'Present',
    details: 'Consulting and full-stack software development.',
  },
  {
    company: 'Grindery',
    role: `Co-founder & ${ROLES.CTO}`,
    location: 'Remote',
    period: '2019 - April/2022',
    website: 'https://www.grindery.io',
    details:
      'Grindery builds low/no-code middleware for Web3, as well as tools to put DAOs to work. ',
  },
  {
    company: 'Tunga',
    role: ROLES.CTO,
    location: `${LOCATION.AMSTERDAM} / ${LOCATION.KAMPALA} / ${LOCATION.LAGOS} (Remote)`,
    period: '2016 - 2019',
    website: 'https://tunga.io',
    details:
      'Tunga is a staff augmentation firm that works with African developers, allowing companies worldwide to add experienced software engineers to their teams within days via an online platform.',
  },
  {
    company: 'True African',
    role: `Senior ${ROLES.SOFTWARE_ENGINEER}`,
    location: `${LOCATION.KAMPALA} / ${LOCATION.NAIROBI}`,
    period: '2015 - 2016',
    website: 'https://www.trueafrican.com',
    details:
      'True African provides custom software solutions for financial services that addresses specific business needs, including payment gateways to all the leading banks in the region, collection platforms to the larger utility service providers and both individual and corporate mobile and online wallets.',
  },
  {
    company: 'Freelance',
    role: ROLES.SOFTWARE_ENGINEER,
    location: LOCATION.KAMPALA,
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
