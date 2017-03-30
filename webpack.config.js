const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
  entry: [
    './client/main.js'],
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {  test: /\.js$/,
         loader: 'babel-loader',
         exclude: /node_modules/,
         query: {
           presets: ['es2015']
          }
      },
      { test: /\.pug$/, use: ['raw-loader', 'pug-html-loader'] },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [ "css-loader", "sass-loader" ]
        })
      },
      //{ test: /bootstrap\/dist\/js\/umd\//, use: 'imports-loader?jQuery=jquery' },
      { test: /\.(woff2?|svg)$/, use: 'url-loader?limit=10000' },
      { test: /\.(ttf|eot)$/, use: 'file-loader' },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 3000,
    stats: "errors-only"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ng webpack2',
      template: '_index.pug'
    }),
    new ExtractTextPlugin("app.css"),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })

  ]

}
