/**
 * Created by Jack on 2018/3/28.
 * 请求后台方式
 */

 'use strict';
 import rp from 'request-promise';

 class RequestServer {//请求方式类
   constructor() {}
   sendRP (options) {//通过 request-promise
     return new Promise((resolve,reject) => {
 		    rp(options)
        	.then((body) => {
  	        if (typeof body === 'string') {
  	            body = JSON.parse(body);//解析body
  	        };
          	resolve(body);
        	})
        	.catch ((err) => {
          	resolve(err.response.body)
        	})
 		});
   }
 }

export default RequestServer;
