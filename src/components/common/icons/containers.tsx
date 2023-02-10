import React, { ComponentType, HTMLAttributes, ReactElement } from 'react';

interface StyledIconAttributes<T> extends HTMLAttributes<T> {
  icon: ComponentType<any>;
  size?: 'small' | 'medium' | 'large' | 'xl';
}

const sizeToClassNameMap = {
  small: 'w-2 h-2',
  medium: 'w-4 h-4',
  large: 'w-6 h-6',
  xl: 'w-8 h-8',
};

export function StyledIcon({
  icon: Icon,
  size = 'medium',
  className,
  ...rest
}: StyledIconAttributes<any>): ReactElement {
  return (
    <Icon
      {...rest}
      className={[
        sizeToClassNameMap[size] ?? 'w-4 h-4',
        'inline-block',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  );
}
