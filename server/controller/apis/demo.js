/**
 * Created by Jack on 2018/3/28.
 * #server 后台接口
 */

const winston = require('winston');//日志模块
const config = require('../../../config/project.config');

let dataManageUri;
 try {
   	dataManageUri = config.service.tdpUserServer.host+config.service.tdpUserServer.uri;
 } catch (e) {
 	  winston.error('uri不存在')
 }

let dataManage = {//数据管理后台接口管理
   	login         : dataManageUri + 'login/login',//登录
    logout        : dataManageUri + 'login/logout',//登出
    userResource  : dataManageUri + 'resourceManage/userResource',//查询用户拥有资源
}


module.exports = {
  dataManage
};
