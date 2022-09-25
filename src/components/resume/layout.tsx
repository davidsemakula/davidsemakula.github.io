import { ReactElement } from 'react';
import withElement from '../common/withElement';

type HeaderElement = ReactElement<{ header?: boolean }> | any;

export const Container: HeaderElement = withElement(
  'div',
  props =>
    `grid gap-x-4 gap-y-6 grid-cols-1 mb-8 last:mb-0 ${
      props.header ? 'lg:grid-cols-3 lg:mb-6' : 'sm:grid-cols-3 sm:mb-6'
    }`
);

export const MainContent: HeaderElement = withElement(
  'div',
  props =>
    `col-span-1 ${
      props.header ? 'lg:col-span-2' : 'sm:col-span-2 -mt-5 sm:mt-0'
    }`
);

export const SideContent: HeaderElement = withElement(
  'div',
  props => `col-span-1 ${props.header ? '-mt-5 lg:mt-0' : ''}`
);
