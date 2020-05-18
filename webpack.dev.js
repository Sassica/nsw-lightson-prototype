// Based on https://brycewray.com/posts/2019/12/code-comfort-eleventy-webpack/ and
//    https://github.com/brycewray/eleventy_bundler/blob/master/webpack.dev.js

const merge = require('webpack-merge')
const common = require('./webpack.config.js')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['build'] },
      ghostMode: false,
      notify: false,
      watch: true,
      open: false
    })
  ]
})
