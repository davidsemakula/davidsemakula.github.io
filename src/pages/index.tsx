import * as React from 'react';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  BugAntIcon,
  CpuChipIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  LanguageIcon,
  MapPinIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { GithubIcon } from '../components/common/icons';
import { StyledIcon } from '../components/common/icons/containers';
import { A } from '../components/common/links';
import List from '../components/common/list';
import { TagList } from '../components/common/tags';
import {
  ItemHeading,
  SectionHeading,
  SubTitle,
  Title,
} from '../components/common/typography';
import Layout from '../components/layout';
import Bounty from '../components/resume/bounty';
import Education from '../components/resume/education';
import Experience from '../components/resume/experience';
import {
  Container,
  MainContent,
  SideContent,
} from '../components/resume/layout';
import Project from '../components/resume/project';
import Seo from '../components/seo';
import { TAG_COLORS } from '../helpers/constants';
import {
  BIO,
  HIGHLIGHTED_COMPANIES,
  MY_BOUNTIES,
  MY_EDUCATION,
  MY_EXPERIENCE,
  MY_LANGUAGES,
  MY_PROJECTS,
  MY_SKILLS,
} from '../helpers/data';
import { GeneralCompanyInput } from '../helpers/types';
import { cleanCompanyObject } from '../helpers/utils';

