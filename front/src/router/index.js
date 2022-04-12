import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	scrollBehavior(to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
		if (savePosition) {
			return savePosition;
		} else {
            var top;
            if (window.innerWidth >= 700) {
                 top = 676
            } else {
                 top = 267
            }
			return {
				x: 0,
				y: top
			}
		}
	},
	routes: [{
			path: '/',
			redirect:"/Home",
			// component: resolve => require(['../pages/Home.vue'], resolve),
			// meta: {
			// 	auth: true
			// },
			name: 'Home'
		}, //首页
		{
			path: '/Home',
			component: resolve => require(['../pages/Home.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Home'
		}, //首页
		{
			path: '/Course',
			component: resolve => require(['../pages/Course.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Course'
		}, 
		{
			path: '/Teacher',
			component: resolve => require(['../pages/Teacher.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Teacher'
		}, 
		{
			path: '/Aboutus',
			component: resolve => require(['../pages/Aboutus.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Aboutus'
		},
		{
			path: '/Cooperate',
			component: resolve => require(['../pages/Cooperate.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Cooperate'
		},
		{
			path: '/CourseDetail',
			component: resolve => require(['../pages/CourseDetail.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'CourseDetail'
		},
		{
			path: '/CourseList',
			component: resolve => require(['../pages/CourseList.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'CourseList'
		},
		{
			path: '/InfoDetail',
			component: resolve => require(['../pages/InfoDetail.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'InfoDetail'
		},
		{
			path: '/Information',
			component: resolve => require(['../pages/Information.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Infomation'
		},
	]
})
