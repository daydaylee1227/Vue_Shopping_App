<template>
  <div id="app">
    
    <div class="header">
      <mt-header fixed title="Vue商城app"></mt-header>
    </div>
    <div class="container">
      <transition name="home">
        <router-view></router-view>
      </transition>
    </div>
    <div class="tabbar">
      <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/Home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Seach">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App'
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
  background: #fff !important;
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
</style>
<style lang="" scoped>

.tabbar{
  height: 50px;
}

</style>