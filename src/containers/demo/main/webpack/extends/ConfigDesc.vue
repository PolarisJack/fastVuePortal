<template>
    <div class="webpack-desc">
        <h2>功能提供说明：</h2>
        <ul>
            <li>1、根据入口文件生成对应的输出文件，作为spa页面的加载文件</li>
            <li>2、webpack只能解析js，需要提供对应babel解析其不能解析的内容：
                <span>I：解析ES6,ES7语法</span>
                <span>II：解析图片资源</span>
                <span>III：解析css等资源(提供了sass解析)</span>
            </li>
            <li>3、开发环境以及生产环境插件应用：
                <span>I：抽离出了公共的css：让打包主文件体积变小</span>
                <span>II：公共插件抽离：项目所用到的公共插件进行抽离，让主文件体积变小</span>
                <span>III：静态资源复制：项目引用的静态资源，随着打包输出到出口文件夹，避免手动复制</span>
                <span>IV：出口文件夹清除：避免多次打包造成每次输出的文件还存在的问题，每次只有最新的输出文件</span>
                <span>V：开发环境下的热更新：避免每次刷新浏览器等复杂操作，提高开发速度</span>
                <span>VI：浏览器自动开打页面：每次启动项目浏览器会自动打开页面，避免每次手动输入地址，提高开发时间</span>
                <span>VII：压缩插件：编译打包时对代码进行压缩，减小代码体积</span>
            </li>
        </ul>
        <h2>webpack配置说明：</h2>
        <ul>
            <li>1、webpack配置入口文件：root/webpack.config.js。每个配置项root/webpack-config。</li>
            <li>2、其中base-config为基础配置：
                <span>I：name_config读取layout入口文件夹名称，方便webpack入口配置使用。</span>
                <span>II：path_config项目路径对象，提供路径统一管理并方便结构名称修改的调整</span>
            </li>
            <li>3、入口配置(entry):
                <span>I：遍历读取layout文件夹，读取每个单页面入口文件main.js</span>
                <span>II：开发环境热更新插件</span>
            </li>
            <li>
                4、出口配置(output):
                <span>I：hash生成出口文件名称</span>
            </li>
            <li>
                5、sourcemap构建(devtool): 提供sourcemap方式，详见官网说明。
            </li>
            <li>
                6、devServer(已注释)：由node提供koa-webpack-middleware服务。
            </li>
            <li>
                7、模块配置(module):
                <span>I：vue-loader ---解析vue</span>
                <span>II: babel-loader  ---解析es6，es7，提供实时编译插件</span>
                <span>III：url-loader ---解析图片以及图片文件资源</span>
                <span>IV：sass-loader css-loader ---编译css scss</span>
            </li>
            <li>
                8、插件配置(plugins):分为开发环境插件和生成环境插件
                <span>I：css抽离插件（extract-text-webpack-plugin）</span>
                <span>II：公共插件抽离 （webpack.optimize.CommonsChunkPlugin）</span>
                <span>III：静态资源复制 copy-webpack-plugin</span>
                <span>IV：打包删除插件（clean-webpack-plugin）</span>
                <span>V：热模块替换（webpack.HotModuleReplacementPlugin）</span>
                <span>VI：浏览器自动打开（open-browser-webpack-plugin）</span>
                <span>VII：压缩插件（webpack.optimize.UglifyJsPlugin）</span>
                <span>VIII：改变环境变量类型：（webpack.DefinePlugin）</span>
                <span>IX：loader编译插件（webpack.LoaderOptionsPlugin）</span>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
    .webpack-desc{
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

