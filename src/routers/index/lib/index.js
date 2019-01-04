/**
 * Created by Jack on 2018/3/28.
 * #静态路由配置
 */


import Login from 'containers/index/lib/login/index.vue';
import Err404 from 'containers/index/lib/err404/index.vue';
import Err403 from 'containers/index/lib/err403/index.vue';

export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/404',
    component : Err404
  },
  {
    path: '/403',
    component : Err403
  },
  {
     path: '/login',
     name: 'login',
     component: Login,
   }
]
