module.exports = {
  pathPrefix: `/AirQualityPartnership.org`,
  siteMetadata: {
    title: `Air Quality Partnership`,
    description: `A public/private coalition provided by DVRPC dedicated to improving air quality in the Delaware Valley through air quality initiatives and advisories.`,
    author: `@JesseStrangfeld`,
    siteUrl: `https://www.dvrpc.org/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdf`,
        path: `${__dirname}/src/pdf`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-0.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "", // Google Analytics / GA
          "", // Google Ads / Adwords / AW
          "DC-9329039", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Defaults to https://www.googletagmanager.com
          origin: "https://www.googletagmanager.com/gtag/js?id=DC-9329039",
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Air Quality Partnership",
        short_name: "AQP",
        start_url: "/",
        display: "standalone",
        icon: "src/images/favicon-0.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
