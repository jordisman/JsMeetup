const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./client/src/index.jsx",

  output: {
    path: path.resolve(__dirname, "./client/public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}