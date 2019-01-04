/**
 * Created by Jack on 2018/8/4.
 * #主页
 */


export default (_import) => ({
    path: '/main/vues',
    name: 'vues',
    permission: 'vues',
    component: _import('main/vues'),
    meta: {
        active: 'vues',
        icon: 'el-icon-menu',
        title: 'vue分析'
    },
    children: [{
        path: '/main/vues/vueApis',
        name: 'vueApis',
        permission: 'vueApis',
        component: _import('main/vues/vueApis'),
        meta: {
            active: 'vueApis',
            icon: 'el-icon-menu',
            title: 'vueApi'
        }
    }, {
        path: '/main/vues/vueComponents',
        name: 'vueComponents',
        permission: 'vueComponents',
        component: _import('main/vues/vueComponents'),
        meta: {
            active: 'vueComponents',
            icon: 'el-icon-menu',
            title: 'vue组件系统'
        }
    }, {
        path: '/main/vues/vueRouters',
        name: 'vueRouters',
        permission: 'vueRouters',
        component: _import('main/vues/vueRouters'),
        meta: {
            active: 'vueRouters',
            icon: 'el-icon-menu',
            title: 'vue路由系统'
        }
    }, {
        path: '/main/vues/vueVuex',
        name: 'vueVuex',
        permission: 'vueVuex',
        component: _import('main/vues/vueVuex'),
        meta: {
            active: 'vueVuex',
            icon: 'el-icon-menu',
            title: 'vue数据中心'
        }
    }]
})