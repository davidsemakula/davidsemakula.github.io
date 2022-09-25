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
        <p>{BIO.BYLINE}</p>
      </MainContent>
      <SideContent header={true}>
        <p>
          <StyledIconMd icon={MapPinIcon} /> {BIO.LOCATION}
        </p>
        <p>
          <StyledIconMd icon={EnvelopeIcon} />{' '}
          <A href={`mailto:${BIO.EMAIL}`}>{BIO.EMAIL}</A>
        </p>
        <p>
          <StyledIconMd icon={GlobeAltIcon} />{' '}
          <A href={`https://${BIO.WEBSITE}`}>{BIO.WEBSITE}</A>
        </p>
        <p>
          <StyledIconMd
            icon={GithubIcon}
            className="text-github dark:text-inherit"
          />{' '}
          <A href={`https://github.com/${BIO.GITHUB_USERNAME}`}>
            {BIO.GITHUB_USERNAME}
          </A>
        </p>
        <p>
          <StyledIconMd
            icon={TwitterIcon}
            className="text-twitter dark:text-inherit"
          />{' '}
          <A href={`https://twitter.com/${BIO.TWITTER_USERNAME}`}>
            @{BIO.TWITTER_USERNAME}
          </A>
        </p>
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
        <p className="mb-2">I build full stack software with:</p>

        <p>
          <TagList tags={MY_SKILLS} />
        </p>
      </MainContent>

      {/* Languages */}
      <SideContent>
        <SectionHeading>
          <StyledIconLg icon={LanguageIcon} /> Languages
        </SectionHeading>
      </SideContent>
      <MainContent>
        <p className="mb-2">I speak:</p>

        <p>
          <TagList
            tags={MY_LANGUAGES}
            color={TAG_COLORS.BLUE}
          />
        </p>
      </MainContent>

      {/* Projects */}
      <SideContent>
        <SectionHeading>
          <StyledIconLg icon={RocketLaunchIcon} /> Projects
        </SectionHeading>
      </SideContent>
      <MainContent>
        <p className="mb-2">
          I've made significant contributions to the following projects:
        </p>

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

export const Head = () => <Seo title="Résumé" />;

export default IndexPage;
