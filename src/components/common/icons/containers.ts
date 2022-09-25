import { ReactElement } from 'react';
import withElement from '../withElement';

export const withStyledIcon = (
  className: string
): (({
  icon,
  ...otherProps
}: {
  icon: string;
  className: string;
}) => ReactElement) => {
  return ({
    icon,
    ...otherProps
  }: {
    icon: string;
    className: string;
  }): ReactElement =>
    withElement(
      icon,
      [className, 'inline-block'].filter(Boolean).join(' ')
    )(otherProps);
};

type StyledIconElement = ReactElement<{ icon: string }> | any;

export const StyledIconSm: StyledIconElement = withStyledIcon('w-2 h-2');

export const StyledIconMd: StyledIconElement = withStyledIcon('w-4 h-4');

export const StyledIconLg: StyledIconElement = withStyledIcon('w-6 h-6');

export const StyledIconXl: StyledIconElement = withStyledIcon('w-8 h-8');
