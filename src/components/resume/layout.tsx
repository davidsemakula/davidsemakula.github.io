import React, { HTMLAttributes, ReactElement } from 'react';

export function Container({
  className,
  ...rest
}: HTMLAttributes<any>): ReactElement {
  return (
    <div
      {...rest}
      className={[
        `grid gap-x-4 gap-y-6 grid-cols-1 mb-8 last:mb-0 sm:grid-cols-3 sm:mb-6`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  );
}

export function MainContent({
  className,
  ...rest
}: HTMLAttributes<any>): ReactElement {
  return (
    <div
      {...rest}
      className={[`col-span-1 sm:col-span-2 -mt-5 sm:mt-0`, className]
        .filter(Boolean)
        .join(' ')}
    />
  );
}

export function SideContent({
  className,
  ...rest
}: HTMLAttributes<any>): ReactElement {
  return (
    <div
      {...rest}
      className={[`col-span-1`, className].filter(Boolean).join(' ')}
    />
  );
}
