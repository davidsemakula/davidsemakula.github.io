import * as React from 'react';
import { ReactElement } from 'react';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { TAG_COLORS } from '../../helpers/constants';
import {
  GeneralAwardInput,
  GeneralPlatformInput,
  ProjectInput,
} from '../../helpers/types';
import {
  cleanAwardObject,
  cleanCompanyObject,
  cleanPlatformObject,
  getAppTypeIcon,
  isNonEmptyArray,
} from '../../helpers/utils';
import { AwardIcon } from '../common/icons';
import { StyledIconMd } from '../common/icons/containers';
import { A } from '../common/links';
import { LabeledTagList } from '../common/tags';
import { ItemHeading, ItemSubTitle } from '../common/typography';

const Project = ({
  name,
  website,
  icon,
  company,
  role,
  platforms,
  details,
  awards,
  stack,
  integrations,
  ...rest
}: ProjectInput): ReactElement => {
  const { name: companyName, website: companyWebsite } =
    cleanCompanyObject(company) || {};
  return (
    <div
      className="mb-6 last:mb-0"
      {...rest}
    >
      <ItemHeading>{website ? <A href={website}>{name}</A> : name}</ItemHeading>
      {role ? (
        <ItemSubTitle>
          <StyledIconMd icon={WrenchScrewdriverIcon} /> {role}
        </ItemSubTitle>
      ) : null}
      {platforms ? (
        <div>
          {(platforms || []).map((item: GeneralPlatformInput, idx: number) => {
            const { type, url, name } = cleanPlatformObject(item);
            const platformName = name || type;
            return (
              <span
                className="inline-block mr-2"
                key={`project-link-${idx}`}
              >
                <StyledIconMd icon={getAppTypeIcon(type)} />{' '}
                {url ? <A href={url}>{platformName || url}</A> : platformName}
              </span>
            );
          })}
        </div>
      ) : null}
      {companyName ? (
        <div>
          Built for:{' '}
          {companyWebsite ? (
            <A href={companyWebsite}>{companyName}</A>
          ) : (
            companyName
          )}
        </div>
      ) : null}
      {(awards || []).map((item: GeneralAwardInput, idx: number) => {
        const { name, url } = cleanAwardObject(item);
        return (
          <div key={`award-link-${idx}`}>
            <StyledIconMd icon={AwardIcon} />{' '}
            {url ? <A href={url}>{name}</A> : name}
          </div>
        );
      })}
      {details ? <div className="mt-2">{details}</div> : null}
      {isNonEmptyArray(stack) ? (
        <LabeledTagList
          label="Built with:"
          tags={stack}
          color={TAG_COLORS.INDIGO}
        />
      ) : null}
      {isNonEmptyArray(integrations) ? (
        <LabeledTagList
          label="Integrates with:"
          tags={integrations}
          color={TAG_COLORS.VIOLET}
        />
      ) : null}
    </div>
  );
};

export default Project;
