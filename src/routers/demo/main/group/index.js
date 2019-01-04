/**
 * Created by Jack on 2018/6/4.
 * #组合案例
 */


export default (_import) => ({
    path: '/main/group',
    name: 'group',
    permission: 'group',
    component: _import('main/group'),
    meta: {
        active: 'group',
        icon: 'el-icon-menu',
        title: '组合案例'
    }
})