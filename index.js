/**
 * Created by Jack on 2018/3/28.
 *
 */


 'use strict';
import http from 'http';
import winston from 'winston';
import app from './server/app';
import config from './config/project.config';
const server = http.createServer(app.callback());
server.listen(config.port, ()=>{
    winston.info(`服务监听 : http://localhost:${config.port}/`);
});
