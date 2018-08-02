const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
// post css plugins
const postcssImport = require("postcss-import");
const postcssNext = require("postcss-cssnext");
const postNano = require("cssnano");
// end of post css plugins

const HOT_SCRIPT = `webpack-hot-middleware/client?path=http://i.reactjs.com/__webpack_hmr&timeout=20000&reload=true`;

module.exports = {
  mode: "development",
  entry: {
    app: [path.join(__dirname, "src/app.js"), HOT_SCRIPT],
    about: [path.join(__dirname, "src/about.js"), HOT_SCRIPT]
  },
  output: {
    filename: ["name"].js,
    publicPath: "/"
  },
  // devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|dist/,
        use: ["babel-loader"]
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: "css-loader",
            options: { importLoaders: 1, sourceMap: true }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: loader => [
                postcssImport({ root: loader.resourcePath }),
                postcssNext(),
                postNano()
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
    ]
  },
  resolve: {
    alias: {
      components: path.join(__dirname, "src/components"),
      routes: path.join(__dirname, "src/routes"),
      configs: path.join(__dirname, "src/configs"),
      actions: path.join(__dirname, "src/actions"),
      reducers: path.join(__dirname, "src/reducers"),
      modals: path.join(__dirname, "src/models")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src/index.html"),
      chunks: ["app"]
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: path.join(__dirname, "src/about.html"),
      chunks: ["about"]
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
