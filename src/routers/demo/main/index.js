/**
 * Created by jack on 2018/5/10.
 * 引用 zyb
 */


/**
 * 菜单项全部路由
 */

import { Arrayed } from 'js/utils/index';

const order = ['home', 'node', 'webpack', 'web', 'form', 'table', 'echart', 'group', 'vues', 'deploy']; //菜单顺序

export default (_import) => { //按文件读取配置
    return Arrayed.deconstruction(
        (r => {
            return r.keys().map(key => r(key).default(_import));
        })(require.context('./', true, /^\.\/((?!\/)[\s\S])+\/index\.js$/)),
        (arr) => {

        }
    ).sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name))
}