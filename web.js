const express = require("express");
const path = require("path");
const webpack = require("webpack");
const dev = require("webpack-dev-middleware");
const hot = require("webpack-hot-middleware");
const webpackConfig = require("./webpack.config");

const compiler = webpack(webpackConfig);
const app = express();
const PORT = 3000;

app.use(
  dev(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    index: "index.html"
  })
);
app.use(hot(compiler));

app.listen(PORT, () =>
  console.info(`Express web server is listening on port ${PORT}`)
);
