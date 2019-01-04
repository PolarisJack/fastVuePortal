/**
 * Created by Jack on 2018/3/28.
 * #系统模块接口
 */


 import axios from 'js/http/demo/axios';

 export default {
   cacheSelect (param) {//缓存下拉
     return axios.get('/demo/formFields/cacheSelect',{params:param})
   },
   innerSelect (param) {//组件内请求
     return axios.get('/demo/formFields/innerSelect',{params:param})
   }
 }
