<template>
    <div class="goodsinfo">
        <!-- 商品轮播图区域 -->
        <div class="mui-card lunbo">
				<mt-swipe :auto="3000" :stopPropagation="true">
					<mt-swipe-item v-for="item in lunbotu" :key="item.id">
						<img :src="item.img_url" alt="">
						<!-- <img :src="imgurl" alt=""> -->
						<!-- <img src="@/static/images/Home/1.jpg" alt=""> -->
					</mt-swipe-item>
				</mt-swipe>
			</div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
				<div class="mui-card-header">{{ this.sonlist[0].title }}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
							市场价:<del>￥{{ this.sonlist[0].price_old }}</del>&nbsp;&nbsp;&nbsp;
							<span class="pri_now">销售价:￥{{ this.sonlist[0].price_now }}</span>
							
						</p>
						<div class="mui-content-padded">
							购买数量:
							<div class="mui-numbox " data-numbox-min='1' >
								<button class="mui-btn mui-btn-numbox-minus" type="button" @click='decrease'>-</button>
								<input class="mui-input-numbox" @keyup="FuncNum" v-model="msg" />
								<button class="mui-btn mui-btn-numbox-plus" type="button" @click='add'>+</button>
							</div>
						</div>
						<p>
							<mt-button type='primary' size='small'  @click='GoodBuy'>立即购买</mt-button>
							<mt-button type='danger' size='small'  @click='GoodCar'>加入购物车</mt-button>
						</p>
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
        <!-- 商品的参数区域 -->
        <div class="mui-card">
				<div class="mui-card-header">商品详情</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<!-- 数据就是假造的 -->
						<p>商品货号：&nbsp;{{ bag_id }}</p>
						<p>库存情况：&nbsp;{{ this.sonlist[0].num}}件</p>
						<p>上架时间：&nbsp;{{ timer | formatDate }}</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<mt-button type='primary' size='large' plain @click="goDesc(id)">图文介绍</mt-button>
					<mt-button type='danger' size='large'  plain @click="goComment(id)">商品评论</mt-button>
				</div>
		</div>
		<transition
			@before-enter='beforEenter'
			@enter='enter'
			@after-enter='afterEnter'
		>
			<div class="ball" v-show="ballFlag" ref="box">
			</div>
		</transition>
		
    </div>
</template>

<script>
import mui from '../../assets/mui/js/mui.js';

export default {
    data() {
        return {
			// 获取这个GoodList中的数据 比如 对应的id  以及每个 goodlist列表的信息
            id : this.$route.params.id,
			ballFlag : false,
			lunbotu : [
				{ img_url : "./static/images/goods/1.jpg",},
				{ img_url : "./static/images/goods/11.jpg",}
			],
			sonlist : [
				{ id : 1 ,flag_id : 1+ this.pageindex, title : 'realmeX2 Pro（6GB/64GB/全网通）90Hz流体屏，高通骁龙855 PLUS，50W快充，6400万变焦四摄', price_now : 2699, price_old : 3099, num : 619, img_url :'./static/images/goods/1.jpg' }
			],
			falist : this.$route.params.falist ,
			msg : 1,
			bag_id : (Math.random().toString(16).slice(4)),
			timer : new Date() - ((Math.random()+10000) * 100000),
			max : null,
        }
	},
	created(){
		this.getLunbotu();
		this.max = this.sonlist[0].num;
	},
	mounted(){
		this.getLunbotu();
		this.msg = 1;
		// mui(".mui-numbox").numbox();  初始化
	},
	watch:{
		// 属性的监听  完成 这个 商品的最大购买量
		"max" : function(newval,oldval){
			mui(".mui-numbox").numbox().setOption('max',newval);
		}
	},
	methods : {
		getLunbotu(){
			// 根据从GoodList中获取的数据  可以得到对应的id变换 获取相应的详细页面介绍
			// this.$http.get("api/getlunbotu/"+this.id).then(result => {

			// });
			const index = this.id%10;
			const tmp = this.id;
			this.lunbotu = [
				{img_url : "./static/images/goods/"+index+ ".jpg",},
				{img_url : "./static/images/goods/"+index+index+".jpg",}
			];
			var _this = this;
			for(var el in this.falist){
				if(tmp === this.falist[el].id){
					_this.sonlist = [];
					_this.sonlist.push(this.falist[el]);
				}
			}
		},
		add(){
			this.msg++;
			// this.msg = Math.min(this.max,this.msg);
		},
		decrease(){
			this.msg = Math.max(1,--this.msg);
		},
		goDesc(id){
			this.$router.push({ name : 'goodsdesc', params : { id , falist: this.falist}});
		},
		goComment(id){
			this.$router.push({ name : 'goodscomment', params : { id ,"falist" : this.falist}});
		},
		GoodBuy(){
			
		},
		FuncNum(){
			this.msg = this.msg.replace(/^(0+)|[^\d]+/g,'');
			this.msg = Math.max(1,this.msg);
			this.msg = Math.min(this.max,this.msg);
		},
		// 购物车
		GoodCar(){
			this.ballFlag = !this.ballFlag;
		},
		beforEenter(el){
			
			el.style.transform = 'translate(0,0)';
		},
		enter(el,done){

			el.offsetWidth;
			const ballPosition = this.$refs.box.getBoundingClientRect()
			const badgePosition = document.getElementById("badge").getBoundingClientRect()
			const xDist = badgePosition.left - ballPosition.left;
			const yDist = badgePosition.top - ballPosition.top;
			// 使用ES6 模板字符串
			el.style.transform = `translate(${xDist}px, ${yDist}px)`;
			el.style.transition = 'all 1s cubic-bezier(.4,-0.3,1,.68)';
			done();
		},
		afterEnter(el){
			this.ballFlag = !this.ballFlag;
		}
	}
}
</script>

<style scoped>
.goodsinfo{
	position: relative;
    background: #eee;
    overflow: hidden;
    padding-bottom: 50px;
}    
.mui-card{
	border-radius: 15px;
	box-shadow: 0 0 12px #ccc;
}
.lunbo{
	/* min-height: 350px; */
}
.pri_now{
	margin-left: 20px;
	color: red;
	font-size: 16px;
	font-weight: bold;
}
.mui-content-padded{
	font-size: 16px;
	/* font-weight: bold; */
	margin-left: 0px;
}
.mui-numbox{
	margin-left: 16px;
	width: 140px;
}
.mui-card-footer{
	display: block;
}
.mui-card-footer button {
	margin-bottom: 15px;
}
.ball{
	position: absolute;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: red;
	left: 163px;
	top: 336px;
	z-index: 99;
}

</style>

<style >

</style>