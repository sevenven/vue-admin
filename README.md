####目标
从零开始搭建、配置与优化一个基于vue+webpack的SPA后台管理系统框架
####项目启动说明
请保证node环境是10.x，在根目录下依次运行

`npm install`

`npm run dev`

####预览

用户名：admin
密码：000000(6个0)

####项目说明

打包工具：webpack

ES6及ES7支持: babel

代码规范检查: eslint

主要技术栈：vue+vueRouter+vuex+element-ui

项目特点：
+ 自适应不同大小屏幕，导航栏始终固定在页面上。局部更新，保证页面不会出现闪动。
+ 提供顶部导航栏 操作更加便捷
+ 全面合理的工程目录规划，保证项目质量
+ 根据项目需求对有不同的库全量引入或按需引入，在Vue.prototype挂载体积较小的项目工具库，减少手动引用
+ 使用vuex规范应用程序的状态管理，是的数据流向更加清晰
+ 封装axios 将发送请求的细节与数据处理分开 减少代码耦合 统一规范ajax请求细节 提高开发效率

####项目构建说明
在项目构建方面 没有使用vue的脚手架 而是自己从头到尾写webpack配置
 
#####首先是基础打包
+ babel支持ES6/ES7转码ES5
+ ESlint自动检测代码规范
+ 必要的loader
+ 必要的plugin
+ webpack-dev-server提供服务和热更新，优先使用热更新，热更新不起作用自动刷新页面
+ source-map精确定位错误代码所在位置

#####然后是打包优化
1. 使用contenthash对文件重命名，保证浏览器和代理服务器对缓存的使用，也保证代码更新不受缓存影响
2. 将打包代码分为开发环境与生产环境，不同场景下直接运行对应npm脚本即可
3. 在生产环境对图片进行压缩，提高加载速度，节省流量 
5. 在production下默认支持tree shaking，支持ES Moudle方式引用模块，对不想进行tree shaking的模块在package.json配置sideEffects:[]
6. 使用code split将引入的库与业务代码分离，避免每次更新业务代码都导致缓存失效
7. production环境下集成打包代码分析工具，避免产生不合理的打包代码
8. 如果希望首屏加载速度更快，可以在业务代码编写lazy loading、prefetching，如果有特别高的要求可以考虑SSR
9. 还可以根据项目需要对css文件代码进行分割等


