<!-- 文章列表 -->
<template>
<div>
	<wbc-nav></wbc-nav>
	<div class="topborder"></div>
	<div v-for="item in coop" :key="item.type">
		<div class="word" :style="{backgroundImage:'url(static/img/hyhyimg/41.png)'}">
            <h3>
                {{item.type}}
           	</h3>
    	</div>
		<div class="underline"></div>
		<div class="c-info2">
			<div class="border set1">
			<el-row :gutter="20">
				<el-col :span="18">
					<!-- <p>{{item.name}}</p>
					<span>{{item.detail}}</span> -->
					<p class="setmiddle">
                        <span class="red">{{item.type}}</span>
                        <span class="black">{{item.name}}</span>
                    </p>
                    <p class="normal">{{item.detail}}</p>
				</el-col>
				<el-col :span="6">
					<div class="mid">
						<p class="setmiddle setlineheight1">{{"电话"+item.call}}</p>
						<p class="setmiddle setlineheight2">{{"邮箱"+item.post}}</p>
						<img :src="item.imgsrc" class="coopimg">
						<p class="setmiddle setlineheight3">扫一扫 开始合作</p>
					</div>
				</el-col>
			</el-row>
			</div>
		</div>

		<div class="cc-info2">
			<div class="border set1">
			<el-row :gutter="20">
				<el-col :span="24">
					<!-- <p>{{item.name}}</p>
					<span>{{item.detail}}</span> -->
					<p class="setmiddle">
                        <span class="red">{{item.type}}</span>
                        <span class="black">{{item.name}}</span>
                    </p>
                    <p class="normal">{{item.detail}}</p>
				</el-col>
				<el-col :span="24">
					<div class="mid">
						<p class="setmiddle setlineheight1">{{"电话"+item.call}}</p>
						<p class="setmiddle setlineheight2">{{"邮箱"+item.post}}</p>
						<img :src="item.imgsrc" class="coopimg">
						<p class="setmiddle setlineheight3">扫一扫 开始合作</p>
					</div>
				</el-col>
			</el-row>
			</div>
		</div>

		<div class="bgimg" :style="{backgroundImage:'url(static/img/hyhyimg/44.png)'}"></div>
	</div>
	<wbc-footer></wbc-footer>
</div>
</template>

<script>
import header from '../components/header.vue'
import footer from '../components/footer.vue'
import {getCooperate} from '../utils/server.js'
export default {
	name: "hot_course",
	data() { //选项 / 数据
		return {
			coop:[
				{type:"课程合作",name:"合作标题",detail:"合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍",
				imgsrc:"static/img/123.jpg",call:"010-80501689",post:"28568803@qq.com"},
				{type:"兼职合作",name:"合作标题",detail:"合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍",
				imgsrc:"static/img/123.jpg",call:"010-80501689",post:"28568803@qq.com"},
				{type:"企业合作",name:"合作标题",detail:"合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍合作内容介绍",
				imgsrc:"static/img/123.jpg",call:"010-80501689",post:"28568803@qq.com"},
			],
		}
	},
	mounted() {
    	this.getCooperateFromDataBase();
  	},
	methods: { //事件处理器
		getCooperateFromDataBase(){
      		getCooperate().then(res => {
        		console.log("this is cooperate result")
        		console.log(res.data.result.slice(-1)[0])
        		var that=this
        		that.coop[0].detail=res.data.result.slice(-1)[0].course
        		that.coop[1].detail=res.data.result.slice(-1)[0].work
        		that.coop[2].detail=res.data.result.slice(-1)[0].company
      		})
    	},
	},
	components: { //定义组件
		'wbc-nav': header,
		'wbc-footer': footer
	},

	created() { //生命周期函数

	}
}
</script>

<style scoped>
.mid{
	position: relative;
	/* transform: translate(0,0%); */
	height: 300px;
	border-bottom: 3px solid rgb(255, 0, 0);
}
.setmiddle{
	text-align: center;
}
.setlineheight1{
	padding-top: 30px;
	line-height: 15px;
	font-size: 13px;
}
.setlineheight2{
	line-height: 25px;
	font-size: 13px;
}
.setlineheight3{
	line-height: 25px;
	font-size: 9px;
}
.normal{
    /* font-size: 15px; */
    text-indent: 32px;
    line-height: 25px;
}
.red{
    font-size: 21px;
    color: red;
    font-weight: 600;
	/* text-align: center; */
}
.black{
    font-size: 21px;
    color: black;
    font-weight: 600;
	/* text-align: center; */
}
.border{
	/* height: 300px; */
    padding-left: 30px;
	padding-right: 30px;
	padding-top: 30px;
	padding-bottom: 30px;
	background-color: white;
	z-index: 2;
    box-shadow: 0px 0px 10px rgb(190, 119, 119);
}

.topborder{
	padding-top: 100px;
}
.coopimg{
	position: relative;
	padding-top: 40px;
	width: 100px;
	height: 100px;
	left: 50%;
	transform: translate(-50%,0);
}
.bgimg{
	position:absolute;
	height: 200px;
	transform: translate(0,-300px);
	width: 100%;
}
.c-info2{
	width: 70%;
	margin: auto;
	position: relative;
	/* text-align: center; */
	padding: 40px;
	font-size: 16px;
	opacity: 0.98;
	border-radius: 5px;
	z-index: 1;
}

.cc-info2{
	width: 70%;
	margin: auto;
	position: relative;
	/* text-align: center; */
	padding: 40px;
	font-size: 16px;
	opacity: 0.98;
	border-radius: 5px;
	z-index: 1;
}
@media screen and (max-width: 700px){
    .c-info2{
        display: none;
    }
    .cc-info2{
        display: block;
    }
}
@media screen and (min-width: 701px) {
    .c-info2{
        display: block;
    }
    .cc-info2{
        display: none;
    }
}
@media screen and (max-width: 370px){
    .red{
		display: none;
	}
}
</style>
