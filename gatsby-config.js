module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `video`,
        path: `${__dirname}/src/video/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MOBILE MASSAGE ALGARVE`,
        short_name: `MOBILE MASSAGE`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/logoAMMBTFavicon.png',
      },
      // siteMetadata: {
      //   title: 'SEO Health Massage & Beauty Algarve',
      //   titleTemplate: '%s · The Real Hero',
      //   description:
      //     'Algarve Home Massage and Beauty. Mobile massage service in Algarve area. You can relax in the comfort of your home while we take care of the travel and organization involved and work with great masseurs in the Algarve. For health purposes only.',
      //   url: 'https://www.algarvehomemassageandbeauty.com/',
      //   image: '/images/logoAMMBTFavicon.png', // Path to your image you placed in the 'static' folder
      //   twitterUsername: '@occlumency',
      // },
    },
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `http://localhost:1337`,
    //     queryLimit: 1000, // Defaults to 100
    //     // collectionTypes: [`messages`],
    //     singleTypes: [`Hero`],
    //   },
    // },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
};
