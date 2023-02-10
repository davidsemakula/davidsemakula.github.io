import * as React from 'react';
import { ReactElement } from 'react';
import {
  ClockIcon,
  LinkIcon,
  MapPinIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';
import { EducationInput } from '../../helpers/types';
import { StyledIcon } from '../common/icons/containers';
import { A } from '../common/links';
import { ItemHeading, ItemSubTitle } from '../common/typography';

const Education = ({
  name,
  award,
  location,
  period,
  website,
  details,
  ...rest
}: EducationInput): ReactElement => (
  <div
    className="mb-6 last:mb-0"
    {...rest}
  >
    <ItemHeading>{name}</ItemHeading>
    <ItemSubTitle>
      <StyledIcon
        icon={TrophyIcon}
        size="medium"
      />{' '}
      {award}
    </ItemSubTitle>
    {location ? (
      <div>
        <StyledIcon
          icon={MapPinIcon}
          size="medium"
        />{' '}
        {location}
      </div>
    ) : null}
    <div>
      <StyledIcon
        icon={ClockIcon}
        size="medium"
      />{' '}
      {period}
    </div>
    {website ? (
      <div>
        <StyledIcon
          icon={LinkIcon}
          size="medium"
        />{' '}
        <A href={website}>{website}</A>
      </div>
    ) : null}
    {details ? <div className="mt-2">{details}</div> : null}
  </div>
);

export default Education;
