<template>
<div class="frame2">
    <div class="word" :style="{backgroundImage:'url(static/img/hyhyimg/41.png)'}">
        <h3>
            热门资讯
        </h3>
    </div>
    <div class="underline"></div>
    <el-row class="set1">
        <el-col :span="24">
            <div class="grid-content bg-purple-light">
                <div class="i-information">
                    <el-row :gutter="30">
                        <el-col :span="8" class="i-back" v-for="item in infomation" :key="item.id">
                            <a :href="'http://www.huayanhuayu.cn/#/InfoDetail?type='+item.id">
                            <div class="info">
                                <img :src="prefix.image+item.pic_url">
                                <div class="textbox">
			                        <p>
                                        <span class="ps">话言话语</span>
                                        <span class="pp">{{item.title}}</span>
                                    </p>
                                    <p class="sp">{{item.description}}</p>
                                </div>
                            </div>
                            </a>
                        </el-col>
                    </el-row>
                </div>     
            </div>
        </el-col>
    </el-row>

    <el-row class="sett1">
        <el-col :span="24">
            <div class="grid-content bg-purple-light">
                <div class="i-information">
                    <el-row :gutter="30">
                        <el-col :span="24" class="i-back" v-for="item in infomation" :key="item.id">
                            <a :href="'http://www.huayanhuayu.cn/#/InfoDetail?type='+item.id">
                            <div @click="$router.push({path:'/InfoDetail',query:{type:item.id}})" class="info">
                                <img :src="prefix.image+item.pic_url">
                                <div class="textbox">
			                        <p>
                                        <span class="ps">话言话语</span>
                                        <span class="pp">{{item.title}}</span>
                                    </p>
                                    <p class="sp">{{item.description}}</p>
                                </div>
                            </div>
                            </a>
                        </el-col>
                    </el-row>
                </div>     
            </div>
        </el-col>
    </el-row>

    <div class="bgimg" :style="{backgroundImage:'url(static/img/hyhyimg/44.png)'}"></div>

</div>
</template>

<script>
import {getHotInfo} from '../utils/server.js'
export default {
    data(){
        return{
            prefix: {
                video: 'https://speechdb-oss-video.oss-cn-beijing.aliyuncs.com/',
                image: 'https://speechdb-oss-image.oss-cn-beijing.aliyuncs.com/',
                text: 'https://speechdb-oss-text.oss-cn-beijing.aliyuncs.com/'
            },
            infomation:[

            ]
        }
    },
    mounted(){
        this.getHotInfoFromDatabase()
    },
    methods:{
        getHotInfoFromDatabase(){
            var that=this
            getHotInfo().then(res => {
                
                that.infomation=[]
                that.infomation = res.data.result.slice(0,3)
                console.log(this.infomation)
            })
        }
    }
}
</script>

<style scoped>
.bgimg{
	position:absolute;
	height: 200px;
	transform: translate(0,-240px);
	width: 100%;
}
.i-back{
    margin-bottom: 20px;
}
.i-information {
	/* text-align: center; */
	width: 60%;
	margin: auto;
	position: relative;
	/* top: 20px; */
	padding: 20px;
	font-size: 16px;
	opacity: 0.98;
	border-radius: 5px;
	z-index: 1;
	/* animation: b 1s ease-out;
	-webkit-animation: b 1s ease-out; */
    
}
.i-information img {
	width: 100%;
	height: 150px;
	/* margin-top: 5px; */
	object-fit: cover;
    border-bottom: 3px solid rgb(255, 0, 0);
}
.i-information .info{
    width:100%;
    background-color: #fff;
}
.textbox{
    padding-top: 10px;
    padding-left: 15px;
    padding-right: 10px;
    padding-bottom: 10px;
    /* left: 50%;
    position: relative;
    transform: translate(-50%,0); */
    line-height: 20px;
}
.sp{
    font-size: 8px;
    text-indent: 24px;
}
.ps{
    font-size: 18px;
    color: red;
    font-weight: 700;
}
.pp{
    font-size: 18px;
    color: black;
    font-weight: 700;
}
.bg-purple-light {
    background: #e9e9e9;
}
@media screen and (max-width: 700px){
    .set1{
        display: none;
    }
    .sett1{
        display: block;
    }
    .i-information{
        width: 80%;
    }
}
@media screen and (min-width: 701px){
    .set1{
        display: block;
    }
    .sett1{
        display: none;
    }
}
</style>