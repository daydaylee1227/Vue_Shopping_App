# shopping_app

> A Vue.js project

**[效果点这里](https://daydaylee1227.github.io/Vue_shopping_view/)**

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
项目基于vue-cli + vue-router + Vuex + webpack + Mint-ui + mui库
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

## 完成的就是数据的更新 比如 这个 购物车图标
1. 运用到了知识点就是 vuex 每次点击购物车的时候 把数据都给存下来
2. 每次刷新浏览器 会存在数据清除的问题 所以 我们尝试把数据保存在localStoreage中
3. 完成这个购物车的时候 有个小细节  就是 动画的时间大概是1s 所有可以设置这个store里面数据更新为1s

## 完成这个ShopcarContainer

1. 可以借助这个mui中card样式
## 购物车中的数据问题
1. 对于这个购物车中的数量问题 怎么去实时同步到最后的结果 
2. 采取的措施就是 用map去映射这个结果  把 id 对应 商品的数量
3. 然后对应的mui-numberbox 当数量发生改变的时候 更新到这个store中去
4. 当这个mui-numberbox数据发生更新的时候  可以通过传递id 跟 最新的购物数量  通过 $store.state.commit() 方式完成数量的更新
5. 父组件向子组件传递值的时候 可以同时传递多个值(重点)
6. 解决不了的问题就是这个给每个对应商品设置相应的商品最大值
### 完成删除操作
1. 阻止事件的默认行为
2. 绑定一个点击事件 传入对应的参数(商品的ID) 把对应组件中商品删除以及本地localStorage进行更新
3. 所有需要删除的部分大概就是两个  一个就是localStorage数据  一个就是 store中数据

### 完成这个商品结算界面

1. 两个数据需要去更新 一个就是勾选多少件商品 一个就是商品的总价
2. 商品的总价 通过 store 中 getter 去 缓存 当数据更新的时候  就完成该操作
3. 选中还是没有选中的话 也就是每次会触发这个change事件 然后我们通过绑定一个事件
4. 通过这个事件处理函数 去 store中实时更新数据即可
5. store中的selected属性 Boolean 可以实时的判断属性值 借助它 可以完成总价格计算
6. 总价的计算  直接去使用 getters 定义方法 这个会实时的去缓存 你所依赖的结果 操作很方便

## 放回按钮
1. 给它绑定点击事件
2. 通过watch属性监听路由地址的变化 $route.path
3. 通过这个v-show 实现显示隐藏效果
4. this.$router.go(-1); 回退到上一步

## 用户的登入界面
1. 主要的问题就是 注册 登入 以及自动登入 设置 手势密码 之间的逻辑操作
2. 考虑到每个板块都是单独的一个组件 也就是单页面的跳转 所有利用vuex将多个组件需要的数据存在state属性中  比如 是否自动登入 用户的登入密码  用户设置的手势密码
## 手机上访问 项目的预览和测试

1. 保证自己的手机可以正常的运行
2. 保证 手机 开发项目处于一个电脑 wifi环境 也就是说手机可以访问 电脑IP
3. 打开自己的项目 package.json 在dev中 添加一个--host指令 把电脑的wifi IP地址设置为 --host值
4. 查看电脑所处wifi ip 在cmd 终端运行'ipconfig' 查看无限网ip地址
5. 按钮的消失可以在tabbar栏的时候都隐藏  小优化
6. "dev1": "webpack-dev-server  --host 10.128.31.212 --inline --progress --config build/webpack.dev.conf.js",
7. 有时候出现修改本机ip地址问题不能解决的话 使用npm i -D webpack-dev-server@2.9.7
8. 
## 用户登入界面

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

## 打包问题 
1. npm run build 时 发现上面css文件有问题 解决的办法就是把mui中css样式中 设计 svg引号问题
   那个url 最外面改成双引号问题
2. 对于打包好的文件 一片空白的问题  需要修改写对应的文件就行 [点这里](https://blog.csdn.net/qq_35310623/article/details/100517269)