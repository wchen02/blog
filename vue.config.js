module.exports = {
  pwa: {
    name: 'Wensheng Chen'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/blog/'
    : '/'
}