/**
 * Created by trigkit4 on 15/12/31.
 */
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
    entry: './entry.jsx',
    output: {
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {
            test:/\.js[x]?$/,
            loader: 'babel-loader',
            exclude:/node_modules/,
            query:{
                presets: ['es2015','react']
            }
        },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
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