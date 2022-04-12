<!-- 文章列表 -->
<template>
<div>
	<wbc-nav></wbc-nav>
	<wbc-other></wbc-other>
	<div class="h-information2">
		<el-row :gutter="20">
           	<el-col :span="24">
			   	<div class="grid-content2 bg-red">
					   <div class="mid">
			   			<img :src="courseimg" alt="">
			   			<h2>
                    		<a>{{coursetype}}</a>
                		</h2>
					   </div>
			   	</div>
			</el-col>
		</el-row>
	</div>
	<div class="toppadding"></div>
	<div class="word" :style="{backgroundImage:'url(static/img/hyhyimg/41.png)'}">
        <h3>
            {{coursetype}}
        </h3>
    </div>
	<div class="underline"></div>
	<!-- <el-button size="small" type="primary" @click="getAllClass_TypeFromDatabase">获取数据</el-button> -->
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
    </div>

	<div class="cc-info">
        <el-row class="set1" :gutter="30">
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

	<wbc-footer></wbc-footer>
</div>
</template>

<script>
import header from '../components/header.vue'
import footer from '../components/footer.vue'
import otherheader from '../components/otherheader.vue'
import {getCourseAll} from '../utils/server.js'
export default {
	data() { //选项 / 数据
		return {
			coursetype:"",
			courseimg:"",
			courses:[],
			names:["幼儿发音","少年口才","播音主持","职场情商"],
			prefix: {
                video: 'https://speechdb-oss-video.oss-cn-beijing.aliyuncs.com/',
                image: 'https://speechdb-oss-image.oss-cn-beijing.aliyuncs.com/',
                text: 'https://speechdb-oss-text.oss-cn-beijing.aliyuncs.com/'
            },
		}
		
	},
	methods: { //事件处理器
		getAllClass_TypeFromDatabase(){
            var that=this
            getCourseAll().then(res => {
				var that=this
				that.courses=[]
                res.data.result.forEach(element => {
					if(that.names[element.category-1]==that.coursetype){
						that.courses.push(element)
					} 
				})
                console.log(this.courses)
            })
        }
	},
    components: { //定义组件
		'wbc-nav': header,
		'wbc-other':otherheader,
		'wbc-footer': footer
	},
	mounted(){
		this.coursetype=this.$route.query.type
		if(this.coursetype=="幼儿发音"){
			this.courseimg="static/img/hyhyimg/21.png"
		}
		else if(this.coursetype=="少年口才"){
			this.courseimg="static/img/hyhyimg/23.png"
		}
		else if(this.coursetype=="播音主持"){
			this.courseimg="static/img/hyhyimg/24.png"
		}
		else if(this.coursetype=="职场情商"){
			this.courseimg="static/img/hyhyimg/22.png"
		}
		this.getAllClass_TypeFromDatabase()
	},
	created() { //生命周期函数

	}
}
</script>

<style scoped>
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
.set1 img{
    border-bottom: 3px solid rgb(255, 0, 0);
}
.firstimg{
	width: 100%;
	height: 110px;
}
.h-information2 {
	text-align: center;
	width: 13%;
	margin: auto;
	position: absolute;
	/* height: 20px; */
	/* top:-50%; */
	font-size: 16px;
	opacity: 0.98;
	border-radius: 5px;
	z-index: 2;
	left: 50%;
	transform: translate(-50%,-50%);
	/* animation: b 1s ease-out;
	-webkit-animation: b 1s ease-out; */
}
.h-information2 img {
	width: 80px;
	height: 80px;
	/* margin-top: 10px; */
	object-fit: cover;
}
.h-information2 h2{
	padding-top: 10px;
}
.h-information2 h2 a{
	color: #fff;
	-webkit-background-clip: text;
	font-size: 25px;
	font-weight: 700;
	/* letter-spacing: 10px; */
	text-align: center;
}
.mid{
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
}
.toppadding{
	padding-top: 120px;
}
.grid-content2 {
    border-radius: 10%;
    min-height: 36px;
	min-width: 36px;
	height: 180px;
}
.bg-red {
    background: linear-gradient(to bottom, #f82525, #660808);
	color: transparent; 
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
@media screen and (max-width: 860px){
    .red{
        display: none;
    }
}
@media screen and (max-width: 700px){
    .c-info{
        display: none;
    }
    .cc-info{
        display: block;
    }
	.h-information2 {
		display: none;
	}
	.toppadding{
		display: none;
	}
}
@media screen and (min-width: 701px) {
    .c-info{
        display: block;
    }
    .cc-info{
        display: none;
    }
}
</style>