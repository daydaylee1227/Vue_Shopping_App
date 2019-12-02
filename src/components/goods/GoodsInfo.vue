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
						<p>
							购买数量:
						</p>
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
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
			// 获取这个GoodList中的数据 比如 对应的id  以及每个 goodlist列表的信息
            id : this.$route.params.id,
			lunbotu : [],
			falist : this.$route.params.falist,
			sonlist : [],
        }
	},
	created(){
		// this.getLunbotu();
	},
	mounted(){
		this.getLunbotu();
	},
	methods : {
		getLunbotu(){

			// this.$http.get("api/getlunbotu/"+this.id).then(result => {

			// });
			console.log(this.id);
			const index = this.id%10;
			const tmp = this.id;
			this.lunbotu = [
				{img_url : "./static/images/goods/"+index+ ".jpg",},
				{img_url : "./static/images/goods/"+index+index+".jpg",}
			];
			var _this = this;
			this.falist.forEach(function(el, index){
				if(_this.id === el.id){
					_this.sonlist.push(el);
				}
			})
			console.log(this.sonlist)
		}
	}
}
</script>

<style scoped>
.goodsinfo{
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
</style>