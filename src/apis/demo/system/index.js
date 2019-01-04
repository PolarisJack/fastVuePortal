/**
 * Created by Jack on 2018/3/28.
 * #系统模块接口
 */


 import axios from 'js/http/demo/axios';

 export default {
   login (param) {//登录模块
     return axios.post('/demo/system/login',param)
   },
   logout (param) {//登出模块
     return axios.get('/demo/system/logout',{params:param})
   },
   permissionList (param) {//权限模块
     return axios.get('/demo/system/permissionList',{params:param})
   },
   getUserInfo (param) {//获取用户信息
     return axios.get('/demo/system/userInfo',{params:param})
   },
   token (param) {//获取token
     return axios.get('/index/system/token',{params:param})
   },
 }
