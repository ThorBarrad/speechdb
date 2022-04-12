<template>
  <el-card id="container">
    管理员权限：
     <el-divider></el-divider>



    <el-row :gutter="10">
      <!-- top-bg component -->
      <el-button type="primary" plain @click="add_top_bg"> 新增头图</el-button>
      <el-row :gutter="10" class="work-list" style="margin-top:10px;">
        <el-col :span="4" v-for="(item,index) in top_bg_list" :key="index">
          <el-badge :value="item.id" class="mark">
            <el-card>
              <el-image style="width: 100%; min-height: 100px;" :src="prefix.image+item.pic_url"/>
              <el-button class='btn' type="danger" plain @click="deleteTopBg(item)">删除</el-button>
            </el-card>
          </el-badge>
        </el-col>
      </el-row>


      <el-dialog
        title="头图上传"
        :visible.sync="top_bg_modal.visible"
        width="400px"
        center
      >
        <el-row :gutter="10">
          <el-col :span="16">
            <el-form size="mini">
              <el-form-item label="封面上传" label-width="100px">
                <el-upload
                  class="upload-demo"
                  action=""
                  :limit="1"
                  :file-list="top_bg_modal.pic"
                  :before-upload="handlePicUpload"
                  list-type="picture"
                >
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
                </el-upload>
              </el-form-item>
              <el-form-item class="search_button">
                <el-button type="primary" plain @click="submitTopBgUpload">提交</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-dialog>


    </el-row>

    <el-divider></el-divider>

    <el-row :gutter="10">
      <el-form size="mini">
        <el-form-item label="成立时间" label-width="100px">
          <el-input v-model="statistic.foundtime"></el-input>
        </el-form-item>
        <el-form-item label="师资力量" label-width="100px">
          <el-input v-model="statistic.teacher"></el-input>
        </el-form-item>
        <el-form-item label="获奖人数" label-width="100px">
          <el-input v-model="statistic.goal"></el-input>
        </el-form-item>
        <el-form-item label="优秀学生" label-width="100px">
          <el-input v-model="statistic.student"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" plain @click="handleStatisticUpload"> 修改统计信息</el-button>
    </el-row>
    <el-divider></el-divider>

    <el-row :gutter="10">
      <el-form size="mini">
        <el-form-item label="课程合作" label-width="100px">
          <el-input v-model="cooperate.course" type="textarea" :rows="5"></el-input>
        </el-form-item>
        <el-form-item label="兼职合作" label-width="100px">
          <el-input v-model="cooperate.work" type="textarea" :rows="5"></el-input>
        </el-form-item>
        <el-form-item label="企业合作" label-width="100px">
          <el-input v-model="cooperate.company" type="textarea" :rows="5"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" plain @click="handleCooperateUpload"> 修改合作信息</el-button>
    </el-row>

  </el-card>
</template>

