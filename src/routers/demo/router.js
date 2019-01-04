/**
 * Created by Jack on 2018/3/28.
 * #路由配置
 */


const _import = require('./import/import_' + 'development'); //路由模式 同步&异步

import mainRoute from './main'; //路由配置入口文件


const ConstantRouter = require('./lib').default; //同步模块，初始状态加载
const ConstantRight = ['home', 'vues', 'vueVuex', 'vueRouters', 'vueComponents', 'vueApis', 'webpack', 'node', 'web', 'deploy']; //公有权限模块
const ConstantModel = 'cookie'; //token缓存模式（'vuex'/'cookie'/'sessionStorage'/'localStorage'）

const AsyncRouter = {
    path: '/main',
    name: 'main',
    redirect: '/main/home',
    component: _import('main'),
    children: [
        ...mainRoute(_import)
    ]
}; // 登录后的异步模块



export { AsyncRouter, ConstantRouter, ConstantRight, ConstantModel }