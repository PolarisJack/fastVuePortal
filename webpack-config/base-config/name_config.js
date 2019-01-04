/**
 * Created by Jack on 2018/3/28.
 * 
 */


const glob = require('glob');
const pathArr = require('./path_config.js'); 

let options = {
	cwd  : pathArr.entryPath, //在entry目录里面找入口文件夹
	sync : true //同步获取
};


let globInstance = new glob.Glob('!(_)*', options);//找到 pathArr 配置的路径

module.exports = globInstance.found; //找到匹配结果