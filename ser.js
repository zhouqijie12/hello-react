const webpack = require('webpack');

const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.cofig');

let complier = webpack(config);

let port = 9000;

config.entry.unshift(
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/dev-server'
)

new WebpackDevServer( complier, {
    hot:true,
    contentBase: './src',
    publicPath: '/assets/'
})
.listen(port)

