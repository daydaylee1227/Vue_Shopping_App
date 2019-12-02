<template>
    <div class="photo-container">
        <h3>{{photoInfo.title}}</h3>
        <p class="subtitle">
            <span class="">发表时间:{{photoInfo.add_time}}</span>
            <span>点击次数:{{photoInfo.add_click}}次</span>
        </p>
        <!-- 图片缩略图 -->
        <div class="info-container">
            <!-- <div style=""></div> -->
                <vue-preview
                :list="list"
                :thumbImageStyle="{width: '80px', height: '80px', margin: '5px'}"
                :previewBoxStyle="{border: '1px solid #eee'}"
                :tapToClose="true"
                @close="closeHandler"
                @destroy="destroyHandler"
                />
                <!-- <vue-preview
                :list="list"
                :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
                :previewBoxStyle="{border: '1px solid #eee'}"
                :tapToClose="true"
                @close="closeHandler"
                @destroy="destroyHandler"
                tag="span"
                />
                <vue-preview
                :list="list"
                :thumbImageStyle="{width: '100px', height: '100px', margin: '10px'}"
                :previewBoxStyle="{border: '1px solid #eee'}"
                :tapToClose="true"
                @close="closeHandler"
                @destroy="destroyHandler"
                /> -->
        </div>
        <!-- 这个是描述的内容 -->
        <div class="content">
            {{photoInfo.content}}
        </div>
        <!-- 现成的评论组件 -->
        <photo-comment :id='this.id'></photo-comment>
        
    </div>

</template>

<script>

import Comment from '../comments/Comments.vue'
export default {
    data() {
        return {
            id : this.$route.params.id,
            photoInfo : [],
            list : [
                { src: './static/images/photos/1.jpg', w : 300, h : 220},
                { src: './static/images/photos/11.jpg', w : 360, h : 220},
                { src: './static/images/photos/5.jpg', w : 360, h : 220},
                { src: './static/images/photos/55.jpg', w : 360, h : 220},
                { src: './static/images/photos/7.jpg', w : 360, h : 220},
            ],
        }
    },
    created(){
        this.getPhotoInfo();
    },
    methods : {
        getPhotoInfo(){

            // this.$http.get("api/getPhtotInfo/"+this.id).then( result => {
            //     if(result.body.status === 0){
            //         result.body.message.unshift({title : '全部', id : 0});
            //         this.cates = result.body.message;
            //     }
            // })
            this.photoInfo = {
                id : 1,
                title : '现代简约,时尚!',
                add_time : '2019-12-25 16:45:78',
                add_click : '22',
                content : "这个是描述的内容就是关于家具的具体的情况,比如什么时候开始买家具,家里是如何保养的"
            }
        },
        // 获取对应id图片的 list  用来相应页面的展示

        getList(){
            // 
        },
        closeHandler(){
            console.log("缩略图 点击图片缩小");
        },
        destroyHandler(){
            console.log('缩略图 图片缩小完成')
        },
    },
    components :{
        "photo-comment" : Comment,
    },
    

}
</script>

<style scoped>
.photo-container{

}   
.photo-container  h3{
    color: cyan;
    text-align: center;
    font-size: 15px;
    margin: 15px 0;
}
.subtitle{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}
.content{
    padding-left: 10px;
    font-size: 13px;
    line-height: 30px;
    background: #ccc;
}
.thumbImg{
    box-shadow: 0 0 12px #ccc !important;
}
.pswp__button{
    width: 32px;
    height: 30px;
}

</style>

<style >
.pswp__button--arrow--left, .pswp__button--arrow--right {
    width: 32px !important;
    height: 30px !important;
    
}  
button:enabled:active{
    background-color: transparent;
} 
</style>