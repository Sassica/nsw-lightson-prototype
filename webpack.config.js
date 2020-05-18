const path = require('path')

const JsConfigWebpackPlugin = require('js-config-webpack-plugin')
const ScssConfigWebpackPlugin = require('scss-config-webpack-plugin')
const FontConfigWebpackPlugin = require('font-config-webpack-plugin')
const ImageConfigWebpackPlugin = require('image-config-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/_assets/js/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build/assets'),
    filename: 'js/dist.js',
    publicPath: '/assets/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new JsConfigWebpackPlugin(),
    new ScssConfigWebpackPlugin({
      filename: 'css/dist.css'
    }),
    new ImageConfigWebpackPlugin(),
    new FontConfigWebpackPlugin({
      name: 'fonts/[name].[ext]'
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/_assets/images/', to: 'images' }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(eot|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  }
}
