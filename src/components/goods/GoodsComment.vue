<template>
    <div class="goodcomment">
        <p class="tell">
            评论区数据也是造的,这个组件获取对应商品的id,通过编程式导航来实现路由的跳转
            通过this.$route.params.id获取商品的id,通过这个vue-router去请求相应数据 
        </p>
        <cmtbox ></cmtbox>
    </div>
</template>

<script>
import cmtbox from '../comments/Comments';

export default {
    data() {
        return {
            id : this.$route.params.id,
            falist : this.$route.params.falist,
            toastInstanse : null,
        }
    },
    created(){
        this.getGoodsComment();
    },
    methods : {
        getGoodsComment(){
            const toastInstanse = this.$toast({
                message: "  一切都是假数据 ",
                position: "middle", 
                duration: 3000,
            });
            setTimeout(function(){
                toastInstanse.close();
            },2000);
        }
    },
    components :{
        cmtbox,
    }
}
</script>


<style scoped>
.goodcomment{
    padding: 0 10px;
    padding-bottom: 50px;
}
.tell{
    text-align: center;
    color: red;
    margin-top: 10px;
    font-size: 15px;
}
</style>