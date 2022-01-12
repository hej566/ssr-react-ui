const path = require('path');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const serverConfig = {
    target: 'node',
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    externals: [webpackNodeExternals()]
}

module.exports = webpackMerge(baseConfig, serverConfig);
