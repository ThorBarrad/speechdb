<!-- 文章列表 -->
<template>
<div>
	<wbc-nav></wbc-nav>
	<wbc-other></wbc-other>
    <div class="topborder"></div>
    <div class="word" :style="{backgroundImage:'url(static/img/hyhyimg/41.png)'}">
            <h3>
                教研团队
            </h3>
    </div>
    <div class="underline"></div>
	<div class="c-info">
        <div class="set3">
		    <el-row :gutter="30">
			    <el-col :span="8" v-for="item in masters" :key="item.id" class="bottompadding">
                    <div class="box">
				        <img :src="prefix.image+item.pic_url">
                        <div class="textbox">
				            <p class="black">{{item.name}}</p>
				            <p class="red">{{item.school+" / "+item.title}}</p>
                            <p class="normal">{{item.description}}</p>
                        </div>
                    </div>
			    </el-col>
		    </el-row>
        </div>
	</div>

    <div class="cc-info">
        <div class="set3">
		    <el-row :gutter="30">
			    <el-col :span="24" v-for="item in masters" :key="item.id" class="bottompadding">
                    <div class="box">
				        <img :src="prefix.image+item.pic_url">
                        <div class="textbox">
				            <p class="black">{{item.name}}</p>
				            <p class="red">{{item.school+" / "+item.title}}</p>
                            <p class="normal">{{item.description}}</p>
                        </div>
                    </div>
			    </el-col>
		    </el-row>
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
    <div class="topborder"></div>
    <div class="word" :style="{backgroundImage:'url(static/img/hyhyimg/41.png)'}">
            <h3>
                师资团队
            </h3>
    </div>
    <div class="underline"></div>


	<div class="c-info">
        <div class="set3 t-information">
		    <el-row :gutter="30">
			    <el-col :span="6" v-for="item in teachers" :key="item.id">
				    <img :src="prefix.image+item.pic_url">
				    <p class="black">{{item.name}}</p>
				    <p class="red">{{item.school+" / "+item.title}}</p>
			    </el-col>
		    </el-row>
            <div class="topborder"></div>
		    <!-- <el-button size="small" type="primary">查看更多</el-button> -->
        </div>
	</div>

    <div class="cc-info">
        <div class="set3 t-information">
		    <el-row :gutter="30">
			    <el-col :span="12" v-for="item in teachers" :key="item.id">
				    <img :src="prefix.image+item.pic_url">
				    <p class="black">{{item.name}}</p>
				    <p class="red">{{item.school+" / "+item.title}}</p>
			    </el-col>
		    </el-row>
            <div class="topborder"></div>
		    <!-- <el-button size="small" type="primary">查看更多</el-button> -->
        </div>
	</div>

	<wbc-footer></wbc-footer>
</div>
</template>

<script>
import header from '../components/header.vue'
import footer from '../components/footer.vue'
import otherheader from '../components/otherheader.vue'
import {getTeacherAll,getStatistic} from '../utils/server.js'
export default {
	data() { //选项 / 数据
		return {
            prefix: {
                video: 'https://speechdb-oss-video.oss-cn-beijing.aliyuncs.com/',
                image: 'https://speechdb-oss-image.oss-cn-beijing.aliyuncs.com/',
                text: 'https://speechdb-oss-text.oss-cn-beijing.aliyuncs.com/'
            },
			masters:[
                
			],
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
        this.getAllProfessorFromDatabase()
        this.getAllTeacherFromDatabase()
        this.getStatisticFromDatabase()
    },
	methods: { //事件处理器
        getAllProfessorFromDatabase(){
            getTeacherAll().then(res => {
                console.log(res.data)
                var that=this
                that.masters = res.data
                console.log(this.masters)
            })
        },
        getAllTeacherFromDatabase(){
            getTeacherAll().then(res => {
                console.log(res.data)
                var that=this
                that.teachers = res.data
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
	},
    components: { //定义组件
		'wbc-nav': header,
		'wbc-other':otherheader,
		'wbc-footer': footer
	},

	created() { //生命周期函数

	}
}
</script>

<style scoped>
.set3 img{
    border-bottom: 3px solid rgb(255, 0, 0);
}
.set3 .bt{
    position: absolute;
    left:75%;
    top:100%;
    transform: translate(-100%,-100%);
}
.set3 p{
    /* font-size: 15px; */
    /* text-align: center; */
    padding-top: 10px;
}
.set3 span{
    font-size: 8px;
}
.set3 .bottompadding{
    padding-bottom: 20px;
    height: 600px;
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
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
}
.topborder{
    padding-top: 30px;
}
.box{
    background-color: #fff;
    /* padding-bottom: 20px; */
    box-shadow: 0px 0px 10px rgb(190, 119, 119);
    /* text-align: center; */
}
.box img{
    width: 100%;
    height: 100%;
}
.textbox{
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
}
.t-information .el-button--primary{
    position: relative;
    left:50%;
    top:100%;
    transform: translate(-50%,0);
}
.normal{
    font-size: 8px;
    text-indent: 32px;
    line-height: 17px;
}
.red{
    font-size: 15px;
    color: red;
    font-weight: 600;
    text-align: center;
}
.black{
    font-size: 18px;
    color: black;
    font-weight: 600;
    text-align: center;
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
.cc-info{
	width: 80%;
	margin: auto;
	position: relative;
	/* text-align: center; */
	padding: 20px;
	font-size: 16px;
	opacity: 0.98;
	border-radius: 5px;
	z-index: 1;
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
@media screen and (max-width: 700px){
    .c-info{
        display: none;
    }
    .cc-info{
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
    .c-info{
        display: block;
    }
    .cc-info{
        display: none;
    }
}

</style>