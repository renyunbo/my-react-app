const merge=require('webpack-merge');
const webpack=require('webpack');
const common=require('./webpack.config.common.js');
const CleanWebpackPlugin  = require('clean-webpack-plugin');

module.exports=merge(common,{
    mode:'production',
    module:{
        rules:[

        ]
    },
    plugins:[
        //打包之前删除dist文件夹里面的内容
        new CleanWebpackPlugin()
    ]
})