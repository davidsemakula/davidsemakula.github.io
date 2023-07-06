import * as React from 'react';
import { ReactElement } from 'react';
import {
  LifebuoyIcon,
  MegaphoneIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { TAG_COLORS } from '../../helpers/constants';
import {
  GeneralAwardInput,
  GeneralPartnerInput,
  GeneralPlatformInput,
  PartnerType,
  PressInput,
  ProjectInput,
} from '../../helpers/types';
import {
  cleanAwardObject,
  cleanCompanyObject,
  cleanPartnerObject,
  cleanPlatformObject,
  getAppTypeIcon,
  isNonEmptyArray,
} from '../../helpers/utils';
import { AwardIcon } from '../common/icons';
import { StyledIcon } from '../common/icons/containers';
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
  partners,
  stack,
  integrations,
  press,
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
          <StyledIcon
            icon={WrenchScrewdriverIcon}
            size="medium"
          />{' '}
          {role}
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
                <StyledIcon
                  icon={getAppTypeIcon(type)}
                  size="medium"
                />{' '}
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
            <StyledIcon
              icon={AwardIcon}
              size="medium"
            />{' '}
            {url ? <A href={url}>{name}</A> : name}
          </div>
        );
      })}
      {(partners || []).map((item: GeneralPartnerInput, idx: number) => {
        const { type, name, url, announcement } = cleanPartnerObject(item);
        return (
          <div key={`partner-link-${idx}`}>
            <StyledIcon
              icon={LifebuoyIcon}
              size="medium"
            />{' '}
            {type === PartnerType.FUNDING ? 'Funded by: ' : ''}
            {url ? <A href={url}>{name}</A> : name}
            {announcement ? (
              <span>
                {' '}
                (<A href={announcement}>announcement</A>)
              </span>
            ) : (
              ''
            )}
          </div>
        );
      })}
      {(press || []).map(({ name, url }: PressInput, idx: number) => {
        return (
          <div key={`press-link-${idx}`}>
            <StyledIcon
              icon={MegaphoneIcon}
              size="medium"
            />{' '}
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
