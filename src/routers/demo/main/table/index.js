/**
 * Created by Jack on 2018/6/4.
 * #列表案例
 */


export default (_import) => ({
    path: '/main/table',
    name: 'table',
    permission: 'table',
    component: _import('main/table'),
    meta: {
        active: 'table',
        icon: 'el-icon-menu',
        title: '列表案例'
    }
})