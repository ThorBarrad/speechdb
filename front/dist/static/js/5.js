webpackJsonp([5],{vjQM:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Cz8s"),i=e("mzkE"),r=e("znq3"),c=e("1pQF"),o={data:function(){return{coursetype:"",courseimg:"",courses:[],names:["幼儿发音","少年口才","播音主持","职场情商"],prefix:{video:"https://speechdb-oss-video.oss-cn-beijing.aliyuncs.com/",image:"https://speechdb-oss-image.oss-cn-beijing.aliyuncs.com/",text:"https://speechdb-oss-text.oss-cn-beijing.aliyuncs.com/"}}},methods:{getAllClass_TypeFromDatabase:function(){var t=this;Object(c.e)().then(function(s){var e=t;e.courses=[],s.data.result.forEach(function(t){e.names[t.category-1]==e.coursetype&&e.courses.push(t)}),console.log(t.courses)})}},components:{"wbc-nav":a.a,"wbc-other":r.a,"wbc-footer":i.a},mounted:function(){this.coursetype=this.$route.query.type,"幼儿发音"==this.coursetype?this.courseimg="static/img/hyhyimg/21.png":"少年口才"==this.coursetype?this.courseimg="static/img/hyhyimg/23.png":"播音主持"==this.coursetype?this.courseimg="static/img/hyhyimg/24.png":"职场情商"==this.coursetype&&(this.courseimg="static/img/hyhyimg/22.png"),this.getAllClass_TypeFromDatabase()},created:function(){}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("wbc-nav"),t._v(" "),e("wbc-other"),t._v(" "),e("div",{staticClass:"h-information2"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"grid-content2 bg-red"},[e("div",{staticClass:"mid"},[e("img",{attrs:{src:t.courseimg,alt:""}}),t._v(" "),e("h2",[e("a",[t._v(t._s(t.coursetype))])])])])])],1)],1),t._v(" "),e("div",{staticClass:"toppadding"}),t._v(" "),e("div",{staticClass:"word",style:{backgroundImage:"url(static/img/hyhyimg/41.png)"}},[e("h3",[t._v("\r\n            "+t._s(t.coursetype)+"\r\n        ")])]),t._v(" "),e("div",{staticClass:"underline"}),t._v(" "),e("div",{staticClass:"c-info"},[e("el-row",{staticClass:"set1",attrs:{gutter:30}},t._l(t.courses,function(s){return e("el-col",{key:s.id,attrs:{span:12}},[e("el-row",{attrs:{gutter:15}},[e("el-col",{attrs:{span:11}},[e("a",{attrs:{href:"http://www.huayanhuayu.cn/#/CourseDetail?type="+s.id}},[e("img",{staticClass:"firstimg",attrs:{src:t.prefix.image+s.pic_url}})])]),t._v(" "),e("el-col",{attrs:{span:13}},[e("a",{attrs:{href:"http://www.huayanhuayu.cn/#/CourseDetail?type="+s.id}},[e("p",[e("span",{staticClass:"red"},[t._v("话言话语")]),t._v(" "),e("span",{staticClass:"black"},[t._v(t._s(s.title))])]),t._v(" "),e("p",{staticClass:"normal"},[t._v(t._s(s.description))])])]),t._v(" "),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.$router.push({path:"/CourseDetail",query:{type:s.id}})}}},[t._v("查看详情→")])],1)],1)}))],1),t._v(" "),e("div",{staticClass:"cc-info"},[e("el-row",{staticClass:"set1",attrs:{gutter:30}},t._l(t.courses,function(s){return e("el-col",{key:s.id,attrs:{span:24}},[e("el-row",{attrs:{gutter:15}},[e("el-col",{attrs:{span:11}},[e("a",{attrs:{href:"http://www.huayanhuayu.cn/#/CourseDetail?type="+s.id}},[e("img",{staticClass:"firstimg",attrs:{src:t.prefix.image+s.pic_url}})])]),t._v(" "),e("el-col",{attrs:{span:13}},[e("a",{attrs:{href:"http://www.huayanhuayu.cn/#/CourseDetail?type="+s.id}},[e("p",[e("span",{staticClass:"red"},[t._v("话言话语")]),t._v(" "),e("span",{staticClass:"black"},[t._v(t._s(s.title))])]),t._v(" "),e("p",{staticClass:"normal"},[t._v(t._s(s.description))])])]),t._v(" "),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.$router.push({path:"/CourseDetail",query:{type:s.id}})}}},[t._v("查看详情→")])],1)],1)}))],1),t._v(" "),e("wbc-footer")],1)},staticRenderFns:[]};var u=e("VU/8")(o,n,!1,function(t){e("xh/S")},"data-v-752daaa6",null);s.default=u.exports},"xh/S":function(t,s){}});