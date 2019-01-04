/**
 * Created by Jack on 2018/3/28.
 * 出口文件
 */


const pathArr = require('./base-config/path_config.js');

module.exports = {
	filename : './js/[name].[chunkhash].js',//出口文件 hash规则生成
	path     : pathArr.distPath,//输出路径
	chunkFilename: './js/[name].[chunkhash].js'//懒加载输出路径配置
}