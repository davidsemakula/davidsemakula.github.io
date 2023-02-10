import * as React from 'react';
import { ReactElement } from 'react';
import {
  BellAlertIcon,
  ClockIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { TAG_COLORS } from '../../helpers/constants';
import { BountyInput } from '../../helpers/types';
import { isNonEmptyArray } from '../../helpers/utils';
import { StyledIcon } from '../common/icons/containers';
import { A } from '../common/links';
import { LabeledTagList } from '../common/tags';
import { ItemHeading } from '../common/typography';

const Bounty = ({
  name,
  website,
  location,
  date,
  severity,
  details,
  stack,
  ...rest
}: BountyInput): ReactElement => {
  return (
    <div
      className="mb-6 last:mb-0"
      {...rest}
    >
      <ItemHeading>{website ? <A href={website}>{name}</A> : name}</ItemHeading>
      {location ? (
        <div>
          <StyledIcon
            icon={MapPinIcon}
            size="medium"
          />{' '}
          {location || ''}
          {location ? ' ' : ''}
        </div>
      ) : null}
      {date ? (
        <div>
          <StyledIcon
            icon={ClockIcon}
            size="medium"
          />{' '}
          {date}
        </div>
      ) : null}
      {severity ? (
        <div>
          <StyledIcon
            icon={BellAlertIcon}
            size="medium"
          />{' '}
          Severity: {severity}
        </div>
      ) : null}
      {details ? <div className="mt-2">{details}</div> : null}
      {isNonEmptyArray(stack) ? (
        <LabeledTagList
          label="Built with:"
          tags={stack}
          color={TAG_COLORS.INDIGO}
        />
      ) : null}
    </div>
  );
};

export default Bounty;
