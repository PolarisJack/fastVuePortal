/**
 * Created by Jack on 2018/3/28.
 * 正则校验类
 */

 class Validate {
   constructor() {

   }
   static validateURL(uri) {/* 合法uri*/
     const re = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
     return re.test(uri)
   }
   static validateEmail(email) {/* 合法email*/
     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email)
   }
   static validateCode(val) {//数字&字母&下划线 1-25
     const re =/^[a-zA-Z0-9_]{1,25}$/;
     return re.test(val)
   }
   static validateName(val) {//数字&字母&中文&下划线
     const re =/^[a-zA-Z0-9_\u4e00-\u9fa5]{1,25}$/;
     return re.test(val)
   }
   static validateLoginName(val) {//数字&字母&下划线 1-18
     const re =/^[a-zA-Z0-9_]{6,18}$/;
     return re.test(val)
   }
 }

 export default Validate;
