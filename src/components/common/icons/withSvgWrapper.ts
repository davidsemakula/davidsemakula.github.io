import { ReactElement, ReactNode } from 'react';
import withElement from '../withElement';

const withSvgWrapper = (
  content: ReactNode,
  viewBox: string,
  props?: any
): ((props: any) => ReactElement) => {
  return withElement('svg', '', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'currentColor',
    viewBox,
    ...props,
    children: content,
  });
};

export default withSvgWrapper;
