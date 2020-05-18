const path = require('path');

module.exports = {
  entry: './src/assets/js/index.js',
  output: {
    path: path.resolve(__dirname, 'build/assets'),
    filename: 'js/dist.js'
  }
}
