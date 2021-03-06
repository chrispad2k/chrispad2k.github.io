const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.tsx',
  context: path.resolve(__dirname, '../src'),
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'url-loader',
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            issuer: /\.(ts|tsx)$/,
            use: '@svgr/webpack',
          },
          {
            issuer: /\.(css|less)$/,
            use: 'url-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'url-loader',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: '../public/index.html' })],
  devtool: 'source-map',
  externals: {
    React: 'React',
    ReactDOM: 'ReactDOM',
  },
}
