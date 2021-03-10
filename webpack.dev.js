const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const config = require('./webpack.config.js');

config.entry = './src/dev/index.js';
config.output.path = path.resolve(__dirname, 'build');
config.devServer = {
  contentBase: path.join(__dirname, 'build')
};
config.plugins.push(
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src/dev/index.html')
  })
);

module.exports = config;
