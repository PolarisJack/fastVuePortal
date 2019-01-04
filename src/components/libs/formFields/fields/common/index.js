/**
 * Created by zyb on 2018/5/8.
 *
 */

/**
 * 共性
 */


import defaultOptions from './config';
export default (name) => {
  const {events} = defaultOptions(name);
  let eventsFunctions = {};
  events.forEach(k => eventsFunctions[k] = function(){
    this.events[k] && this.events[k].call(this,...arguments);
  })
  return {
    props : {
      field : {//控件内容
        type : Object,
        default(){
          return {}
        }
      },
      defaultValue : {//默认值
        type : Object,
        default(){
          return {}
        }
      },
      submitData : {//提交数据
        type : Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        events : this.field.events || {}//注册事件
      }
    },
    computed : {
    },
    created(){
      this.initDefaultAct();
    },
    methods : {
      ...eventsFunctions,
      initDefaultAct (){
        if(this.field.type){ // 类型统一小写
          // console.log(this.field.type);
          // this.field.type = this.field.type.toLocaleLowerCase()
        }
      }
    }
  }
}
