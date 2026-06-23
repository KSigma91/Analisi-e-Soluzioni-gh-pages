const { defineConfig } = require('@vue/cli-service')
const SitemapPlugin = require('sitemap-webpack-plugin').default

module.exports = defineConfig({
  transpileDependencies: true,

<<<<<<< HEAD
  outputDir: 'docs',

=======
>>>>>>> bc034e451913f6433d5a409d809b953f5c8845a1
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

  configureWebpack: {
    plugins: [
      new SitemapPlugin({
        base: 'https://amglablecce.it',
        paths: [
          '/',
          '/servizi',
          '/elaborati',
          '/chisiamo',
          '/preventivi',
          '/revisioni',
          '/consulenze',
          '/privacy&cookie'
        ]
      })
    ]
  }
})