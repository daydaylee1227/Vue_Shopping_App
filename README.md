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