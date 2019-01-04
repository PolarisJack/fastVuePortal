<template>
    <div class="deploy-desc">
        <h2>开发部署流程：</h2>
        <ul>
            <li>1、开发环境搭建：
                <span>I：git拉取项目</span>
                <span>II：本地安装node（要求7+版本）</span>
                <span>III：npm install 拉取依赖</span>
                <span>IV：npm run dev启动项目</span>
                <span>如果启动以后报错，可能出现的问题：
                    <i>a、项目有用到scss，scss需要ruby环境，所以本地需要安装ruby</i>
                    <i>b、未配置node环境变量，详见node官网</i>
                </span>
                <span>V：npm run build 打包</span>
                <span>VI：如果不通过本地打包，通过jenkins自动化部署，则配置jenkins脚本，执行命令也是拉取git代码，npm install 拉取依赖，npm run build打包</span>
            </li>
            <li>2、生产环境搭建：
                <span>I：服务器下载安装node，注意匹配版本</span>
                <span>II：提取服务代码包：server.js、index.js、package.json、.babelrc、server/、config/、以及web打包代码（dist）</span>
                <span>III：npm install拉取依赖</span>
                <span>IV：npm install pm2下载 node进程管理工具</span>
                <span>V：pm2 start server.js 启动服务</span>
                <span>VI：如果用脚本启动，脚本流程一致</span>
                <span>VII：如果jenkins自动部署，执行流程一致，需要注意的是，复制jenkins打包后的代码到服务器时，需要先执行删除dist和server</span>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
    .deploy-desc{
        h2{
            line-height: 50px;
        }
        li{
            line-height: 32px;
            text-indent: 15px;
            span{
                display: inline-block;
                width:100%;
                line-height: 32px;
                text-indent: 30px;
            }
        }
    }
</style>

