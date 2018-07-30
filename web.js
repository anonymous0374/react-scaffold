/**
 * the start point of the web application.
 * the use of this file:
 * 1 start Express.js http web server
 * 2 configure webpack-dev-middleware, which serve compiled files(in memory) to
 * the Express.js http web server
 * 3 configure webpack-hot-middleware, which connects webpack-dev-middle to the
 * client(browser), and when there's source code updates, events will be sent to
 * the client to notify it to update updated modules.
 * author: j-sparrow(better.product.go@gmail.com)
 * date: 2018-07-30
 */

const express = require("express");
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