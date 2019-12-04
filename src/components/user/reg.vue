<template>
    <div class="reg">
        
		<div class="mui-content">
			<form class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-inpt-uclear mui-input" placeholder="请输入账号" v-model="user">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码" v-model="password1">
				</div>
				<div class="mui-input-row">
					<label>确认</label>
					<input id='password_confirm' type="password" class="mui-input-clear mui-input" placeholder="请确认密码" v-model="password2">
				</div>
				<div class="mui-input-row">
					<label>邮箱</label>
					<input id='email' type="email" class="mui-input-clear mui-input" placeholder="请输入邮箱" v-model="mail">
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='reg' class="mui-btn mui-btn-block mui-btn-primary" @click="sumit">注册</button>
			</div>
			<div class="mui-content-padded">
				<p>注册真实可用，注册成功后的用户可用于登录，但是示例程序并未和服务端交互，用户相关数据仅存储于本地。</p>
			</div>
		</div>
    </div>
</template>


<script>
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
export default {
    data() {
        return {
            user : '',
            password1 : '',
            password2 : '',
            mail : '',
            flag : false,
        }
    },

    methods : {
        sumit(){
            
            
            this.flag = true;
        }
    },
    watch: {
        "flag" : function(old){
            if(old){
                Toast({
                        message: '注册成功,请稍后',
                        duration: 1500,
                        // position : 'bottom',
                })
                setTimeout(()=>{

                },1000);
                Indicator.close(Indicator);
                console.log(Indicator)
                // Indicator.close();
                setTimeout( () =>{
                    this.$router.go(-1);
                },2500);
            }
        }
    },
}
</script>

<style >
.reg{
    height: 100%;
    background: #eee;
}   
.mui-bar-nav{
    z-index: 10;
}
</style>