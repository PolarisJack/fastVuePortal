/**
 * Created by Jack on 2018/3/28.
 * #路由分发文件
 */


  import demo from './demo/index';
  import index from './index/index';
  const router = require('koa-router')();

  export default (app) => {
    demo(router);
    index(router);
    return app.use(router.routes(),router.allowedMethods())
  }
