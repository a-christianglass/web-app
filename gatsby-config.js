let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

console.log(`This WordPress Endpoint is used: '${process.env.WORDPRESS_URL}'`)

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.a-christianglass.com`,
  },
  flags: {
    // FAST_DEV: true,
    // DEV_SSR: false,
    // QUERY_ON_DEMAND: true,
    // FAST_REFRESH: true,
    // LAZY_IMAGES: true,
  },
  plugins: [
    // `gatsby-plugin-preact`,
    `gatsby-plugin-gatsby-cloud`,
    // Make sure this plugin is first in the array of plugins
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-111111111-1",
    //     // this option places the tracking script into the head of the DOM
    //     head: true,
    //     // other options
    //   },
    // },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.a-christianglass.com",
        sitemap: "https://www.a-christianglass.com/sitemap.xml",
        env: {
          development: {
            policy: [
              {
                userAgent: "*",
                allow: "/",
              },
            ],
          },
          production: {
            policy: [
              {
                userAgent: "*",
                allow: "/",
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-top-layout`,
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        stylesProvider: {
          injectFirst: true,
        },
        // disableAutoprefixing: true,
        // disableMinification: true,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `A Christian Glass`,
        short_name: `acg`,
        start_url: `/`,
        background_color: `transparent`,
        theme_color: `#1593CD`,
        icon: `src/assets/icons/favicon.png`, // This path is relative to the root of the site.
      },
    },
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from WordPress.
     */
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: `${process.env.WORDPRESS_URL}/graphql`,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },

    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `DM Sans\:100,400,500,700`,
    //       `Merriweather\:100,300,400,600,700`,
    //     ],
    //     display: "swap",
    //   },
    // },
  ],
}
