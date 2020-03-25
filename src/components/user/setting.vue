<template>
    <div class="setting">
        
        <div class="container">
            <div class="item">
                    <mt-cell title="评分鼓励" icon="" value="" is-link>
                        <span class="mui-icon mui-icon-compose"></span>
                    </mt-cell>
                    <mt-cell title="分享推荐" icon="" value="" is-link>
                        <span class="mui-icon mui-icon-pengyouquan"></span>
                    </mt-cell>
                    <mt-cell title="客服电话" icon="" value="" is-link @click="show" to="/show#/Shopcar">
                        <span class="mui-icon mui-icon-phone"></span>
                    </mt-cell>
                    <mt-cell title="问题反馈" icon="" value="" is-link>
                        <span class="mui-icon mui-icon-chatboxes"></span>
                    </mt-cell>
            </div>
            <div class="item">
                <mt-cell title="设置锁屏图案" icon="" value="" is-link to='/Member/Gesture'>
                    <span class="mui-icon mui-icon-locked"></span>
                </mt-cell>
            </div>
            <div class="item emit">
                <mt-cell title="退出"  value="" ></mt-cell>
            </div>
        </div>
    </div>
</template>

<script>
import Gesture from '../user/Gesture.vue'
export default {
    data() {
        return {
            flag : true,
        }
    },
    methods : {
        show(){
            console.log("客服电话")
        },
        goBack(){

        }
    },
    
}
</script>

<style lang="" scope>
.container{
    margin-top: -10px;
    font-size: 16px;
    font-weight: bold;
    background: #eee !important;
}
.item{
    position: relative;
    margin-bottom: 20px;
}
.item span.mui-icon{
    position: absolute;
    left: 90px;
    top: 0px;
    transform: translateY(50%)
}
.item span.mui-icon-locked{
    left: 120px;
}
.emit .mint-cell-title{
    text-align: center !important;
}
.mint-cell{
    border-radius: 20px;
    padding-left: 10px;
}
</style>