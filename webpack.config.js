const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
  // devServer: {
  //   publicPath: '/dist',
  //   port: 8080,
  //   proxy: {
  //     '/': {
  //       target: 'http://localhost:3000',
  //       secure: false,
  //       hotOnly: true
  //     },
  //     contentBase: path.resolve(__dirname, 'dist')
  //   }
  // },
  entry: { app: './examples/index.js' },
  output: {
    filename: 'ibeeliotbundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: './index.html'
    })
  ]
};
