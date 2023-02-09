module.exports = {
  siteMetadata: {
    title: 'David Semakula',
    description: 'Software Engineer & Systems Architect',
    author: '@davidsemakula',
    siteUrl: 'https://davidsemakula.com',
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'davidsemakula',
        short_name: 'davidsemakula',
        start_url: '/',
        background_color: '#fafafa',
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: '#4f46e5',
        display: 'minimal-ui',
        icon: 'src/images/rocket.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap',
        serialize: ({ path, modifiedGmt }) => ({
          url: path,
          lastmod: modifiedGmt ? modifiedGmt : '2023-02-09',
        }),
      },
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-client-side-redirect',
  ],
};
