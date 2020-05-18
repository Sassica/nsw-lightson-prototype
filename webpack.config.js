const path = require('path');

module.exports = {
  entry: './src/_assets/js/index.js',
  output: {
    path: path.resolve(__dirname, 'build/assets'),
    filename: 'js/dist.js'
  }
}
