// shared config (dev and prod)
const path = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.join(__dirname, '../../')

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(root, 'public/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: path.join(root, 'src', 'index.tsx'),
  output: {
    filename: 'bundle.[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  context: path.resolve(__dirname, '../..'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    HTMLWebpackPluginConfig,
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
};