<template>
    <div class="photolist">
        <!-- 顶部的滑动条 -->
        <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class=" ['mui-control-item',  item.id === 0 ? 'mui-active' : '']" v-for=" item in cates" :key="item.id" @tap="getPhtotListById(item.id)">
							{{item.title}}
						</a>
						
					</div>
				</div>

		</div>
        <!-- 图片区域 -->
        <!-- <img :src="img_cc" alt=""> -->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.url" tag="li" :to=" '/home/photolist/'+ item.id">
                <img v-lazy="item.img_url" >
                <div class="content" >
                    <div class="title">
                    {{item.title}}
                    </div>
                    <div class="main">
                        {{item.zhaiyao}}
                    </div>
            </div>
            </router-link>
            
        </ul>
    </div>
</template>
<script>
import mui from '../../assets/mui/js/mui.js';

export default {
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
	        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    data() {
        return {
            img_cc : "./static/images/photos/1.jpg",
            cates : [], // 所有数据是 分类列表
            Alllist : [
                {id:1, title : '沙发', img_url : './static/images/photos/1.jpg', zhaiyao : '展示的内容主要就是沙发的主要功能'},
                {id:2, title : '沙发', img_url : './static/images/photos/11.jpg', zhaiyao : '展示的内容主要就是沙发的主要功能'},
                {id:3, title : '沙发', img_url : './static/images/photos/2.jpg', zhaiyao : '展示的内容主要就是沙发的主要功能'},
                {id:4, title : '沙发', img_url : './static/images/photos/22.jpg', zhaiyao : '展示的内容主要就是沙发的主要功能'},
                {id:5, title : '沙发', img_url : './static/images/photos/5.jpg', zhaiyao : '展示的内容主要就是沙发的主要功能'},
                {id:6, title : '沙发', img_url : './static/images/photos/55.jpg', zhaiyao : '展示的内容主要就是沙发的主要功能'},
                {id:7, title : '沙发', img_url : './static/images/photos/77.jpg', zhaiyao : '展示的内容主要就是沙发的主要功能'},
                {id:8, title : '沙发', img_url : './static/images/photos/7.jpg', zhaiyao : '展示的内容主要就是沙发的主要功能'},
            ],
            list : [],
        }
    },
    created(){
        this.getAllCategory();
        this.getPhtotListById(0);
    },
    methods: {
        getAllCategory(){
            // 获取所有的图片分类
            // this.$http.get("api/getallcategory").then( result => {
            //     if(result.body.status === 0){
            //         result.body.message.unshift({title : '全部', id : 0});
            //         this.cates = result.body.message;
            //     }
            // })
            this.cates = [
                { title : '全部', id : 0},
                { title : '家具生活', id : 1},
                { title : '摄影设计', id : 2},
                { title : '明星美女', id : 3},
                { title : '古典美女', id : 4},
                { title : '中国新闻', id : 5},
                { title : '天气预报', id : 6},
                { title : '汽车展廊', id : 7},
                { title : '编程语言', id : 8},
            ]
        },
        getPhtotListById(cateId){
            // this.$http.get("api/getallcategory"+cateId).then( result => {
            //     if(result.body.status === 0){
            //         result.body.message.unshift({title : '全部', id : 0});
            //         this.cates = result.body.message;
            //     }
            // })
            
            if(cateId === 0){
                this.list = this.Alllist;
                return ;
            }
            if(cateId === 1){
                this.list = [{id:1, title : '沙发', img_url : './static/images/photos/1.jpg', zhaiyao : '展示的内容主要就是沙发的主要功能'},
                {id:2, title : '沙发', img_url : './static/images/photos/11.jpg', zhaiyao : '展示的内容主要就是沙发的主要功能'},];
                
            }
            else if(cateId === 2){
                this.list = [{id:1, title : '沙发', img_url : './static/images/photos/2.jpg', zhaiyao : '展示的内容主要就是沙发的主要功能'},
                {id:2, title : '沙发', img_url : './static/images/photos/22.jpg', zhaiyao : '展示的内容主要就是沙发的主要功能'},];
                
            }
            else if(cateId === 5){
                this.list = [{id:1, title : '沙发', img_url : './static/images/photos/5.jpg', zhaiyao : '展示的内容主要就是沙发的主要功能'},
                {id:2, title : '沙发', img_url : './static/images/photos/55.jpg', zhaiyao : '展示的内容主要就是沙发的主要功能'},];
                
            }
            else if(cateId === 7){
                this.list = [{id:1, title : '沙发', img_url : './static/images/photos/7.jpg', zhaiyao : '展示的内容主要就是沙发的主要功能'},
                {id:2, title : '沙发', img_url : './static/images/photos/77.jpg', zhaiyao : '展示的内容主要就是沙发的主要功能'},];
                 
            }
            else this.list = [];
        }
    },
}
</script>

<style scoped>
.content{
    
    position: absolute;
    width: 90%;
    left: 20px;
    bottom: 0;
    max-height: 80px;
    bottom: 0px;
    z-index: 12;
    color: white;
    /* background: url(0,0,0,0.4); */
    background: black;
    opacity: 0.6;
}
/* .content:hover{
    transform: translateY(-50px);
    background-color: red;
    transition: all 1s linear;
} */
.content .title{
    text-align: center;
    font-size: 18px;
}
.content .main{
    
    font-size: 14px;
}
</style>>
    

<style >
*{
    touch-action: pan-y;
}
.photo-list{
    padding: 0;
    margin: 0;
    
}
.photo-list li{
    position: relative;
    list-style: none;
    /* background: #ccc; */
    text-align: center;
    padding-top: 10px;
    
}
.photo-list li img{
    width: 90% !important;
    margin: 0 20px 0 20px;
    box-shadow: 0 0 12px #999;
}
image[lazy=loading] {
  width: 40px!important;
  height: 300px!important;
  margin: auto;
}
.photolist{
    
    margin-bottom: 50px;
}
.content{
    
}
</style>