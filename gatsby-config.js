const autoprefixer = require("autoprefixer");

module.exports = {
  siteMetadata: {
    title: "",
    description:
      ""
  },
  plugins: [
  //`gatsby-plugin-transition-link`,
     {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#f81d22`,
        // Disable the loading spinner.
        showSpinner: true
      }
    },
      {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        postCssPlugins: [require('autoprefixer')],
        precision: 8
      }
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Total Stop Fire Perú`,
    //     short_name: `Total Stop`,
    //     start_url: `/`,
    //     background_color: `#f81d22`,
    //     theme_color: `#ffffff`,
    //     // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
    //     // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
    //     display: `standalone`,
    //     icon: `src/img/icon.png` // This path is relative to the root of the site.
    //   }
    // },
    //`gatsby-plugin-offline`,
    `gatsby-plugin-remove-serviceworker`,
    "gatsby-plugin-react-helmet",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
        {
    resolve: '@fika/gatsby-source-cockpit',
    options: {
      token: 'account-1111399883d400b3ee2d0af9246ad3',
      baseUrl:
        'http://totalstopfireperu.000webhostapp.com', // (1)
      locales: ['any', 'es'], // (2)
    },
  },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    'gatsby-plugin-netlify-cache',
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
