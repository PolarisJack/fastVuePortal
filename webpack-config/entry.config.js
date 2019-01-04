/**
 * Created by Jack on 2018/3/28.
 * 入口文件配置
 */


const path = require('path');

const pathArr = require('./base-config/path_config.js'); // 入口文件路径

const nameArr = require('./base-config/name_config.js'); // 入口文件名称

const configEntry = {};

nameArr.forEach((page) => {
	configEntry[page] = [//配置每一个入口文件
		"babel-polyfill",//ES6语法兼容
		path.resolve(pathArr.entryPath,`${page}/main.js`)
	];
	process.env.NODE_ENV === 'development' && configEntry[page].unshift(
		'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'//热刷新
	)
});

module.exports = configEntry;
