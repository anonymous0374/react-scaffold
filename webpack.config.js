const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const Progressbar = require('progress-bar-webpack-plugin');
// post css plugins
const postcssImport = require('postcss-import');
const postcssNext = require('postcss-cssnext');
const postNano = require('cssnano');
// end of post css plugins
const EXPRESS_PORT = 3001;
const API_PREFIX = '/ams';
const DOMAIN_NAME = 'ams.com';
const HOT_SCRIPT = `webpack-hot-middleware/client?path=http://${DOMAIN_NAME}/__webpack_hmr&timeout=20000&reload=true`;

module.exports = {
  mode: 'development',
  entry: {
    app: [path.join(__dirname, 'src/app.js'), HOT_SCRIPT],
    about: [path.join(__dirname, 'src/about.js'), HOT_SCRIPT],
  },
  output: {
    filename: ['name'].js,
    path: path.resolve(__dirname, 'dist'), // for release only
    publicPath: '/',
  },
  devtool: '#source-map',
  devServer: {
    historyApiFallback: true,
    /*
    proxy: {
      "/ams": {
        target: `http://localhost:${EXPRESS_PORT}`,
        pathRewrite: { "^/ams": "" },
        changeOrigin: true
      }
    } */
  },
  watchOptions: {
    aggregateTimeout: 300, // The default
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|dist/,
        use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }],
      },
      {
        test: /\.less$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1, sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [
                postcssImport({ root: loader.resourcePath }),
                postcssNext(),
                postNano(),
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  resolve: {
    alias: {
      presentationals: path.join(__dirname, 'src/components/presentationals'),
      containers: path.join(__dirname, 'src/components/containers'),
      hocs: path.join(__dirname, 'src/components/hocs'),
      actions: path.join(__dirname, 'src/state/actions'),
      reducers: path.join(__dirname, 'src/state/reducers'),
      models: path.join(__dirname, 'src/state/models'),
      routes: path.join(__dirname, 'src/routes'),
      configs: path.join(__dirname, 'src/configs'),
      services: path.join(__dirname, 'src/services'),
      utilities: path.join(__dirname, 'src/utilities'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html'),
      chunks: ['app'],
      favicon: path.join(__dirname, 'public/images/favicon.ico'),
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: path.join(__dirname, 'src/about.html'),
      chunks: ['about'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new Progressbar(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
