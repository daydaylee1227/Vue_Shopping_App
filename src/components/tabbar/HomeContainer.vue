<template>
  <div>
    <mt-swipe :auto="3000" :stopPropagation="true">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
          <img :src="item.url" alt="">
          <!-- <img :src="imgurl" alt=""> -->
          <!-- <img src="@/static/images/Home/1.jpg" alt=""> -->
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格的改造 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/Home/newslist">
          <img :src="menulist[0].url" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
        
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
         <img :src="menulist[1].url" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img :src="menulist[2].url" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img :src="menulist[3].url" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img :src="menulist[4].url" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <img :src="menulist[5].url" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      
      lunbotuList: [
        { id: 1, name: "gouwu", url: "./static/images/Home/2.jpg" },
        { id: 2, name: "gouwu", url: "./static/images/Home/4.jpg" },
        { id: 3, name: "gouwu", url: "./static/images/Home/5.jpg" }
      ], //保存轮播图的数据
      menulist : [
          { id : 1, name : "menu1", url : './static/images/menu1.png'},
          { id : 2, name : "menu2", url : './static/images/menu2.png'},
          { id : 3, name : "menu3", url : './static/images/menu3.png'},
          { id : 4, name : "menu4", url : './static/images/menu4.png'},
          { id : 5, name : "menu5", url : './static/images/menu5.png'},
          { id : 6, name : "menu6", url : './static/images/menu6.png'},
      ]
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      // console.log(this.$http);
      // this.$http.get("http://vue.studyit.io/api/getlunbo").then( result => {
      //     console.log(result.body);
      //     if(result.body.status === 0){
      //         this.lunbotuList = result.body.message;
      //     }else{
      //         Toast("加载轮播图失败！");
      //         console.log("加载失败!");
      //     }
      // }, fail => {
      //     console.log("失败了!");
      // })
      // 假装完成数据的模拟
    }
  }
};
</script>


<style  >
.mint-swipe {
height: 200px;
  /* background: require("../../images/Home/1.jpg"); */
}
.mint-swipe-item img {
width: 100%;
height: 100%;
}
.mui-table-view-cell img{
    width: 60px;
}
.mui-table-view-cell div{
    font-size: 13px !important;
}
</style>
<style >
.mint-swipe-indicators .mint-swipe-indicator.is-active {
  background: #fff;
}
.mui-table-view{
  background: #fff !important;
  border: none !important;
}
.mui-table-view-cell{
  border: none !important;
}
</style>