/**
 * Created by Jack on 2018/3/28.
 *  webpack配置入口文件
 */


module.exports = {
    entry: require('./webpack-config/entry.config.js'),

    output: require('./webpack-config/output.config.js'),

    devtool: require('./webpack-config/devtool.config.js'),

    //devServer : require('./webpack-config/devServer.config.js'),

    module: require('./webpack-config/module.config.js'),

    plugins: require('./webpack-config/plugins.config.js'),

    resolve: require('./webpack-config/resolve.config.js'),

    externals: { //打包不打入index
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'element-ui': 'ELEMENT',
        'axios': 'axios'
    }
}