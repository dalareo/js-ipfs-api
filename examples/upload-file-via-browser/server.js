'use strict'
let webpack = require('webpack')
let WebpackDevServer = require('webpack-dev-server')
let config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  disableHostCheck: true,
  historyApiFallback: true
}).listen(3000, '0.0.0.0', function (err) {
  if (err) throw new Error(err)
  console.log('Listening at localhost:3000')
})
