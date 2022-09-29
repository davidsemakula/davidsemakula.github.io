import * as React from 'react';
import {
  BuildingOfficeIcon,
  ClockIcon,
  LinkIcon,
  MapPinIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { ExperienceInput } from '../../helpers/types';
import { StyledIconMd } from '../common/icons/containers';
import { A } from '../common/links';
import { ItemHeading, ItemSubTitle } from '../common/typography';

const Experience = ({
  company,
  role,
  location,
  period,
  website,
  details,
  ...otherProps
}: ExperienceInput) => (
  <div
    className="mb-6 last:mb-0"
    {...otherProps}
  >
    <p className="text-zinc-500 dark:text-zinc-500">
      <StyledIconMd icon={ClockIcon} /> {period}
    </p>
    <ItemHeading>
      <StyledIconMd icon={BuildingOfficeIcon} /> {company}
    </ItemHeading>
    <ItemSubTitle>
      <StyledIconMd icon={WrenchScrewdriverIcon} /> {role}
    </ItemSubTitle>
    {location ? (
      <p>
        <StyledIconMd icon={MapPinIcon} /> {location}
      </p>
    ) : null}
    {website ? (
      <p>
        <StyledIconMd icon={LinkIcon} /> <A href={website}>{website}</A>
      </p>
    ) : null}
    <p className="mt-2">{details}</p>
  </div>
);

export default Experience;
