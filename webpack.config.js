/**
 * Created by trigkit4 on 15/12/31.
 */
var webpack = require('webpack');
var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var config = {
    entry: path.resolve(__dirname,'./src/entry'),
    output: {
        path: path.resolve(__dirname,'./static'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx','.es6','css','scss','png','jpg']
    },
    module:{
        loaders:[
            {
                test:/\.js[x]?$/,
                loader: 'babel-loader',
                exclude:/node_modules/,
                query:{presets: ['es2015','react']}
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            }
        ]
    },
    plugins: [
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            server: {baseDir:'./'}
        })
    ]
};

module.exports = config;