<script>
import { Message } from 'element-ui'
import { uploadTopBg, getTopBg, deleteTopBg,uploadStatistic,getStatistic,getCooperate,uploadCooperate } from '@/api/api'
export default {
  name: 'Work',
  data() {
    return {
      prefix: {
        video: 'https://speechdb-oss-video.oss-cn-beijing.aliyuncs.com/',
        image: 'https://speechdb-oss-image.oss-cn-beijing.aliyuncs.com/',
        text: 'https://speechdb-oss-text.oss-cn-beijing.aliyuncs.com/'
      },
      top_bg_list:[],
      top_bg_modal:{
        visible: false,
        pic_url:"",
        id:0
      },
      statistic:{
        foundtime:'2019',
        teacher:'369',
        goal:'75210',
        student:'4520',
      },
      cooperate:{
        course:'this is course',
        work:'this is work',
        company:'this is company',
      },
      // section_list:[],
      // section_modal:{
      //   visible:false,
      //   title:"",
      //   description:"",
      //   order:0
      // }
    }
  },
  mounted() {
    this.getTopBg();
    // this.getSections();
    this.getStatisticFromDataBase();
    this.getCooperateFromDataBase();
  },
  methods: {
    getTopBg(){
      // getTopBg().then(res=>{
      //   this.top_bg_list = JSON.parse(res.data.result)
      // })

      getTopBg().then(res => {
        var that=this
        that.top_bg_list=[]
        res.data.result.forEach(element => {
          that.top_bg_list.push(element)
        });
        // that.workList = res.data.result
        console.log(this.top_bg_list)
      })
    },
    handleStatisticUpload(){
      console.log("this is statistic upload")
      console.log(this.statistic)
      const form_data = new FormData()
      form_data.append('foundtime', this.statistic.foundtime)
      form_data.append('teacher', this.statistic.teacher)
      form_data.append('goal', this.statistic.goal)
      form_data.append('student', this.statistic.student)
      uploadStatistic(form_data).then(res=>{
        this.getStatisticFromDataBase();
        Message.success('修改统计信息成功');
      })
    },

    getStatisticFromDataBase(){
      getStatistic().then(res => {
        console.log(res.data.result.slice(-1)[0])
        var that=this
        that.statistic.foundtime=res.data.result.slice(-1)[0].foundtime
        that.statistic.teacher=res.data.result.slice(-1)[0].teacher
        that.statistic.goal=res.data.result.slice(-1)[0].goal
        that.statistic.student=res.data.result.slice(-1)[0].student
      })
    },


    handleCooperateUpload(){
      console.log("this is cooperate upload")
      console.log(this.cooperate)
      const form_data = new FormData()
      form_data.append('course', this.cooperate.course)
      form_data.append('work', this.cooperate.work)
      form_data.append('company', this.cooperate.company)
      uploadCooperate(form_data).then(res=>{
        this.getCooperateFromDataBase();
        Message.success('修改合作信息成功');
      })
    },

    getCooperateFromDataBase(){
      getCooperate().then(res => {
        console.log("this is cooperate result")
        console.log(res.data.result.slice(-1)[0])
        var that=this
        that.cooperate.course=res.data.result.slice(-1)[0].course
        that.cooperate.work=res.data.result.slice(-1)[0].work
        that.cooperate.company=res.data.result.slice(-1)[0].company
      })
    },



    add_top_bg(){
      this.top_bg_modal={
        visible: true,
        pic:[],
        id:this.top_bg_list.length+1
      }
    },
    handlePicUpload: function(file) {
      console.log(file)
      this.top_bg_modal.pic.push(file)
      return false
    },

    
    submitTopBgUpload(){
      console.log(this.top_bg_modal)
      if (this.top_bg_modal.pic.length == 0){Message.warning('未上传头图');return}
      const form_data = new FormData()
      form_data.append('pic', this.top_bg_modal.pic[0])
      // form_data.append('pic', this.top_bg_modal.pic)
      // form_data.append('id', this.top_bg_modal.id)
      // console.log(form_data)
      uploadTopBg(form_data).then(res => {
        console.log('新增头图成功')
        this.getTopBg();
        // Message.success('新增头图成功')
        this.top_bg_modal.visible=false
      })
    },
    deleteTopBg(item){
      console.log(item)
      deleteTopBg({id:item.id}).then(res=>{
        this.getTopBg();
        Message.success('删除头图成功');
      })
    },



    // submitSectionUpload(){
    //   console.log(this.section_modal)
    //   if (this.section_modal.title.length == 0){Message.warning('未填写标题');return}
    //   if (this.section_modal.description.length == 0){Message.warning('未填写描述');return}
    //   let data = {
    //     'title':this.section_modal.title,
    //     'description':this.section_modal.description,
    //     'orders':this.section_modal.orders
    //   }
    //   uploadSection(data).then(res => {
    //     this.getSections();
    //     Message.success('新增版块成功')
    //     this.section_modal.visible=false
    //   })
    // },
    // deleteSection(item){
    //   console.log(item)
    //   deleteSection({id:item.id}).then(res=>{
    //     this.getSections();
    //     Message.success('删除版块成功');
    //   })
    // },
  }
}
</script>

<style lang="scss" scoped>
#container{
  margin: 10px;
  height: 100%;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  margin-left: 10px;
  width: 90px;
  vertical-align: bottom;
}
.search_button{
  display: flex;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.work-list{
  .el-image{
    border-radius: 10px;
  }
  .title{
    font-size:1.2rem;
    font-weight: bold;
    padding:0px 10px;
  }
  .desc{
    padding:5px 10px; 
    font-size:0.6rem;
    color:#666;
  }
  .create_at{
    padding:5px 10px; 
    font-size:0.6rem;
    color:#666;
  }
  .tags{
    padding: 0px 10px;
    margin:5px 0px;
    .tag{
      font-size:0.7rem;
      margin:5px 0px;
      margin-right:5px;
      background:rgba(0,0,0,0.1);
      text-align: center;
      padding:3px 10px;
      border-radius: 10px;
    }
  }
  .btn{
    margin-top:10px;
    width:100%;
    // height: 30px;
    // line-height:30px;
  }

}
.sec-line{
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  border: 1px solid #eee;
  padding: 5px 20px;
  box-sizing: content-box;
  margin: 10px 0px;
  box-shadow: 0px 5px 10px -5px rgba(0,0,0,.1);
  .title{
      font-size: 1.6rem;
      font-weight: bold;
      margin-right: 20px;
      float:left;
  }
  .desc{
      font-size: 0.8rem;
      width: calc(80% - 100px);
      height:100%;
      overflow: hidden;
      display: block;
      float:left;
      color:#666;
  }
  .edit{
      float:right;
      margin:0px 5px;
  }
  .delete{
      float:right;
      margin:0px 5px;
  }
}
</style>
