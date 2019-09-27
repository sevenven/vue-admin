const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const devConfig = {
  mode: 'development',
  output: {
    filename: 'bundle_[hash].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  // 开发推荐
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: false, // since we use CopyWebpackPlugin.
    publicPath: '/',
    open: true,
    proxy: {
      '/api': 'http://localhost:3000' // 配置反向代理
    },
    // 使用Hot Module Replacement
    hot: true,
    // Hot Module Replacement不生效 浏览器自动刷新页面
    hotOnly: true,
    // eslint报错遮罩
    overlay: false
  }
}

module.exports = merge(commonConfig, devConfig);