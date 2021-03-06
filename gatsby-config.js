module.exports = {
  siteMetadata: {
    title: 'Jay Jariwala | Portfolio',
    siteUrl: `https://www.jayjariwala.com`,
    description: `I am a full stack web developer based in New Jersey, United States`
  },
  plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
       name: `src`,
       path: `${__dirname}/src/`,
    },
  },
  'gatsby-plugin-react-helmet',
  {
  	resolve: `gatsby-plugin-postcss-sass`,
    options: {
      postCssPlugins: [],
      precision: 8, // SASS default: 5
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            // Class prefix for <pre> tags containing syntax highlighting;
            // defaults to 'language-' (eg <pre class="language-js">).
            // If your site loads Prism into the browser at runtime,
            // (eg for use with libraries like react-live),
            // you may use this to prevent Prism from re-processing syntax.
            // This is an uncommon use-case though;
            // If you're unsure, it's best to use the default value.
            classPrefix: "language-",
          },
        },
      ],
    },
  }
],
};
