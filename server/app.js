/**
 * Created by Jack on 2018/3/28.
 * 服务配置文件
 */


'use strict';

import path from 'path';
import Koa from 'koa';
import mount from 'koa-mount';
import staticServer from 'koa-static';
import koaBody from 'koa-body';
import winston from 'winston';
import routers from './routers/index';
let app =new Koa();

if (process.env.NODE_ENV == 'development') {//开发环境下webpack的配置应用
	let webpack = require('webpack');
	let compile = webpack(require('../webpack.config.js'));
	let koaWM = require('koa-webpack-middleware');
	app.use(koaWM.devMiddleware(compile, {
        noInfo: false,
        quiet: false,
        watchOptions: {
            aggregateTimeout: 300
        },
        hot: true,
        stats: {
            colors: true
        }
    })).use(koaWM.hotMiddleware(compile));
}

app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200*1024*1024 // 设置上传文件大小最大限制，默认2M
  }
}));


app.use(staticServer(path.join(__dirname, './../dist')));//静态资源

routers(app);//路由模块

app.use(async ctx => { //没有路由模块的中间件
    winston.warn('not find path-----未找到请求路径');
    ctx.body = {
        returnSuccess: false,
        returnErrCode: 'node.error.0000',
        returnErrMsg: '未找到请求路径'
    }
});

module.exports = app;
