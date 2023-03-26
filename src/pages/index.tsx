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
import { GithubIcon, TwitterIcon } from '../components/common/icons';
import { StyledIcon } from '../components/common/icons/containers';
import { A } from '../components/common/links';
import List from '../components/common/list';
import { TagList } from '../components/common/tags';
import {
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
  MY_BOUNTIES,
  MY_EDUCATION,
  MY_EXPERIENCE,
  MY_LANGUAGES,
  MY_PROJECTS,
  MY_SKILLS,
} from '../helpers/data';

const IndexPage = () => (
  <Layout>
    <Container header={true}>
      {/* Bio */}
      <MainContent header={true}>
        <Title>{BIO.NAME}</Title>
        <SubTitle>{BIO.OCCUPATION}</SubTitle>
        <div>{BIO.BYLINE}</div>
      </MainContent>
      <SideContent header={true}>
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
        <div>
          <StyledIcon
            icon={TwitterIcon}
            className="text-twitter dark:text-inherit"
            size="medium"
          />{' '}
          <A
            href={`https://twitter.com/${BIO.TWITTER_USERNAME}`}
            rel="me noreferrer nofollow"
          >
            @{BIO.TWITTER_USERNAME}
          </A>
        </div>
      </SideContent>
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
        <div className="mb-2">I build full stack software with:</div>

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
          I have made significant contributions to the following projects:
        </div>

        <List
          items={MY_PROJECTS}
          component={Project}
          max={4}
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
