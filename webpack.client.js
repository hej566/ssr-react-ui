const path = require('path');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const clientConfig = {
    entry: './src/client/client.js',
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css',
        }),
    ]
}

module.exports = webpackMerge(baseConfig, clientConfig);