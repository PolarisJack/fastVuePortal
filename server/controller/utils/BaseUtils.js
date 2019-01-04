/**
 * Created by Jack on 2018/3/28.
 * 基本工具类
 */


import fs from 'fs';
import path from 'path';

 export default class BaseUtils {
   constructor() {

   }
   static isDirectory (currentPath) {//判断是否为文件夹
     return fs.lstatSync(currentPath).isDirectory();
   };

   static readFilePath (options = {}) {//读取文件路径
      const { filePath, RE, fn, deep = false, customFilter } = options;
      fs.readdirSync(filePath)
        .filter(name => {
          let currentPath = path.join(filePath,name);
          let check = BaseUtils.isDirectory(currentPath) // 文件夹目录 不需要进行测验
                      ? true
                      : RE ? RE.test(name) : true;
          return check  // 进行自定义文件过滤
                 ? customFilter && customFilter(currentPath,name)
                 : false;
        })
        .forEach((tagetPath) => {
          let currentPath = path.join(filePath,tagetPath),
              isDir = BaseUtils.isDirectory(currentPath);
          if(isDir && deep){
            BaseUtils.readFilePath({filePath : currentPath,RE,fn,deep,customFilter});
          }else if(!isDir) {
            fn && fn(currentPath);
          }
        })
    }
 }
