/**
 * Created by Jack on 2018/3/28.
 * #生产环境引入方式
 */
module.exports = file => () => import('containers/demo/'+file+'/index.vue')
