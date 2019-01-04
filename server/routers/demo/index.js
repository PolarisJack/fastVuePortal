/**
 * Created by Jack on 2018/3/28.
 * #server 接口处理
 */

import Handle from '../../controller/handler/demo/index';

export default (router) => {
    //system
    router.post('/demo/system/login', Handle('User', 'login')),
        router.get('/demo/system/logout', Handle('User', 'logout')),
        router.get('/demo/system/permissionList', Handle('User', 'permissionList')),
        router.get('/demo/system/userInfo', Handle('User', 'userInfo')),

        //formFields
        router.get('/demo/formFields/cacheSelect', Handle('FormField', 'cacheSelect')),
        router.get('/demo/formFields/innerSelect', Handle('FormField', 'innerSelect')),
        //table
        router.get('/demo/table/list', Handle('Table', 'tableList'))
}