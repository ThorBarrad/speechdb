<!-- 文章列表 -->
<template>
<div>
	<wbc-nav></wbc-nav>
	<wbc-other></wbc-other>
    <div class="topborder"></div>
    <div class="frame2" v-for="itemx in classkind" :key="itemx.classname">
        <div class="word" :style="{backgroundImage:'url(static/img/hyhyimg/41.png)'}">
            <h3>
                <a :href="'http://www.huayanhuayu.cn/#/CourseList?type='+itemx.classname">
                {{itemx.classname.slice(0,2)}}
                <img :src='itemx.prc' class="myimg">
                {{itemx.classname.slice(2,4)}}
                </a>
            </h3>
        </div>
        <div class="underline"></div>
        <div class="c-info">
            <el-row class="set1" :gutter="20">
                <el-col :span="12">
                    <a :href="'http://www.huayanhuayu.cn/#/CourseList?type='+itemx.classname">
                        <div class="fakebackbox"></div> 
				        <!-- <img :src='prefix.image+itemx.firstcourse.pic_url' class="firstimg"> -->
                        <img :src='itemx.picture' class="zeroimg">
                    </a>
                </el-col>
			    <el-col :span="6">
                    <a :href="'http://www.huayanhuayu.cn/#/CourseDetail?type='+itemx.secondcourse.id">
                        <div class="backbox"><p>{{itemx.secondcourse.title}}</p></div> 
				        <img :src='prefix.image+itemx.secondcourse.pic_url' class="firstimg">
                    </a>
                </el-col>
			    <el-col :span="6">
                    <a :href="'http://www.huayanhuayu.cn/#/CourseDetail?type='+itemx.thirdcourse.id">    
                        <div class="backbox"><p>{{itemx.thirdcourse.title}}</p></div>
				        <img :src='prefix.image+itemx.thirdcourse.pic_url' class="firstimg">
                    </a>
                </el-col>
            </el-row>
		    <el-row class="set1" :gutter="20">
                <el-col :span="6" v-for="item in itemx.courses" :key="item.id">
                    <a :href="'http://www.huayanhuayu.cn/#/CourseDetail?type='+item.id"> 
				        <div class="backbox"><p>{{item.title}}</p></div>   
                        <img :src='prefix.image+item.pic_url' class="secondimg">
                    </a>
                </el-col>
            </el-row>
        </div>

        <div class="cc-info">
            <el-row class="set1" :gutter="20">
                <el-col :span="24">
                    <a :href="'http://www.huayanhuayu.cn/#/CourseList?type='+itemx.classname">
                        <div class="fakebackbox"></div> 
				        <!-- <img :src='prefix.image+itemx.firstcourse.pic_url' class="firstimg"> -->
                        <img :src='itemx.picture' class="zeroimg">
                    </a>
                </el-col>
			    <el-col :span="24">
                    <a :href="'http://www.huayanhuayu.cn/#/CourseDetail?type='+itemx.secondcourse.id"> 
                        <div class="backbox"><p>{{itemx.secondcourse.title}}</p></div> 
				        <img :src='prefix.image+itemx.secondcourse.pic_url' class="firstimg">
                    </a>
                </el-col>
			    <el-col :span="24">
                    <a :href="'http://www.huayanhuayu.cn/#/CourseDetail?type='+itemx.thirdcourse.id">    
                        <div class="backbox"><p>{{itemx.thirdcourse.title}}</p></div>
				        <img :src='prefix.image+itemx.thirdcourse.pic_url' class="firstimg">
                    </a>
                </el-col>
            </el-row>
		    <el-row class="set1" :gutter="20">
                <el-col :span="24" v-for="item in itemx.courses" :key="item.id">
                    <a :href="'http://www.huayanhuayu.cn/#/CourseDetail?type='+item.id"> 
				        <div class="backbox"><p>{{item.title}}</p></div>   
                        <img :src='prefix.image+item.pic_url' class="secondimg">
                    </a>
                </el-col>
            </el-row>
        </div>

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
	name: "hot_course",
	data() { //选项 / 数据
		return {
            prefix: {
                video: 'https://speechdb-oss-video.oss-cn-beijing.aliyuncs.com/',
                image: 'https://speechdb-oss-image.oss-cn-beijing.aliyuncs.com/',
                text: 'https://speechdb-oss-text.oss-cn-beijing.aliyuncs.com/'
            },
            classkind:[
                {   
                    classname:"幼儿发音",
                    prc:'static/img/hyhyimg/yk.png',
                    picture:"static/img/hyhyimg/ykkc.png",
                    firstcourse:{category:10,description:"课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍",
                                id:1,pic_url:"static/img/headbg.jpg",purchase:99,teacher:14,title:"话言话语 热门课程名称"},
                    secondcourse:{category:10,description:"课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍",
                                id:1,pic_url:"static/img/headbg.jpg",purchase:99,teacher:14,title:"话言话语 热门课程名称"},
                    thirdcourse:{category:10,description:"课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍",
                                id:1,pic_url:"static/img/headbg.jpg",purchase:99,teacher:14,title:"话言话语 热门课程名称"},
                    courses:[

                    ]
                },
                {   
                    classname:"少年口才",
                    prc:'static/img/hyhyimg/xx.png',
                    picture:"static/img/hyhyimg/xxms.png",
                    firstcourse:{category:10,description:"课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍",
                                id:1,pic_url:"static/img/headbg.jpg",purchase:99,teacher:14,title:"话言话语 热门课程名称"},
                    secondcourse:{category:10,description:"课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍",
                                id:1,pic_url:"static/img/headbg.jpg",purchase:99,teacher:14,title:"话言话语 热门课程名称"},
                    thirdcourse:{category:10,description:"课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍",
                                id:1,pic_url:"static/img/headbg.jpg",purchase:99,teacher:14,title:"话言话语 热门课程名称"},
                    courses:[

                    ]
                },
                {   
                    classname:"播音主持",
                    prc:'static/img/hyhyimg/zc.png',
                    picture:"static/img/hyhyimg/zcqs.png",
                    firstcourse:{category:10,description:"课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍",
                                id:1,pic_url:"static/img/headbg.jpg",purchase:99,teacher:14,title:"话言话语 热门课程名称"},
                    secondcourse:{category:10,description:"课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍",
                                id:1,pic_url:"static/img/headbg.jpg",purchase:99,teacher:14,title:"话言话语 热门课程名称"},
                    thirdcourse:{category:10,description:"课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍",
                                id:1,pic_url:"static/img/headbg.jpg",purchase:99,teacher:14,title:"话言话语 热门课程名称"},
                    courses:[
                        
                    ]
                },
                {   
                    classname:"职场情商",
                    prc:'static/img/hyhyimg/ms.png',
                    picture:"static/img/hyhyimg/msfd.png",
                    firstcourse:{category:10,description:"课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍",
                                id:1,pic_url:"static/img/headbg.jpg",purchase:99,teacher:14,title:"话言话语 热门课程名称"},
                    secondcourse:{category:10,description:"课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍",
                                id:1,pic_url:"static/img/headbg.jpg",purchase:99,teacher:14,title:"话言话语 热门课程名称"},
                    thirdcourse:{category:10,description:"课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍",
                                id:1,pic_url:"static/img/headbg.jpg",purchase:99,teacher:14,title:"话言话语 热门课程名称"},
                    courses:[
                        
                    ]
                },
                
            ],

			

		}
    },
    mounted(){
        this.getHotClass_TypeFromDatabase()
    },
	methods: { //事件处理器
        getHotClass_TypeFromDatabase(){
            var that=this
            getCourseAll().then(res => {
                var that=this
                var yikaocount=0
                var xiaoxuecount=0
                var zhichangcount=0
                var mianshicount=0
                res.data.result.forEach(element => {
					if(element.category==1){
						if(yikaocount==0){
                            that.classkind[0].secondcourse=element
                        }
                        else if(yikaocount==1){
                            that.classkind[0].thirdcourse=element
                        }
                        else{
                            that.classkind[0].courses.push(element)
                        }
                        yikaocount+=1
                    } 
                    if(element.category==2){
						if(xiaoxuecount==0){
                            that.classkind[1].secondcourse=element
                        }
                        else if(xiaoxuecount==1){
                            that.classkind[1].thirdcourse=element
                        }
                        else{
                            that.classkind[1].courses.push(element)
                        }
                        xiaoxuecount+=1
                    } 
                    if(element.category==3){
						if(zhichangcount==0){
                            that.classkind[2].secondcourse=element
                        }
                        else if(zhichangcount==1){
                            that.classkind[2].thirdcourse=element
                        }
                        else{
                            that.classkind[2].courses.push(element)
                        }
                        zhichangcount+=1
                    } 
                    if(element.category==4){
						if(mianshicount==0){
                            that.classkind[3].secondcourse=element
                        }
                        else if(mianshicount==1){
                            that.classkind[3].thirdcourse=element
                        }
                        else{
                            that.classkind[3].courses.push(element)
                        }
                        mianshicount+=1
					} 
				})
            })
        }
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
.backbox{
    text-align: center;
    z-index: 2;
    /* width: 50%; */
    height: 20px;
    background: linear-gradient(to bottom, #f82525, #660808);
    position: relative;
    left: 50%;
    transform: translate(-50%,100%);
}
.fakebackbox{
    height: 20px;
    position: relative;
    transform: translate(-50%,100%);
}
.backbox p{
    font-size: 12px;
    padding: 5px;
    color: rgb(255, 255, 255);
    position: relative;
    top: 50%;
    transform: translate(0,-53%);
    font-weight: 700;
}
.topborder{
    padding-top: 30px;
}
.firstimg{
    width: 100%;
    height: 250px;
    border-bottom: 3px solid rgb(255, 0, 0);
}
.zeroimg{
    width: 100%;
    height: 260px;
    /* border-bottom: 3px solid rgb(255, 0, 0); */
}
.secondimg{
    width:100%;
    height: 130px;
    border-bottom: 3px solid rgb(255, 0, 0);
}
.myimg{
    width: 70px;
    height: 70px;
    transform: translate(0,40%);
}
.word h3{
    text-align: center;
    color: black;
    font-size: 25px;
    /* padding: 15px; */
    position: relative;
    /* text-indent: 20px; */
    letter-spacing: 10px;
    font-weight: 700;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-80%);
}
.word{
    height: 80px;
	/* padding: 20px; */
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
@media screen and (max-width: 700px){
    .c-info{
        display: none;
    }
    .cc-info{
        display: block;
    }
    .zeroimg{
        height: 100%;
    }
    .firstimg{
        height: 100%;
    }
    .secondimg{
        height: 100%;
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