const IndexPage = () => (
  <Layout>
    <Container className="mb-4">
      {/* Bio */}
      <SideContent>
        <Title>{BIO.NAME}</Title>
        <SubTitle>{BIO.OCCUPATION}</SubTitle>
        <div>
          <StyledIcon
            icon={MapPinIcon}
            size="medium"
          />{' '}
          {BIO.LOCATION}
        </div>
        <div>
          <StyledIcon
            icon={EnvelopeIcon}
            size="medium"
          />{' '}
          <A href={`mailto:${BIO.EMAIL}`}>{BIO.EMAIL}</A>
        </div>
        <div>
          <StyledIcon
            icon={GlobeAltIcon}
            size="medium"
          />{' '}
          <A href={`https://${BIO.WEBSITE}`}>{BIO.WEBSITE}</A>
        </div>
        <div>
          <StyledIcon
            icon={GithubIcon}
            className="text-github dark:text-inherit"
            size="medium"
          />{' '}
          <A
            href={`https://github.com/${BIO.GITHUB_USERNAME}`}
            rel="me noreferrer nofollow"
          >
            {BIO.GITHUB_USERNAME}
          </A>
        </div>
      </SideContent>
      <MainContent>
        <ItemHeading className="mt-2">Hello | Oli otya 👋</ItemHeading>
        <p className="my-2">🔭 I'm currently working on:</p>
        <p className="mb-2">
          <h3>
            🔑{' '}
            <A
              href="https://en.wikipedia.org/wiki/Cryptography"
              target="_blank"
            >
              Cryptographic
            </A>{' '}
            protocols and libraries
          </h3>
          <ul className="list-disc list-inside space-y-1 pl-5">
            <li>
              <A
                href="https://wamu.tech"
                target="_blank"
              >
                🚧 Wamu
              </A>
              <ul className="list-disc list-inside pl-6">
                <li>
                  📖 A protocol and library for computation of{' '}
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
                </li>
                <li>
                  🌱 Funded by:{' '}
                  <A
                    href="https://esp.ethereum.foundation/"
                    target="_blank"
                  >
                    Ethereum Foundation
                  </A>{' '}
                  (
                  <A
                    href="https://blog.ethereum.org/2023/06/15/allocation-update-q1-23"
                    target="_blank"
                  >
                    announcement
                  </A>
                  )
                </li>
              </ul>
            </li>
          </ul>
        </p>
        <p className="mb-2">
          <h3>
            ⚒️ Tools for programming languages and{' '}
            <A
              href="https://en.wikipedia.org/wiki/Program_analysis"
              target="_blank"
            >
              program analysis
            </A>
          </h3>
          <ul className="list-disc list-inside space-y-1 pl-5">
            <li>
              <A
                href="https://github.com/davidsemakula/pallet-verifier"
                target="_blank"
              >
                🚧 pallet-verifier
              </A>
              <ul className="list-disc list-inside pl-6">
                <li>
                  📖 A tool for detecting
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
                </li>
              </ul>
            </li>
            <li>
              <A
                href="https://analyze.ink"
                target="_blank"
              >
                🚀 ink! Analyzer
              </A>
              <ul className="list-disc list-inside pl-6">
                <li>
                  📖 A collection of modular and reusable libraries and tools
                  for{' '}
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
                </li>
                <li>
                  🌱 Funded by:{' '}
                  <A
                    href="https://web3.foundation/"
                    target="_blank"
                  >
                    Web3 Foundation
                  </A>{' '}
                  (
                  <A
                    href="https://medium.com/web3foundation/web3-foundation-grants-wave-17-recipients-aa33c5630e9c"
                    target="_blank"
                  >
                    announcement
                  </A>
                  )
                </li>
              </ul>
            </li>
            <li>
              I independently make{' '}
              <A
                href="https://github.com/rust-lang/rust-analyzer/pulls?q=is%3Apr+author%3Adavidsemakula"
                target="_blank"
              >
                contributions
              </A>{' '}
              to{' '}
              <A
                href="https://github.com/rust-lang/rust-analyzer"
                target="_blank"
              >
                rust-analyzer
              </A>{' '}
              - A Rust compiler front-end for IDEs.
            </li>
          </ul>
        </p>
        <p className="mb-2">
          I’ve previously worked as a technical lead on projects for{' '}
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
        <p>
          ⚡ I hold a{' '}
          <A
            href="https://cis.mak.ac.ug/"
            target="_blank"
          >
            BSc in Computer Science
          </A>
          .
        </p>
      </MainContent>
    </Container>

    <Container>
      {/* Skills */}
      <SideContent>
        <SectionHeading>
          <StyledIcon
            icon={CpuChipIcon}
            size="large"
          />{' '}
          Skills
        </SectionHeading>
      </SideContent>
      <MainContent>
        <div className="mb-2">I build software with:</div>

        <div>
          <TagList tags={MY_SKILLS} />
        </div>
      </MainContent>

      {/* Languages */}
      <SideContent>
        <SectionHeading>
          <StyledIcon
            icon={LanguageIcon}
            size="large"
          />{' '}
          Languages
        </SectionHeading>
      </SideContent>
      <MainContent>
        <div className="mb-2">I speak:</div>

        <div>
          <TagList
            tags={MY_LANGUAGES}
            color={TAG_COLORS.VIOLET}
          />
        </div>
      </MainContent>

      {/* Projects */}
      <SideContent>
        <SectionHeading>
          <StyledIcon
            icon={RocketLaunchIcon}
            size="large"
          />{' '}
          Projects
        </SectionHeading>
      </SideContent>
      <MainContent>
        <div className="mb-2">
          <p>I've made significant contributions to the following projects:</p>
          <p>(NOTE: This is not an exhaustive list.)</p>
        </div>

        <List
          items={MY_PROJECTS}
          component={Project}
          max={5}
        />
      </MainContent>

      {/* Bug Bounties */}
      <SideContent>
        <SectionHeading>
          <StyledIcon
            icon={BugAntIcon}
            size="large"
          />{' '}
          Bug Bounties
        </SectionHeading>
      </SideContent>
      <MainContent>
        <div className="mb-2">
          I've discovered and ethically reported flaws and/or vulnerabilities in
          the following projects through their respective bug bounty programs:
        </div>

        <List
          items={MY_BOUNTIES}
          component={Bounty}
        />
      </MainContent>

      {/* Work Experience */}
      <SideContent>
        <SectionHeading>
          <StyledIcon
            icon={BriefcaseIcon}
            size="large"
          />{' '}
          Work Experience
        </SectionHeading>
      </SideContent>
      <MainContent>
        <List
          items={MY_EXPERIENCE}
          component={Experience}
          max={3}
        />
      </MainContent>

      {/* Education */}
      <SideContent>
        <h2 className="text-2xl font-medium">
          <StyledIcon
            icon={AcademicCapIcon}
            size="large"
          />{' '}
          Education
        </h2>
      </SideContent>
      <MainContent>
        <List
          items={MY_EDUCATION}
          component={Education}
        />
      </MainContent>
    </Container>
  </Layout>
);

export const Head = () => <Seo title="Profile" />;

export default IndexPage;
