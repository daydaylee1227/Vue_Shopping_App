# shopping_app

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

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

# 这是一个基于vue的购物商城系统app
项目基于vue2.0 + vue-router + webpack + Mint-ui + mui库
## 制作首页App组件

1. 完成 Header 区域 使用的是Mint-UI的Header组件
2. 底部 Tabbar 区域  使用的是 MUI 的 Tabbar.html
   - 在制作购物车的小图标的时候 操作多一些
   - 先把扩展图标的 css 样式 和扩展字体库 ttf 文件 拷贝到 项目中
   - 为小购物车添加样式 "mui-icon mui-icon-extra mui-icon-extra-cart"
3. 中间的区域 可以用 router-view 来展示路由匹配到的组件
   - linkActiveClass :'mui-active',覆盖默认的路由高亮的类默认的是 router-link-active

## 改造 tabbar 为router-link

## 完成这个tabbar栏之间的 transition 动画切换
1. 需要注意的点就是设置外面的盒子的属性 overflow-x hidden  避免了水平方向的滚动条
2. 然后动画的实现的过程 需要注意的点  就是 这个 v-leave-to v-enter 设置水平的偏移量 正好是相反的
3. 还有给这个v-leave-to 设置一个 position absolute 这样子 效果最好
## 点击对应的 tabbar 展示对应的路由组件

## 完成首页的轮播图

### 加载轮播图中的数据

1. 获取数据 使用 vue-resourse
2. 下载对应的包  npm i vue-resourse -S
3. import VueResource from 'vue-resourc'
4. Vue.use(VueResource)
5. 遇到的问题就是 图片写入地址的时候 存在路径的问题,静态写法最后导包的时候会出问题,
   最好的写法就是通过属性去绑定!

### 完成首页的九宫格

1. 找到mui中的grid 也就是栅格系统

## 完成这个评论区的子组件

1. 考虑到这个评论区的子组件是公用的 所有创建一个公用的 Comments.vue 组件模板
2. 在需要评论区子组件的时候 手动去导入这个 comment 组件
3. 在父组件使用时  先 'commponents' 属性 把这个注册为自己的子组件  "名称" : 组件模板
4. 把注册好的组件名称 以标签的形式 在页面中使用

### 实现点解加载更多功能
1. 绑定一个事件处理函数, 每次对应组件中的pageindex++  在事件中 请求下一页
2. 然后去重新调用这个getComments 重新去获取新的数据
3. 需要注意的就是  这个 获取的数据不要把旧数据覆盖 也就是要拼接数据 使用这个数组中的Array.concat() 方法

### 完成这个发表评论的功能 

1. 为这个文本框绑定双向数据的绑定
2. 为这个绑定点击事件
3. 判断这个内容是不是为空, 内容是空的话,Toast 提升用户
4. 通过 vue-resource 发送一个数据 把评论内容交给服务器
5. 发表评论完成后, 重新刷新列表  查看最新的评论
    + 换一种方法 评论成功后 在客户端 手动去拼接一个最新的评论对象  然后调用这个数组的unshift方法,这样子就能完美刷新列表

## 完成图片分享

1. 把图片按钮额改成路由的链接

### 绘制图片列表 组件的页面组件结构

1. 制作顶部的滑动条
2. 制作底部图片的展示效果

#### 制作顶部滑动条

1. 借助的就是 mui tab-top-webview-main
2. 需要把这个slider区域中的 mui-fullscreen 类去掉
3. 滑动条无法触动的话 需要导入相应的js 这个是js组件  直接导入mui.js
4. 然后 初始化scroll组件 

#### 使用这个滑动条时候 问题总结

1. ES6语法问题 下载cnpm install babel-plugin-transform-remove-strict-mode -D
2. "ignore":[  './src/assets/mui/js/mui.js'], 在这个.babelrc 配置这个属性
3. 在.babelrc 中的 plugins 配置 ["transform-remove-strict-mode"] 
4. mounted() 初始化这个 滑动控件  也就是 这个生命周期函数的含义就是 组件中的DOM结构被渲染好后并放在页面中去会执行这个生命周期函数  也就是为什么 要这个时候去初始化组件  
5. `*{
    touch-action: pan-y;
}` 解决报错问题
6. 解决这个tabbar栏问题 
 + 问题就是mui中的js代码 跟 tabbar 中 也就是App.vue 中 类名为mui-tab-item冲突
 + 解决的办法 将mui-tab-item 中所有的样式重新写过 并起一个新的类名 也就是 mui-tab-item-daydaylee


### 制作这个图片的列表区域


#### 实现图片的懒加载

1. 需要用到mint-ui中Lazy load 组件 
2. 为了实现效果 我们需要全局导入mint-ui组件
#### Lazy load
1. v-load 属性值就是对应图片的url
2. 为了有懒加载的效果 导入的mint-ui 必须是 全局导入

