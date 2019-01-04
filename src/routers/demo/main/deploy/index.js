/**
 * Created by Jack on 2018/6/4.
 * #部署流程
 */


export default (_import) => ({
    path: '/main/deploy',
    name: 'deploy',
    permission: 'deploy',
    component: _import('main/deploy'),
    meta: {
        active: 'deploy',
        icon: 'el-icon-menu',
        title: '部署流程'
    }
})