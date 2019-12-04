// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import Vuex from 'vuex'
Vue.use(Vuex)
// 导入mui
import mui from './assets/mui/js/mui.js'
Vue.prototype.mui = mui;

import './assets/mui/css/mui.min.css'

import './assets/mui/css/icons-extra.css'

// 按需要导入
// import {
//   Header,
//   Swipe,
//   SwipeItem,
//   Button,
//   Toast,
//   Lazyload
// } from 'mint-ui';

// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.component(Toast.name, Toast);
// Vue.use(Lazyload);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// 阻止启动生产消息，常用作指令
Vue.config.productionTip = false

// 安装图片预览插件
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)
// 导入这个时间过滤器
import {
  formatDate
} from './assets/comment/data.js'

/* eslint-disable no-new */
Vue.filter('formatDate', function (data) {
  var date = new Date(data);
  return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
})

// 每次刷新浏览器的时候,就会更新car图标信息

var Star_car = JSON.parse(localStorage.getItem('car') || '[]');
// vm.$store.commit('getAll_Price',goodinfo); // 一开始就默认需要数据更新
// console.log(this) 

var store = new Vuex.Store({
  state: {
    car: Star_car, // 存放的就是商品的状态 { id : 商品id , count : 购买数量, price : 单价 , selected : false 是否购买 }
    total: 0,
    map : {},     // id 映射 购买数量
    map1 : {},    // id 映射 最大值
    tot_price : 0,
    tot_item : 0,
  },
  mutations: {
    // 点击加入购物车
    addToCar: function (state, goods) {
      var flag = false;
      state.car.some(item => {
        if (item.id === goods.id) {
          item.count += parseInt(goods.count);
          flag = true
          return true;
        }
      })

      if (!flag) {
        state.car.push(goods);
      }
      localStorage.setItem('car', JSON.stringify(state.car)); // 数据放在car里面
    },
    // 更新数据
    update(state,option){        //这个是muiBox子组件更新后调用方法
        var sum = 0;
        state.car.forEach(item => {
            if(item.id == option.id){
              item.count = option.count;
            }
            sum +=item.count; 
        })
        state.total = sum;
        localStorage.setItem('car', JSON.stringify(state.car));
    },
    createMap(state){
        // 完成新的映射关系  也就是 id 映射 购买数量 
        //                         id  映射  最大值
        state.car.forEach(ele => {
            state.map[ele.id] = ele.count;
            state.map1[ele.id] = ele.maxn;
            // console.log('Map1=='+state.map1[ele.id])
        })
    },
    deletelist(state,id){    // 完成 localStorage
        var newcar = [];
        var sum = 0;
        state.car.forEach(el => {
            if(el.id === id){

            }else{
              newcar.push(el);
              sum+=el.count;
            }
        })
        state.total = sum;
        state.car = newcar;  
        localStorage.setItem('car', JSON.stringify(state.car)); // 数据放在car里面
    },
    
  },

  getters: {
    Total: function (state) {
      var sum = 0;
      state.car.forEach(item => {
        sum += parseInt(item.count);
      })
      setTimeout(() => {
        state.total = sum;
      }, 1000);
      return state.total;
    },
    getMap : function(state){
      return state.map;
    },
    // 这个方法特别方便
    getAll_Price(state){
      var account = {
        tmp : 0,
        tmp_All : 0,
      }
      state.car.forEach(el => {
            if(el.selected){
                account.tmp_All += parseInt(el.price) * parseInt(el.count);
                account.tmp+=el.count;
            }
      });
      localStorage.setItem('car', JSON.stringify(state.car)); // 数据放在car里面
      return account;
    }
  }
});
var vm = new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd');
    }
  },
  store,
  
  methods: {
    // 一开始数据初始化
    
  },
})
