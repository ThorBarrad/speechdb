<template>
<div class="frame2">
    <div class="word" :style="{backgroundImage:'url(static/img/hyhyimg/41.png)'}">
        <h3>
            学员反馈
        </h3>
    </div>
    <div class="underline"></div>
  <!--动态将图片轮播图的容器高度设置成与图片一致-->
  <div class="padframe">
  <el-carousel :interval="4000" type="card" class="feedback">
      <el-carousel-item v-for="item in imagebox" :key="item.id">
        <img :src="item.idView" class="image">
      </el-carousel-item>
  </el-carousel>
  </div>
</div>
</template>

<script>
import {getFeedback} from '../utils/server.js'
  export default{
    name:'zmd',
    data(){
      return {
        imagebox:[
          {id:0,idView:require('../../static/img/hyhyimg/phone1.png')},
          {id:1,idView:require('../../static/img/hyhyimg/phone1.png')},
          {id:2,idView:require('../../static/img/hyhyimg/phone1.png')}
        ],
         
        // 浏览器宽度
        screenWidth :0
      }
    },
    methods:{
        setSize:function () {
            // 通过浏览器宽度(图片宽度)计算高度
            this.bannerHeight = 400 / 1920 * this.screenWidth;
        },
        getFeedbackFromDatabase(){
            var that=this
            getFeedback(function(msg){
                console.log(msg)
                that.imagebox=msg
            })
        }
    },
    mounted() {
        // 首次加载时,需要调用一次
        this.screenWidth =  window.innerWidth;
        this.setSize();
        // 窗口大小发生改变时,调用一次
        window.onresize = () =>{
        this.screenWidth =  window.innerWidth;
        this.setSize();
        }
    }
  }
</script>

<style scoped>
   .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
.padframe{
    padding: 20px;
    width: 60%;
    transform: translate(30%,0);
    /* left: -50%; */
}
.feedback{
  transform: translate(-50%,0);
  left: 50%;
  height:350px;
  width: 300px;
}
</style>

