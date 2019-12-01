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