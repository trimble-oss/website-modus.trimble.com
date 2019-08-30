const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
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
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': process.env.NODE_ENV || JSON.stringify('production'),
      'guideVersion': JSON.stringify(variables.ether.guideVersion),
      'guideBuildDate': JSON.stringify(variables.ether.guideBuildDate),
      'modusVersion': JSON.stringify(variables.ether.modusVersion),
      'modusIconsVersion': JSON.stringify(variables.ether.modusIconsVersion),
      'modusIcons': JSON.stringify(variables.ether.prodLinks.modusIcons),
      'modusCSS': JSON.stringify(variables.ether.prodLinks.modusCSS),
      'modusLayoutCSS': JSON.stringify(variables.ether.prodLinks.modusLayoutCSS),
      'modusLayoutJS': JSON.stringify(variables.ether.prodLinks.modusLayoutJS),
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
