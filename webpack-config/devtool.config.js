/**
 * Created by Jack on 2018/3/28.
 * sourcemap构建
 */



 module.exports = process.env.NODE_ENV == 'production' ? "cheap-module-source-map" : "source-map";