<template lang="">
    <div class='login'>
        
		<div class="mui-content login-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
			<form class="mui-input-group">
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell">
					<span>自动登入</span>
                    <!-- /mui-switch mui-switch-blue  mui-active -->
					<div class="mui-switch mui-switch-blue" @click='toggle' :class="myclass">
						<div class="mui-switch-handle"></div>
					</div>
				</li>
				</ul>
			</form>
			<div class="mui-content-padded">
				<button id='login' type="button" class="mui-btn mui-btn-block mui-btn-primary" @click='submit'>登录</button>
				<div class="link-area"><a id='reg' @click='Goreg'>注册账号</a> 
                <span class="spliter">|</span> 
                <a id='forgetPassword'>忘记密码</a>
			    </div>
            </div>
		</div>
        
        <div class='login-bottom'>
            <div v-for='item in list' :key='item.url'> 
                <div>
                    <img :src='item.url'></img>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

import mui from '../../assets/mui/js/mui.js';

mui.init();

export default {
    data() {
        return {
            autoLogin : false,
            myclass : '',
            list : [
                { url : './static/images/user/qq.png'},
                { url : './static/images/user/sina.png'},
                { url : './static/images/user/weixin.png'},
            ]
        }
    },
    mounted(){
        this.init();
    },
    methods : {
        toggle(){
            if(this.autoLogin){
                this.myclass = 'mui-active';
            }else{
                this.myclass = '';
            }
            this.autoLogin = !this.autoLogin;
            // console.log(this.autoLogin);
        },
        init(){
            mui.init({
				// swipeBack:true //启用右滑关闭功能
			});
        },
        Goreg(){
            console.log(222);
            this.$router.push("/Member/reg");
        },
        submit(){
            console.log('This is 注册成功!');
            this.$router.push('/Member/User');
        }
    },
    watch: {
        "$route.path" : function(el,old){
            
        },
        "autoLogin" : function(newval,oldVal){

        }
    },
}

</script>

<style >
.login{
    height: 100%; 
    background: #eee !important;
}   
.login-content{
    margin-top: 20px !important;
}
.link-area{
    transform: translateX(50%);
    margin-left: -50%;
}
.rigth{
    float: right;
}
form{
    box-shadow: 0 0 1px cyan;
    /* border-radius: 15px !important; */
}
.login-bottom{
    display: flex;
    justify-content: space-around;
    margin-top: 200px;
}
.login-bottom .item{

}
.login-bottom img{
    width: 50px;
    height: 50px;
}
</style>