/*
 * @Author: jack.lu 
 * @Date: 2018-3-8 10:10:20
 * @Last Modified by: jack.lu
 * @Last Modified time: 2018-12-29 23:01:41
 */

import axios from 'axios';
import router from 'routers/index';
import store from '../../../../vuex/index/index';
import { ConstantModel } from '../../../../routers/index/router';
import { BaseUtils } from 'js/utils/index';

function toType(obj) { //判断元素类型
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

function filter_null(o) { //过滤空参数

    for (var key in o) {
        if (o[key] == null) {
            delete o[key]
        }
        if (toType(o[key]) == 'string') {
            o[key] = o[key].trim()
            if (o[key].length == 0) {
                delete o[key]
            }
        }
    }
    return o
}

axios.interceptors.request.use(config => { // http请求拦截器
    //通用处理
    const defaultParams = {}; //公共参数
    store.state.loadingStatus = config.hiddenLoading ? false : true;
    store.state.loadingText = config.loadingText || '拼命加载中...';
    if (!config.formData && !config.login && !config.logout) {
        if (config.method === 'get' || config.method === 'delete') {
            config.params = filter_null(Object.assign({}, config.params, defaultParams));
        } else {
            config.data = filter_null(Object.assign({}, config.data, defaultParams));
        }
    };

    switch (ConstantModel) { //判断token存储模式
        case 'vuex':
            config.headers.token = store.state.token;
            break
        case 'cookie':
            config.headers.token = BaseUtils.getCookie('token');
            break;
        case 'localStorage':
            config.headers.token = BaseUtils.getLocalStorage('token');
            break;
        case 'sessionStorage':
            config.headers.token = BaseUtils.getSessionStorage('token');
            break;
        default:
            config.headers.token = BaseUtils.getCookie('token');
    };
    config.headers['if-modified-since'] = '0'; //ie浏览器请求缓存 兼容
    return config;
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => { // http响应拦截器
    let code = response.returnErrCode;
    if (code == 'BD_0004' || code == 'BD_0002' || code == 'BD_0003' || code == 'BD_0007') {
        store.dispatch('clearInfo');
        response.data.returnErrMsg = '登录过期，请重新登录';
        setTimeout(() => {
            location.reload()
        }, 500)
    }
    return response.data;
}, error => {
    return Promise.reject(error)
})


export default axios;