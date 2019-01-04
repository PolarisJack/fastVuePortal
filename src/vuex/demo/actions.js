/**
 * Created by Jack on 2018/3/28.
 *
 */

import { Notification, MessageBox } from 'element-ui';
import axiosApi from 'apis/demo/index';

export default {
    notifyError({ commit }, products) { //错误提示
        Notification({
            title: '失败',
            message: products,
            position: 'top-right',
            type: 'error',
        })
    },
    notifyWarn({ commit }, products) { //警告提示
        Notification({
            title: '警告',
            message: products,
            position: 'top-right',
            type: 'warning',
        })
    },
    notifySuccess({ commit }, products) { //成功提示
        Notification({
            title: '成功',
            message: products,
            position: 'top-right',
            type: 'success',
        })
    },
    handleConfirm({ commit }, products) { //全局弹框 确定&取消
        let { msg, title, success, error, that } = products;
        MessageBox.confirm(msg, title, {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                closeOnClickModal: false,
                dangerouslyUseHTMLString: true
            })
            .then(() => {
                success()
            })
            .catch((err) => {
                if (products.error) {
                    error();
                    return;
                }
                console.log(err);
                //this.dispatch('notifyWarn','已取消此操作')
            });
    },
    handleAxios({ dispatch, commit, state }, payload = {}) { //处理请求
        let { axiosName, params, success, error, hiddenNotify = false } = payload;
        axiosApi[axiosName](params)
            .then((res) => {
                if (res.returnSuccess) {
                    success(res); //成功执行函数
                } else {
                    let errMsg = res.returnErrMsg ? res.returnErrMsg : '服务异常，请重试';
                    if (!hiddenNotify) dispatch('notifyError', errMsg);
                    error && error(res);
                };
                state.loadingStatus = false;
            })
            .catch((err) => {
                dispatch('notifyError', '服务器异常，请刷新或重新登录');
                console.error(err);
                state.loadingStatus = false;
            })
    },
    handleToken({ dispatch, commit, state }, payload = {}) { //获取token
        return new Promise((resolve, reject) => {
            axiosApi['token']({})
                .then((res) => {
                    if (res.returnSuccess) {
                        resolve(true)
                    } else {
                        dispatch('notifyError', '获取token失败');
                        reject(false)
                    }
                })
                .catch((err) => {
                    dispatch('notifyError', 'token获取失败');
                    reject(false)
                })
        })
    },
    handleTokenAxios({ dispatch, commit, state }, payload = {}) { //获取token后 再请求
        dispatch('handleToken')
            .then((res) => {
                res && dispatch('handleAxios', payload)
            })
            .catch((res) => {
                dispatch('notifyError', '服务器异常，请重试')
            })
    }
}