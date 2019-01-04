/**
 * Created by Jack on 2018/3/28.
 * 此文件未被使用，node作为服务不需要devServer
 */


const pathArr = require('./base-config/path_config.js'); // 入口文件路径


module.exports = {//构建本地服务
	contentBase          : pathArr.distPath, //项目目录
	port                 : CommonConfig.port,
	historyApiFallback   : true ,//不跳转
	hot                  : true ,
	proxy                : {
		'/' : {//跨域处理
			target : CommonConfig.target,
		},
	}
}