const Path = require('path');
const Webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const variables = require('./variables');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js'),
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  plugins: [
    new Webpack.DefinePlugin({
      'etherVersion': JSON.stringify(variables.ether.etherVersion),
      'etherIconsVersion': JSON.stringify(variables.ether.etherIconsVersion)
    }),
    new CleanWebpackPlugin(['build'], {
      root: Path.resolve(__dirname, '..')
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: Path.resolve(__dirname, '../src/index.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'changes.html',
      inject: true,
      template: Path.resolve(__dirname, '../src/changes.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'layout.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/layout.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'colors.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/colors.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'typography.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/typography.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'accordions.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/accordions.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'alerts.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/alerts.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'badges.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/badges.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'branding.html',
      inject: true,
      template: Path.resolve(__dirname, '../src/branding.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'buttons.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/buttons.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'cards.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/cards.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'chips.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/chips.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'controls.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/controls.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'dropdowns.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/dropdowns.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'forms.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/forms.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'icons.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/icons.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'lists.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/lists.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'maps.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/maps.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'modals.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/modals.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'shadows.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/shadows.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'tables.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/tables.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'tabs.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/tabs.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'tooltips.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/tooltips.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'setup.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/setup.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'borders.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/borders.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'clearfix.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/clearfix.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'close-icon.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/close-icon.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'display.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/display.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'embed.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/embed.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'flex.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/flex.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'float.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/float.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'overflow.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/overflow.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'position.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/position.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'sizing.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/sizing.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'spacing.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/spacing.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'text.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/text.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'vertical-alignment.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/vertical-alignment.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'visibility.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/visibility.html')
    }),


  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [{
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.lit$/,
        loader: 'lit-loader'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
            interpolate: true
          }
        }
      },
      {
        test: /\.md$/,
        use: [
            {
                loader: "html-loader"
            },
            {
                loader: "markdown-loader",
                options: {
                    /* your options here */
                }
            }
        ]
    }
    ]
  }
};
