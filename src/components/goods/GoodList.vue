<template>
    <div class="good-list">
        <div class="good-item" v-for="item in goodlist" :key="item.flag_id" @click="getDetail(item.id)">
            <img :src="item.img_url" alt="" >
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.price_now}}</span>
                    <span class="old">￥{{item.price_old}}</span>
                </p>
                <p class="sail">
                    <span>热卖中</span>
                    <span>剩{{item.num}}件</span>
                </p>
            </div>
        </div>
        <mt-button type='danger' size='large'  @click='showMore'>加载更多</mt-button>
    </div>
</template>
<script>
export default {
    
    data() {
        return {
            goodlist : [],
            pageindex : 1,
            
            // img_url : 'https://2f.zol-img.com.cn/product/201_220x165/139/ce4SgpizaZFo.jpg'
        }
    },
    created(){
        this.getGoodlist();
    },
    methods : {
        getGoodlist(){
            // 完成数据的请求
            // this.$http.get("api/getgoodlist?pageindex"+this.pageindex).then(result => {

            // });

            this.goodlist = this.goodlist.concat([
                { id : 1 ,flag_id : 1+ this.pageindex, title : 'realmeX2 Pro（6GB/64GB/全网通）90Hz流体屏，高通骁龙855 PLUS，50W快充，6400万变焦四摄', price_now : 2699, price_old : 3099, num : 619, img_url :'./static/images/goods/1.jpg' },
                { id : 11 ,flag_id : 2+ this.pageindex, title : 'realme Q（4GB/64GB/全网通）骁龙712，后置主摄4800万，20W快充，超级夜景', price_now : 998, price_old : 2499, num : 1099, img_url :'./static/images/goods/11.jpg' },
                { id : 2 ,flag_id : 3+ this.pageindex, title : '一加7T（8GB/128GB/全网通）高通骁龙 855 Plus，Warp 闪充 30T，90Hz流体屏 ', price_now : 899, price_old : 2499, num : 779, img_url :'./static/images/goods/2.jpg' },
                { id : 22 ,flag_id : 4+ this.pageindex, title : '一加7T Pro（12GB/256GB/全网通/迈凯伦版）90Hz流体屏，高通骁龙855 Plus，Warp闪充30T ', price_now : 5299, price_old : 5099, num : 899, img_url :'./static/images/goods/22.jpg' },
                { id : 3 ,flag_id : 5+ this.pageindex, title : '苹果iPhone 11（4GB/64GB/全网通）A13处理器，GPU抗锯齿效果，夜间模式', price_now : 4999, price_old : 5499, num : 999, img_url :'./static/images/goods/3.jpg'},
                { id : 33 ,flag_id : 6+ this.pageindex, title : '苹果iPhone 11 Pro Max（4GB/64GB/全网通）HDR10，后置三摄，神经网络引擎，独立取景器', price_now : 10999, price_old : 9599, num : 19, img_url :'./static/images/goods/33.jpg'},
                { id : 4 ,flag_id : 7+ this.pageindex, title : '华为Mate30 Pro（8GB/128GB/全网通）双4000万徕卡电影四摄，超曲面OLED环幕屏', price_now : 899, price_old : 2499, num : 99, img_url :'./static/images/goods/4.jpg'},
                { id : 44 ,flag_id : 8+ this.pageindex, title : '华为Mate 20 Pro（6GB RAM/全网通）8曲面玻璃机身，无线充电，AI摄影大师，徕卡三摄', price_now : 4499, price_old : 4799, num : 89, img_url :'./static/images/goods/44.jpg'},
                { id : 5 ,flag_id : 9+this.pageindex, title : 'OPPO Reno Ace（8GB/256GB/全网通/高达版）Supervooc闪充2.0，90HZ电竞屏，骁龙855,flag_id : 1+，高达定制版', price_now : 3599, price_old : 3999, num : 999, img_url :'./static/images/goods/5.jpg'},
                { id : 55 ,flag_id : 10+ this.pageindex, title : 'OPPO A11x（8GB/128GB/全网通）4800万主摄，超大广角，视频防抖，智慧美颜', price_now : 1799, price_old : 2499, num : 899, img_url :'./static/images/goods/55.jpg'},
                { id : 6 ,flag_id : 11+ this.pageindex, title : '小米CC9 Pro（6GB/128GB/全网通）一亿像素，7P镜头，10倍混合光学变焦，双曲面屏', price_now : 2799, price_old : 3099, num : 809, img_url :'./static/images/goods/6.jpg'},
                { id : 66 ,flag_id : 12+ this.pageindex, title : '小米9 Pro（8GB/256GB/全网通/5G版）全场景振感HD，VC液冷散热，MIUI11， 骁龙855Plus旗舰处理器', price_now : 3799, price_old : 4299, num : 1099,img_url :'./static/images/goods/66.jpg'},
            ]);
        },
        showMore(){
            this.pageindex +=100;
            this.getGoodlist();
        },
        getDetail(id){
            this.$router.push({ name: 'goodinfo', params: { id ,'falist':this.goodlist}})
        }
    },

}
</script>

<style scoped>
.good-list{
    display: flex;
    flex-wrap: wrap;
    padding: 0 8px;
    justify-content: space-between;
    padding-bottom: 50px;
}
.good-list .good-item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    border-radius: 10px;
    width: 48%;
    height: 48%;
    border: 1px solid #ccc;
    box-shadow: 0 0 9px #ccc;
    margin: 4px 0px;
    padding: 2px;
}
.good-list .good-item img{
    border-radius: 10px;
    width: 100%;
}
.good-item  h1{
    font-size: 12px;
}
.good-item .info{
    border-radius: 10px;
    background: #eee;
}
.info p{
    margin: 0;
    padding: 5px;
}
.price .now{
    color: red;
}
.price .old{
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 20px;
}
.sail{
    display: flex;
    justify-content: space-between;
}
</style>