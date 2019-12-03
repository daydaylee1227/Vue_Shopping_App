<template>
    <div>
        <div class="mui-numbox " data-numbox-min='1' :data-numbox-max='famax'>
			<button class="mui-btn mui-btn-numbox-minus" type="button" @click='decrease()'>-</button>
			<input class="mui-input-numbox" @keyup="FuncNum()" v-model="msg"  readonly/>
			<button class="mui-btn mui-btn-numbox-plus" type="button" @click='add()'>+</button>
		</div>
    </div>
</template>

<script>
import mui from '../../assets/mui/js/mui.js';
export default {
    data() {
        return {
            msg : null,
            famax : 1,
        }
    },
    created(){
        this.msg = this.data;
        this.famax = this.max;
        
    },
    mounted(){
        this.famax = this.max;
    },
    methods:{
        add(){
            this.msg++;
        },
        decrease(){
			this.msg = Math.max(1,--this.msg);
        },
        
    },
    props : ['data','id','max'],
    watch : {
        "msg" : function(neww,old){
            if(typeof neww === 'number'){
                this.$store.commit('update',{ id : this.id , count : this.msg});
            }
        },
        // 属性的监听  完成 这个 商品的最大购买量
		"famax" : function(newval,oldval){
		}
    }
}
</script>

<style scoped>

.mui-numbox{
	margin-left: 16px;
	width: 140px;
}
.mui-input-numbox{
    width: 100%;
}
</style>