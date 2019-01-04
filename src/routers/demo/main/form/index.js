/**
 * Created by Jack on 2018/6/4.
 * #表单案例
 */


export default (_import) => ({
    path: '/main/form',
    name: 'form',
    permission: 'form',
    component: _import('main/form'),
    meta: {
        active: 'form',
        icon: 'el-icon-menu',
        title: '表单案例'
    },
    children: [{
        path: '/main/form/formSearch',
        name: 'formSearch',
        permission: 'formSearch',
        component: _import('main/form/formSearch'),
        meta: {
            active: 'formSearch',
            icon: 'el-icon-menu',
            title: '查询条件表单'
        }
    }, {
        path: '/main/form/formList',
        name: 'formList',
        permission: 'formList',
        component: _import('main/form/formList'),
        meta: {
            active: 'formList',
            icon: 'el-icon-menu',
            title: '列表式表单'
        }
    }]
})