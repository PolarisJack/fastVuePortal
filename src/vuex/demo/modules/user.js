/**
 * Created by Jack on 2018/5/10.
 * vuex---user-module
 */

import Md5 from 'md5';
import {BaseUtils} from 'js/utils/index';
import {AsyncRouter,ConstantRight,ConstantModel} from 'routers/demo/router';
import router from 'routers/demo/index';

/**
 * 通过权限生成路由
 */
const getPermissionRouter = function (routers =[], rights = [], noRight = [], deep=0) {
  rights = [...rights,...ConstantRight];
  return routers.filter( route => {
    let children = route.children;
    if(children){
      route.children = getPermissionRouter(children,rights,noRight,deep+1);
      if(route.children.length) return true;
    }
    if(~rights.indexOf(route.permission)) return true;
    noRight.push(route.path);
    return false;
  })
}

export default {
    state : {
        token  : '',//用户token
        permissionRouter : [],//权限路由
        noPermissionRouter : [],//没有权限，重定向的路由
        noRightRouter : [],//没有权限的路由
        permissionList : [],//权限列表
        userInfo : {},//用户信息
    },
    mutations : {
        SET_TOKEN: (state, token) => {//设置用户登录token
          switch (ConstantModel) {//判断token存储模式
            case 'vuex':
              state.token = token;
              break
            case 'cookie':
              token ? BaseUtils.setCookie('token',token)
                    : BaseUtils.deleteCookie('token');
              break;
            case 'localStorage':
              token ? BaseUtils.setLocalStorage('token',token)
                    : BaseUtils.deleteLocalStorage('token');
              break;
            case 'sessionStorage':
              token ? BaseUtils.setSessionStorage('token',token)
                    : BaseUtils.deleteSessionStorage('token');
              break;
            default:
              token ? BaseUtils.setCookie('token',token)
                    : BaseUtils.deleteCookie('token');
          };
        },
        SET_PERMISSION_ROUTER : (state,routers) => {//生成有权限的路由
          state.permissionRouter = routers
        },
        SET_NO_PERMISSION_ROUTER : (state) => {//生成没有权限的路由
          state.noPermissionRouter = state.noRightRouter.map(path => ({
            path : path,redirect:'/403',hidden:false
          }));
        },
        SET_PERMISSION_LIST : (state,data) => {//缓存权限列表
          state.permissionList = data;
        },
        SET_USER_INFO : (state,userInfo) => {//存储用户信息
          switch (ConstantModel) {//判断token存储模式
            case 'vuex':
              state.userInfo = userInfo;
              break
            case 'cookie':
              userInfo ? BaseUtils.setCookie('userInfo',JSON.stringify(userInfo))
                    : BaseUtils.deleteCookie('userInfo');
              break;
            case 'localStorage':
              userInfo ? BaseUtils.setLocalStorage('userInfo',JSON.stringify(userInfo))
                    : BaseUtils.deleteLocalStorage('userInfo');
              break;
            case 'sessionStorage':
              userInfo ? BaseUtils.setSessionStorage('userInfo',JSON.stringify(userInfo))
                    : BaseUtils.deleteSessionStorage('userInfo');
              break;
            default:
              userInfo ? BaseUtils.setCookie('userInfo',JSON.stringify(userInfo))
                    : BaseUtils.deleteCookie('userInfo');
          };
        }
    },
    actions : {
        login ({dispatch,commit},payload) {//登录
            let {userName,password} = payload;
            dispatch('handleAxios',{
              axiosName : 'login',
              params   : {
                userName : userName.trim(),
                password : Md5(password)
              },
              success  : (res) => {
                commit('SET_TOKEN',res.token);
                dispatch('getUserInfo').then((res) => {
                  res && router.push('/main');
                })
              }
            })
        },
        getUserInfo ({dispatch,commit}) {//获取用户信息
          return new Promise((resolve,reject) => {
            dispatch('handleAxios',{
              axiosName : 'getUserInfo',
              success  : (res) => {
                commit('SET_USER_INFO',res.data);
                resolve(true)
              },
              error    : (res) => {
                dispatch('notifyWarn','用户信息获取失败，请重新登录');
                reject()
              }
            })
          })
        },
        logout({dispatch, commit, state }) {//退出登录
          dispatch('handleConfirm',{
            title   : '退出',
            msg     : '确认退出此系统',
            success : () => {
              dispatch('handleAxios',{
                axiosName : 'logout',
                success  : (res) => {
                  dispatch('clearInfo').then((res) => {
                    dispatch('notifySuccess','退出成功')
                    setTimeout(() => {
                      location.reload()
                    },2000)
                  })
                }
              })
            }
          })
        },
        getPermissionList ({dispatch,commit}) {//获取权限列表
          return new Promise((resolve,reject) => {
            dispatch('handleAxios',{
              axiosName : 'permissionList',
              success  : (res) => {
                commit('SET_PERMISSION_LIST',res.data);
                resolve(res)
              },
              error    : (error) => {
                reject(false)
              }
            })
          })
        },
        setPermissionList({ commit, state },payload) {//设置路由列表
          let {data} = payload;
          commit('SET_PERMISSION_LIST',data);
          commit('SET_PERMISSION_ROUTER',getPermissionRouter([AsyncRouter],data,state.noRightRouter))
          commit('SET_NO_PERMISSION_ROUTER');
          return new Promise((resolve, reject) => {
            resolve({
              permissionRouter : state.permissionRouter,
              noPermissionRouter : state.noPermissionRouter
            })
          }).catch(error => {
            reject(error)
          })
        },
        clearInfo ({ commit, state }) {
          return new Promise((resolve, reject) => {
            commit('SET_TOKEN');
            commit('SET_USER_INFO');
            resolve(true)
          })
        }
    },
    getters : {
      GET_TOKEN : state => state.token,
      GET_PERMISSION_ROUTER : state => state.permissionRouter
    }
  }
