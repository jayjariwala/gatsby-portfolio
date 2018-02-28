module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
  'gatsby-plugin-react-helmet',
  {
  	resolve: `gatsby-plugin-postcss-sass`,
    options: {
      postCssPlugins: [],
      precision: 8, // SASS default: 5
    },
  }],
};
