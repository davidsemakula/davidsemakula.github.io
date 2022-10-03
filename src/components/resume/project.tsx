import * as React from 'react';
import {
  BuildingOfficeIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { TAG_COLORS } from '../../helpers/constants';
import { ProjectInput } from '../../helpers/types';
import {
  destructureListableValue,
  getAppTypeIcon,
  isNonEmptyArray,
} from '../../helpers/utils';
import { AwardIcon } from '../common/icons';
import { StyledIconLg, StyledIconMd } from '../common/icons/containers';
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
  ...otherProps
}: ProjectInput) => {
  const [iconElement, iconClassName] = destructureListableValue(icon);
  const [companyName, companyUrl, companyLogo] =
    destructureListableValue(company);
  const [companyLogoElement, companyLogoClassName] =
    destructureListableValue(companyLogo);
  return (
    <div
      className="mb-6 last:mb-0"
      {...otherProps}
    >
      <ItemHeading>
        <StyledIconLg
          icon={iconElement || LightBulbIcon}
          className={iconClassName}
        />{' '}
        {website ? <A href={website}>{name}</A> : name}
      </ItemHeading>
      {role ? (
        <ItemSubTitle>
          <StyledIconMd icon={WrenchScrewdriverIcon} /> {role}
        </ItemSubTitle>
      ) : null}
      {platforms ? (
        <p>
          {(platforms || []).map((item, idx) => {
            const [url, name, type] = destructureListableValue(item);
            return (
              <span
                className="inline-block mr-2"
                key={`project-link-${idx}`}
              >
                <StyledIconMd icon={getAppTypeIcon(type)} />{' '}
                {url ? <A href={url}>{name || url}</A> : name}
              </span>
            );
          })}
        </p>
      ) : null}
      {companyName ? (
        <p>
          Built for:{' '}
          <StyledIconMd
            icon={companyLogoElement || BuildingOfficeIcon}
            className={companyLogoClassName}
          />{' '}
          {companyUrl ? <A href={companyUrl}>{companyName}</A> : companyName}
        </p>
      ) : null}
      {(awards || []).map((item, idx) => {
        const [name, url] = destructureListableValue(item);
        return (
          <p>
            <StyledIconMd icon={AwardIcon} />{' '}
            {url ? <A href={url}>{name}</A> : name}
          </p>
        );
      })}
      {details ? <p className="mt-2">{details}</p> : null}
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
          color={TAG_COLORS.BLUE}
        />
      ) : null}
    </div>
  );
};

export default Project;