#### 点击图片 跳转到相应的 位置 也就是改造成 router-link 

1. tag属性改成对应的标签
2. router对象里面要写法需要注意下`{path : '/home/photolist/:id', name : 'photoInfo', component : PhotoInfo},`
3. 导入comment子组件 
    + 导入评论子组件  import
    + 注册子组件
    + 把标签的形式 写入
    + 传入id  然后进去不容的评论板块

#### 完成图片的缩略图
1. vue-preview 插件
#### 步骤
1. cnpm install --save vue2-preview  对于 vue-cli 搭建的环境
2. 官方网站[点击这里查看API](https://github.com/LS1231/vue-preview)

## 改造商品列表路由

1. 将HomeContainer中商品列表按钮改成 router-link to属性加上标签
2. 将router.js 导入路由的模板串 然后匹配相应的路由规则

### 实现商品的经典的两列布局

1. `display : flex; justify-content: space-between; flex-direction: column; 设置主轴的方向`
### 完成商品详情信息展示
1. 首先把这个每个GoodList中 item 改造成 router-link
2. 在router.js 导入 对应路由模板字符串
3. 最后在 路由的匹配规则里面去注册匹配规则
#### 商品详细的展示使用mui-card
1. 使用 mui-card 样式
2. 使用 轮播图 
3. 做的过程的中 发现了 这个轮播图的组件 可以单独的抽离出来, 这样子就可以一起使用了
4. 导入mui-number 组件  完成这个购买计数UI
#### 编程式导航
1. 方式1: 使用的就是 a 标签的形式 叫做标签 跳转
2. 方式2: 使用的[编程式导航](https://router.vuejs.org/zh/guide/essentials/navigation.html)
3. this.$route 是路由对象 所有路由参数 params query 都属于它
4. this.$router 是 一个路由的导航对象 使用它很方便的 运用js代码 很方便的 实现路由 前进 后退 跳转到新URL地址
5. 总结个小问题: 也就是在使用这个 编程式导航 通过`this.$router.push({ name : 'goodscomment', params : { id ,"falist" : this.falist}});`  这个对象里面的属性 也就是 name 对应的路由的名称,z合格params属性里面就是你需要向子逐渐传的数据,需要注意的点就是  这个 属性名称需要打引号 也就是符合JSON语法

#### 商品详情中最下边两个按钮
1. 使用编程式导航 向子组件传入对应的参数
2. 引入mui-botton的时候 可以清除 display flex 布局 实现 块级样式效果

#### 完成加入购物车动画
1. 完成相应的基本效果
2. 问题就是 这个动画 不能去适应这个不同的宽度跟高度
#### 优化加入购物车
1. 原因就在于我们每次把小球的位置以及写死
2. 如果分辨率 跟 滚动条发生改变了 那么问题就会出现
3. 因此我们不能把位置的具体写死掉
4. 所以需要我们去动态的去获取坐标值
5. 获取横纵坐标 两个位置之差就是 最后小球需要位移的具体
6. getBoundingClientRect() 获取 某个 box 与页面之间的间距
7. ref="boxname" 属性 然后通过this.$refs.boxname  这个就是DomObject

#### 完成购物车数据的更新
1. 涉及到 子组件向父组件传递数据
2. 实现的本质就是 父向子传递方法 子调用这个方法 把数据当作是参数  去完成 数据的传递 
3. 通过组件上面绑定 也就是 形如 
`@Func_Name='父组件定义的方法'` postname函数是子组件调用的方法
4. this.$emit('Func_Name',data);

## 手机上访问 项目的预览和测试

1. 保证自己的手机可以正常的运行
2. 保证 手机 开发项目处于一个电脑 wifi环境 也就是说手机可以访问 电脑IP
3. 打开自己的项目 package.json 在dev中 添加一个--host指令 把电脑的wifi IP地址设置为 --host值
4. 查看电脑所处wifi ip 在cmd 终端运行'ipconfig' 查看无限网ip地址

## 数据问题
1. 用户购买的对应商品的最大数量问题 也就是这个 商品的剩余量
    + 由于数据的请求是通过这个Vue-resource请求的 所以这个是异步加载数据的过程 还没有等到数据拿到 就通过组件间数据的传递 最后很有可能是undefinded 所以解决的办法就是
    + 可以使用这个watch属性监听 监听 传递的数据 不管这个执行多少次 只要最后一次 肯定是个合法的number
    代码: 
    `
        watch:{
		// 属性的监听  完成 这个 商品的最大购买量
		"max" : function(newval,oldval){
			mui(".mui-numbox").numbox().setOption('max',newval);
		}
	},
    `