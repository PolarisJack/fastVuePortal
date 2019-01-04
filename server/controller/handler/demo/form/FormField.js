/**
 * Created by Jack on 2018/3/28.
 * #fromFields 处理类
 */

import apis from '../../../apis/demo';
import PackRequest from '../../../lib/PackRequest';


class FormField {
  constructor() {
    //super()
  }
  async cacheSelect (ctx) {//缓存下拉
    ctx.body = {
      returnSuccess : true,
      returnErrMsg  : '',
      returnErrCode : '',
      data : [
        {value:'1','name':'cache内容1'},
        {value:'2','name':'cache内容2'},
        {value:'3','name':'cache内容3'},
        {value:'4','name':'cache内容4'},
        {value:'5','name':'cache内容5'},
        {value:'6','name':'cache内容6'},
        {value:'7','name':'cache内容7'}
      ]
    }
  }
  async innerSelect (ctx) {//下拉
    ctx.body = {
      returnSuccess : true,
      returnErrMsg  : '',
      returnErrCode : '',
      data : [
        {value:'1','name':'innerSelect内容1'},
        {value:'2','name':'innerSelect内容2'},
        {value:'3','name':'innerSelect内容3'},
        {value:'4','name':'innerSelect内容4'},
        {value:'5','name':'innerSelect内容5'},
        {value:'6','name':'innerSelect内容6'},
        {value:'7','name':'innerSelect内容7'}
      ]
    }
  }
}

export {FormField}
