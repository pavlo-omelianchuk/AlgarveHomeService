process.noDeprecation = true; // https://github.com/webpack/webpack/issues/6568

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
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
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-catch-links',
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
        theme_color: `#f75d3f`,
        display: `standalone`,
        icon: 'src/images/logoAMMBTFaviconBlackAndWhite.png',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: 'GTM-PTJPM4N',

    //     // Include GTM in development.
    //     //
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: false,

    //     // datalayer to be set before GTM is loaded
    //     // should be an object or a function that is executed in the browser
    //     //
    //     // Defaults to null
    //     defaultDataLayer: { platform: 'gatsby' },

    //     // // Specify optional GTM environment details.
    //     // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
    //     // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
    //     // dataLayerName: 'YOUR_DATA_LAYER_NAME',

    //     // // Name of the event that is triggered
    //     // // on every Gatsby route change.
    //     // //
    //     // // Defaults to gatsby-route-change
    //     // routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
    //     // Defaults to false
    //     enableWebVitalsTracking: true,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     exclude: [''],
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 0,
    //     // Enables Google Optimize using your container Id
    //     optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
    //     // Enables Google Optimize Experiment ID
    //     experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
    //     // Set Variation ID. 0 for original 1,2,3....
    //     variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
    //     // Defers execution of google analytics script after page load
    //     defer: false,
    //     // Any additional optional fields
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     cookieDomain: 'example.com',
    //     // defaults to false
    //     enableWebVitalsTracking: true,
    //   },
    // },
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
