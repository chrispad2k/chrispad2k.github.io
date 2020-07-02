const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./common')

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    publicPath: '/',
    compress: true,
    host: '0.0.0.0',
    port: process.env.PORT | 3000,
    hot: true,
    disableHostCheck: true,
    inline: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
})
