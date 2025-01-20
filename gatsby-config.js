/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require(`path`);

module.exports = {
  pathPrefix: "/wedding_invite",
  siteMetadata: {
    title: `Wedding Invite`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Tangerine\:400,700`, `Tinos\:400,400i,700,700i`],
        display: "swap", // Optional: Adds "display=swap" to the Google Fonts URL
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Erika & Jorge`,
        short_name: `Boda`,
        start_url: `/`,
        background_color: `#F9F6EE`, // Background color of your favicon
        theme_color: `#A7BFA5`,      // Theme color to complement your favicon
        display: `standalone`,
        icon: `src/images/favicon.webp`, // Path to your favicon file
      },
    }
  ],
};
