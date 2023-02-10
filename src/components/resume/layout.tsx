import React, { HTMLAttributes, ReactElement } from 'react';

interface HeaderAttributes<T> extends HTMLAttributes<T> {
  header?: boolean;
}

export function Container({
  header,
  className,
  ...rest
}: HeaderAttributes<any>): ReactElement {
  return (
    <div
      {...rest}
      className={[
        `grid gap-x-4 gap-y-6 grid-cols-1 mb-8 last:mb-0 ${
          header ? 'lg:grid-cols-3 lg:mb-6' : 'sm:grid-cols-3 sm:mb-6'
        }`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  );
}

export function MainContent({
  header,
  className,
  ...rest
}: HeaderAttributes<any>): ReactElement {
  return (
    <div
      {...rest}
      className={[
        `col-span-1 ${
          header ? 'lg:col-span-2' : 'sm:col-span-2 -mt-5 sm:mt-0'
        }`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  );
}

export function SideContent({
  header,
  className,
  ...rest
}: HeaderAttributes<any>): ReactElement {
  return (
    <div
      {...rest}
      className={[`col-span-1 ${header ? '-mt-5 lg:mt-0' : ''}`, className]
        .filter(Boolean)
        .join(' ')}
    />
  );
}
