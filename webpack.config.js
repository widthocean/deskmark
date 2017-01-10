
const path=require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin=require('html-webpack-plugin');
const ROOT_PATH=path.resolve(__dirname);
const APP_PATH=path.resolve(ROOT_PATH,'app');
const BUILD_PATH=path.resolve(ROOT_PATH,'build');

module.exports = {
    entry: {
       app:path.resolve(APP_PATH,'app.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    resolve:{
        extensions:['','.js','.jsx'],
        root: APP_PATH
    },
    devtool:'eval-source-map',
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true
    },
    module: {
        preLoaders:[
            {
                test: /\.jsx?$/,
                loaders:['eslint'],
                include:APP_PATH
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loaders:['babel'],
                include:APP_PATH
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }, {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
               exclude: /^node_modules$/,
               loader: 'url-loader?name=[name].[ext]'
            },

]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Deskmark app'
        })
    ]
};
