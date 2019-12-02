<template>
    <div class="GoodsDesc">
        <h3>{{newlist[0].title}}</h3>
        <hr>
        <div class="container_descc">
            <p class="tell">
                商品的详细介绍信息,数据都是假的,就是为了完善下 这个介绍的信息,还没有写后端,目前的
                话,数据就是将就着模拟造！
            </p>
            <pre>
                电容屏,多点触控
                6.1英寸
                LCD屏幕（IPS技术）
                1792x828像素
                电池容量：3110mAh
                Liquid 视网膜高清显示屏
                1400:1 对比度 (典型)
                原彩显示
                广色域显示 (P3)
                触感触控
                625 尼特最大亮度 (典型)
                采用防油渍防指纹涂层
                支持多种语言文字同时显示
                无线充电（适配各类Qi充电器） 快速充电
                （18W快充 电源适配器需单独购买) 反向充电
                4G网络:移动TD-LTE，联通TD-LTE 联通FDD-LTE 
                电信TD-LTE 电信FDD-LTE
            </pre>
            <img :src="newlist[0].img_url" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id : this.$route.params.id,
            falist : this.$route.params.falist,
            newlist : [] || falist[0],
        }
    },
    created(){
        this.getGoodsDesc();
    },
    methods : {
        getGoodsDesc(){
            // 通过id获取数据
            for(var el in this.falist){
                if(this.falist[el].id === this.id){
                    this.newlist = [],
                    this.newlist.push(this.falist[el]);
                }
            }
        }
    },
}
</script>


<style scoped>
.GoodsDesc h3{
    font-size: 15px;
    text-align: center;
    color: rgb(84, 209, 209);
    margin: 15px 0;
}    
.container_descc{
    padding: 0px 10px;
}
.tell{
    color: red;

}
pre{
    font-size: 12px;
}
.container_descc img{
    width: 100%;
}
</style>