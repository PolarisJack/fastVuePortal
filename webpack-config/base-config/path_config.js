/**
 * Created by Jack on 2018/3/28.
 * 项目目录对应配置
 */


const path = require('path');

const moduleExports = {};


moduleExports.RootPath = path.resolve(__dirname, '../../');//项目根目录

moduleExports.srcPath = path.resolve(moduleExports.RootPath, './src');//项目源代码目录

moduleExports.entryPath = path.resolve(moduleExports.srcPath, './layouts');//项目入口html

moduleExports.distPath = path.resolve(moduleExports.RootPath, './dist');//项目打包输出目录

moduleExports.assetsPath = path.resolve(moduleExports.srcPath, './assets');//项目入口html

moduleExports.scssPath = path.resolve(moduleExports.assetsPath, './style/scss');//scss位置

moduleExports.cssPath = path.resolve(moduleExports.assetsPath, './style/css');//css位置

moduleExports.componentsPath = path.resolve(moduleExports.srcPath, './components');//组件位置

moduleExports.cpLibPath = path.resolve(moduleExports.componentsPath, './libs');//基础组件位置

moduleExports.cpPublicPath = path.resolve(moduleExports.componentsPath, './public');//公共组件位置

moduleExports.routersPath = path.resolve(moduleExports.srcPath, './routers');//routers

moduleExports.apisPath = path.resolve(moduleExports.srcPath, './apis');//routers

moduleExports.containersPath = path.resolve(moduleExports.srcPath, './containers');//containers位置

moduleExports.jsPath = path.resolve(moduleExports.srcPath, './assets/js');//js第三方库或不常用代码存放

moduleExports.imagesPath = path.resolve(moduleExports.srcPath, './assets/images');//图片位置



moduleExports.staticPath = path.resolve(moduleExports.RootPath, './static/**/*');//静态资源原路径

module.exports = moduleExports;
