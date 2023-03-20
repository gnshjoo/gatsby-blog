module.exports = {
  siteMetadata: {
    title: 'Medium_blog',
    description: 'kick',
    author: '@gnshjoo',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    'gatsby-transformer-sharp',
  ],
}
