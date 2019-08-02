const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const variables = require('./variables');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  stats: 'errors-only',
  bail: true,
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js'
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': process.env.NODE_ENV || JSON.stringify('production'),
      'etherVersion': JSON.stringify(variables.ether.etherVersion),
      'etherIconsVersion': JSON.stringify(variables.ether.etherIconsVersion),
      'etherIcons': JSON.stringify(variables.ether.prodLinks.etherIcons),
      'etherCSS': JSON.stringify(variables.ether.prodLinks.etherCSS),
      'etherLayoutCSS': JSON.stringify(variables.ether.prodLinks.etherLayoutCSS),
      'etherLayoutJS': JSON.stringify(variables.ether.prodLinks.etherLayoutJS),
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css'
    })
  ],
  module: {
    rules: [{
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s?css/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
});
