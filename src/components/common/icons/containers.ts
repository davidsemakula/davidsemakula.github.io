import { ComponentType, HTMLAttributes, ReactElement } from 'react';
import withElement from '../withElement';

interface StyledIconAttributes<T> extends HTMLAttributes<T> {
  icon: ComponentType<any>;
}

type StyledIconComponentType = ComponentType<StyledIconAttributes<{}>>;

export const withStyledIcon = (className: string): StyledIconComponentType => {
  return ({ icon, ...rest }: StyledIconAttributes<{}>): ReactElement => {
    return withElement(
      icon,
      [className, 'inline-block'].filter(Boolean).join(' ')
    )(rest);
  };
};

export const StyledIconSm = withStyledIcon('w-2 h-2');

export const StyledIconMd = withStyledIcon('w-4 h-4');

export const StyledIconLg = withStyledIcon('w-6 h-6');

export const StyledIconXl = withStyledIcon('w-8 h-8');
