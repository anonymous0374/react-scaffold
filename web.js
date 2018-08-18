/**
 * the start point of the web application.
 * the use of this file:
 * 1 start Express.js http web server with the following middlewares
 *   > (config of)webpack-dev-middleware, which serve compiled files(in memory) to
 *   the Express.js http web server
 *   > (config of)webpack-hot-middleware, which connects webpack-dev-middle to the
 *   client(browser), and when there's source code updates, events will be sent to
 *   the client to notify it to update updated modules.
 * author: j-sparrow(better.product.go@gmail.com)
 * date: 2018-07-30
 */

const path = require("path");
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
// the important part:
// make ExpressJS always response with index.html(from the compilation)
// on whatever path the client requires
app.get("*", (req, res, next) => {
  const filename = path.join(compiler.outputPath, "index.html");
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set("content-type", "text/html");
    res.send(result);
    res.end();
  });
});

app.listen(PORT, () =>
  console.info(`Express web server is listening on port ${PORT}`)
);
