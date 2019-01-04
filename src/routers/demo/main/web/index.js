/**
 * Created by Jack on 2018/6/4.
 * #web源代码分析
 */


export default (_import) => ({
    path: '/main/web',
    name: 'web',
    permission: 'web',
    component: _import('main/web'),
    meta: {
        active: 'web',
        icon: 'el-icon-menu',
        title: 'web'
    }
})