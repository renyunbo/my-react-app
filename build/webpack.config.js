const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');//这个插件可以创建HTML文件，并自动将依赖写入HTML文件中
const webpack = require('webpack');

let ExtractTextPlugin = require('extract-text-webpack-plugin');//Webpack单独打包编译less
// multiple extract instances
let extractCSS = new ExtractTextPlugin('stylesheets/[name].css');
let extractLESS = new ExtractTextPlugin('stylesheets/[name].less');

module.exports = {
    //实现刷新浏览器webpack-hot-middleware/client?noInfo=true&reload=true 是必填的
    entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', path.join(__dirname, '../client/app.js')],
    //指定输出的目录
    output: {
        // []表示变量，name表示entry下面的App
        filename: '[name].[hash].js',
        path: path.join(__dirname, '../dist'),//output目录对应的一个绝对路径
        publicPath: ''//output中的publicPath常用于在生产环境。它会为所有的资源指定一个基础路径。设置了publicPath后，会为资源添加一个前缀
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                //resolve-url-loader may be chained before sass-loader if necessary
                use: ['css-loader', 'less-loader']
            })
        }, {
            test: /\.(js|jsx?)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }
        ],
    },
    plugins: [
        new HTMLPlugin({
            title: 'Hello app'
        }),
        // 实现刷新浏览器必写
        new webpack.HotModuleReplacementPlugin(),
        //单独打包编译less
        new ExtractTextPlugin('style.css')
    ]
}
