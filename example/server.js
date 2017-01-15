var config = require('./webpack.config.js');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');

var HOST = 'localhost';
var PORT = 3333;

config.entry.unshift(`webpack-dev-server/client?http://${HOST}:${PORT}`);

new webpackDevServer(webpack(config), {
  contentBase: __dirname + '/',
  progress: true,
  inline:   true,
  historyApiFallback: true,
  stats: {
    assets: true,
    colors: true,
		hash: false,
		timings: true,
		chunks: false,
		chunkModules: false,
		modules: false,
    source: true,
		children: true
  }
}).listen(PORT, HOST, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Listening at ${HOST}:${PORT}`);
});
