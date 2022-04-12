<!-- 头部公用 -->
<template>
<div class="">
	<el-carousel height="650px">
      	<el-carousel-item v-for="item in imagebox" :key="item.id">
        	<div class="headImgBox" :style="{backgroundImage:'url('+prefix.image+item.pic_url+')'}">
			</div>
      	</el-carousel-item>
  	</el-carousel>
</div>
</template>
<script>
import {getHeadImg} from '../utils/server.js'
export default {
	
	data() { //选项 / 数据
		return {
			prefix: {
                video: 'https://speechdb-oss-video.oss-cn-beijing.aliyuncs.com/',
                image: 'https://speechdb-oss-image.oss-cn-beijing.aliyuncs.com/',
                text: 'https://speechdb-oss-text.oss-cn-beijing.aliyuncs.com/'
            },
			imagebox:[
          		// {id:0,pic_url:'../../static/img/show/1.jpg'},
          		// {id:1,pic_url:'../../static/img/show/2.jpg'},
          		// {id:2,pic_url:'../../static/img/show/3.jpg'}
        	],
		}
	},
	watch: {

	},
	methods: { //事件处理器
		setSize:function () {
                
		},
		getHotImgFromDatabase(){
            // var that=this
            // getHeadImg(function(msg){
			// 	console.log("get head img success")
            //     console.log(msg)
            //     that.imagebox=msg
			// })
			
			this.imagebox=[]
			getHeadImg().then(res => {
        		var that=this
        		res.data.result.forEach(element => {
          			that.imagebox.push(element)
        		});
        		// that.workList = res.data.result
        		console.log(this.imagebox)
      		})
        }
	},
	components: { //定义组件

	},
	watch: {
		// 如果路由有变化，会再次执行该方法
		'$route': 'routeChange'
	},
	created() { //生命周期函数
	
	},
	mounted() { 
		this.getHotImgFromDatabase()
    }
}
</script>

<style scoped>
/*********头部导航栏********/


.container {
  	max-width: 60%;
  	position: relative;
	/* left: 10%; */
  	margin: 0 auto;
  	padding: 0 10px;
	/* position: absolute; */
    /* left: 50%; */
    /* transform: translate(-50%,0); */

}


.el-menu--horizontal>.el-submenu.is-active{
	border-bottom: none!important;
}




/*头部背景图*/

.headImgBox {
	height: 650px;
	position: relative;
	width: 100%;
	background-size: cover;
	background-position: center 50%;
	background-repeat: no-repeat;
	margin-bottom: 90px;
}

.headImgBox .scene {
	width: 100%;
	text-align: center;
	font-size: 50px;
	font-weight: 100;
	color: #fff;
	position: absolute;
	left: 0;
	top: 200px;
	font-family: 'Sigmar One', Arial;
	text-shadow: 0 2px 2px #47456d;
	padding-bottom: 0px;
	
}
</style>