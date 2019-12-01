import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import HomeContainer from '@/components/tabbar/HomeContainer.vue'
import MemberContainer from '@/components/tabbar/MemberContainer.vue'
import SeachContainer from '@/components/tabbar/SearchContainer.vue'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer.vue'
import newsList from '@/components/news/Newslist.vue'
import newsInfo from '@/components/news/newsinfo.vue'

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
  ],
  linkActiveClass : 'mui-active',
})
