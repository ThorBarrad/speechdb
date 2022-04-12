<!-- 文章列表 -->
<template>
<div>
	<wbc-nav></wbc-nav>
    <div class="topborder"></div>
	<div class="c-info-detail">
            <div class="border">
                <el-row class="set3" :gutter="40">
                    <el-col :span="6">
                        <img :src="prefix.image+theclass.qrcode_url" class="firstimg">
                        <p class="myp">扫码试听</p>
                    </el-col>
                    <el-col :span="18">
                        <!-- <p>{{theclass.title}}</p>
                        <span>{{theclass.description}}</span> -->
                        <p>
                            <span class="red">{{cat}}</span>
                            <span class="black">{{theclass.title}}</span>
                        </p>
                        <p class="normal">{{theclass.description}}</p>
                    </el-col>
                    <!-- <el-button size="small" type="primary" class="bt1">立即试听</el-button> -->
                    <!-- <el-button size="small" type="primary" class="bt2">立即购买</el-button> -->
                </el-row>

                <el-row class="sett3" :gutter="40">
                    <el-col :span="24">
                        <p>
                            <span class="red">{{cat}}</span>
                            <span class="black">{{theclass.title}}</span>
                        </p>
                        <p class="normal">{{theclass.description}}</p>
                    </el-col>
                    <img :src="prefix.image+theclass.qrcode_url" class="mobileimg">
                    <p class="myp">扫码试听</p>
                    <!-- <el-button size="small" type="primary" class="bt1">立即试听</el-button> -->
                    <!-- <el-button size="small" type="primary" class="bt2">立即购买</el-button> -->
                </el-row>
            </div>
	</div>

    <div class="bgimg" :style="{backgroundImage:'url(static/img/hyhyimg/44.png)'}"></div>

        <div class="word" :style="{backgroundImage:'url(static/img/hyhyimg/41.png)'}">
            <h3>
                相关课程推荐
            </h3>
        </div>
        <div class="underline"></div>

    <div class="c-info">
        <el-row :gutter="20" class="set1">
            <el-col :span="12">
                <img src="static/img/hyhyimg/haibao.png" class="secondimg">
            </el-col>
            <el-col :span="12">
                <el-row :gutter="20" v-for="item in courses" :key="item.id">
                    <el-col :span="11">
                        <img :src='prefix.image+item.pic_url' class="thirdimg">
                    </el-col>
                    <el-col :span="13">
                        <a :href="'http://www.huayanhuayu.cn/#/CourseDetail?type='+item.id">
                        <p>
                            <span class="red2">话言话语</span>
                            <span class="black2">{{item.title}}</span>
                        </p>
                        <p class="normal2">{{item.description}}</p>
                        </a>
                    </el-col>
                    <el-button size="small" type="primary" @click="$router.push({path:'/CourseDetail',query:{type:item.id}})">查看详情→</el-button>
                </el-row>
            </el-col>
        </el-row>
    </div>

    <div class="cc-info">
        <el-row :gutter="20" class="set1">
            <!-- <el-col :span="12">
                <img src="static/img/hyhyimg/haibao.png" class="secondimg">
            </el-col> -->
            <el-col :span="24">
                <el-row :gutter="20" v-for="item in courses" :key="item.id">
                    <el-col :span="11">
                        <img :src='prefix.image+item.pic_url' class="thirdimg">
                    </el-col>
                    <el-col :span="13">
                        <a :href="'http://www.huayanhuayu.cn/#/CourseDetail?type='+item.id">
                        <p>
                            <span class="red2">话言话语</span>
                            <span class="black2">{{item.title}}</span>
                        </p>
                        <p class="normal2">{{item.description}}</p>
                        </a>
                    </el-col>
                    <el-button size="small" type="primary" @click="$router.push({path:'/CourseDetail',query:{type:item.id}})">查看详情→</el-button>
                </el-row>
            </el-col>
        </el-row>
    </div>

	<div>

	</div>
	<wbc-footer></wbc-footer>
</div>
</template>

