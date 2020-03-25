import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import HomeContainer from '@/components/tabbar/HomeContainer.vue'
import MemberContainer from '@/components/tabbar/MemberContainer.vue'
import SeachContainer from '@/components/tabbar/SearchContainer.vue'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer.vue'
import newsList from '@/components/news/Newslist.vue'
import newsInfo from '@/components/news/newsinfo.vue'
import PhotoList from '@/components/photos/PhotoList.vue'
import PhotoInfo from '@/components/photos/PhotoInfo.vue'
import GoodList from '@/components/goods/GoodList.vue'
import GoodInfo from '@/components/goods/GoodsInfo.vue'
import GoodsDesc from '@/components/goods/GoodsDesc.vue'
import GoodsComment from '@/components/goods/GoodsComment.vue'
import Reg from '@/components/user/reg.vue'
import Setting from '@/components/user/setting.vue'
import Gesture from '@/components/user/Gesture.vue'
import User from '@/components/user/User.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      redirect : '/Home',
    },
    {
      path: '/Home',
      name: 'HomeContainer',
      component: HomeContainer,
    },
    {
      path: '/Member',
      name: 'MemberContainer',
      component: MemberContainer
    }
    ,{
      path: '/Seach',
      name: 'SeachContainer',
      component: SeachContainer
    }
    ,{
      path: '/Shopcar',
      name: 'ShopcarContainer',
      component: ShopcarContainer
    },
    {path : '/Home/newslist', name : 'newsList', component : newsList},
    {path : '/home/newsinfo/:id', name : 'newsInfo', component : newsInfo},
    {path : '/home/photolist', name : 'photolist', component : PhotoList},
    {path : '/home/photolist/:id', name : 'photoInfo', component : PhotoInfo},
    {path : '/home/goodlist', name : 'goodlist', component : GoodList},
    {path : '/home/goodinfo/:id', name : 'goodinfo', component : GoodInfo},
    {path : '/home/goodDesc/:id', name : 'goodsdesc', component : GoodsDesc},
    {path : '/home/goodComment/:id', name : 'goodscomment', component : GoodsComment},
    {path : '/Member/reg', name : "reg", component : Reg},
    {path : '/Member/setting', name : 'Setting', component : Setting},
    {path : '/Member/Gesture', name : 'Gesture', component : Gesture},
    {path : '/Member/User', name : 'User', component : User},

  ],
  linkActiveClass : 'mui-active',
})
