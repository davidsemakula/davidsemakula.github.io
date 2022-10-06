import * as React from 'react';
import { HTMLAttributes, ReactElement } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface SeoAttributes<T> extends HTMLAttributes<T> {
  title?: string;
  description?: string;
}

function Seo({
  title = '',
  description = '',
  children,
}: SeoAttributes<{}>): ReactElement {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const defaultTitle = site.siteMetadata?.title;
  const pageTitle =
    title && defaultTitle
      ? `${defaultTitle} | ${title}`
      : title || defaultTitle;
  const metaDescription = description || site.siteMetadata.description;

  return (
    <>
      <title>{pageTitle}</title>
      <meta
        name="description"
        content={metaDescription}
      />
      <meta
        property="og:title"
        content={pageTitle}
      />
      <meta
        property="og:description"
        content={metaDescription}
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        name="twitter:card"
        content="summary"
      />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.author || ``}
      />
      <meta
        name="twitter:title"
        content={pageTitle}
      />
      <meta
        name="twitter:description"
        content={metaDescription}
      />
      {children}
    </>
  );
}

export default Seo;
