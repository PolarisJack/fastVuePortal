import { BaseUtils } from './../../utils/index';
import winstom from 'winston';
/**
 * 中心控制器,用于存储控制器操作实例
 * note : 由于集中处理,创建class时,class命名必须唯一!!!
 */
const Controller = {};

/* 读取当前文件下面所有的控制操作函数 */
BaseUtils.readFilePath({
  RE : /\.js/,
  filePath : __dirname, // 本文件目录下文件
  customFilter : (currentPath) => !(currentPath == __filename), // 除掉自身
  fn(filePath){
    try {
      let Objs = require(filePath); // 读取所以对应目录下的对象
      // 生成控制函数
      Object.keys(Objs).forEach(key => Controller[key] = Objs[key]);
    } catch (e) {
      winstom.error('handle文件读取错误',e);
    }
  },
  deep : true
})
// 转接 上下文， 同时选取执行函数
export default (module, fn) =>
                async (ctx) => await (new Controller[module](ctx))[fn](ctx);
