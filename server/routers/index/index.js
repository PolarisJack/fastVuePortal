/**
 * Created by Jack on 2018/7/16.
 * #server 接口处理
 */

import Handle from '../../controller/handler/index/index';

export default (router) => {
    //system
    router.post('/index/system/login', Handle('User', 'login')),
        router.get('/index/system/logout', Handle('User', 'logout')),
        router.get('/index/system/permissionList', Handle('User', 'permissionList')),
        router.get('/index/system/userInfo', Handle('User', 'userInfo'))

    //table

}