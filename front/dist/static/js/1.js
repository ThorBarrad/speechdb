webpackJsonp([1],{"+V6j":function(t,s){},HXef:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Cz8s"),e=a("znq3"),n=a("mzkE"),r=a("1pQF"),c={data:function(){return{prefix:{video:"https://speechdb-oss-video.oss-cn-beijing.aliyuncs.com/",image:"https://speechdb-oss-image.oss-cn-beijing.aliyuncs.com/",text:"https://speechdb-oss-text.oss-cn-beijing.aliyuncs.com/"},courses:[]}},mounted:function(){this.getWorks()},methods:{getWorks:function(){var t=this,s=this;Object(r.e)().then(function(a){s.courses=a.data.result.slice(0,6),console.log(t.courses)})}},watch:{},created:function(){}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"frame2"},[a("div",{staticClass:"toppadding"}),t._v(" "),a("div",{staticClass:"word",style:{backgroundImage:"url(static/img/hyhyimg/41.png)"}},[a("h3",[t._v("\r\n            热门课程推荐\r\n        ")])]),t._v(" "),a("div",{staticClass:"underline"}),t._v(" "),a("div",{staticClass:"c-info"},[a("el-row",{staticClass:"set1",attrs:{gutter:30}},t._l(t.courses,function(s){return a("el-col",{key:s.id,attrs:{span:12}},[a("el-row",{attrs:{gutter:15}},[a("el-col",{attrs:{span:11}},[a("a",{attrs:{href:"http://www.huayanhuayu.cn/#/CourseDetail?type="+s.id}},[a("img",{staticClass:"firstimg",attrs:{src:t.prefix.image+s.pic_url}})])]),t._v(" "),a("el-col",{attrs:{span:13}},[a("a",{attrs:{href:"http://www.huayanhuayu.cn/#/CourseDetail?type="+s.id}},[a("p",[a("span",{staticClass:"red"},[t._v("话言话语")]),t._v(" "),a("span",{staticClass:"black"},[t._v(t._s(s.title))])]),t._v(" "),a("p",{staticClass:"normal"},[t._v(t._s(s.description))])])]),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){t.$router.push({path:"/CourseDetail",query:{type:s.id}})}}},[t._v("查看详情→")])],1)],1)})),t._v(" "),a("el-row",{staticClass:"sett1",attrs:{gutter:30}},t._l(t.courses,function(s){return a("el-col",{key:s.id,attrs:{span:24}},[a("el-row",{attrs:{gutter:15}},[a("el-col",{attrs:{span:11}},[a("a",{attrs:{href:"http://www.huayanhuayu.cn/#/CourseDetail?type="+s.id}},[a("img",{staticClass:"firstimg",attrs:{src:t.prefix.image+s.pic_url}})])]),t._v(" "),a("el-col",{attrs:{span:13}},[a("a",{attrs:{href:"http://www.huayanhuayu.cn/#/CourseDetail?type="+s.id}},[a("p",[a("span",{staticClass:"red"},[t._v("话言话语")]),t._v(" "),a("span",{staticClass:"black"},[t._v(t._s(s.title))])]),t._v(" "),a("p",{staticClass:"normal"},[t._v(t._s(s.description))])])]),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){t.$router.push({path:"/CourseDetail",query:{type:s.id}})}}},[t._v("查看详情→")])],1)],1)}))],1)])},staticRenderFns:[]};var l=a("VU/8")(c,o,!1,function(t){a("jbVG")},"data-v-38627afc",null).exports,v={data:function(){return{prefix:{video:"https://speechdb-oss-video.oss-cn-beijing.aliyuncs.com/",image:"https://speechdb-oss-image.oss-cn-beijing.aliyuncs.com/",text:"https://speechdb-oss-text.oss-cn-beijing.aliyuncs.com/"},teachers:[],statistic:{foundtime:2019,teachercount:369,prizecount:75210,goodstudent:4520}}},mounted:function(){this.getHotTeacherFromDatabase(),this.getStatisticFromDatabase()},methods:{getHotTeacherFromDatabase:function(){var t=this;Object(r.j)().then(function(s){console.log(s.data),t.teachers=s.data.slice(4,8),console.log(t.teachers)})},getStatisticFromDatabase:function(){var t=this;Object(r.i)().then(function(s){console.log(s.data.result.slice(-1)[0]);var a=t;a.statistic.foundtime=s.data.result.slice(-1)[0].foundtime,a.statistic.teachercount=s.data.result.slice(-1)[0].teacher,a.statistic.prizecount=s.data.result.slice(-1)[0].goal,a.statistic.goodstudent=s.data.result.slice(-1)[0].student})}}},d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"frame2"},[a("div",{staticClass:"word",style:{backgroundImage:"url(static/img/hyhyimg/41.png)"},attrs:{align:"center"}},[a("h3",[t._v("\r\n            师资介绍\r\n        ")])]),t._v(" "),a("div",{staticClass:"underline"}),t._v(" "),a("div",{staticClass:"grid-content bg-purple-light"},[a("div",{staticClass:"t-information"},[a("el-row",{attrs:{gutter:20}},t._l(t.teachers,function(s){return a("el-col",{key:s.id,attrs:{span:6}},[a("div",[a("img",{attrs:{src:t.prefix.image+s.pic_url}}),t._v(" "),a("h2",[a("p",{staticClass:"a"},[t._v(t._s(s.name))]),t._v(" "),a("p",{staticClass:"c"},[t._v(t._s(s.title)+" / "+t._s(s.school))]),t._v(" "),a("p",{staticClass:"b"},[t._v(t._s(s.description))])])])])})),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(s){t.$router.push("/Teacher")}}},[t._v("发现更多→")])],1),t._v(" "),a("div",{staticClass:"tt-information"},[a("el-row",{attrs:{gutter:20}},t._l(t.teachers,function(s){return a("el-col",{key:s.id,attrs:{span:24}},[a("div",[a("img",{attrs:{src:t.prefix.image+s.pic_url}}),t._v(" "),a("h2",[a("p",{staticClass:"a"},[t._v(t._s(s.name))]),t._v(" "),a("p",{staticClass:"c"},[t._v(t._s(s.title)+" / "+t._s(s.school))]),t._v(" "),a("p",{staticClass:"b"},[t._v(t._s(s.description))])])])])})),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(s){t.$router.push("/Teacher")}}},[t._v("发现更多→")])],1)]),t._v(" "),a("div",{staticClass:"t-bottom",style:{backgroundImage:"url(static/img/hyhyimg/44.png)"}},[a("div",{staticClass:"limit"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("div",[a("p",[t._v(t._s(t.statistic.foundtime))]),t._v(" "),a("span",[t._v("成立时间")])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",[a("p",[t._v(t._s(t.statistic.teachercount))]),t._v(" "),a("span",[t._v("师资力量")])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",[a("p",[t._v(t._s(t.statistic.prizecount))]),t._v(" "),a("span",[t._v("获奖人数")])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",[a("p",[t._v(t._s(t.statistic.goodstudent))]),t._v(" "),a("span",[t._v("优秀学生")])])])],1)],1)])])},staticRenderFns:[]};var u=a("VU/8")(v,d,!1,function(t){a("+V6j")},"data-v-da323190",null).exports,p={data:function(){return{brandadvantage:[{title:"权威",explain:"优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明",imgsrc:"static/img/hyhyimg/25.png"},{title:"研发",explain:"优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明",imgsrc:"static/img/hyhyimg/26.png"},{title:"深造",explain:"优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明优势说明",imgsrc:"static/img/hyhyimg/27.png"}]}},methods:{getBrandAdvFromDatabase:function(){var t=this;Object(r.b)(function(s){console.log(s),t.brandadvantage=s})}}},_={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"frame2"},[a("div",{staticClass:"word",style:{backgroundImage:"url(static/img/hyhyimg/41.png)"}},[a("h3",[t._v("\r\n            品牌优势\r\n        ")])]),t._v(" "),a("div",{staticClass:"underline"}),t._v(" "),a("el-row",{staticClass:"set4"},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("div",{staticClass:"b-information"},[a("el-row",{attrs:{gutter:20}},t._l(t.brandadvantage,function(s){return a("el-col",{key:s.title,attrs:{span:8}},[a("div",{staticClass:"bg-white"},[a("div",{staticClass:"imgframe"},[a("img",{attrs:{src:s.imgsrc}})]),t._v(" "),a("h2",[t._v("\r\n                                    "+t._s(s.title)+"\r\n                                    "),a("p",[t._v("\r\n                                        "+t._s(s.explain)+"\r\n                                    ")])])])])}))],1)])])],1),t._v(" "),a("el-row",{staticClass:"sett4"},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("div",{staticClass:"b-information"},[a("el-row",{attrs:{gutter:20}},t._l(t.brandadvantage,function(s){return a("el-col",{key:s.title,attrs:{span:24}},[a("div",{staticClass:"bg-white"},[a("div",{staticClass:"imgframe"},[a("img",{attrs:{src:s.imgsrc}})]),t._v(" "),a("h2",[t._v("\r\n                                    "+t._s(s.title)+"\r\n                                    "),a("p",[t._v("\r\n                                        "+t._s(s.explain)+"\r\n                                    ")])])])])}))],1)])])],1)],1)},staticRenderFns:[]};var g=a("VU/8")(p,_,!1,function(t){a("w8CM")},"data-v-167bb77e",null).exports,h={name:"zmd",data:function(){return{imagebox:[{id:0,idView:a("QaLH")},{id:1,idView:a("QaLH")},{id:2,idView:a("QaLH")}],screenWidth:0}},methods:{setSize:function(){this.bannerHeight=400/1920*this.screenWidth},getFeedbackFromDatabase:function(){var t=this;Object(r.f)(function(s){console.log(s),t.imagebox=s})}},mounted:function(){var t=this;this.screenWidth=window.innerWidth,this.setSize(),window.onresize=function(){t.screenWidth=window.innerWidth,t.setSize()}}},m={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"frame2"},[s("div",{staticClass:"word",style:{backgroundImage:"url(static/img/hyhyimg/41.png)"}},[s("h3",[this._v("\r\n            学员反馈\r\n        ")])]),this._v(" "),s("div",{staticClass:"underline"}),this._v(" "),s("div",{staticClass:"padframe"},[s("el-carousel",{staticClass:"feedback",attrs:{interval:4e3,type:"card"}},this._l(this.imagebox,function(t){return s("el-carousel-item",{key:t.id},[s("img",{staticClass:"image",attrs:{src:t.idView}})])}))],1)])},staticRenderFns:[]};var f=a("VU/8")(h,m,!1,function(t){a("k9WK")},"data-v-3afe5e46",null).exports,b={data:function(){return{prefix:{video:"https://speechdb-oss-video.oss-cn-beijing.aliyuncs.com/",image:"https://speechdb-oss-image.oss-cn-beijing.aliyuncs.com/",text:"https://speechdb-oss-text.oss-cn-beijing.aliyuncs.com/"},infomation:[]}},mounted:function(){this.getHotInfoFromDatabase()},methods:{getHotInfoFromDatabase:function(){var t=this,s=this;Object(r.h)().then(function(a){s.infomation=[],s.infomation=a.data.result.slice(0,3),console.log(t.infomation)})}}},y={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"frame2"},[a("div",{staticClass:"word",style:{backgroundImage:"url(static/img/hyhyimg/41.png)"}},[a("h3",[t._v("\r\n            热门资讯\r\n        ")])]),t._v(" "),a("div",{staticClass:"underline"}),t._v(" "),a("el-row",{staticClass:"set1"},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("div",{staticClass:"i-information"},[a("el-row",{attrs:{gutter:30}},t._l(t.infomation,function(s){return a("el-col",{key:s.id,staticClass:"i-back",attrs:{span:8}},[a("a",{attrs:{href:"http://www.huayanhuayu.cn/#/InfoDetail?type="+s.id}},[a("div",{staticClass:"info"},[a("img",{attrs:{src:t.prefix.image+s.pic_url}}),t._v(" "),a("div",{staticClass:"textbox"},[a("p",[a("span",{staticClass:"ps"},[t._v("话言话语")]),t._v(" "),a("span",{staticClass:"pp"},[t._v(t._s(s.title))])]),t._v(" "),a("p",{staticClass:"sp"},[t._v(t._s(s.description))])])])])])}))],1)])])],1),t._v(" "),a("el-row",{staticClass:"sett1"},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("div",{staticClass:"i-information"},[a("el-row",{attrs:{gutter:30}},t._l(t.infomation,function(s){return a("el-col",{key:s.id,staticClass:"i-back",attrs:{span:24}},[a("a",{attrs:{href:"http://www.huayanhuayu.cn/#/InfoDetail?type="+s.id}},[a("div",{staticClass:"info",on:{click:function(a){t.$router.push({path:"/InfoDetail",query:{type:s.id}})}}},[a("img",{attrs:{src:t.prefix.image+s.pic_url}}),t._v(" "),a("div",{staticClass:"textbox"},[a("p",[a("span",{staticClass:"ps"},[t._v("话言话语")]),t._v(" "),a("span",{staticClass:"pp"},[t._v(t._s(s.title))])]),t._v(" "),a("p",{staticClass:"sp"},[t._v(t._s(s.description))])])])])])}))],1)])])],1),t._v(" "),a("div",{staticClass:"bgimg",style:{backgroundImage:"url(static/img/hyhyimg/44.png)"}})],1)},staticRenderFns:[]};var C=a("VU/8")(b,y,!1,function(t){a("Sx1w")},"data-v-08ffc3ca",null).exports,w={data:function(){return{}},methods:{getAboutUsFromDatabase:function(){Object(r.a)(function(t){console.log(t)})}}},x={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"frame2"},[a("div",{staticClass:"word",style:{backgroundImage:"url(static/img/hyhyimg/41.png)"}},[a("h3",[t._v("\r\n            关于我们\r\n        ")])]),t._v(" "),a("div",{staticClass:"underline"}),t._v(" "),a("div",{staticClass:"grid-content bg-purple-light"},[a("div",{staticClass:"a-info"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("img",{staticClass:"resized",attrs:{src:"static/img/hyhyimg/32.png"}}),t._v(" "),a("p",[t._v("话言话语教育科技有限公司于2017年成立，注册资金2000万，公司注册地在北京副中心运河商务区，办公面积260平米，包括30平米专业录音棚，公司员工人数60多名。")]),t._v(" "),a("p",[t._v("本公司专注于"),a("span",{staticClass:"redded"},[t._v("全民汉语言艺术素养提升，开展中华经典诵读、播音主持艺术、机型表达、演讲艺术、普通话推广等教育活动。")])]),t._v(" "),a("p",[t._v("由国内知名院校播音、配音专业师资以及媒体主持人联合开发教材于课程，拥有独立著作版权。同时，结合汉语语言艺术教学特点，自主研发APP、小程序、PC端软件，提供专业优质的专业教育资源，满足全民语言传播与教育需求。")]),t._v(" "),a("p",[t._v("目前已研发出幼儿普通话发生、中小学朗诵艺术课程、青少年口才系列课程、职场情商语言、求职面试等50多门语言艺术系列课程。")]),t._v(" "),a("p",[t._v("与领先的在线视频网站爱奇艺达成战略合作。")]),t._v(" "),a("p",[t._v("与中国传媒大学等知名院校播音师资教研团队携手，联合打造声音美化系列课程。")]),t._v(" "),a("p",[t._v("受青海省IPTV委托研发青海学前儿童普通话系列课程。")]),t._v(" "),a("p",[t._v("先后在江西、内蒙等多省市地区开展青少年校园中华经典朗读朗诵的主题活动，累计受益青少年近万人。")]),t._v(" "),a("p",[a("span",{staticClass:"redded"},[t._v("话言话语致力于全民语言文化素养的提高，倡导全民说好中国话，说好听的中国话。")])])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{staticClass:"image",attrs:{span:12}},[a("img",{attrs:{src:"static/img/hyhyimg/aboutus1.png",alt:""}}),t._v(" "),a("img",{attrs:{src:"static/img/hyhyimg/aboutus2.png",alt:""}})]),t._v(" "),a("el-col",{staticClass:"back1",attrs:{span:12}},[a("img",{attrs:{src:"static/img/hyhyimg/aboutus3.png",alt:""}})])],1),t._v(" "),a("div",{staticClass:"image2"},[a("img",{attrs:{src:"static/img/hyhyimg/51.png"}})])],1)],1)],1),t._v(" "),a("div",{staticClass:"aa-info"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("img",{staticClass:"resized",attrs:{src:"static/img/hyhyimg/32.png"}}),t._v(" "),a("p",[t._v("话言话语教育科技有限公司于2017年成立，注册资金2000万，公司注册地在北京副中心运河商务区，办公面积260平米，包括30平米专业录音棚，公司员工人数60多名。")]),t._v(" "),a("p",[t._v("本公司专注于"),a("span",{staticClass:"redded"},[t._v("全民汉语言艺术素养提升，开展中华经典诵读、播音主持艺术、机型表达、演讲艺术、普通话推广等教育活动。")])]),t._v(" "),a("p",[t._v("由国内知名院校播音、配音专业师资以及媒体主持人联合开发教材于课程，拥有独立著作版权。同时，结合汉语语言艺术教学特点，自主研发APP、小程序、PC端软件，提供专业优质的专业教育资源，满足全民语言传播与教育需求。")]),t._v(" "),a("p",[t._v("目前已研发出幼儿普通话发生、中小学朗诵艺术课程、青少年口才系列课程、职场情商语言、求职面试等50多门语言艺术系列课程。")]),t._v(" "),a("p",[t._v("与领先的在线视频网站爱奇艺达成战略合作。")]),t._v(" "),a("p",[t._v("与中国传媒大学等知名院校播音师资教研团队携手，联合打造声音美化系列课程。")]),t._v(" "),a("p",[t._v("受青海省IPTV委托研发青海学前儿童普通话系列课程。")]),t._v(" "),a("p",[t._v("先后在江西、内蒙等多省市地区开展青少年校园中华经典朗读朗诵的主题活动，累计受益青少年近万人。")]),t._v(" "),a("p",[a("span",{staticClass:"redded"},[t._v("话言话语致力于全民语言文化素养的提高，倡导全民说好中国话，说好听的中国话。")])])])],1)],1)])])},staticRenderFns:[]};var k=a("VU/8")(w,x,!1,function(t){a("pIDB")},"data-v-308f6ae9",null).exports,j={name:"Home",data:function(){return{}},methods:{},components:{"wbc-nav":i.a,"wbc-other":e.a,"wbc-footer":n.a,"wbc-hot_course":l,"wbc-teacher_introduction":u,"wbc-brand_advantage":g,"wbc-feedback":f,"wbc-hot_information":C,"wbc-about_me":k},created:function(){}},D={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("wbc-nav"),t._v(" "),a("wbc-other"),t._v(" "),a("div",{staticClass:"h-information"},[a("el-row",{attrs:{gutter:15}},[a("el-col",{attrs:{span:6}},[a("a",{attrs:{href:"http://www.huayanhuayu.cn/#/CourseList?type=幼儿发音"}},[a("div",{staticClass:"grid-content2 bg-red"},[a("div",{staticClass:"mid"},[a("img",{attrs:{src:"static/img/hyhyimg/21.png",alt:""}}),t._v(" "),a("h2",[a("a",[t._v("幼儿发音")])])])])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("a",{attrs:{href:"http://www.huayanhuayu.cn/#/CourseList?type=少年口才"}},[a("div",{staticClass:"grid-content2 bg-red"},[a("div",{staticClass:"mid"},[a("img",{attrs:{src:"static/img/hyhyimg/23.png",alt:""}}),t._v(" "),a("h2",[a("a",[t._v("少年口才")])])])])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("a",{attrs:{href:"http://www.huayanhuayu.cn/#/CourseList?type=播音主持"}},[a("div",{staticClass:"grid-content2 bg-red"},[a("div",{staticClass:"mid"},[a("img",{attrs:{src:"static/img/hyhyimg/24.png",alt:""}}),t._v(" "),a("h2",[a("a",[t._v("播音主持")])])])])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("a",{attrs:{href:"http://www.huayanhuayu.cn/#/CourseList?type=职场情商"}},[a("div",{staticClass:"grid-content2 bg-red"},[a("div",{staticClass:"mid"},[a("img",{attrs:{src:"static/img/hyhyimg/22.png",alt:""}}),t._v(" "),a("h2",[a("a",[t._v("职场情商")])])])])])])],1)],1),t._v(" "),a("wbc-hot_course"),t._v(" "),a("wbc-teacher_introduction"),t._v(" "),a("wbc-brand_advantage"),t._v(" "),a("wbc-hot_information"),t._v(" "),a("wbc-about_me"),t._v(" "),a("wbc-footer")],1)},staticRenderFns:[]};var F=a("VU/8")(j,D,!1,function(t){a("gTnp")},"data-v-7684d452",null);s.default=F.exports},QaLH:function(t,s,a){t.exports=a.p+"static/img/phone1.png?v=66ef022"},Sx1w:function(t,s){},gTnp:function(t,s){},jbVG:function(t,s){},k9WK:function(t,s){},pIDB:function(t,s){},w8CM:function(t,s){}});