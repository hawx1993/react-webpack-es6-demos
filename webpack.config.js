/**
 * Created by trigkit4 on 15/12/31.
 */
var webpack = require('webpack');
var path = require('path');

var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var config = {
    entry: path.resolve(__dirname,'./src/entry'),
    output: {
        path: path.resolve(__dirname,'./static'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
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
        })
    ]
};

module.exports = config;