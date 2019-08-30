const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const variables = require('./variables');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  output: {
    chunkFilename: 'js/[name].chunk.js'
  },
  devServer: {
    inline: true
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': process.env.NODE_ENV || JSON.stringify('development'),
      'guideVersion': JSON.stringify(variables.ether.guideVersion),
      'guideBuildDate': JSON.stringify(variables.ether.guideBuildDate),
      'etherVersion': JSON.stringify(variables.ether.etherVersion),
      'modusIconsVersion': JSON.stringify(variables.ether.modusIconsVersion),
      'etherIcons': JSON.stringify(variables.ether.devLinks.etherIcons),
      'etherCSS': JSON.stringify(variables.ether.devLinks.etherCSS),
      'etherLayoutCSS': JSON.stringify(variables.ether.devLinks.etherLayoutCSS),
      'etherLayoutJS': JSON.stringify(variables.ether.devLinks.etherLayoutJS),
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: Path.resolve(__dirname, '../src'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        }
      },
      {
        test: /\.(js)$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
});
