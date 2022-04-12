<template>
<div class="frame2">
    <div class="word" :style="{backgroundImage:'url(static/img/hyhyimg/41.png)'}">
        <h3>
            关于我们
        </h3>
    </div>
    <div class="underline"></div>
            <div class="grid-content bg-purple-light">
                <div class="a-info">
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <img src="static/img/hyhyimg/32.png" class="resized">
			                <!-- <p>话言话语在线教育平台，专注于全民汉语语言艺术素养提升，开展中华经典诵读、播音主持、即兴表达、演讲艺术、普通话推广等教育活动。<span class="redded">传播中华传统文化，传播中国声音。</span>有国内知名院校播音、配音专业师资以及媒体专业人员联合开发教材与课程，拥有独立著作版权。同时，结合汉语语言艺术教学特点，自主研发APP，PC端软件，满足语言传播与教育需求，提供优质的教育资源。</p>
                            <p><span class="redded">话言话语致力于全民语言文化素养的提高，</span>倡导全民说好中国话，说好听的中国话。</p> -->
                            <p>话言话语教育科技有限公司于2017年成立，注册资金2000万，公司注册地在北京副中心运河商务区，办公面积260平米，包括30平米专业录音棚，公司员工人数60多名。</p>
                            <p>本公司专注于<span class="redded">全民汉语言艺术素养提升，开展中华经典诵读、播音主持艺术、机型表达、演讲艺术、普通话推广等教育活动。</span></p>
                            <p>由国内知名院校播音、配音专业师资以及媒体主持人联合开发教材于课程，拥有独立著作版权。同时，结合汉语语言艺术教学特点，自主研发APP、小程序、PC端软件，提供专业优质的专业教育资源，满足全民语言传播与教育需求。</p>
                            <p>目前已研发出幼儿普通话发生、中小学朗诵艺术课程、青少年口才系列课程、职场情商语言、求职面试等50多门语言艺术系列课程。</p>
                            <p>与领先的在线视频网站爱奇艺达成战略合作。</p>
                            <p>与中国传媒大学等知名院校播音师资教研团队携手，联合打造声音美化系列课程。</p>
                            <p>受青海省IPTV委托研发青海学前儿童普通话系列课程。</p>
                            <p>先后在江西、内蒙等多省市地区开展青少年校园中华经典朗读朗诵的主题活动，累计受益青少年近万人。</p>
                            <p><span class="redded">话言话语致力于全民语言文化素养的提高，倡导全民说好中国话，说好听的中国话。</span></p>
                        </el-col>
                        <el-col :span="12">
                            <el-row :gutter="10">
                            <el-col :span="12" class="image">
                                <img src="static/img/hyhyimg/aboutus1.png" alt="">
                                <img src="static/img/hyhyimg/aboutus2.png" alt="">
                            </el-col>
                            <el-col :span="12" class="back1">
                                <img src="static/img/hyhyimg/aboutus3.png" alt="">
                            </el-col>
                            </el-row>
                            <div class="image2">
                                <img src="static/img/hyhyimg/51.png">
                            </div>
                        </el-col>
                    </el-row>
               </div>
               
                <div class="aa-info">
                    <el-row :gutter="20">
                        <el-col :span="24">
                            <img src="static/img/hyhyimg/32.png" class="resized">
			                <p>话言话语教育科技有限公司于2017年成立，注册资金2000万，公司注册地在北京副中心运河商务区，办公面积260平米，包括30平米专业录音棚，公司员工人数60多名。</p>
                            <p>本公司专注于<span class="redded">全民汉语言艺术素养提升，开展中华经典诵读、播音主持艺术、机型表达、演讲艺术、普通话推广等教育活动。</span></p>
                            <p>由国内知名院校播音、配音专业师资以及媒体主持人联合开发教材于课程，拥有独立著作版权。同时，结合汉语语言艺术教学特点，自主研发APP、小程序、PC端软件，提供专业优质的专业教育资源，满足全民语言传播与教育需求。</p>
                            <p>目前已研发出幼儿普通话发生、中小学朗诵艺术课程、青少年口才系列课程、职场情商语言、求职面试等50多门语言艺术系列课程。</p>
                            <p>与领先的在线视频网站爱奇艺达成战略合作。</p>
                            <p>与中国传媒大学等知名院校播音师资教研团队携手，联合打造声音美化系列课程。</p>
                            <p>受青海省IPTV委托研发青海学前儿童普通话系列课程。</p>
                            <p>先后在江西、内蒙等多省市地区开展青少年校园中华经典朗读朗诵的主题活动，累计受益青少年近万人。</p>
                            <p><span class="redded">话言话语致力于全民语言文化素养的提高，倡导全民说好中国话，说好听的中国话。</span></p>
                        </el-col>
                    </el-row>
               </div>

            </div>
</div>    
</template>

<script>
import {getAboutUs} from '../utils/server.js'
export default {
    data(){
        return{

        }
    },
    methods:{
        getAboutUsFromDatabase(){
            var that=this
            getAboutUs(function(msg){
                console.log(msg)
                // that.imagebox=msg
            })
        }
    }

}
</script>
<style scoped>
.redded{
    color: red;
}
.a-info {
	/* text-align: center; */
	width: 60%;
	margin: auto;
	padding: 20px;
	position: relative;
	font-size: 16px;
	opacity: 0.98;
	border-radius: 5px;
	z-index: 1;
	/* animation: b 1s ease-out;
	-webkit-animation: b 1s ease-out; */
}
.a-info p{
    font-size: 15px;
    text-indent: 30px;
    font-weight: 550;
}
.aa-info {
	/* text-align: center; */
	width: 80%;
	margin: auto;
	padding: 20px;
	position: relative;
	font-size: 16px;
	opacity: 0.98;
	border-radius: 5px;
	z-index: 1;
	/* animation: b 1s ease-out;
	-webkit-animation: b 1s ease-out; */
}
.aa-info p{
    font-size: 15px;
    text-indent: 30px;
    font-weight: 550;
}
.resized{
    width: 60%;
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
}
.image img{
    width: 100%;
	height: 125px;
	margin-top: 5px;
	object-fit: cover;
    border-bottom: 3px solid rgb(255, 0, 0);
}
.image2 img{
    width: 100%;
	/* height: 250px; */
	margin-top: 10px;
	object-fit: cover;
    border-bottom: 3px solid rgb(255, 0, 0);
}
.back1 img{
    width: 100%;
	height: 260px;
	margin-top: 5px;
	object-fit: cover;
    border-bottom: 3px solid rgb(255, 0, 0);
}
.bg-purple-light {
    background: #e9e9e9;
}
@media screen and (max-width: 700px){
    .a-info{
        display: none;
    }
    .aa-info{
        display: block;
    }
}
@media screen and (min-width: 701px){
    .a-info{
        display: block;
    }
    .aa-info{
        display: none;
    }
}
</style>