<script scoped>
import header from '../components/header.vue'
import footer from '../components/footer.vue'
import {getCourseAll} from '../utils/server.js'
export default {
	name: "hot_course",
	data(){
        return{
            prefix: {
                video: 'https://speechdb-oss-video.oss-cn-beijing.aliyuncs.com/',
                image: 'https://speechdb-oss-image.oss-cn-beijing.aliyuncs.com/',
                text: 'https://speechdb-oss-text.oss-cn-beijing.aliyuncs.com/'
            },
            theclass:{},
            prc:"",
            cat:"",
            courses:[

			],
        }
    },
    mounted(){
        this.theclass.id=this.$route.query.type
        this.getClassDetailFromDatabase()
        this.getRelativeClassFromDatabase()
    },
	methods: { //事件处理器
        getClassDetailFromDatabase(){
            var that=this
            console.log(that.theclass.id)
            getCourseAll().then(res => {
				var that=this
                res.data.result.forEach(element => {
					if(that.theclass.id==element.id){
						that.theclass=element
					} 
                })
                console.log(that.theclass.category)
                if(that.theclass.category==1){
                    that.cat="幼儿发音"
                    that.prc="static/img/hyhyimg/ykkc.png"
                }
                if(that.theclass.category==2){
                    that.cat="少年口才"
                    that.prc="static/img/hyhyimg/xxms.png"
                }
                if(that.theclass.category==3){
                that.cat="播音主持"
                    that.prc="static/img/hyhyimg/zcqs.png"
                }
                if(that.theclass.category==4){
                    that.cat="职场情商"
                    that.prc="static/img/hyhyimg/msfd.png"
                }
            })
        },
        getRelativeClassFromDatabase(){
            var that=this
            
            that.courses=[]
            getCourseAll().then(res => {
                var that=this
                var count=0
                res.data.result.forEach(element => {
					if(that.theclass.category==element.category&&count<5&&that.theclass.id!=element.id){
                        that.courses.push(element)
                        count+=1
					} 
				})
                console.log(this.courses)
            })
        },
        routechange(){
            this.theclass.id=this.$route.query.type
            this.getClassDetailFromDatabase()
            this.getRelativeClassFromDatabase()
        }
	},
	components: { //定义组件
		'wbc-nav': header,
		'wbc-footer': footer
	},
    watch: {
		'$route': 'routechange'
	},
	created() { //生命周期函数

	}
}
</script>

<style scoped>
.mobileimg{
    width: 33%;
    transform: translate(100%,0);
}
.myp{
    font-size: 10px;
    text-align: center;
}
.bgimg{
	position:absolute;
	height: 240px;
	transform: translate(0,-300px);
	width: 100%;
}
.normal{
    font-size: 15px;
    text-indent: 32px;
    line-height: 21px;
    max-height: 188px;
    overflow: hidden;
    /* white-space: nowrap; */
    text-overflow: ellipsis; /*超出部分用...代替*/
}
.red{
    font-size: 21px;
    color: red;
    font-weight: 600;
}
.black{
    font-size: 21px;
    color: black;
    font-weight: 600;
}
.normal2{
    font-size: 8px;
    text-indent: 32px;
    line-height: 17px;
    max-height: 67px;
    overflow: hidden;
    /* white-space: nowrap; */
    text-overflow: ellipsis; /*超出部分用...代替*/
}
.red2{
    font-size: 15px;
    color: red;
    font-weight: 600;
}
.black2{
    font-size: 15px;
    color: black;
    font-weight: 600;
}
.firstimg{
    width: 100%;
    /* height: 270px; */
}
.secondimg{
    width: 100%;
    height: 600px;
}
.thirdimg{
    width: 100%;
    height: 110px;
}
.topborder{
    padding-top: 50px;
}
.border{
    padding: 30px;
    background-color: white;
}
.set1 img{
    border-bottom: 3px solid rgb(255, 0, 0);
	/* width: 200px; */
	/* height: 100px; */
}
.set3 .bt1{
    position: absolute;
    left:75%;
    top:100%;
    transform: translate(-100%,-100%);
}
.set3 .bt2{
    position: absolute;
    left:75%;
    top:100%;
    transform: translate(0,-100%);
}
.sett3 .bt1{
    position: relative;
    left:50%;
    /* top:100%; */
    transform: translate(-100%,0);
}
.sett3 .bt2{
    position: relative;
    left:50%;
    /* top:100%; */
    transform: translate(-100%,0);
}
.c-info-detail{
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
@media screen and (max-width: 750px){
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
    .set3{
        display: none;
    }
    .sett3{
        display: block;
    }
    .c-info-detail{
        width: 80%;
    }
    .bgimg{
        position:absolute;
	    height: 100px;
	    transform: translate(0,-140px);
	    width: 100%;
    }
}
@media screen and (min-width: 701px) {
    .c-info{
        display: block;
    }
    .cc-info{
        display: none;
    }
    .set3{
        display: block;
    }
    .sett3{
        display: none;
    }
}
@media screen and (max-width: 450px){
    .black{
        font-size: 15px;
    }
    .red2{
        display: none;
    }
}

</style>
