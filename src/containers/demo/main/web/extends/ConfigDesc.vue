<template>
    <div class="web-desc">
        <h2>web结构说明：</h2>
        <ul>
            <li>1、web入口文件为layout/文件夹名字，每一个文件夹会生成一个输出单页面。所以，一个项目可以用多个单页面构成多页面，也可以用一个单页面。此示例中就生成了两个单页面。</li>
            <li>2、router为路由配置，每个单页面对应自己的路由配置文件夹。</li>
            <li>3、vuex为spa的数据状态机，每个spa有自己对应的状态机。</li>
            <li>4、containers为结构组件，每个spa有自己的结构组件文件夹。</li>
            <li>5、components为公共组件，公共组件为所有spa所公用。</li>
            <li>6、assets为第三方资源，或自定义资源，除了请求方式以外，其他都为公用，因为请求方式有引用到路由，而路由是独立的，所以请求方式也是独立的。</li>
            <li>7、apis为web接口管理，每个spa有自己独立的接口配置。
                <span>I：apis的接口由读取文件的形式获取每个暴露的接口对象，所以页面只需要用到对应key就可以请求对应的接口。</span>
                <span>II：所有的请求接口会经过vuex的actions封装的handleAxios，所有的接口对象由这个地方引入，所以不需要在页面其他地方再次引入这个接口对象，需要调用的地方只需要用到接口的key就可以。</span>
                <span>III：请求拦截和响应拦截，客户端用的是axios请求服务，对应的请求拦截和响应拦截都在assets/js/https/axios中做的配置。</span>
                <span>IV：aixos请求拦截---对空参数做过滤、添加全局公共参数、设置token、解决ie的get请求缓存问题、全局loading状态设置</span>
                <span>V：axios响应拦截----对token超时，过期进行拦截校验，全局loading状态控制</span>
            </li>
            <li>8、内置路由模块和权限系统集成：
                <span>I：此框架的web模块提供给后台管理系统使用，如果希望用到在其他场景，可以替换掉web模块的结构，node层和webpack配置依然不变。</span>
                <span>II：基本功能提供：登录、主页、404、403页面</span>
                <span>III：web设计使用动态路由，配合权限接口生成权限路由，初始状态：登录页面、403、404为固定路由，所有角色都可以访问。</span>
                <span>IV：其他模块均为权限路由，需要后台提供权限接口，通过路由配置中的permission去设置权限id。</span>
                <span>V：如果框架不需要权限，可以在routers/router中去配置公共权限模块，把所有路由模块都设置为公共权限模块。</span>
                <span>VI：路由生成为读取文件的形式，只要在动态路由模块main内部去添加对应的模块路由即可，会自动读取所配置的文件。</span>
                <span>VII：路由组件模块提供了异步组件机制，只需要把router中对应的环境配置进行修改即可。</span>
                <span>VIII：权限系统：vuex/module/user --- 用户登录 -> 获取token -> 存储token -> 获取用户信息 -> 存储用户信息 -> 跳转主页 -> 路由守卫检测是否有路由列表、是否有token（有则直接跳转主页） -> 获取权限 -> 根据权限生成已有权限的路由 -> 跳转主页</span>
            </li>
            <li>9、内置功能组件：
                <span>I：功能公用组件在components中，所有项目可公用的组件在libs中，具体项目自建功能组件请写入public中。</span>
                <span>II：所有项目公用组件内置大多是基于element的二次封装</span>
                <span>III：tablePagination 列表分页组件：
                    <i>a、内置分页和table列表，能满足e-table的所有功能，并且有一些扩展功能</i>
                    <i>b、提供了两种方式传递tableData数据，一种是此组件内部请求，内部绑定（默认）,另一种是通过父组件传递props--tableData绑定。选择哪种模式通过props--normal控制，true为不派发成功回调的方式，进行内部渲染方式</i>
                    <i>c、props --setting 因为是内部请求，所以只需要传递请求参数和请求对象名称</i>
                    <i>d、props ---init 提供初始是否默认查询:true(默认) 查询，false不查询</i>
                    <i>e、props ---height 可设置列表区域高度</i>
                    <i>f、props ---hiddenLoading (true 取消table加载过渡状态) 默认false</i>
                    <i>g、props ---pageHidden 是否隐藏分页 默认false</i>
                    <i>h、props ---search 改变search即可触发查询</i>
                    <i>i、props ---tableHeader 设置列表数据，通过遍历此数组，进行表头和内容数据的绑定</i>
                    <i>j、props ---totalRows 设置总页数（没有特殊需求可忽略）</i>
                    <i>k、props ---alias 字段转换，主要是服务返回数据字段和默认字段有差异时设置</i>
                    <i>l、组件内部已经处理分页以及分页参数，所以传递参数时只需要传递其他参数即可</i>
                </span>
                <span>IV：formFields表单组件：
                    <i>a、表单封装也是基于element-ui的el-form,同样提供了所有el-form所能提供的功能</i>
                    <i>b、props ---fields(Array) 通过遍历fields数组生成不同类型的表单控件：内置的表单控件有 cascader(可联动的下拉框)、checkbox(复选框)、datePicker(日期选择器)、dateTimePicker(时间选择器)、input(输入框)、select(可缓存的简易下拉框)、switch(切换)、textarea(文本域)</i>
                    <i>c、props ---formFields(Object) 双向绑定的控件model</i>
                    <i>d、props ---formRules(Array) 表单校验规则-同el-form的表单校验方式</i>
                    <i>e、props ---labelWidth 内置的标题宽度 默认100px</i>
                    <i>f、props ---formFieldsAttrs 自定义融合属性，将于el-form进行属性绑定融合，详见el-form的配置</i>
                    <i>g、props ---formFieldItemAttrs自定义控件融合属性，详见el-form融合属性</i>
                    <i>h、props ---prefixButton(Array) 前自定义按钮,可配置多个自定义按钮</i>
                    <i>i、props ---suffixButton(Array) 后自定义按钮，可配置多个</i>
                    <i>j、props ---innerButton(Object) 内置按钮，默认显示，有查询和重置两个按钮</i>
                </span>
                <span>V：formFields具体控件配置：
                    <h3>fields:</h3>
                    <i>a、porp:绑定的key</i>
                    <i>b、type:控件类型</i>
                    <i>c、placeholder 控件的placeholder</i>
                    <i>d、label 控件的标题</i>
                    <i>e、cascader独有的：options ---控件绑定的数组 cascaderAttrs:控件绑定融合属性 axiosName:内部请求的请求名称 alias:解析字段 params :参数对象 success:成功回调 error:错误回调 init:是否初始请求 click:change事件触发</i>
                    <i>f、级联选择需要外部监听formfields对应的mode值进行请求</i>
                    <h3>prefixButton、suffixButton:</h3>
                    <i>a、除了两个内置按钮以外，在两个内置按钮前和后面可以自定义按钮</i>
                    <h3>innerButton</h3>
                    <i>a、分为resetMessage、submitMessage配置相同，一个是重置按钮一个是提交按钮</i>
                    <i>b、show 是否显示按钮，重置按钮默认false，提交按钮默认true</i>
                    <i>c、name 显示的name值</i>
                    <i>d、type 按钮类型 同element-ui 的button组件</i>
                    <i>e、afterSubmit、beforeSubmit在提交前后操作的对应方法</i>
                    <i>f、afterReset、beforeReset在重置前后操作的对应方法</i>
                    <i>g、resetToast 默认true，重置按钮是否显示确认弹框，cancelButtonText、confirmButtonText对应确认弹出框显示的内容</i>
                </span>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
    .web-desc{
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
                i{
                    display: inline-block;
                    width:100%;
                    text-indent: 45px;
                }
            }
        }
    }
</style>
