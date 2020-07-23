module.exports = {
  siteMetadata: {
    title: 'Gatsby + Node.js (TypeScript) API',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + Node.js (TypeScript) API',
        short_name: 'Gatsby + Node.js (TypeScript)',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
