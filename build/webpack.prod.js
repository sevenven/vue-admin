const merge = require('webpack-merge')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const commonConfig = require('./webpack.common.js')

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js'
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new ImageminPlugin({
      test: /\.(png|jpg|jpeg|gif)$/,
      minFileSize: 0,
      pngquant: {
        quality: '95-100'
      }
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  // 线上推荐
  devtool: 'cheap-module-source-map'
}

module.exports = merge(commonConfig, prodConfig)