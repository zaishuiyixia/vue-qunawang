# travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# ./assets/styles/reset.css
重置样式文件

# ./assets/styles/border.css
解决在不同分辨率下1px边框问题，了解一下这个怎么使用

# <li class="item border-bottom">
在首页引入了一像素边框解决方案border.css文件，如果想让li标签底部有1像素边框，则只需要加一个class="border-bottom"

# npm install fastclick
fastclick这个库是用来解决移动端开发中，在某些机型上，某些浏览器上当使用click事件时，click会延迟300ms然后再执行的问题

# npm install stylus --save 
使用stylus
# npm install stylus-loader --save
使用stylus

# <style lang="stylus" scoped>
scoped的作用是让组件中的样式只在组件中生效，而不会影响全局的样式; 如果要使用stylue编写样式需要在style标签加入lang="stylus"

# <style lang="stylus" scoped> @import "~@/assets/styles/varibles.styl" </style>
在样式中要引入文件要在import前面加上@符号，而且如果文件路径前面要加上~符号

# @/pages/home/Home
@符号表示src目录，引入src目录下的pages目录下的home目录下的Home文件名的文件。这是在build文件夹下的webpack.base.conf.js文件中定义的简写形式，如果要创建其他的别名用来简写路径，也在这个文件中定义,且修改webpack配置项的时候一定要重启服务，否则编译打包会报错。

# cnpm install vue-awesome-swiper@2.6.7 --save
轮播插件

# .wrapper >>> .swiper-pagination-bullet-active background: #fff
让swiper-pagination-bullet-active的样式不受scoped的限制，从而可以作用于全局

# 在vue中发送ajax有很多工具可供选用，例如
1、浏览器自带的fetch函数

2、vue以前推荐的vue-resource这个第三方的模块

3、现在vue官方推荐使用的是axios这个第三方模块，axios非常强大，可以实现跨平台的请求。比如说，在浏览器端axios可以发送xhr的请求；在node的服务器上可以发送http的请求；支持 Promise API；可以拦截请求和响应；客户端支持防止 CSRF/XSRF；取消请求；自动转换JSON数据。

# 在没有后端支持的情况下，如何实现数据的模拟？
在用脚手架搭建的整个项目的目录下有一个static目录，static目录存放的是静态的文件。在整个脚手架构建的项目工程里面，只有static目录下的内容可以被外部访问到

# 看一下config文件夹下的index.js文件的注释笔记，关于开发环境的代理配置

# 使用swiper组件请求数据渲染首屏展示最后一条数据问题：因为在没有发送axios获取数据的时候，swiper是以数据为空数组初始化创建的，所以发送axios请求到数据以后首屏渲染的是最后一条数据
解决办法：使用v-if对初始化swiper的数据进行判断，如果存在，说明已经发送axios请求道数据，在显示到页面上
# 在模板里面尽量避免出现逻辑性的，比如模版里面一个标签的属性出现逻辑代码：<template><swiper v-if="list.length"></swiper></template>
可以在组件里写一个计算属性：computed: { showSwiper () { return this.list.length } }, 然后替换成swiper v-if="showSwiper">

# <router-link to="/">
回到首页，/带表根路径

# 用vue-cli脚手架的时候，给组件写样式时不用添加浏览器厂商前缀，脚手架在打包的时候会自动的帮你添加

# npm install  better-scroll --save
在List.vue组建中，由于没有对高度作出限制，所以当内容取得高度大于手机的高度时，会出现滚动条。所以我们对最顶层的父元素的进行了绝对定位，超出部分overflow: hidden.之后通过better-scroll来解决上下滑动问题。

better-scroll 是一款重点解决移动端（现已支持 PC 端）各种滚动场景需求的插件。它的核心是借鉴的 iscroll 的实现，它的 API 设计基本兼容 iscroll，在 iscroll 的基础上又扩展了一些 feature 以及做了一些性能优化。

better-scroll 是基于原生 JS 实现的，不依赖任何框架。它编译后的代码大小是 63kb，压缩后是 35kb，gzip 后仅有 9kb，是一款非常轻量的 JS 库。

使用方法将需要滚动的内容用一个标签包裹起来。所以需要在<div class="list" ref="wrapper">...<div>里用一个<div></div>标签把需要滚动的内容包裹起来。

