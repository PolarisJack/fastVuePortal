/**
 * Created by Jack on 2018/5/21.
 * #日志配置项
 */

 const winston = require('winston');
 let loggerError = new (winston.Logger)({
   transports :[
     new (winston.transports.Console)(),
     new (winston.transports.File)({
       filename : './error.log',
       timestamp : true,
       maxsize   : 10485760,
       maxFiles  :10
     })
   ]
 });

 let loggerRunTime = new (winston.Logger)({
   transports :[
     new (winston.transports.Console)(),
     new (winston.transports.File)({
       filename : './runtime.log',
       timestamp : true,
       maxsize   : 10485760,
       maxFiles  :10
     })
   ]
 });

 module.exports = {
   loggerError,
   loggerRunTime
 };
