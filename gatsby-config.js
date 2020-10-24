module.exports = {
  siteMetadata: {
    title: `ラズパイのプロジェクトとその部品リスト紹介`,
    description: `様々なプロジェクトで使用した部品や金額をまとめたサイトです。`,
    moreinfo: `購入金額は日々変動しますのでご参考程度にしてください。`,
    author: `yoshitaka`,
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
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
   {
    resolve: "gatsby-source-graphql",
    options: {
      // Arbitrary name for the remote schema Query type
      typeName: "QLdata",
      // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
      fieldName: "QLdata",
      // Url to query from
      url: "https://aqueous-crag-75497.herokuapp.com/graphql",
      refetchInterval: 60000,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // Here goes your tracking ID
      trackingId: 'G-W1TQ9WDQ4V',
      // Puts tracking script in the head instead of the body
      head: true,
      // IP anonymization for GDPR compliance
      anonymize: true,
      // Disable analytics for users with `Do Not Track` enabled
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ['/preview/**'],
      // Specifies what percentage of users should be tracked
      sampleRate: 100,
      // Determines how often site speed tracking beacons will be sent
      siteSpeedSampleRate: 10,
    }
},
{  
    resolve: `gatsby-plugin-google-adsense`,
    options: {
        publisherId: `ca-pub-9180260030467303`
    }
},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
