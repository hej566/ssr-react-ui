const path = require('path');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');

const serverConfig = {
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
}

module.exports = webpackMerge(baseConfig, serverConfig);
