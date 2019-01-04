/**
 * Created by Jack on 2018/3/28.
 * 包装请求类 基于request-promise封装
 */

 import RequestServer from './RequestServer';

 class PackRequest extends RequestServer{
   constructor() {
     super();
   }
   get(uri, params= {}, headers= {}, qs= {}) {//get请求
 		  let contentType = {'User-Agent': 'Request-Promise'}, query = '';
	    headers = headers ? Object.assign(contentType, headers) : contentType;//合并设置公共属性
	    for(let key in params){//遍历拼接参数
        if(query){
            params[key] && (query += '&' + key + '=' + encodeURIComponent(params[key]));
        }else{
            params[key] && (query += '?' + key + '=' + encodeURIComponent(params[key]));
        }
	    }
	    query && (uri = uri + query);
	    let opt = {
	        uri: uri, method: 'get', json: true, headers: headers, qs: qs
	    };
	    return super.sendRP(opt);
   }
   post(uri,params= {}, headers= {}, qs= {}) {//post请求
     let contentType = {'content-type': 'application/json'};
     let opt = {
       uri: uri, method: 'post', body: params, json: true, headers: headers, qs: qs
     }
     return super.sendRP(opt);
   }
   delete(uri,params= {}, headers= {}, qs= {}) {//post请求
     let contentType = {'content-type': 'application/json'};
     let opt = {
       uri: uri, method: 'delete', body: params, json: true, headers: headers, qs: qs
     }
     return super.sendRP(opt);
   }
   put(uri,params= {}, headers= {}, qs= {}) {//post请求
     let contentType = {'content-type': 'application/json'};
     let opt = {
       uri: uri, method: 'put', body: params, json: true, headers: headers, qs: qs
     }
     return super.sendRP(opt);
   }
   formData(uri,formData= {}, headers= {}, qs= {}) {//formData请求
     let contentType = {'content-type': 'application/x-www-form-urlencoded'};
     let opt = {
       uri: uri, method: 'post', formData: formData, headers: Object.assign(contentType,headers), qs: qs
     }
     return super.sendRP(opt);
   }
 }

export default PackRequest;
