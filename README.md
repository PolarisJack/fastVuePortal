#更新日志
	2018/12/29
		1、formFiled 的input组件增加 keyup.enter事件，通过fileds中传入的keyupenter注入，同时增加blur事件

		2、移除路由中自定义的menu，配置移植到meta中，同时增加hidden属性，表示此路由非菜单路由

		3、增加breadCrumb到libs中，匹配路由中的meta，同时匹配侧边导航的title和顶部导航显示的title，弊端是自定义顶部显示内容变得复杂

		4、sideBar移植到libs中作为组件继承

		5、tablePagination组件中，每个item的class绑定方式从temp的class字段定义增加为temp中的class和后台返回的keyClass字段绑定。变更目的：table中同一key值的不同表现出不同的类的形式使用，具体看案例。

		6、tablePagination组件中，增加排头index，通过header中的showIndex：true字段设置

		7、增加prompt 弹出框组件，element-ui的dialog组件会受到父级z-index的影响，在某些场景下并不适用。

		8、增加过渡效果，table的独立loading和全局loading
	2018/7/22

		1、完善demo组件说明。

		2、增加部署说明和开发流程说明。

		3、增加框架功能说明。
	2018/8/21

		1、增加formfields联动组件cascader,实现下拉联动自绑定数据，详情看例子，demo中表单案例。

		2、增加tablePagination插入功能，不通过分发的方式插入可操作的项，详情看例子。

		3、根实例混合入全局提示

		4、增加formfields可操控的缓存参数，可以自定义下拉框内容是否需要缓存和更新

	2018/7/16

		1、完善项目说明。

		2、修复formfields 组件select报错问题（未提取apiAxios统一到action的handleAxios中）。

		3、增加index模板，handle拆分为（上个版本不同页面的handle在一个对象中）。

		4、style中添加配置文件skin，实现头部样式自定义,侧边导航自定义样式。


#项目配置说明 tm_web@v1.0.0

#项目启动和打包说明

	环境要求 ： node7x、ruby(项目scss依赖环境)
	
	拉取依赖 ：npm install

	启动命令 : npm run dev

	打包命令 : npm run build

#不同项目配置

  	config/project.config.js : 后台接口地址配置

	config/log.js : 日志配置

#项目技术栈

	node 服务中间层

	npm  依赖管理

	koa2 服务中间层框架 https://koa.bootcss.com/

	webpack 开发环境打包、编译 https://www.webpackjs.com/

	vue 视图层框架 https://cn.vuejs.org/v2/guide/

	vue-router 视图层路由 https://router.vuejs.org/zh/

	vuex 视图层数据管理 https://vuex.vuejs.org/zh/guide/

	element-ui 视图层UI框架 http://element.eleme.io/#/zh-CN/component/installation

	axios 视图层请求方式->服务中间层 https://www.npmjs.com/package/axios2

	request-promise 服务中间层请求方式->服务器提供层 https://www.npmjs.com/package/request-promise

	winston 日志管理系统 https://www.npmjs.com/package/winston

	pm2 服务中间层进程管理 https://www.npmjs.com/package/pm2

#主要版本说明

	1、node@v7.9.0

	2、webpack@v3.7x   未升级到4x---4x移除webpack.optimize.CommonsChunkPlugin

	3、koa@v2x

	4、vue@v2x

#webpack配置项说明

	1、差异配置 webpack-config/base-config/进行配置

	2、webpack打包注意事项

		多入口，多输出打包配置，在src/layouts 创建文件夹& .html 会对应打包出相应模块

		静态资源可放置到static也可以放置到src/assets。后者会打包到js中

	3、webpack插件

		开发环境

			热更新

			自动开启浏览器调试

		生产环境

			css抽离

			静态资源复制

			打包清除

	4、babel

		scss、css

		es6

		img、svg.... //小于8192byte会转base64

		vue

#node技术栈说明

	1、koa@2x以及基于koa的基本模块 koa-mount、koa-body、koa-webpack-middleware

	2、请求后台 request-promise

#node项目结构说明

	controller : node逻辑处理

		public : 公用类 (根据需求添加)

		utils  : 基础工具 (项目差异内容存放)

		lib    : 基础类 (所有项目公用，需讨论添加)


#view项目结构说明

	src : 源代码存放目录

		apis       : 接口统一管理

		assets     : 静态资源

		components : 公用组件存放

			public : 自定义公用组件

			lib    : 静态公用组件

		containers : 项目结构组件

		layouts    : 项目入口

		routers    : 项目路由

		vuex       : 项目状态机
