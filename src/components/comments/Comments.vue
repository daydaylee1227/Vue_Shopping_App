<template>
    <div class="cmt-container">
        
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容(最多120个字)" maxlength="120" v-model="msg">

        </textarea>
        <mt-button type='primary' size='large' @click="postComments">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for=" (item ,i) in comments" :key="item.id">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | formatDate}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
            
        </div>
        <mt-button type='danger' size='large' plain @click='showMore'>加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            pageindex : 1,
            comments : [],
            sum : 10, // 这个是为了造数据
            msg : "",   //评论的内容
            flag : false,
        }
    },
    props : ['id'],
    created(){
        this.getComments();
    },
    methods : {

        getComments(){
            // this.$http.get('api/getcomments/'+"this.id"+"?pageindex"+this.pageindex).then( result => {
            //     if(result.body.status ===0){
            //         this.comments = this.comments.concat(result.body.message);
            //     }else{
            //         Toast("获取数据失败");
            //     }
            // })
            // 接下来时造数据
            this.comments = this.comments.concat([
                { id :1 + this.sum, user_name : "张三", add_time : '2019-11-05 17:12:44' , content :'服务很好' },
                { id :2 + this.sum, user_name : "李测", add_time : '2019-11-05 17:11:44' , content :'服务一般' },
                { id :3 + this.sum, user_name : "张勋", add_time : '2019-11-22 17:12:44' , content :'服务还行' },
                { id :4 + this.sum, user_name : "徐雅", add_time : '2019-11-11 17:12:44' , content :'服务还可以' },
                { id :5 + this.sum, user_name : "赵晓微", add_time : '2019-11-15 17:12:44' , content :'服务态度差' },
                { id :6 + this.sum, user_name : "吴丽", add_time : '2019-12-05 17:12:44' , content :'什么时候菜品改进' },
                { id :7 + this.sum, user_name : "胡超", add_time : '2019-12-05 16:12:44' , content :'服务很好' },
                { id :8 + this.sum, user_name : "daydaylee", add_time : '2019-09-05 17:12:44' , content :'服务很好' },
                { id :9 + this.sum, user_name : "Tony", add_time : '2019-12-05 15:13:44' , content :'服务很好' },
                { id :10 + this.sum, user_name : "BeauTiy", add_time : '2019-12-05 17:13:54' , content :'服务很好' },
            ]);
            
        },
        showMore(){
            this.pageindex++;
            this.sum+=10;
            this.getComments();
        },
        postComments(){
            this.flag = true;
            // 校验内容
            if(this.msg.trim().length ===0 &&this.flag){
                return Toast("请你输入内容,内容不能为空！");
            }
            // 发表评论
            // 三个参数
            // 第一个请求的 URL地址
            // 第二个 提交服务器服务器的对象 {content : this.msg}
            // 第三个 定义提交的时候 设置表单的数据格式
            // this.$http.post('api/postcomment/:'+this.$route.params.id,{
            // },{ "content " : this.msg.trim() },{'emulateJSON': true,})
            // .then( result =>{
            //     if(result.body.status ===0 ){
            //         //  需要做的就是拼接内容
            //         var cmt = { user_name : '匿名用户', add_time : Date.now(), content : this.msg.trim()};
            //         this.comments.unshift(cmt);
            //         this.msg = '';
            //     }
            // });
            var cmt = { user_name : '匿名用户', add_time : Date.now() , content : this.msg.trim()};
            this.comments.unshift(cmt);
            this.msg = '';
        }
    },

}
</script>

<style scoped >
.cmt-container{
    
}
.cmt-container h3{
    font-size: 18px;
}
.cmt-container textarea{
    font-size: 14px; 
    height: 85px;
    margin: 0;
    border-radius: 5px;
}
.cmt-list{
    
    font-size: 12px;
    margin: 5px 0;
}
.cmt-title{
    line-height: 35px;
    background: #ccc;
    border-radius: 5px;
}
.cmt-body{
    margin: 5px 0px;
    padding-left: 10px;
    border-radius: 5px;
}
/* .mint-toast-text{
    color: red!important;
} */
</style>
<style >
.mint-toast-text{
    color: red!important;
    border-radius: 5px;
}
</style>