<template>
<div class="frame2">
    <div class="word" align="center" :style="{backgroundImage:'url(static/img/hyhyimg/41.png)'}">
        <h3>
            师资介绍
        </h3>
    </div>
    <div class="underline"></div>

            <div class="grid-content bg-purple-light">
                <div class="t-information">
                    <el-row :gutter="20">
                        <el-col :span="6" v-for="item in teachers" :key="item.id">
			                <div>
			                    <img :src='prefix.image+item.pic_url'>
			                    <h2>
                                    <p class="a">{{item.name}}</p>
                                    <p class="c">{{item.title}} / {{item.school}}</p>
                                    <p class="b">{{item.description}}</p>
                                </h2>
			                </div>
			            </el-col>
                    </el-row>
                    <el-button size="small" type="primary" @click="$router.push('/Teacher')">发现更多→</el-button>
                </div> 

                <div class="tt-information">
                    <el-row :gutter="20">
                        <el-col :span="24" v-for="item in teachers" :key="item.id">
			                <div>
			                    <img :src='prefix.image+item.pic_url'>
			                    <h2>
                                    <p class="a">{{item.name}}</p>
                                    <p class="c">{{item.title}} / {{item.school}}</p>
                                    <p class="b">{{item.description}}</p>
                                </h2>
			                </div>
			            </el-col>
                    </el-row>
                    <el-button size="small" type="primary" @click="$router.push('/Teacher')">发现更多→</el-button>
                    <el-button size="small" type="primary" @click="getimg">获取数据</el-button>
                </div>        

            </div>
    <div class="t-bottom" :style="{backgroundImage:'url(static/img/hyhyimg/44.png)'}">
            <div class="limit">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div>
                            <p>{{statistic.foundtime}}</p>
                            <span>成立时间</span>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <p>{{statistic.teachercount}}</p>
                            <span>师资力量</span>
                            
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <p>{{statistic.prizecount}}</p>
                            <span>获奖人数</span>
                            
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <p>{{statistic.goodstudent}}</p>
                            <span>优秀学生</span>
                            
                        </div>
                    </el-col>
                </el-row>
            </div>
    </div>
</div>
</template>

<script>
import {getTeacherAll,getStatistic} from '../utils/server.js'
export default {
    data(){
        return{
            prefix: {
                video: 'https://speechdb-oss-video.oss-cn-beijing.aliyuncs.com/',
                image: 'https://speechdb-oss-image.oss-cn-beijing.aliyuncs.com/',
                text: 'https://speechdb-oss-text.oss-cn-beijing.aliyuncs.com/'
            },
            teachers:[
                
            ],
            statistic:{
                foundtime:2019,
                teachercount:369,
                prizecount:75210,
                goodstudent:4520
            },
        }
    },
    mounted(){
        this.getHotTeacherFromDatabase()
        this.getStatisticFromDatabase()
    },
    methods:{
        getHotTeacherFromDatabase(){
            getTeacherAll().then(res => {
                console.log(res.data)
                var that=this
                that.teachers = res.data.slice(4,8)
                console.log(this.teachers)
            })
        },
        getStatisticFromDatabase(){
            getStatistic().then(res => {
                console.log(res.data.result.slice(-1)[0])
                var that=this
                that.statistic.foundtime=res.data.result.slice(-1)[0].foundtime
                that.statistic.teachercount=res.data.result.slice(-1)[0].teacher
                that.statistic.prizecount=res.data.result.slice(-1)[0].goal
                that.statistic.goodstudent=res.data.result.slice(-1)[0].student
            })
        },
    }
}
</script>

<style scoped>
.t-information {
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
}
.t-information img {
	width: 100px;
	height: 100px;
	margin-top: 10px;
    border: 3px solid;
	border-radius: 100%;
    box-shadow: 0px 0px 10px rgb(255, 0, 0);
	object-fit: cover;
    box-shadow: 0,0,10px, rgb(236, 93, 93);
    left: 50%;
    position: relative;
    transform:translate(-50%,0);
}
.t-information h2 {
	margin-top: 10px;
	padding-bottom: 10px;
	font-family: 'Sigmar One';
}
.t-information h2 .c{
    text-align: center;
    font-size: 15px;
	font-weight: 700;
	color: rgb(255, 0, 0);
	-webkit-background-clip: text;
}
.t-information h2 .b{
    font-size: 1px;
	font-weight: 700;
    display: block;
	color: rgb(0, 0, 0);
	-webkit-background-clip: text;
    text-indent: 24px;
}
.t-information h2 .a{
    text-align: center;
    font-size: 18px;
	font-weight: 700;
	color: rgb(0, 0, 0);
	-webkit-background-clip: text;
}

.tt-information {
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
}
.tt-information img {
	width: 100px;
	height: 100px;
	margin-top: 10px;
    border: 3px solid;
	border-radius: 100%;
    box-shadow: 0px 0px 10px rgb(255, 0, 0);
	object-fit: cover;
    box-shadow: 0,0,10px, rgb(236, 93, 93);
    left: 50%;
    position: relative;
    transform:translate(-50%,0);
}
.tt-information h2 {
	margin-top: 10px;
	padding-bottom: 10px;
	font-family: 'Sigmar One';
}
.tt-information h2 .c{
    text-align: center;
    font-size: 15px;
	font-weight: 700;
	color: rgb(255, 0, 0);
	-webkit-background-clip: text;
}
.tt-information h2 .b{
    font-size: 1px;
	font-weight: 700;
    display: block;
	color: rgb(0, 0, 0);
	-webkit-background-clip: text;
    text-indent: 24px;
}
.tt-information h2 .a{
    text-align: center;
    font-size: 18px;
	font-weight: 700;
	color: rgb(0, 0, 0);
	-webkit-background-clip: text;
}

.t-bottom{
	/* padding: 20px; */
    height: 200px;
    background: #c05353;
    text-align: center;
    margin: 0;
}
.t-bottom .limit{
    text-align: center;
	width: 60%;
	margin: auto;
	position: relative;
	opacity: 0.98;
	border-radius: 5px;
	z-index: 1;
    top: 50%;
    transform: translate(0,-50%);
}
.t-bottom p{
    /* padding-top: 12px; */
    font-size: 30px;
	font-weight: 700;
	color: rgb(255, 255, 255);
	-webkit-background-clip: text;
    text-align:center;
    text-justify:inter-ideograph;
}
.t-bottom span{
    padding-top: 10px;
    display: block;
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 20px;
}



.el-button--primary{
    position: relative;
    top:100%;
    left: 50%;
    transform:translate(-50%,0);
}
.bg-purple-light {
    background: #e9e9e9;
}


@media screen and (max-width: 700px){
    .t-information{
        display: none;
    }
    .tt-information{
        display: block;
    }
    .t-bottom p{
        font-size: 20px;
    }
    .t-bottom span{
        font-size: 15px;
    }
}
@media screen and (min-width: 701px){
    .t-information{
        display: block;
    }
    .tt-information{
        display: none;
    }
}
</style>