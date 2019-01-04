/**
 * Created by Jack on 2018/3/28.
 * #formFields vuex 数据
 */


 export default {
     state : {
       cacheType : [],
       noName    : []
     },
     mutations : {
       SET_CACHE_SELECT (state,payload) {//设置下拉缓存数据
         let {selectName,data} = payload;
         state[selectName] = data;
       }
     },
     actions : {
       getCacheSelect ({dispatch,commit }, payload) {//获取下拉缓存数据
         let {axiosName,selectName='noName',alias='data',params={},success,error} = payload;
         return new Promise((resolve,reject) => {
           dispatch('handleAxios',{
             axiosName : axiosName,
             params   : params,
             success  : (res) => {
               commit('SET_CACHE_SELECT',{
                 selectName,
                 data : res[alias]
               });
               success && success();
               resolve(true)
             },
             error    : () => {
               error && error();
               reject()
             }
           })
         })
       }
     },
     getters : {
       CACHE_TYPE : state => state.cacheType
     }
   }
