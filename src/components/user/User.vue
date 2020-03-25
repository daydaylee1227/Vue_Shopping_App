<template>
    <div>
        <div class="mui-content" >
			<div class="mui-content-padded">
				<p>
					用户登入完成的界面
				</p>
				<button  class="mui-btn mui-btn-block mui-btn-primary" @click="Gosetting">设置</button>
				
				<button id='exit' class="mui-btn mui-btn-block mui-btn-green">关闭</button>
                <button id='logout' class="mui-btn mui-btn-red mui-btn-block" @click="Goback">注销登录</button>
			</div>
		</div>
        <mt-actionsheet
            :actions="actions"
            v-model="sheetVisible"
            cancelText=''
            >
        </mt-actionsheet>
    </div>
</template>

<script>
export default {
    data() {
        return {
            actions : [
                { name : '确定', method : this.Gologin},
                { name : '放回上一步', method : this.goUpStep}
            ],
            sheetVisible :false,
        }
    },
    methods : {
        Gosetting(){
            this.$router.push('/Member/setting');
        },
        Goback(){
            this.sheetVisible = true;
            
        },
        Gologin(){
            this.$router.push('/Member');
        },
        goUpStep(){
            console.log('打印上一步');
        }
    }
}
</script>

<style >
    
</style>