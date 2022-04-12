<!-- 文章列表 -->
<template>
<div>
	<wbc-nav></wbc-nav>
    <div class="thousandmore">
    <div class="topborder"></div>
    <div class="word2" :style="{backgroundImage:'url(static/img/hyhyimg/41.png)'}">
        <h3>
            相关资讯推荐
        </h3>
    </div>
    <div class="underline"></div>
	<div class="c-info">
		<el-row :gutter="20">
            <el-col :span="12">
                <div class="infodetail">
                    <div v-html="theinfo.text_url"></div>
                </div>
            </el-col>
            <el-col :span="12">
                <el-row :gutter="20" v-for="item in infomation" :key="item.id" class="set1 otherinfo">
                    <el-col :span="10">
                        <img :src="prefix.image+item.pic_url" class="setheight">
                    </el-col>
                    <el-col :span="14">
                        <a :href="'http://www.huayanhuayu.cn/#/InfoDetail?type='+item.id">
                        <p>
                            <span class="red">话言话语</span>
                            <span class="black">{{item.title}}</span>
                        </p>
                        
                        <p class="normal">{{item.description}}</p></a>
                    </el-col>
                    <el-button size="small" type="primary" @click="$router.push({path:'/InfoDetail',query:{type:item.id}})">查看详情→</el-button>
                </el-row>
            </el-col>
        </el-row>
	</div>
    </div>

    <div class="thousandless">
    <div class="topborder"></div>
	<div class="c-info">
		<el-row :gutter="20">
            <el-col :span="24">
                <div class="infodetail" v-html="theinfo.text_url">
                    <!-- add info detail here -->
                </div>
            </el-col>
        </el-row>
	</div>
    <div class="word2" :style="{backgroundImage:'url(static/img/hyhyimg/41.png)'}">
        <h3>
            相关资讯推荐
        </h3>
    </div>
    <div class="underline"></div>
    <div class="c-info">
		<el-row :gutter="20" class="morethanseven">
            <el-col :span="24">
                <el-row :gutter="20" v-for="item in infomation" :key="item.id" class="set1 otherinfo">
                    <el-col :span="10">
                        <img :src="prefix.image+item.pic_url" class="setheight">
                    </el-col>
                    <el-col :span="14">
                        <a :href="'http://www.huayanhuayu.cn/#/InfoDetail?type='+item.id">
                        <p>
                            <span class="red">话言话语</span>
                            <span class="black">{{item.title}}</span>
                        </p>
                        
                        <p class="normal">{{item.description}}</p></a>
                    </el-col>
                    <el-button size="small" type="primary" @click="$router.push({path:'/InfoDetail',query:{type:item.id}})">查看详情→</el-button>
                </el-row>
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
import {getHotInfo} from '../utils/server.js'
export default {
	name: "hot_course",
	data(){
        return{
			theinfo:{
				id:"",
				title:"123",
                description:"1156289231981191",
                pic_url:"",
                text_url:"<p>this is a test</p>",
                category:""
			},
			prefix: {
                video: 'https://speechdb-oss-video.oss-cn-beijing.aliyuncs.com/',
                image: 'https://speechdb-oss-image.oss-cn-beijing.aliyuncs.com/',
                text: 'https://speechdb-oss-text.oss-cn-beijing.aliyuncs.com/'
            },
			infomation:[
                
			],
        }
    },
    mounted(){
        this.theinfo.id=this.$route.query.type
        this.getInfoDetailFromDatabase()
    },
	methods: { //事件处理器
		getInfoDetailFromDatabase(){
            // var that=this
            // getHotInfo(theclass.courseid,function(msg){
            //     console.log(msg)
            //     that.theinfo=msg
            // })
            var count=0
            var that=this
            that.infomation=[]
            getHotInfo().then(res => {

                // that.infomation = res.data.result.slice(0,3)
                // console.log(this.infomation)
                res.data.result.forEach(element => {
                    if(element.id==that.theinfo.id){
                        that.theinfo=element
                    }
                    else if(count<5){
                        that.infomation.push(element)
                        count+=1
                    }
                });
            })
        },
        routechange(){
            this.theinfo.id=this.$route.query.type
            this.getInfoDetailFromDatabase()
        }
        // getRelativeInfoFromDatabase(){
        //     var that=this
        //     getHotInfo(theclass.infoid,function(msg){
        //         console.log(msg)
        //         that.infomation=msg
        //     })
        // }
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
.normal{
    font-size: 8px;
    text-indent: 32px;
    line-height: 17px;
    max-height: 68px;
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
.setheight{
    width: 100%;
    height: 110px;
    border-bottom: 3px solid rgb(255, 0, 0);
}
.topborder{
	padding-top: 100px;
}
.word2 h3{
    text-align: center;
    color: black;
    font-size: 25px;
    /* padding: 15px; */
    position: relative;
    /* text-indent: 20px; */
    letter-spacing: 10px;
    font-weight: 700;
    top: 50%;
    left: 65%;
    transform: translate(-50%,-50%);
}
.word2{
    height: 80px;
	/* padding: 20px; */
}
.underline{
    border-bottom: 3px solid rgb(255, 0, 0);
    width: 70px;
    position: relative;
    top: 100%;
    left: 65%;
    transform: translate(-53%,-100%);
}
.infodetail{
    height: 700px;
    overflow: scroll;
    width: 40%;
    z-index: 2;
    position: absolute;
    transform: translate(0,-105px);
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 10px rgb(190, 119, 119);
    border-bottom: 3px solid rgb(255, 0, 0);
}
.otherinfo{
    position: relative;
    left: 100%;
    height: 130px;
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

@media screen and (max-width: 1000px){
    .thousandmore{
        display: none;
    }
    .thousandless{
        display: block;
    }
    .infodetail{
        height: 700px;
        width: 80%;
        z-index: 1;
        position: relative;
        left: 50%;
        transform: translate(-50%,0);
        background-color: #fff;
        padding: 20px;
        box-shadow: 0px 0px 10px rgb(190, 119, 119);
        border-bottom: 3px solid rgb(255, 0, 0);
    }
    .word2 h3{
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
        transform: translate(-50%,-50%);
    }
    .underline{
        border-bottom: 3px solid rgb(255, 0, 0);
        width: 70px;
        position: relative;
        top: 100%;
        left: 50%;
        transform: translate(-53%,-100%);
    }
    .otherinfo{
        left: 0;
    }
    .c-info{
        width: 80%;
    }
    .topborder{
	    padding-top: 70px;
    }
}
@media screen and (min-width: 1001px){
    .thousandmore{
        display: block;
    }
    .thousandless{
        display: none;
    }
}
@media screen and (max-width: 460px){
    .red{
        display: none;
    }
}
</style>