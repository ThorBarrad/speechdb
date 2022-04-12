<!-- 头部公用 -->
<template>
<div class="">
	<div class="headBack" :style="{backgroundImage:'url(static/img/hyhyimg/41.png)'}">
		<el-row class="container">
			<el-col :span="24">
				<!-- pc端导航 -->
				<div class="headBox">
					<el-row>
						<el-col :span="7">
							<el-menu  class="el-menu-demo" mode="horizontal"  :router="true">
								<el-menu-item index="/Home">首页</el-menu-item>
								<el-menu-item index="/Course">课程</el-menu-item>
								<el-menu-item index="/Teacher">师资</el-menu-item>
							</el-menu>
						</el-col>
						<el-col :span="10">
							<el-row>
								<el-col :span="10">
									<span>话言</span>
								</el-col>
								<el-col :span="4">
									<img src="static/img/hyhyimg/31.png">
								</el-col>
								<el-col :span="10">
									<span>话语</span>
								</el-col>
							</el-row>
						</el-col>
						<el-col :span="7">
							<el-menu  class="el-menu-demo" mode="horizontal"  :router="true">
								<el-menu-item index="/Information">资讯</el-menu-item>
								<el-menu-item index="/Cooperate">合作</el-menu-item>
								<el-menu-item index="/Aboutus">我们</el-menu-item>
							</el-menu>
						</el-col>
					</el-row>
				</div>
			</el-col>
		</el-row>
	</div>
</div>
</template>
<script>
export default {
	
	data() { //选项 / 数据
		return {
			imagebox:[
          		{id:0,idView:'../../static/img/show/1.jpg'},
          		{id:1,idView:'../../static/img/show/2.jpg'},
          		{id:2,idView:'../../static/img/show/3.jpg'}
			],
			
		}
	},
	watch: {

	},
	methods: { //事件处理器
		setSize:function () {
                
		},
		
	},
	components: { //定义组件

	},
	watch: {
		// 如果路由有变化，会再次执行该方法
		// '$route': 'routeChange'
	},
	created() { //生命周期函数
	
	},
	mounted() { 
		
            }
	}
</script>

<style scoped>
/*********头部导航栏********/

/*头部导航栏盒子*/
.headBox span{
	font-size: 20px;
	text-align: center;
	line-height: 60px;
	
}
.headBack {
	width: 100%;
	background: rgb(255, 255, 255);
	/*margin-bottom:30px;*/
	/* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04); */
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	z-index: 100;
}
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
.headBox li.is-active {
	/*background: #48456C;*/
	background: rgba(73, 69, 107, 0.7);
}

.el-menu--horizontal>.el-submenu.is-active{
	border-bottom: none!important;
}

.headBox .el-menu {
	background: transparent;
	border-bottom: none!important;
}

.headBox .el-menu-demo li.el-menu-item,
.headBox .el-menu--horizontal .el-submenu{
	/* height: 38px; */
	/* line-height: 38px; */
	border-bottom: none!important;
	width: 33%;
	font-size: 17px;
	text-align: center;
	padding: 0;
}

.headBox .el-submenu li.el-menu-item {
	height: 38px;
	line-height: 38px;
}

.headBox li .fa-wa {
	vertical-align: baseline;
}

.headBox ul li.el-menu-item,
.headBox ul li.el-menu-item.is-active,
.headBox ul li.el-menu-item:hover{
	color: rgb(0, 0, 0);
}

.headBox .el-menu--horizontal .el-submenu>.el-menu {
	top: 38px;
	border: none;
	padding: 0;
}

.headBox>ul li.el-menu-item:hover{
	background: #48456C;
	border-bottom: none;
}




.saying:after {
	content: "|";
	font-family: Arial, sans-serif;
	font-size: 1em;
	/*line-height: 0;*/
	display: inline-block;
	vertical-align: baseline;
	opacity: 1;
	text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #ffffff;
	animation: caret 500ms infinite;
}


.el-row {
    margin-bottom: 0px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
	text-align: center;
	position: relative;
  }
  .grid-content {
    /* border-radius: 10%; */
    min-height: 36px;
	min-width: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.headBox img{
     /*设置图片宽度和浏览器宽度一致*/
      width:60px;
      height:60px;
	  transform: translate(-50%,0);
	  position: relative;
	  left: 50%;
	  top: 50%;
}
@media screen and (max-width: 700px){
	.headBox img{
     /*设置图片宽度和浏览器宽度一致*/
      width:30px;
      height:30px;
	  transform: translate(-50%,50%);
	  position: relative;
	  left: 50%;
	  top: 50%;
	}
	.headBox .el-menu-demo li.el-menu-item,
	.headBox .el-menu--horizontal .el-submenu{
	/* height: 38px; */
	/* line-height: 38px; */
	border-bottom: none!important;
	/* width: 33%; */
	font-size: 10px;
	/* text-align: center; */
	}
}
</style>