// production config
const merge = require('webpack-merge');
const {resolve} = require('path');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.tsx',
  output: {
    path: resolve(__dirname, '../../build'),
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [],
});
