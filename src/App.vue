<template>
  <div id="app">
    
    <div class="header">
      <mt-header fixed title="Vue商城app">
        <span slot="left" v-show="flag" @click="goBack">
          <mt-button icon="back" class="back">放回</mt-button>
        </span>
      </mt-header>
    </div>
    <div class="container">
      <transition name="home">
        <router-view></router-view>
      </transition>
    </div>
    <div class="tabbar">
      <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-daydaylee " to="/Home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
      <router-link class="mui-tab-item-daydaylee" to="/Seach">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			
			<router-link class="mui-tab-item-daydaylee" to="/Shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{ $store.getters.getAll_Price.tmp }}</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-daydaylee" to="/Member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
		</nav>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      flag : true,
      routerlist : ['/Home','/Shopcar','/Member','/Seach','/Member/User'],
    }
  },
  created(){
    // this.$mui.toast("欢迎使用该App!");
    if(this.isShow(this.$route.path)){
      this.flag = false;
    }
  },
  methods : {
    goBack(){
        this.$router.go(-1);
    },
    isShow(tmp){
      var cc = false;
      this.routerlist.forEach(el => {
        if(el == tmp){
          cc = true;
        }
      })
      return cc;
    }
  },
  watch: {
    "$route.path" : function(newval,oldVal){
        if(this.isShow(newval)){
            this.flag = false;
        }else{
            this.flag = true;
        }
    }
  }
}
</script>

<style>
body,html{
  padding: 0;
  margin: 0;
  height: 100%
}
.app{
  position: absolute;
}
.container{
  position: absolute;
  top: 40px;
  bottom: 0px;
  overflow-x: hidden;
  /* background: #fff !important; */
  width: 100%;
}
.header{
  height: 40px;
  text-align: center;
}

.home-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;  
}
.home-enter{
  opacity: 0;
  transform: translateX(100%);
  
}
.home-enter-active,
.home-leave-active{
  transition: all 0.5s ease;
}

/* 完成的就是tabbar无法点击的问题 */
.mui-bar-tab .mui-tab-item-daydaylee.mui-active{
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-daydaylee {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-daydaylee {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-daydaylee .mui-icon~.mui-tab-label{
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item-daydaylee .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
</style>
<style lang="" scoped>

.tabbar{
  height: 50px;
  
}
.mui-bar-tab{
  z-index: 50 !important;
}

</style>
<style >
.mint-button-text{
  padding-left: 3px !important;
  line-height: 15px !important;
  padding-top: 2px;
}
</style>