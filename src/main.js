// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'

import './assets/mui/css/mui.min.css'

import './assets/mui/css/icons-extra.css'

// 按需要导入
import {
  Header,
  Swipe,
  SwipeItem,
  Button,
  Toast
} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Toast.name, Toast);
// 阻止启动生产消息，常用作指令
Vue.config.productionTip = false


// 导入这个时间过滤器
import {
  formatDate
} from './assets/comment/data.js'

/* eslint-disable no-new */
Vue.filter('formatDate',function(data){
  var date = new Date(data);
  return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
})
new Vue({
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
})
