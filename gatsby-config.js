module.exports = {
  siteMetadata: {
    title: 'Setlist Composer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Setlist Composer",
        short_name: "Setlist Composer",
        start_url: "/",
        background_color: "#f5f5f5",
        theme_color: "#90D4A8",
        display: "standalone",
        //icon: "./src/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    ],
}
