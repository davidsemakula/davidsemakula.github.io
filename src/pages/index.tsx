import * as React from 'react';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CpuChipIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  LanguageIcon,
  MapPinIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { GithubIcon, TwitterIcon } from '../components/common/icons';
import {
  StyledIconLg,
  StyledIconMd,
} from '../components/common/icons/containers';
import { A } from '../components/common/links';
import { TagList } from '../components/common/tags';
import {
  SectionHeading,
  SubTitle,
  Title,
} from '../components/common/typography';
import Layout from '../components/layout';
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
          <StyledIconMd icon={MapPinIcon} /> {BIO.LOCATION}
        </div>
        <div>
          <StyledIconMd icon={EnvelopeIcon} />{' '}
          <A href={`mailto:${BIO.EMAIL}`}>{BIO.EMAIL}</A>
        </div>
        <div>
          <StyledIconMd icon={GlobeAltIcon} />{' '}
          <A href={`https://${BIO.WEBSITE}`}>{BIO.WEBSITE}</A>
        </div>
        <div>
          <StyledIconMd
            icon={GithubIcon}
            className="text-github dark:text-inherit"
          />{' '}
          <A
            href={`https://github.com/${BIO.GITHUB_USERNAME}`}
            rel="me noreferrer nofollow"
          >
            {BIO.GITHUB_USERNAME}
          </A>
        </div>
        {/*
        <div>
          <StyledIconMd
            icon={TwitterIcon}
            className="text-twitter dark:text-inherit"
          />{' '}
          <A
            href={`https://twitter.com/${BIO.TWITTER_USERNAME}`}
            rel="me noreferrer nofollow"
          >
            @{BIO.TWITTER_USERNAME}
          </A>
        </div>
        */}
      </SideContent>
    </Container>

    <Container>
      {/* Skills */}
      <SideContent>
        <SectionHeading>
          <StyledIconLg icon={CpuChipIcon} /> Skills
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
          <StyledIconLg icon={LanguageIcon} /> Languages
        </SectionHeading>
      </SideContent>
      <MainContent>
        <div className="mb-2">I speak:</div>

        <div>
          <TagList
            tags={MY_LANGUAGES}
            color={TAG_COLORS.BLUE}
          />
        </div>
      </MainContent>

      {/* Projects */}
      <SideContent>
        <SectionHeading>
          <StyledIconLg icon={RocketLaunchIcon} /> Projects
        </SectionHeading>
      </SideContent>
      <MainContent>
        <div className="mb-2">
          I have made significant contributions to the following projects:
        </div>

        {(MY_PROJECTS || []).map((item, idx) => (
          <Project
            {...item}
            key={`project-${idx}`}
          />
        ))}
      </MainContent>

      {/* Work Experience */}
      <SideContent>
        <SectionHeading>
          <StyledIconLg icon={BriefcaseIcon} /> Work Experience
        </SectionHeading>
      </SideContent>
      <MainContent>
        {(MY_EXPERIENCE || []).map((item, idx) => (
          <Experience
            {...item}
            key={`experience-${idx}`}
          />
        ))}
      </MainContent>

      {/* Education */}
      <SideContent>
        <h2 className="text-2xl font-medium">
          <StyledIconLg icon={AcademicCapIcon} /> Education
        </h2>
      </SideContent>
      <MainContent>
        {(MY_EDUCATION || []).map((item, idx) => (
          <Education
            {...item}
            key={`education-${idx}`}
          />
        ))}
      </MainContent>
    </Container>
  </Layout>
);

export const Head = () => <Seo title="Profile" />;

export default IndexPage;
