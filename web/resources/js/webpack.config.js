var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {

    devtool: 'source-map',

    entry: './client.js',

    output: {
        path            : __dirname + '../../../public/js/build',
        filename        : '[name].js',
        chunkFilename   : '[name]-[chunkhash].js',
        publicPath      : '/js/build/'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            }
        ]
    },
    progress: true
};