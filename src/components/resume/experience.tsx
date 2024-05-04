import * as React from 'react';
import { ReactElement } from 'react';
import {
  ClockIcon,
  LinkIcon,
  MapPinIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { ExperienceInput } from '../../helpers/types';
import { cleanCompanyObject } from '../../helpers/utils';
import { StyledIcon } from '../common/icons/containers';
import { A } from '../common/links';
import { ItemHeading, ItemSubTitle } from '../common/typography';

const Experience = ({
  company,
  role,
  period,
  remote = false,
  details,
  ...rest
}: ExperienceInput): ReactElement => {
  const { name, website, location } = cleanCompanyObject(company);
  return (
    <div
      className="mb-6 last:mb-0"
      {...rest}
    >
      <div className="text-zinc-500 dark:text-zinc-400">
        <StyledIcon
          icon={ClockIcon}
          size="medium"
        />{' '}
        {period}
      </div>
      <ItemHeading>{name}</ItemHeading>
      {role ? (
        <ItemSubTitle>
          <StyledIcon
            icon={WrenchScrewdriverIcon}
            size="medium"
          />{' '}
          {role}
        </ItemSubTitle>
      ) : null}
      {location || remote ? (
        <div>
          <StyledIcon
            icon={MapPinIcon}
            size="medium"
          />{' '}
          {location || ''}
          {location ? ' ' : ''}
          {remote ? (location ? '(Remote)' : 'Remote') : null}
        </div>
      ) : null}
      {website ? (
        <div>
          <StyledIcon
            icon={LinkIcon}
            size="medium"
          />{' '}
          <A href={website}>{website}</A>
        </div>
      ) : null}
      <div className="mt-2">{details}</div>
    </div>
  );
};

export default Experience;
