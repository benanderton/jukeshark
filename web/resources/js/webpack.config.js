var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
require('es6-promise').polyfill();

module.exports = {

    devtool: 'source-map',

    entry: ['./global.js', './client.js'],

    output: {
        path            : __dirname + '../../../public/js/build',
        filename        : '[name].js',
        chunkFilename   : '[name]-[chunkhash].js',
        publicPath      : '/js/build/'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },{
                test: /\.css$/,
                loaders: ["style", "css"]
            },{
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },{
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    progress: true
};