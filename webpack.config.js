const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/_assets/js/index.js',
  output: {
    path: path.resolve(__dirname, 'build/assets'),
    filename: 'js/dist.js'
  },
  plugins: [
	  new CleanWebpackPlugin()
	]
}
