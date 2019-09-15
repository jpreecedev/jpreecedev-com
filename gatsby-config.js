module.exports = {
  siteMetadata: {
    title: "Jon Preece Freelance/Contract Full Stack Professional Web Developer",
    description: "The home of specialist front-end web developer Jon Preece.",
    author: "Jon Preece"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-42743116-4"
      }
    }
  ]
}
