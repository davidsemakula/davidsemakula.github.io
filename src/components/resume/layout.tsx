import { ComponentType, HTMLAttributes } from 'react';
import withElement from '../common/withElement';

interface HeaderAttributes<T> extends HTMLAttributes<T> {
  header?: boolean;
}

type HeaderComponentType = ComponentType<HeaderAttributes<{}>>;

export const Container: HeaderComponentType = withElement(
  'div',
  props =>
    `grid gap-x-4 gap-y-6 grid-cols-1 mb-8 last:mb-0 ${
      props.header ? 'lg:grid-cols-3 lg:mb-6' : 'sm:grid-cols-3 sm:mb-6'
    }`
);

export const MainContent: HeaderComponentType = withElement(
  'div',
  props =>
    `col-span-1 ${
      props.header ? 'lg:col-span-2' : 'sm:col-span-2 -mt-5 sm:mt-0'
    }`
);

export const SideContent: HeaderComponentType = withElement(
  'div',
  props => `col-span-1 ${props.header ? '-mt-5 lg:mt-0' : ''}`
);
