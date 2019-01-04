/**
 * Created by Jack on 2018/3/28.
 * #路由入口文件
 */

import 'nprogress/nprogress.css';
import NProgress from 'nprogress'; //页面进度条
import Vue from 'vue';
import store from '../../vuex/demo/index';
import Router from 'vue-router';
import { BaseUtils, Self } from 'js/utils/index';
import { ConstantRouter, ConstantModel } from './router';

Vue.use(Router);
const completedRouters = []; //异步模块存储,
const router = new Router({ routes: ConstantRouter }); //加载同步路由模块
router.beforeEach((to, from, next) => { //路由守卫，路由改变拦截器
    NProgress.start(); //加载进度条
    switch (ConstantModel) { //判断token存储模式
        case 'vuex':
            vuexModel(to, from, next);
            break
        case 'cookie':
            cookieModel(to, from, next);
            break;
        case 'localStorage':
            localStorageModel(to, from, next);
            break;
        case 'sessionStorage':
            sessionStorageModel(to, from, next);
            break;
        default:
            cookieModel(to, from, next);
    };
    NProgress.done(); //结束进度条
});

const vuexModel = (to, from, next) => { //vuex存储方式
    next()
}
const cookieModel = (to, from, next) => { //cookie存储方式
    let login = to.path === '/login'; //login模块
    if (!BaseUtils.getCookie('token')) { //未检测到登录token
        next(login ? void 0 : '/login'); //如果非登login模块则跳转到login模块
    } else { //有token
        handleFunc(to, from, next)
    }
}
const localStorageModel = (to, from, next) => { //localStorage存储方式
    let login = to.path === '/login'; //login模块
    if (!BaseUtils.getLocalStorage('token')) { //未检测到登录token
        next(login ? void 0 : '/login'); //如果非登login模块则跳转到login模块
    } else { //有token
        handleFunc(to, from, next)
    }
}
const sessionStorageModel = (to, from, next) => { //sessionStorage存储方式
    if (!BaseUtils.getSessionStorage('token')) { //未检测到登录token
        next(login ? void 0 : '/login'); //如果非登login模块则跳转到login模块
    } else {
        handleFunc(to, from, next)
    }
}
const handleFunc = (to, from, next) => { //通用处理函数
    let login = to.path === '/login'; //login模块
    if (login) {
        next('/main')
    } else {
        if (!completedRouters.length) { //没有权限列表
            store.dispatch('getPermissionList') //获取权限列表
                .then((res) => {
                    if (res) {
                        store.dispatch('setPermissionList', res) //根据权限列表生产路由表
                            .then(({ permissionRouter, noPermissionRouter }) => {
                                completedRouters.push(
                                    ...permissionRouter,
                                    ...noPermissionRouter);
                                router.addRoutes(completedRouters);
                                next({...to, replace: true })
                            })
                            .catch((err) => {
                                store.dispatch('clearInfo');
                                next('/login');
                                console.log(err);
                            })
                    } else {
                        store.dispatch('clearInfo');
                        store.dispatch('notifyWarn', '权限获取失败');
                        next('/login');
                    }
                })
                .catch((err) => {
                    store.dispatch('clearInfo')
                    next('/login');
                    console.log(err);
                })
        } else {
            next()
        }
    }
};

export default router;