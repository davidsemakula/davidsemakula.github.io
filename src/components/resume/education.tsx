import * as React from 'react';
import {
  BuildingLibraryIcon,
  ClockIcon,
  MapPinIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';
import { GlobeAltIcon } from '@heroicons/react/24/solid';
import { EducationInput } from '../../helpers/types';
import { StyledIconMd } from '../common/icons/containers';
import { A } from '../common/links';
import { ItemHeading } from '../common/typography';

const Education = ({
  name,
  award,
  location,
  period,
  website,
  details,
  ...otherProps
}: EducationInput) => (
  <div
    className="mb-6 last:mb-0"
    {...otherProps}
  >
    <ItemHeading>
      <StyledIconMd icon={BuildingLibraryIcon} /> {name}
    </ItemHeading>
    <p>
      <StyledIconMd icon={TrophyIcon} /> {award}
    </p>
    {location ? (
      <p>
        <StyledIconMd icon={MapPinIcon} /> {location}
      </p>
    ) : null}
    <p>
      <StyledIconMd icon={ClockIcon} /> {period}
    </p>
    {website ? (
      <p>
        <StyledIconMd icon={GlobeAltIcon} /> <A href={website}>{website}</A>
      </p>
    ) : null}
    {details ? <p className="mt-2">{details}</p> : null}
  </div>
);

export default Education;
