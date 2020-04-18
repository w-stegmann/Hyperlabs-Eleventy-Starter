const path = require('path');

module.exports = {
  entry: './src/scripts/script.js',
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: 'script.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
