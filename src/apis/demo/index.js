/**
 * Created by Jack on 2018/3/28.
 * #前端接口管理
 */


let obj = {};

export default (() => {//按文件读取配置
  let arr = (r => {
    return r.keys().map(key => r(key))
  })(require.context('./', true, /^\.\/((?!\/)[\s\S])+\/index\.js$/));
  arr.map((item,index) => {
    obj = {...obj,...item.default};
  });
  return obj;
})()
