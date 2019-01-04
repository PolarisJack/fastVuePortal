/**
 * Created by Jack on 2018/3/28.
 * 基础工具类
 */

 class BaseUtils {
   constructor() {

   }
   // 设置cookie
   static setCookie (name , value , days) {
      let exp = new Date();
      exp.setTime(exp.getTime() + days*24*60*60*1000);
      document.cookie = `${name}=${escape (value)};${days ? (";expires="+ exp.toGMTString()) : ''};`
   }
   //获取cookie
   static getCookie (name) {
       let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
       return (arr=document.cookie.match(reg)) ? unescape(arr[2]) : null
   }
   //删除cookie
   static deleteCookie(name){
      document.cookie = `${name}='';expires=${new Date().toGMTString()}`;
   }
   //设置SessionStorage
   static setSessionStorage (key,val) {
     sessionStorage.setItem(key,val)
   }
   //获取SessionStorage
   static getSessionStorage (key) {
     return sessionStorage.getItem(key)
   }
   //删除SessionStorage
   static deleteSessionStorage (key) {
     sessionStorage.removeItem(key)
   }
   //设置LocalStorage
   static setLocalStorage () {}
   //获取LocalStorage
   static getLocalStorage () {
     return localStorage.getItem(name)
   }
   //删除LocalStorage
   static deleteLocalStorage (name) {
     localStorage.removeItem(name)
   }
 }

 export default BaseUtils;
