/**
 * Created by Jack on 2018/11/7.
 * #node说明
 */


export default (_import) => ({
    path: '/main/node',
    name: 'node',
    permission: 'node',
    component: _import('main/node'),
    meta: {
        active: 'node',
        icon: 'el-icon-menu',
        title: 'node'
    }
})