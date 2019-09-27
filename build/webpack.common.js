const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [{
      test: /\.(png|jpg|jpeg|gif)$/,
      use: [
        { // 小于limit的，就转成base64格式并打包到bundle.js，否则就不转直接输出到dist
          loader: 'url-loader',
          options: {
            name: '[name]_[contenthash].[ext]',
            outputPath: 'images/',
            limit: 2048
          }
        }
      ]
    },{
      test: /\.(eot|ttf|woff|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name]_[contenthash].[ext]',
          outputPath: 'fonts/',
        }
      }
    },{
      test: /\.(css|less)$/,
      loader: "style-loader!css-loader!less-loader",
    },{
      test: /\.vue$/,
      loader: 'vue-loader',
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.(js|vue)$/,
      enforce: 'pre',
      exclude: /node_modules/,
      loader: 'eslint-loader'
    },]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../mock'),
        to: 'mock',
        ignore: ['.*']
      }
    ])
  ]
}