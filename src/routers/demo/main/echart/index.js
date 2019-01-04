/**
 * Created by Jack on 2018/6/4.
 * #图表案例
 */


export default (_import) => ({
    path: '/main/echart',
    name: 'echart',
    permission: 'echart',
    component: _import('main/echart'),
    meta: {
        active: 'echart',
        icon: 'el-icon-menu',
        title: '图表案例'
    }
})