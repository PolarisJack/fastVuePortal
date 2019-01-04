/**
 * Created by Jack on 2018/6/4.
 * #webpack配置说明
 */


export default (_import) => ({
    path: '/main/webpack',
    name: 'webpack',
    permission: 'webpack',
    component: _import('main/webpack'),
    meta: {
        active: 'webpack',
        icon: 'el-icon-menu',
        title: 'webpack配置'
    }
})