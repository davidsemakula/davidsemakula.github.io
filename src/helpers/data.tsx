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
  PartnerType,
  ProjectInput,
  asCompanyRecord,
} from './types';

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
    location: LOCATION.SINGAPORE,
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
  COMPANIES.TMG,
  COMPANIES.TUNGA,
  COMPANIES.BUTTERFLYWORKS,
  COMPANIES.PRESSBOARD,
  COMPANIES.GRINDERY,
  COMPANIES.INBOUNDLABS,
].filter(Boolean);

export const BIO = {
  NAME: 'David Semakula',
  OCCUPATION: 'I write software, and design & analyze computational systems.',
  LOCATION: LOCATION.KAMPALA,
  EMAIL: 'hello@davidsemakula.com',
  WEBSITE: 'davidsemakula.com',
  GITHUB_USERNAME: 'davidsemakula',
  TWITTER_USERNAME: 'davidsemakula',
};

export const MY_LANGUAGES: Array<LANGUAGES> = [
  LANGUAGES.LUGANDA,
  LANGUAGES.ENGLISH,
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
  SKILLS.JAVA,
  // Libraries & Frameworks
  SKILLS.REACT_JS,
  SKILLS.FLUTTER,
  // Storage
  SKILLS.MONGODB,
  SKILLS.REDIS,
  {
    name: SKILLS.IPFS,
    color: web3Color,
  },
  // Paradigms
  SKILLS.GRAPHQL,
  // Infra
  SKILLS.DOCKER,
  SKILLS.KUBERNETES,
];

