/*
 * @Author: jack.lu 
 * @Date: 2018-3-28 10:47:55 
 * @Last Modified by: jack.lu
 * @Last Modified time: 2018-12-30 01:02:49
 * @Desc 入口文件
 */



import Vue from 'vue';
import router from 'routers/demo';
import App from 'containers/demo/app.vue';
import store from '../../vuex/demo/index';
import element from 'element-ui';
import 'assets/style/lib/index.scss'; //全局css
import { mapActions } from 'vuex';
import BoxFrame from 'components/public/self/boxFrame/index.js';

require('components/libs/formFields/index.js').default(Vue); //全局注册组件
Vue.use(element);
Vue.use(BoxFrame);

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
    el: '#demo',
    router,
    store,
    mixins: [myMixins],
    render: (createElement) => createElement(App)
})