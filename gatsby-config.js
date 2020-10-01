module.exports = {
  siteMetadata: {
    title: `Igor Hristov Profile`,
    description: `Explore awesome projects i made.`,
    author: `@igorhristov`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/defaultBcg.jpg`, // This path is relative to the root of the site.
      },
    },

    // gatsby-plugin-styled-components
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    //gatsby-plugin-playground
    `gatsby-plugin-playground`,

    //gatsby-plugin-transition-link
    "gatsby-plugin-transition-link",

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