export const MY_PROJECTS: Array<ProjectInput> = [
  {
    name: 'Wamu',
    website: 'https://wamu.tech',
    role: ROLES.CREATOR,
    platforms: [
      {
        type: APP_TYPE.WEBSITE,
        url: 'https://wamu.tech/whitepaper',
        name: 'Whitepaper',
      },
      {
        type: APP_TYPE.WEBSITE,
        url: 'https://wamu.tech/specification',
        name: 'Technical Specification',
      },
      {
        type: APP_TYPE.LIBRARY,
        url: 'https://github.com/wamutech/wamu-rs',
        name: 'Rust Library',
      },
    ],
    details: (
      <>
        <p>
          A protocol and library for computation of{' '}
          <A
            href="https://en.wikipedia.org/wiki/Threshold_cryptosystem#Methodology"
            target="_blank"
          >
            threshold signatures
          </A>{' '}
          by multiple{' '}
          <A
            href="https://ethereum.org/en/decentralized-identity/#what-are-decentralized-identifiers"
            target="_blank"
          >
            decentralized identities
          </A>
          .
        </p>
      </>
    ),
    stack: [SKILLS.RUST],
    partners: [
      {
        type: PartnerType.FUNDING,
        name: 'Ethereum Foundation',
        url: 'https://esp.ethereum.foundation/',
        announcement:
          'https://blog.ethereum.org/2023/06/15/allocation-update-q1-23',
      },
    ],
  },
  {
    name: 'pallet-verifier',
    website: 'https://github.com/davidsemakula/pallet-verifier',
    role: ROLES.CREATOR,
    platforms: [
      {
        type: APP_TYPE.EXTENSION,
        url: 'https://github.com/davidsemakula/pallet-verifier',
        name: 'Rust Compiler Plugin',
      },
      {
        type: APP_TYPE.BINARY,
        url: 'https://github.com/davidsemakula/pallet-verifier',
        name: 'Cargo Subcommand',
      },
    ],
    details: (
      <>
        <p>
          A tool for detecting
          <A
            href="https://secure-contracts.com/not-so-smart-contracts/substrate"
            target="_blank"
          >
            {' '}
            common security vulnerabilities
          </A>{' '}
          and{' '}
          <A
            href="https://docs.substrate.io/build/troubleshoot-your-code/#unsafe-or-insecure-patterns"
            target="_blank"
          >
            insecure patterns
          </A>{' '}
          in{' '}
          <A
            href="https://docs.substrate.io/learn/runtime-development/#frame"
            target="_blank"
          >
            FRAME pallets
          </A>{' '}
          using{' '}
          <A
            href="https://en.wikipedia.org/wiki/Static_program_analysis"
            target="_blank"
          >
            static program analysis
          </A>{' '}
          techniques like{' '}
          <A
            href="https://en.wikipedia.org/wiki/Data-flow_analysis"
            target="_blank"
          >
            data-flow analysis
          </A>
          ,{' '}
          <A
            href="https://en.wikipedia.org/wiki/Abstract_interpretation"
            target="_blank"
          >
            abstract interpretation
          </A>{' '}
          and{' '}
          <A
            href="https://en.wikipedia.org/wiki/Symbolic_execution"
            target="_blank"
          >
            symbolic execution
          </A>
          .
        </p>
      </>
    ),
    stack: [SKILLS.RUST],
    integrations: [PRODUCTS.RUSTC, PRODUCTS.CARGO],
  },
  {
    name: 'ink! Analyzer',
    website: 'https://analyze.ink',
    role: ROLES.CREATOR,
    platforms: [
      {
        type: APP_TYPE.LIBRARY,
        url: 'https://crates.io/crates/ink-analyzer',
        name: 'Semantic Analyzer',
      },
      {
        type: APP_TYPE.BINARY,
        url: 'https://crates.io/crates/ink-lsp-server',
        name: 'Language Server',
      },
      {
        type: APP_TYPE.EXTENSION,
        url: 'https://github.com/ink-analyzer/ink-vscode',
        name: 'VS Code Extension',
      },
    ],
    details: (
      <>
        <p>
          A collection of modular and reusable libraries and tools for{' '}
          <A
            href="https://en.wikipedia.org/wiki/Compiler#Front_end"
            target="_blank"
          >
            semantic analysis
          </A>{' '}
          of{' '}
          <A
            href="https://use.ink/"
            target="_blank"
          >
            ink!
          </A>{' '}
          smart contracts.
        </p>
      </>
    ),
    stack: [SKILLS.RUST, SKILLS.TYPESCRIPT],
    integrations: [PRODUCTS.VS_CODE],
    partners: [
      {
        type: PartnerType.FUNDING,
        name: 'Web3 Foundation',
        url: 'https://web3.foundation/',
        announcement:
          'https://medium.com/web3foundation/web3-foundation-grants-wave-17-recipients-aa33c5630e9c',
      },
    ],
  },
  {
    name: 'cggmp-threshold-ecdsa',
    website: 'https://github.com/webb-tools/cggmp-threshold-ecdsa/',
    role: {
      name: `Core ${ROLES.CONTRIBUTOR}`,
      ref: 'https://github.com/webb-tools/cggmp-threshold-ecdsa/pulls?q=is%3Apr+author%3Adavidsemakula',
    },
    platforms: [
      {
        type: APP_TYPE.LIBRARY,
        url: 'https://github.com/webb-tools/cggmp-threshold-ecdsa/',
        name: 'Rust Library',
      },
    ],
    details: (
      <>
        <p>
          A{' '}
          <A
            href="https://www.rust-lang.org"
            target="_blank"
          >
            Rust
          </A>{' '}
          implementation of{' '}
          <A
            href="https://eprint.iacr.org/2021/060.pdf"
            target="_blank"
          >
            CGGMP20
          </A>{' '}
          threshold signature protocols.
        </p>
      </>
    ),
    stack: [SKILLS.RUST],
  },
  {
    name: 'Mukutu Router',
    website: 'https://mukutu.davidsemakula.com/',
    role: ROLES.CREATOR,
    platforms: [
      {
        type: APP_TYPE.GNOSIS_SAFE_APP,
        url: 'https://app.safe.global/share/safe-app?appUrl=https://mukutu.davidsemakula.com&chain=eth',
        name: '(Gnosis) Safe App',
      },
    ],
    details: (
      <>
        <p>
          A{' '}
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
  },
  {
    name: `${COMPANIES.HUBSPOT.name} Inspire`,
    website: 'https://designers.hubspot.com/inspire',
    icon: COMPANIES.HUBSPOT.icon,
    role: `former ${ROLES.TECHNICAL_LEAD}`,
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
    role: `former ${ROLES.TECHNICAL_LEAD}`,
    platforms: [
      {
        type: APP_TYPE.WEB,
        url: COMPANIES.TUNGA.website,
      },
    ],
    details:
      'An online staff augmentation platform that connects companies worldwide to experienced African software engineers.',
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
          cross-chain communication protocol.
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
    period: '2022 - Present',
    remote: true,
    details: (
      <>
        <p>I write software, and design & analyze computational systems.</p>
        <p>
          Some of my independent projects are funded by industry-leading
          organizations like the{' '}
          <A href="https://blog.ethereum.org/2023/06/15/allocation-update-q1-23">
            Ethereum Foundation
          </A>{' '}
          and the{' '}
          <A href="https://medium.com/web3foundation/web3-foundation-grants-wave-17-recipients-aa33c5630e9c">
            Web3 Foundation
          </A>
          .
        </p>
      </>
    ),
  },
  {
    company: COMPANIES.GRINDERY,
    role: `${ROLES.CO_FOUNDER} & ${ROLES.CTO}`,
    period: '2019 - Apr/2022',
    remote: true,
    details:
      'Grindery builds low/no-code middleware for the decentralized web.',
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
          that addresses specific business needs for leading banks and large
          utility service providers.
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
    period: 'Class of 2012',
    website: 'https://cis.mak.ac.ug',
    details: 'Graduated with first-class honors.',
  },
];
