module.exports = {
  siteMetadata: {
    title: 'Jay Jariwala',
  },
  plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
       name: `src`,
       path: `${__dirname}/src/`,
    },
  },
  `gatsby-transformer-remark`,
  'gatsby-plugin-react-helmet',
  {
  	resolve: `gatsby-plugin-postcss-sass`,
    options: {
      postCssPlugins: [],
      precision: 8, // SASS default: 5
    },
  }],
};
