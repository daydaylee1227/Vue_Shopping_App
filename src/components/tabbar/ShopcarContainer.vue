<template>
    <div>
        <!-- 商品展示区域 -->
        <div class="Shoplist">
            <div class="mui-card" v-for=" (item,index) in falist" :key="index">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <div class="check"><mt-switch v-model="item.selected" @change="change(item.id)"></mt-switch></div>
                        <img :src=" './static/images/goods/'+item.id+'.jpg' " alt="">
                        <div class="desc">
                            <h1>{{item.title}}</h1>
                            <!-- 给子组件传入的就是购买件数 -->
                            <!-- 传递数据 购买数量 对应id 对应商品剩余最大数量 -->
                            <muiBox :data='$store.state.map[item.id]' :id='item.id' :max='$store.state.map1[item.id]'></muiBox>
                            <div class="bottom">
                                <span class="price">￥{{item.price}}</span>
                                <a href="#" @click.prevent='deleteinfo(item.id)'>删除</a>
                            </div>
                            
                        </div>
					</div>
				</div>
			</div>

        </div>

        <!-- 商品结算区域 -->
        <div class="mui-card">
				
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
                            <p>总计(不含运费)</p>
                            
                            <p>已勾选<span class="red">{{ $store.getters.getAll_Price.tmp }}</span>件,总价<span class="red">￥{{$store.getters.getAll_Price.tmp_All}}</span></p>
                        </div>
                        <div class="right">
                            <mt-button type='danger' size='large' >去结算</mt-button>
                        </div>
					</div>
				</div>
				<!-- <div class="mui-card-footer">页脚</div> -->
		</div>
    </div>
</template>

<script>
import mui from '../../assets/mui/js/mui.js';
import muiBox from '../comments/muiBox.vue';
export default {
    data() {
        return {
            img_url : './static/images/goods/3.jpg',
            msg : {},
            falist : [],
            max : 1099,
            map : null,
        }
    },
    created(){
        this.getData();
        this.createMap();
    },
    mounted(){
        
    },
    methods : {
        getData(){
            setTimeout(() => { 
                this.falist = this.$store.state.car || '[]';
            }, 100);
            this.falist.forEach(ele => {
                // 数据映射
                console.log(ele);
                this.msg[ele.id] = parseInt(ele.count);
            })
            
            // console.log(this.falist);
        },
        createMap(){
            this.$store.commit('createMap');
            this.map = this.$store.getters.getMap;
        },
        add(id){
            ++this.msg[id];
            this.msg[id] = parseInt(Math.min(this.max,this.msg[id]));
        },
        FuncNum(id){
            console.log(typeof this.msg[id])
            this.msg[id] = this.msg[id].toString().replace(/^(0+)|[^\d]+/g,'');
			this.msg[id] = Math.max(1,this.msg[id]);
            this.msg[id] = Math.min(this.max,this.msg[id]);  
            this.$store.commit('newCar',{ id : this.msg[id]});
        },
        decrease(id){
            --this.msg[id];
        },
        // 删除的操作
        deleteinfo(id){
            console.log(id);
            var tmplist = [];
            this.falist.forEach( el => {
                if(el.id === id ){
                }else{
                    tmplist.push(el);
                }
            })
            console.log(tmplist);
            this.falist = tmplist;
            this.$store.commit('deletelist',id);
        },
        // 
        change(id){
            // this.$store.commit('getAll_Price');
        }
    },
    watch : {

    },
    components : {
        muiBox,
    }
}
</script>



<style  scoped>
.Shoplist{
    padding: 0;
}
.mui-card{
    box-shadow: 0 0 8px #ccc;
    border-radius: 20px;
    padding: 0;
}

.mui-card-content-inner{
    display: flex;
    align-items: center;
    padding: 10px;
}
.check{
    display: inline-block !important;
    width: 20%;
    text-align: center;
}
.mui-numbox{
    width: 100%;
}
.mui-card-content-inner img{

    width: 15%;
    display: inline-block;
    /* vertical-align: middle; */
}
.desc{
    /* display : flex; 
    justify-content: space-between;  
    flex-direction: column; */
    width: 40%;
    display: inline-block;
    margin-left: 10px;
}
.desc h1{
    /* text-align: center; */
    font-size: 22px;
    line-height: 60px;
    margin-bottom: 10px;
    height: 50px;
    overflow: hidden;  
    color: rgb(100, 153, 120); 
}
.desc .price{
    color: red;
}
.bottom{
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    margin-bottom: 10px;
}
.jiesuan{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.jiesuan .red{
    color: red;
    font-weight: bold;
    padding: 0 5px;
}
</style>