[方法地址](https://zhuanlan.zhihu.com/p/27407024)

# 使用better-scroll点击事件不生效
应为在手机手机端是没有点击事件的，用的是touch事件，所以在开发调试的时候若想在使用better-scroll时点击事件生效，就需要在创建better对象的时候，传入额外的配置项，见List.vue组件。

# 对象也是可以用of来遍历的，在List.vue中，<div class="area" v-for="(item, key) of cities" :key="key">
item是属性key对应的属性值，key为被遍历对象的属性

# 只要使用localStorage的时候，就在外层包裹一层try...catch
因为在某些浏览器，如果用户关闭了本地存储的功能或者使用隐身模式，使用localStorage可能会导致浏览器抛出异常，程序就运行不了了

# <keep-alive><router-view/></keep-alive>
keep-alive是vue自带的标签，作用是路由的内容被加载过一次之后，放到内存之中，下一此再进这个路由的时候就不用重新渲染这个组件了，继而也就不会重新执行钩子函数，还有像发送请求再次获取数据这样的操作了。它会把以前的内容(数据)从内存里拿出来显示，继而不用从新发请求渲染数据了。

# 再使用<keep-alive><router-view/></keep-alive>时，如何改变缓存中的数据(页面重新跳转回来的时候，使用这个标签会导致不会发送请求，直接在缓存中拿，如果想要发送请求获取新的数据怎么做呢)
当使用这个标签的时候，组件里会多出一个生命周期函数：activated。(Home.vue组件)以mounted生命周期函数为例，首次进入页面的时候mounted和activated都会执行。当进入其他页面再跳转回来的时候，mounted生命周期函数不会执行,但activated生命周期函数还会执行，所以借助这个函数可以改变缓存中的数据。

与activated生命周期函数相对应的就是deactivated生命周期函数。它会在组件被替换、页面被隐藏(如跳到其他页面)的时候执行。

# <ul><router-link to="/detail"><li>...</li></router-link></ul>
在渲染的时候会把router-link软染成一个a标签，这会改变被router-link包裹的字体的颜色。一般是修改渲染后的字体颜色，还有一个方法是: `<ul><router-link to="/detail" tag="li">...</router-link></ul>`，这样再渲染的时候就不会把router-link渲染成a标签了，而是会渲染成li标签。(Recommend.vue)

# common文件夹存放的是全局公用组件
以画廊组件为例。之所以要在common文件夹下新建一个gallery文件夹存放画廊组件，是因为考虑到如果gallery画廊组件很大的话，则可以继续在gallery文件夹中进行拆分。

# 当把事件绑定到全局对象上的时候，不要忘记要对全局事件进行解绑
如果把事件绑定在全局对象之上，则在其他组件页面也会产生影响(detail文件夹下的Header.vue组件)

# vue项目如何进行真机测试
第一步，获取ip地址：如果是windows操作系统在命令行下运行ipconfig(macos运行ifconfig)，通过执行这个命令可以获取这台机器的ip地址;
第二步，修改webpack的配置项：项目是通过运行命令行npm ren dev(即使用webpack-dev-server)启动的，webpack-dev-server默认不支持通过ip的形式进行页面的访问，所以要对默认的配置项进行修改。
在项目的pack.json文件中，如果你想你的项目能够通过ip地址被访问的话，就要修改npm run dev这个配置项，只需在webpack-dev-server后面添加--host 0.0.0.0。配置好了之后从启服务器，就可以通过ip地址访问了。这样就可以用手机在内网里通过ip地址打开项目了(只需要保证手机和电脑在同一个局域网内就可以了)。

# 拖动字母表页面跟着上下拖动问题的解决方法
在Alphabet.vue组件中，在touchstart事件后面加上prevent命令修饰符，它会阻止touchstart的默认行为，当把touchstart的默认行为阻止掉之后，拖动字母表就不会出现页面跟着上下滚动的问题。

# 如果手机打开项目出项白屏可能有如下两个原因
1、手机浏览器上默认不支持promise，而我们在项目中使用了promise。解决这个兼容性问题需要安装一个第三方的包，需要安装babel-polyfill这个第三方的包。它会判断浏览器如果没有promise，它会帮你安装es6这些新特性，从而解决es6的兼容性问题。安装完之后，别忘了在main.js文件中引入babel-polyfill。

2、如果安装babel-polyfill刷新之后还是白屏，就可能是webpack-dev-sever的问题，遇到这种问题在打包上线，把项目放到线上环境上去做测试就会解决白屏问题。

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
