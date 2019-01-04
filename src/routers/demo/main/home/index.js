/**
 * Created by Jack on 2018/6/4.
 * #主页
 */


export default (_import) => ({
    path: '/main/home',
    name: 'home',
    permission: 'home',
    component: _import('main/home'),
    meta: {
        active: 'home',
        icon: 'el-icon-menu',
        title: '主页'
    }
})