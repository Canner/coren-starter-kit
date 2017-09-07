const path = require('path');
const webpack = require('webpack');
const CorenWebpack = require('coren/lib/client/webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin({
  filename: 'css/[name].css',
  allChunks: true
});

const config = new CorenWebpack(__dirname, {
  entry: {
    index: ['babel-polyfill', './src/containers/index.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:5556/dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract({
          use: "css-loader"
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        isBrowser: true
      }
    }),
    extractCSS
  ]
});

module.exports = config.output();
