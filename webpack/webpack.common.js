const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js'),
    // guide_styles: Path.resolve(__dirname, '../src/styles/style.scss')
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
    new CleanWebpackPlugin(['build'], {
      root: Path.resolve(__dirname, '..')
    }),
    new CopyWebpackPlugin([], {
      from: Path.resolve(__dirname, '../public'),
      to: 'public'
    }),
    new CopyWebpackPlugin([{
      from: Path.resolve(__dirname, '../node_modules/ether-framework/*.css'),
      to: 'assets',
      force: true,
      flatten: true
    }]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: Path.resolve(__dirname, '../src/index.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'layout.html',
      inject: true,
      template: Path.resolve(__dirname, '../src/layout.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'overview.html',
      inject: true,
      template: Path.resolve(__dirname, '../src/overview.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'colors.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/colors.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'controls.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/controls.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'typography.html',
      inject: true,
      minify: false,
      template: Path.resolve(__dirname, '../src/typography.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'icons.html',
      inject: true,
      template: Path.resolve(__dirname, '../src/icons.html')
    })
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
      }
    ]
  }
};
