const { defineConfig } = require('@vue/cli-service')
const SitemapPlugin = require('sitemap-webpack-plugin').default

module.exports = defineConfig({
  transpileDependencies: true,

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
          '/privacy-cookie'
        ]
      })
    ]
  }
})