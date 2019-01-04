/*
 * @Author: jack.lu 
 * @Date: 2018-3-28 10:47:55 
 * @Last Modified by: jack.lu
 * @Last Modified time: 2018-12-30 00:48:23
 * @Desc 入口文件
 */


import Vue from 'vue';
import router from 'routers/index';
import App from 'containers/index/app.vue';
import store from '../../vuex/index/index';
import element from 'element-ui';
import { mapActions } from 'vuex';
import 'assets/style/lib/index.scss'; //全局css
require('components/libs/formFields/index.js').default(Vue); //全局注册组件
Vue.use(element);
let myMixins = {
    methods: {
        ...mapActions([
            'handleAxios',
            'notifySuccess',
            'notifyWarn',
            'notifyError'
        ])
    }
};

new Vue({
    el: '#app',
    router,
    store,
    mixins: [myMixins],
    render: (createElement) => createElement(App)
})