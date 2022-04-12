<!-- 文章列表 -->
<template>
<div>
	<wbc-nav></wbc-nav>
	<div class="topborder"></div>
	<div class="word" :style="{backgroundImage:'url(static/img/hyhyimg/41.png)'}">
            <h3>
                教育资讯
            </h3>
    </div>
    <div class="underline"></div>
	<div class="c-info">
		<el-row :gutter="20">
			<el-col :span="6" v-for="item in teachinfo" :key="item.id">
				<a :href="'http://www.huayanhuayu.cn/#/InfoDetail?type='+item.id">
				<div class="backbox"><p>{{item.title}}</p></div>
				<img :src="prefix.image+item.pic_url" class="setheight">
				</a>
			</el-col>
		</el-row>
	</div>

	<div class="cc-info">
		<el-row :gutter="20">
			<el-col :span="24" v-for="item in teachinfo" :key="item.id">
				<a :href="'http://www.huayanhuayu.cn/#/InfoDetail?type='+item.id">
				<div class="backbox"><p>{{item.title}}</p></div>
				<img :src="prefix.image+item.pic_url" class="setheight">
				</a>
			</el-col>
		</el-row>
	</div>

	<div class="word" :style="{backgroundImage:'url(static/img/hyhyimg/41.png)'}">
            <h3>
                品牌资讯
            </h3>
    </div>
    <div class="underline"></div>
	<div class="c-info">
		<el-row :gutter="20">
			<el-col :span="6" v-for="item in brandinfo" :key="item.id">
				<a :href="'http://www.huayanhuayu.cn/#/InfoDetail?type='+item.id">
				<div class="backbox"><p>{{item.title}}</p></div>
				<img :src="prefix.image+item.pic_url" class="setheight">
				</a>
			</el-col>
		</el-row>
	</div>

	<div class="cc-info">
		<el-row :gutter="20">
			<el-col :span="24" v-for="item in brandinfo" :key="item.id">
				<a :href="'http://www.huayanhuayu.cn/#/InfoDetail?type='+item.id">
				<div class="backbox"><p>{{item.title}}</p></div>
				<img :src="prefix.image+item.pic_url" class="setheight">
				</a>
			</el-col>
		</el-row>
	</div>

	<wbc-footer></wbc-footer>
</div>
</template>

<script>
import header from '../components/header.vue'
import footer from '../components/footer.vue'
import {getHotInfo} from '../utils/server.js'
export default {
	data() { //选项 / 数据
		return {
			prefix: {
                video: 'https://speechdb-oss-video.oss-cn-beijing.aliyuncs.com/',
                image: 'https://speechdb-oss-image.oss-cn-beijing.aliyuncs.com/',
                text: 'https://speechdb-oss-text.oss-cn-beijing.aliyuncs.com/'
            },
			teachinfo:[
              
			],
			brandinfo:[
               
			],
		}
	},
	methods: { //事件处理器
		getAllInfo_TypeFromDatabase(){
            // var that=this
            // getHotInfo("教育资讯",function(msg){
            //     console.log(msg)
            //     that.teachinfo=msg
            // })
            // getHotInfo("品牌资讯",function(msg){
            //     console.log(msg)
            //     that.brandinfo=msg
			// })
			var that=this
			getHotInfo().then(res => {
				that.teachinfo=[]
				that.brandinfo=[]
                // that.infomation = res.data.result.slice(0,3)
				// console.log(this.infomation)
				res.data.result.forEach(element => {
					if(element.category==1){
						that.teachinfo.push(element)
					}
					else if(element.category==2){
						that.brandinfo.push(element)
					}
				});
            })
        }
	},
	components: { //定义组件
		'wbc-nav': header,
		'wbc-footer': footer
	},
	mounted(){
		this.getAllInfo_TypeFromDatabase()
	},
	created() { //生命周期函数

	}
}
</script>

<style scoped>
.setheight{
	width: 100%;
	height: 100%;
	border-bottom: 3px solid rgb(255, 0, 0);
}
.topborder{
	padding-top: 100px;
}
.backbox{
    text-align: center;
    z-index: 2;
    width: 100%;
    height: 35px;
    background: linear-gradient(to bottom, #f82525, #660808);
    position: relative;
    left: 50%;
    transform: translate(-50%,100%);
}
.backbox p{
	padding: 5px;
    font-size: 12px;
    color: rgb(255, 255, 255);
    position: relative;
    top: 50%;
    transform: translate(0,-53%);
	font-weight: 700;
}
.c-info{
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
