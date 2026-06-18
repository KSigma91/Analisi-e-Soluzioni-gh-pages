const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
});
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
}

// per creare il file sitemap.xml
const SitemapPlugin = require('sitemap-webpack-plugin').default;

module.exports = {
  configureWebpack: {
    plugins: [
      new SitemapPlugin({ base: 'https://amglablecce.it', paths: ['/', '/servizi', '/elaborati', '/chisiamo', '/preventivi', '/revisioni', '/consulenze', '/privacy&cookie'] })
    ]
  }
}
