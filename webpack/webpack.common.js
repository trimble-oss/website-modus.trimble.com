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
      template: Path.resolve(__dirname, '../src/framework/changes.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'layout.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/layout.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'colors.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/foundations/colors.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'typography.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/foundations/typography.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'accordions.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/elements/accordions.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'alerts.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/elements/alerts.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'badges.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/elements/badges.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'buttons.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/elements/buttons.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'cards.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/elements/cards.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'chips.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/elements/chips.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'controls.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/elements/controls.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'dropdowns.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/elements/dropdowns.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'forms.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/elements/forms.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'icons.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/icons.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'status.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/status.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'lists.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/elements/lists.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'maps.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/maps.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'modals.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/elements/modals.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'shadows.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/elements/shadows.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'tables.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/elements/tables.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'tabs.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/elements/tabs.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'tooltips.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/elements/tooltips.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'setup.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/setup.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'borders.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/borders.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'clearfix.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/clearfix.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'close-icon.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/close-icon.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'display.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/display.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'embed.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/embed.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'flex.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/flex.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'float.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/float.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'overflow.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/overflow.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'position.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/position.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'sizing.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/sizing.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'spacing.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/spacing.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'text.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/text.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'vertical-alignment.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/vertical-alignment.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'visibility.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/framework/visibility.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'progress.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/elements/progress.html')
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
