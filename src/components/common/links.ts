import { ReactElement } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { GatsbyLinkProps } from 'gatsby-link';
import withElement from './withElement';

const linkClasses =
  'text-purple-600 hover:text-purple-700 hover:underline dark:text-purple-600 dark:hover:text-purple-500';

export const A: ReactElement<{ href: string; target?: string }> | any =
  withElement('a', linkClasses, {
    target: '_blank',
    rel: 'noreferrer nofollow',
  });

export const Link: ReactElement<GatsbyLinkProps<any>> | any = withElement(
  GatsbyLink,
  linkClasses
);
