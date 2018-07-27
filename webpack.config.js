const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: path.join(__dirname, "src/app.js"),
    about: path.join(__dirname, "src/about.js")
  },
  output: {
    filename: ["name"].js,
    path: path.join(__dirname, "dist")
    // publicPath: path.join(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|dist/,
        use: ["babel-loader"]
      },
      {
        test: /\.less$/,
        use: ["less-loader"]
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
                require("postcss-import")({ root: loader.resourcePath }),
                require("postcss-cssnext")(),
                require("cssnano")()
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
      modals: path.join(__dirname, "src/models"),
      routes: path.join(__dirname, "src/routes"),
      configs: path.join(__dirname, "src/configs")
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
    })
  ]
};
