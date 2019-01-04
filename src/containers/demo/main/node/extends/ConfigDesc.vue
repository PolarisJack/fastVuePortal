<template>
    <div class="node-config-desc">
        <h2>node层结构和说明:</h2>
        <ul>
            <li>1、node层启动文件 root/server.js：
                <span>I：es6，es7语法解析</span>
                <span>II：es6模块解析</span>
                <span>III：实时编译</span>
                <span>IV：启动服务index.js</span>
            </li>
            <li>2、node层配置文件root/config/project_config:
                <span>I：配置项目名称</span>
                <span>II：服务启动端口</span>
                <span>III：后台微服务地址</span>
                <span>IV：openUrl为开发环境时使用，启动服务时自动开打浏览器的地址，生成环境可忽略</span>
            </li>
            <li>3、node层日志配置文件root/config/log.js:
                <span>I：运行时日志配置</span>
                <span>II：错误日志配置</span>
                <span>III：日志模块用的是Winston，只做了基础日志配置和输出，后续完善各种场景日志</span>
            </li>
            <li>4、node服务配置文件app.js: 
                <span>I：controller ---控制器：node服务控制。model ---数据层：模拟数据和第三方数据。router ---路由：提供给web的node层接口</span>
                <span>II：router通过读取文件的形式读取 controller的接口控制类 ---controller/handler。因为是读取文件的形式，不需要在router中引入对应的类，只需要应用对应的类名</span>
                <span>III：model暂时做了静态数据管理，未做动态数据管理</span>
                <span>IV：controller/api 对后台服务接口统一的管理，这儿相对麻烦，每多一个微服务，需要多暴露一个对象，并且在每个控制类中引入这个api</span>
                <span>V：controller/handle 通过读取文件的方式暴露出类，提供给router使用。并且通过request-promise请求后台服务，所以每个控制类需要引入请求类，也可以使用继承去继承请求类</span>
                <span>VI：controller/utils为node层工具类。包含基本校验、数据转换、对象扩展、日期扩展等</span>
            </li>
            <li>5、node层数据流图可看PPT</li>
        </ul>
    </div>
</template>
<style lang="scss">
    .node-config-desc{
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
