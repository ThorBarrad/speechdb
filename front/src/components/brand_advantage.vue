<template>
<div class="frame2">
    <div class="word" :style="{backgroundImage:'url(static/img/hyhyimg/41.png)'}">
        <h3>
            品牌优势
        </h3>
    </div>
    <div class="underline"></div>
    <el-row class="set4">
        <el-col :span="24">
            <div class="grid-content bg-purple-light">
                <div class="b-information">
                    <el-row :gutter="20">
                        <el-col :span="8" v-for="item in brandadvantage" :key="item.title">
			                <div class="bg-white">
                                <div class="imgframe">
			                    <img :src="item.imgsrc">
                                </div>
			                    <h2>
                                    {{item.title}}
                                    <p>
                                        {{item.explain}}
                                    </p>
                                </h2>
			                </div>
			            </el-col>
                    </el-row>
               </div>
            </div>
        </el-col>
        
    </el-row>

    <el-row class="sett4">
        <el-col :span="24">
            <div class="grid-content bg-purple-light">
                <div class="b-information">
                    <el-row :gutter="20">
                        <el-col :span="24" v-for="item in brandadvantage" :key="item.title">
			                <div class="bg-white">
                                <div class="imgframe">
			                    <img :src="item.imgsrc">
                                </div>
			                    <h2>
                                    {{item.title}}
                                    <p>
                                        {{item.explain}}
                                    </p>
                                </h2>
			                </div>
			            </el-col>
                    </el-row>
               </div>
            </div>
        </el-col>
    </el-row>
            
    </div>
</template>

<script>
import {getBrandAdv} from '../utils/server.js'
export default {
    data(){
        return{
            brandadvantage:[
                {title:"权威",explain:"优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明",imgsrc:"static/img/hyhyimg/25.png"},
                {title:"研发",explain:"优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明",imgsrc:"static/img/hyhyimg/26.png"},
                {title:"深造",explain:"优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明",imgsrc:"static/img/hyhyimg/27.png"},
            ],
        }
    },
    methods:{
        getBrandAdvFromDatabase(){
            var that=this
            getBrandAdv(function(msg){
                console.log(msg)
                that.brandadvantage=msg
            })
        }
    }
}
</script>

<style scoped>
.b-information {
	text-align: center;
	width: 60%;
	margin: auto;
	position: relative;
	padding: 30px;
	font-size: 16px;
	opacity: 0.98;
	border-radius: 5px;
	z-index: 1;
}
.b-information .imgframe{
	width: 100px;
	height: 100px;
	/* margin-top: 20px; */
	border-radius: 100%;
    box-shadow: 0px 0px 10px rgb(255, 0, 0);
	object-fit: cover;
    box-shadow: 0,0,10px, rgb(0, 0, 0);
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
}
.b-information img{
    width: 70%;
    height: 70%;
    position: relative;
    /* left: 50%; */
    top: 50%;
    transform: translate(0,-50%);
}
.b-information h2 {
    text-align: center;
	margin-top: 10px;
	padding-bottom: 10px;
	font-family: 'Sigmar One';
    font-size: 18px;
	font-weight: 700;
	color: rgb(0, 0, 0);
	-webkit-background-clip: text;
}
.b-information h2 p{
    padding-left: 10px;
    padding-right: 10px;
    font-size: 10px;
    text-indent: 30px;
    text-align:justify;
    text-justify:inter-ideograph;
}
.bg-white{
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 10px rgb(190, 119, 119);
    margin-bottom: 20px;
}

.set4 .el-button--primary{
    position: absolute;
    left:100%;
    top:100%;
    transform: translate(-100%,-100%);
}
.set4 p{
    font-size: 15px;
}
.set4 span{
    font-size: 8px;
}
.sett4 .el-button--primary{
    position: absolute;
    left:100%;
    top:100%;
    transform: translate(-100%,-100%);
}
.sett4 p{
    font-size: 15px;
}
.sett4 span{
    font-size: 8px;
}
.bg-purple-light {
    background: #e9e9e9;
}

@media screen and (max-width: 700px){
    .set4{
        display: none;
    }
    .sett4{
        display: block;
    }
    .b-information{
        width: 80%;
    }
}
@media screen and (min-width: 701px){
    .set4{
        display: block;
    }
    .sett4{
        display: none;
    }
}
</style>