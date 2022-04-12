<template>
<div class="frame2">
    <div class="toppadding"></div>
    <div class="word" :style="{backgroundImage:'url(static/img/hyhyimg/41.png)'}">
        <h3>
            热门课程推荐
        </h3>
    </div>
    <div class="underline"></div>
    <div class="c-info">
        <el-row class="set1" :gutter="30">
            <el-col :span="12" v-for="item in courses" :key="item.id">   
                <el-row :gutter="15">
                    <el-col :span="11">
                        <a :href="'http://www.huayanhuayu.cn/#/CourseDetail?type='+item.id">
                            <img :src='prefix.image+item.pic_url' class="firstimg">
                        </a>
                    </el-col>
                    <el-col :span="13">
                        <a :href="'http://www.huayanhuayu.cn/#/CourseDetail?type='+item.id">
                            <p>
                                <span class="red">话言话语</span>
                                <span class="black">{{item.title}}</span>
                            </p>
                            <p class="normal">{{item.description}}</p>
                        </a>
                    </el-col>
                    <el-button size="small" type="primary" @click="$router.push({path:'/CourseDetail',query:{type:item.id}})">查看详情→</el-button>
                </el-row>
            </el-col>
        </el-row>

        <el-row class="sett1" :gutter="30">
            <el-col :span="24" v-for="item in courses" :key="item.id">    
                <el-row :gutter="15">
                    <el-col :span="11">
                        <a :href="'http://www.huayanhuayu.cn/#/CourseDetail?type='+item.id">
                            <img :src='prefix.image+item.pic_url' class="firstimg">
                        </a>
                    </el-col>
                    <el-col :span="13">
                        <a :href="'http://www.huayanhuayu.cn/#/CourseDetail?type='+item.id">
                            <p>
                                <span class="red">话言话语</span>
                                <span class="black">{{item.title}}</span>
                            </p>
                            <p class="normal">{{item.description}}</p>
                        </a>
                    </el-col>
                    <el-button size="small" type="primary" @click="$router.push({path:'/CourseDetail',query:{type:item.id}})">查看详情→</el-button>
                </el-row>
            </el-col>
        </el-row>
        
    </div>
</div>
</template>

<script>
import {getCourseAll} from '../utils/server.js'
export default {
    data(){
        return{
            prefix: {
                video: 'https://speechdb-oss-video.oss-cn-beijing.aliyuncs.com/',
                image: 'https://speechdb-oss-image.oss-cn-beijing.aliyuncs.com/',
                text: 'https://speechdb-oss-text.oss-cn-beijing.aliyuncs.com/'
            },
            courses:[
                
            ]
        }
    },
    mounted(){
        this.getWorks()
    },
    methods:{
        getWorks() {
            var that=this
            getCourseAll().then(res => {
                that.courses = res.data.result.slice(0,6)
                console.log(this.courses)
            })
        },
    },
    watch:{

    },
    created(){
        
    },
    
}
</script>

<style scoped>
.toppadding{
    padding-top: 120px;
}
.firstimg{
    width: 100%;
    height: 110px;
}
.set1 img{
    border-bottom: 3px solid rgb(255, 0, 0);
}
.set1 .el-button--primary{
    position: absolute;
    left:100%;
    top:100%;
    transform: translate(-100%,-100%);
}
.sett1 img{
    border-bottom: 3px solid rgb(255, 0, 0);
}
.sett1 .el-button--primary{
    position: absolute;
    left:100%;
    top:100%;
    transform: translate(-100%,-100%);
}
.normal{
    font-size: 8px;
    text-indent: 32px;
    line-height: 17px;
    max-height: 67px;
    overflow: hidden;
    /* white-space: nowrap; */
    text-overflow: ellipsis; /*超出部分用...代替*/
}
.red{
    font-size: 15px;
    color: red;
    font-weight: 600;
}
.black{
    font-size: 15px;
    color: black;
    font-weight: 600;
}
.c-info{
	width: 60%;
	margin: auto;
	position: relative;
	/* text-align: center; */
	padding: 20px;
	font-size: 16px;
	opacity: 0.98;
	border-radius: 5px;
	z-index: 1;
}
@media screen and (max-width: 860px){
    .red{
        display: none;
    }
}
@media screen and (max-width: 700px){
    .set1{
        display: none;
    }
    .sett1{
        display: block;
    }
    .toppadding{
        display: none;
    }

    .firstimg{
        width: 100%;
        height: 90px;
    }
    .c-info{
        width: 80%;
    }
    .normal{
        font-size: 8px;
        text-indent: 32px;
        line-height: 17px;
        max-height: 52px;
        overflow: hidden;
        /* white-space: nowrap; */
        text-overflow: ellipsis; /*超出部分用...代替*/
    }
}
@media screen and (min-width: 701px) {
    .set1{
        display: block;
    }
    .sett1{
        display: none;
    }
}
</style>