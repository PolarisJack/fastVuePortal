/**
 * Created by zyb on 2018/5/8.
 *
 */

/**
 * 表单组件
 */
import {Str} from 'js/utils/index';
const keys = {}
export default vue => {
  const compoents = (r => r.keys().map(key => {
    let tmp = key.split('/')[1],
        name = 'form' + Str.titleCase(tmp);
    keys[tmp] = name;
    return ({
      key :name,
      value : r(key).default
    })
  }))(require.context('./', true, /^\.\/((?!\/)[\s\S])+\/index\.vue$/))
  compoents.forEach(item => vue.component(item.key,item.value))
};
export {keys};
