const path = require('path');

module.exports = {
  pwa: {
    name: 'Wensheng Chen'
  },
  configureWebpack: {
    resolve: {
      alias: {
        'bootstrap-components': path.resolve(__dirname, 'node_modules/bootstrap-vue/es/components')
      }
    }
  }
}