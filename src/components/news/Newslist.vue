<template>
    <div id="newslist">
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.url">
						<div class="mui-media-body">
							<h1>{{ item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间:{{ item.add_time}}</span>
                                <span>点击次数：{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
				
			</ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newslist : [],
        }
    },
    created(){
        this.getNewslist();
    },
    methods : {
        getNewslist(){
            // this.$http.get('').then(result => {
            //     if(result.body.status === 0){
            //         this.newslist = result.body;
            //     }else{

            //     }
            // })
            this.newslist = [
                { id : 1, title : '三次阅兵', url : './static/images/new1.jpg', add_time : '2019-12-13 16:23:33', 'click' : 3} ,
                { id : 2, title : '回家看看', url : './static/images/new2.jpg', add_time : '2019-11-13 16:23:33', 'click' : 4} ,
                { id : 3, title : '今天加班', url : './static/images/new3.jpg', add_time : '2019-10-13 16:23:33', 'click' : 5} ,
                { id : 4, title : '每天加班', url : './static/images/new4.jpg', add_time : '2019-12-03 16:23:33', 'click' : 8} ,
                { id : 5, title : '后天加班', url : './static/images/new5.jpg', add_time : '2019-09-13 16:23:33', 'click' : 9} ,
                { id : 6, title : '我爱祖国', url : './static/images/new5.jpg', add_time : '2019-12-13 16:23:33', 'click' : 22} ,
                { id : 7, title : '我爱代码', url : './static/images/new4.jpg', add_time : '2019-12-13 16:23:33', 'click' : 33} ,
                { id : 8, title : '我爱公司', url : './static/images/new3.jpg', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
                { id : 9, title : '我爱公司', url : './static/images/new2.jpg', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
                { id : 10, title : '我爱公司', url : './static/images/new1.jpg', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
                { id : 11, title : '三次阅兵', url : './static/images/new1.jpg', add_time : '2019-12-13 16:23:33', 'click' : 3} ,
                { id : 12, title : '回家看看', url : './static/images/new2.jpg', add_time : '2019-11-13 16:23:33', 'click' : 4} ,
                { id : 13, title : '今天加班', url : './static/images/new3.jpg', add_time : '2019-10-13 16:23:33', 'click' : 5} ,
                { id : 14, title : '每天加班', url : './static/images/new4.jpg', add_time : '2019-12-03 16:23:33', 'click' : 8} ,
                { id : 15, title : '后天加班', url : './static/images/new5.jpg', add_time : '2019-09-13 16:23:33', 'click' : 9} ,
                { id : 16, title : '我爱祖国', url : './static/images/new5.jpg', add_time : '2019-12-13 16:23:33', 'click' : 22} ,
                { id : 17, title : '我爱代码', url : './static/images/new4.jpg', add_time : '2019-12-13 16:23:33', 'click' : 33} ,
                { id : 18, title : '我爱公司', url : './static/images/new3.jpg', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
                { id : 19, title : '我爱公司', url : './static/images/new2.jpg', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
                { id : 20, title : '我爱公司', url : './static/images/new1.jpg', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
                { id : 21, title : '三次阅兵', url : './static/images/new1.jpg', add_time : '2019-12-13 16:23:33', 'click' : 3} ,
                { id : 22, title : '回家看看', url : './static/images/new2.jpg', add_time : '2019-11-13 16:23:33', 'click' : 4} ,
                { id : 23, title : '今天加班', url : './static/images/new3.jpg', add_time : '2019-10-13 16:23:33', 'click' : 5} ,
                { id : 24, title : '每天加班', url : './static/images/new4.jpg', add_time : '2019-12-03 16:23:33', 'click' : 8} ,
                { id : 25, title : '后天加班', url : './static/images/new5.jpg', add_time : '2019-09-13 16:23:33', 'click' : 9} ,
                { id : 26, title : '我爱祖国', url : './static/images/new5.jpg', add_time : '2019-12-13 16:23:33', 'click' : 22} ,
                { id : 27, title : '我爱代码', url : './static/images/new4.jpg', add_time : '2019-12-13 16:23:33', 'click' : 33} ,
                { id : 28, title : '我爱公司', url : './static/images/new3.jpg', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
                { id : 29, title : '我爱公司', url : './static/images/new2.jpg', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
                { id : 30, title : '我爱公司', url : '', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
            ]
        }
    }
}
</script>

<style  scoped >
.mui-table-view li h1{
    font-size : 14px;
}    
.mui-ellipsis{
    font-size : 12px;
    columns: #226aff;;
    display: flex;
    justify-content: space-between;
}
.mui-media-body h1{
    color: cyan;
}
.newslist{
    padding-bottom: 30px !important;
}
</style>