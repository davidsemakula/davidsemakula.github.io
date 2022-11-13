import { ComponentType, LinkHTMLAttributes } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { GatsbyLinkProps } from 'gatsby-link';
import withElement from './withElement';

const linkClasses =
  'text-indigo-600 hover:text-indigo-700 hover:underline dark:text-indigo-400 dark:hover:text-indigo-500';

export const A: ComponentType<LinkHTMLAttributes<{}>> = withElement(
  'a',
  linkClasses,
  {
    target: '_blank',
    rel: 'noreferrer nofollow',
  }
);

export const Link: ComponentType<GatsbyLinkProps<{}>> = withElement(
  GatsbyLink,
  linkClasses
);
