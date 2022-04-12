<!-- 文章列表 -->
<template>
<div>
	<wbc-nav></wbc-nav>
	<div class="topborder"></div>
	<div class="c-info">
		<div class="border">
		<el-row :gutter="40">
			<el-col :span="12">
				<img src="static/img/hyhyimg/mapp.png">
			</el-col>
			<el-col :span="12">
				<!-- <p>说更好听的中国话</p>
				<p>让我们重新思考语言在线教育</p>
				<p>公司地址：北京市朝阳区发展路909大厦</p>
				<p>联系电话：010-000000</p>
				<p>邮箱：huayanhuayu@163.com</p> -->
				<img src="static/img/hyhyimg/zghhh3.png" class="zgh">
			</el-col>
		</el-row>
		</div>
	</div>

	<div class="cc-info">
		<div class="border">
		<el-row :gutter="40">
			<el-col :span="24">
				<img src="static/img/hyhyimg/mapp.png">
			</el-col>
			<el-col :span="24">
				<img src="static/img/hyhyimg/zghhh.png">
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
import {getConnection} from '../utils/server.js'
export default {
	name: "hot_course",
	data() { //选项 / 数据
		return {

		}
	},
	methods: { //事件处理器
		getConnectionFromDatabase(){
            var that=this
            getConnection(function(msg){
                console.log(msg)
                // that.imagebox=msg
            })
        }
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
.topborder{
	padding-top: 100px;
}
.border{
    padding: 30px;
	background-color: white;
    box-shadow: 0px 0px 10px rgb(190, 119, 119);
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
	padding: 10px;
	font-size: 16px;
	opacity: 0.98;
	border-radius: 5px;
	z-index: 1;
}
.zgh{
	margin-top: 20px;
	margin-bottom: 30px;
	/* height: 200px; */
}
@media screen and (max-width: 700px){
    .c-info{
        display: none;
    }
    .cc-info{
        display: block;
    }
	.topborder{
		padding-top: 70px;
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
