<!-- 首页 -->
<template>
    <div>
        <wbc-nav></wbc-nav>
        <wbc-other></wbc-other>
        <div class="h-information">
		<el-row :gutter="15">
           	<el-col :span="6">
				<a href="http://www.huayanhuayu.cn/#/CourseList?type=幼儿发音">
			   		<div class="grid-content2 bg-red">
						<div class="mid">
			   				<img src="static/img/hyhyimg/21.png" alt="">
			   				<h2>
                	    		<a>幼儿发音</a>
                			</h2>
						</div>
			   		</div>
				</a>
			</el-col>
        	<el-col :span="6">
				<a href="http://www.huayanhuayu.cn/#/CourseList?type=少年口才">
			   		<div class="grid-content2 bg-red">
						<div class="mid">
			   				<img src="static/img/hyhyimg/23.png" alt="">
			   				<h2>
                	    		<a>少年口才</a>
                			</h2>
						</div>
			   		</div>
				</a>
			</el-col>
            <el-col :span="6">
				<a href="http://www.huayanhuayu.cn/#/CourseList?type=播音主持">
			   		<div class="grid-content2 bg-red">
						<div class="mid">
			   				<img src="static/img/hyhyimg/24.png" alt="">
			   				<h2>
                	    		<a>播音主持</a>
                			</h2>
						</div>
			   		</div>
				</a>
			</el-col>
            <el-col :span="6">
				<a href="http://www.huayanhuayu.cn/#/CourseList?type=职场情商">
			   		<div class="grid-content2 bg-red">
						<div class="mid">
			   				<img src="static/img/hyhyimg/22.png" alt="">
			   				<h2>
                	    		<a>职场情商</a>
                			</h2>
						</div>
			   		</div>
				</a>
			</el-col>
		</el-row>
	    </div>
        <wbc-hot_course></wbc-hot_course>
        <wbc-teacher_introduction></wbc-teacher_introduction>
        <!-- <wbc-feedback></wbc-feedback> -->
        <wbc-brand_advantage></wbc-brand_advantage>
        <wbc-hot_information></wbc-hot_information>
        <wbc-about_me></wbc-about_me>
        <wbc-footer></wbc-footer>
    </div>
</template>

<script>
import header from '../components/header.vue'
import otherheader from '../components/otherheader.vue'
import footer from '../components/footer.vue'
import hot_course from '../components/hot_course.vue'
import teacher_introduction from '../components/teacher_introduction.vue'
import brand_advantage from '../components/brand_advantage.vue'
import feedback from '../components/feedback.vue'
import hot_information from '../components/hot_information.vue'
import about_me from '../components/about_me.vue'
    export default {
        name:'Home',
        data() { //选项 / 数据
            return {

            }
        },
        methods: { //事件处理器

        },
        components: { //定义组件
            'wbc-nav':header,
            'wbc-other':otherheader,
            'wbc-footer':footer,
            'wbc-hot_course': hot_course,
            'wbc-teacher_introduction':teacher_introduction,
            'wbc-brand_advantage':brand_advantage,
            'wbc-feedback':feedback,
            'wbc-hot_information':hot_information,
            'wbc-about_me':about_me
        },
        created() { //生命周期函数

        }
    }
</script>

<style scoped>
.h-information {
	text-align: center;
	width: 60%;
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
.h-information img {
	width: 80px;
	height: 80px;
	/* margin-top: 10px; */
	object-fit: cover;
}
.h-information h2{
	padding-top: 10px;
}
.h-information h2 a{
	color: #fff;
	-webkit-background-clip: text;
	font-size: 25px;
	font-weight: 700;
	/* letter-spacing: 10px; */
	text-align: center;
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
.mid{
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
}

@media screen and (max-width: 700px){
	.h-information {
		display: none;
	}

}





</style>
