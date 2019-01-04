import apis from '../../../apis/index';
import PackRequest from '../../../lib/PackRequest';


export default class User {
  constructor() {
    //super()
  }
  async login (ctx) {//登录
    ctx.body = {
      returnSuccess : true,
      returnErrMsg  : '',
      returnErrCode : '',
      token         : '123456'
    }
  }
  async logout (ctx) {//登出
    ctx.body = {
      returnSuccess : true,
      returnErrMsg  : '',
      returnErrCode : '',
    }
  }
  async permissionList (ctx) {//权限列表
    ctx.body = {
      returnSuccess : true,
      returnErrMsg  : '',
      returnErrCode : '',
      data          : ['table','form','echart','group','formSearch','formList']
    }
  }
  async userInfo (ctx) {//用户信息
    ctx.body = {
      returnSuccess : true,
      returnErrMsg  : '',
      returnErrCode : '',
      data          : {
        name :'123456'
      }
    }
  }
}

export {User}
