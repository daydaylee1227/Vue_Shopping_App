<template>
    <div class="photo-container">
        <h3>{{photoInfo.title}}</h3>
        <p class="subtitle">
            <span class="">发表时间:{{photoInfo.add_time}}</span>
            <span>点击次数:{{photoInfo.add_click}}次</span>
        </p>
        <!-- 图片缩略图 -->
        <div>
            <div style="height: 1000px; background-color: pink;"></div>
                <vue-preview
                :list="list"
                :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
                :previewBoxStyle="{border: '1px solid #eee'}"
                :tapToClose="true"
                @close="closeHandler"
                @destroy="destroyHandler"
                />
            </div>
        <!-- 现成的评论组件 -->
        <photo-comment :id='this.id'></photo-comment>
        <div class="content">
            {{photoInfo.content}}
        </div>
    </div>

</template>

<script>

import Comment from '../comments/Comments.vue'
export default {
    data() {
        return {
            id : this.$route.params.id,
            photoInfo : [],
            list : './static/images/photos/1.jpg',
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
        }
    },
    components :{
        "photo-comment" : Comment,
    }

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
    font-size: 13px;
    line-height: 30px;
}
</style>