/**
 * Created by Jack on 2018/3/28.
 * 文件后缀扩展*路径快捷
 */



const pathArr = require('./base-config/path_config.js');
module.exports = {
  extensions: ['.jsx' ,'.js' ,'.scss' ,'.less' ,'.css' ,'.png' ,'.jpg','.vue'],
  alias: {
  	  'js'         : pathArr.jsPath,
      'scss'       : pathArr.scssPath,
      'css'        : pathArr.cssPath,
      'apis'       : pathArr.apisPath,
      'images'     : pathArr.imagesPath,
      'routers'    : pathArr.routersPath,
      'assets'     : pathArr.assetsPath,
      'containers' : pathArr.containersPath,
      'components' : pathArr.componentsPath,
      'cpLibs'      : pathArr.cpLibPath,
      'cpPublic'   : pathArr.cpPublicPath
  }
}
