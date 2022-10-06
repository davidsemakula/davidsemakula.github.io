import * as React from 'react';
import { ReactElement } from 'react';
import {
  BuildingOfficeIcon,
  ClockIcon,
  LinkIcon,
  MapPinIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { ExperienceInput } from '../../helpers/types';
import { cleanCompanyObject } from '../../helpers/utils';
import { StyledIconMd } from '../common/icons/containers';
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
      <div className="text-zinc-500 dark:text-zinc-500">
        <StyledIconMd icon={ClockIcon} /> {period}
      </div>
      <ItemHeading>
        <StyledIconMd icon={BuildingOfficeIcon} /> {name}
      </ItemHeading>
      <ItemSubTitle>
        <StyledIconMd icon={WrenchScrewdriverIcon} /> {role}
      </ItemSubTitle>
      {location || remote ? (
        <div>
          <StyledIconMd icon={MapPinIcon} /> {location || ''}
          {location ? ' ' : ''}
          {remote ? (location ? '(Remote)' : 'Remote') : null}
        </div>
      ) : null}
      {website ? (
        <div>
          <StyledIconMd icon={LinkIcon} /> <A href={website}>{website}</A>
        </div>
      ) : null}
      <div className="mt-2">{details}</div>
    </div>
  );
};

export default Experience;
