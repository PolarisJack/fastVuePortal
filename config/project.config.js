/**
 * Created by Jack on 2018/3/28.
 * 项目配置文件
 */

'use strict';


let project_config = {
    project_name: 'tm_web', //项目名称
    port: '3000', //端口号
    openUrl: 'http://localhost:3000/index.html', //浏览器自动打开Url，开发环境使用，启动服务时浏览器自动打开浏览器，生产环境忽略
    service: { //各个项目后台接口
        tdpUserServer: {
            "host": "http://172.20.25.232:9102",
            "uri": "/unisignon-backend/user-portal/",
            "description": "tdp用户接口"
        },
        tdpAdminServer: {
            "host": "http://172.20.25.232:9101",
            "uri": "/unisignon-backend/admin-portal/",
            "description": "tdp管理员接口"
        }
    }
}

let config = {};

try { //当有其他配置文件时的处理

    config = project_config;

} catch (err) {
    console.log(err)
}

module.exports = config;