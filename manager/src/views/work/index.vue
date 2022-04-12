<template>
  <el-card id="container">
    <el-button type="primary" plain @click="add_article"> 新增文章 </el-button>
    <el-container style="margin-top:20px">
      <el-col :md="18" :xs="22" :sm="20" style="min-width: 400px">
        <el-form size="mini">

          <el-form-item label="类别" label-width="100px">
            <el-select v-model="search_condition.category">
              <el-option
                v-for="(item, index) in categories"
                :key="index"
                :label="item"
                :value="index"
              />
            </el-select>
          </el-form-item>

          <!-- <el-form-item label="关键词检索" label-width="100px">
            <el-tag
              v-for="tag in search_condition.keyword"
              :key="tag"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>

            <el-input
              v-if="search_condition.tagVisible"
              ref="saveTagInput"
              v-model="search_condition.tagInput"
              class="input-new-tag"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            />

            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
          </el-form-item>

          <el-form-item label="排序" label-width="100px">
            <el-radio-group v-model="search_condition.sort">
              <el-radio-button label="按时间排序" value="1" />
              <el-radio-button label="按点赞排序" value="2" />
              <el-radio-button label="按评论排序" value="3" />
            </el-radio-group>
          </el-form-item> -->
        </el-form>
      </el-col>
      <el-col :md="6" :xs="2" :sm="4" class="search_button">
        <el-button type="primary" size="mini" plain @click="clearup">清空</el-button>
      </el-col>
    </el-container>

    <div class="search_button"><el-button type="danger" plain @click="getWorks">查询</el-button></div>

    <!-- item contains: title,category,pic_url,content -->
    <waterfall :col="6" :data="workList" class="work-list">
      <template>
        <div v-for="(item,index) in workList" class="work" :key="index">
          <el-card>
            <el-image
              style="width: 100%; min-height: 100px;"
              :src="prefix.image+item.pic_url"
            />
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.description }}</div>
            <!-- <div class="create_at">{{ item.create_at }}</div> -->
            <div class="desc">{{ "类别: "+categories[item.category] }}</div>
            <!-- <div class="tags">
              <div v-for="tag in item.tag.split(';')" :key="tag" class="tag">{{ tag }}</div>
            </div> -->
            <el-button class="btn" plain @click="update_article(item)">编辑</el-button>
          </el-card>
        </div>
      </template>
    </waterfall>




    <el-dialog
      title="新增资讯"
      :visible.sync="modal.visible"
      :fullscreen="true"
    >
      <el-form>
        <el-container>

          <el-main>
            <el-header>
              <el-form-item label="资讯标题" label-width="80px">
                <el-input v-model="modal.title"></el-input>
              </el-form-item>
            </el-header>
            <el-main class="editor">
              
              <tinymce
                ref="editor"
                v-model="modal.content"
                :prefix="prefix"
              />

            </el-main>
            <el-footer>
              <el-form-item label="资讯简介" label-width="80px">
                <el-input v-model="modal.description" type="textarea" :rows="5"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="submitUpload">发布</el-button>
              </el-form-item>
            </el-footer>
          </el-main>

          <el-aside width="250px">

            <el-form-item label="封图上传">
              <el-upload
                class="upload-demo"
                action=""
                :file-list="modal.pic"
                :before-upload="handlePicUpload"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  <!-- <div>{{ modal.pic_url?'已存在封面':'未上传封面' }}</div> -->
                  <div>只能上传jpg/png文件</div>
                </div>
              </el-upload>
            </el-form-item>

            <el-form-item label="类别" label-width="100px">
              <el-select v-model="modal.category">
                <el-option
                  v-for="(item, index) in categories"
                  :key="index"
                  :label="item"
                  :value="index"
                />
              </el-select>
            </el-form-item>

            <!-- <el-form-item label="关键词检索" label-width="100px">
              <el-tag
                v-for="tag in modal.keyword"
                :key="tag"
                closable
                :disable-transitions="false"
                @close="modalHandleClose(tag)"
              >
                {{ tag }}
              </el-tag>

              <el-input
                v-if="modal.tagVisible"
                ref="modalTagInput"
                v-model="modal.tagInput"
                class="input-new-tag"
                size="small"
                @keyup.enter.native="modalHandleInputConfirm"
                @blur="modalHandleInputConfirm"
              />

              <el-button v-else class="button-new-tag" size="small" @click="modalShowInput">+ New Tag</el-button>

            </el-form-item> -->

          </el-aside>

        </el-container>
      </el-form>
    </el-dialog>

    <el-dialog
      title="修改资讯"
      :visible.sync="edit_form.visible"
      :fullscreen="true"
    >
      <el-form>
        <el-container>

          <el-main>
            <el-header>
              <el-form-item label="资讯标题" label-width="80px">
                <el-input v-model="edit_form.title"></el-input>
              </el-form-item>
              <el-form-item label="资讯简介" label-width="80px">
                <el-input v-model="edit_form.description" type="textarea" :rows="5"></el-input>
              </el-form-item>
            </el-header>
            <el-main class="editor">
              
              <tinymce
                ref="editor"
                v-model="edit_form.content"
                :prefix="prefix"
              />

            </el-main>
            <el-footer>
              <el-form-item label="资讯简介" label-width="80px">
                <el-input v-model="edit_form.description" type="textarea" :rows="5"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="submitUpdate">修改</el-button>
                <el-button type="danger" plain @click="delteWork">删除</el-button>
              </el-form-item>
            </el-footer>
          </el-main>

          <el-aside width="250px">

            <el-form-item label="修改封面">
              <el-upload
                class="upload-demo"
                action=""
                :file-list="edit_form.pic"
                :before-upload="handlePicUpdate"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  <div>{{ edit_form.pic_url?'已存在封面':'未上传封面' }}</div>
                  <div>只能上传jpg/png文件</div>
                </div>
              </el-upload>
            </el-form-item>

            <el-form-item label="类别" label-width="100px">
              <el-select v-model="edit_form.category">
                <el-option
                  v-for="(item, index) in categories"
                  :key="index"
                  :label="item"
                  :value="index"
                />
              </el-select>
            </el-form-item>

            <!-- <el-form-item label="关键词检索" label-width="100px">
              <el-tag
                v-for="tag in modal.keyword"
                :key="tag"
                closable
                :disable-transitions="false"
                @close="modalHandleClose(tag)"
              >
                {{ tag }}
              </el-tag>

              <el-input
                v-if="modal.tagVisible"
                ref="modalTagInput"
                v-model="modal.tagInput"
                class="input-new-tag"
                size="small"
                @keyup.enter.native="modalHandleInputConfirm"
                @blur="modalHandleInputConfirm"
              />

              <el-button v-else class="button-new-tag" size="small" @click="modalShowInput">+ New Tag</el-button>

            </el-form-item> -->

          </el-aside>

        </el-container>
      </el-form>
    </el-dialog>

  </el-card>
</template>

<script>
import tinymce from '@/views/article/tinymce'
import { Message } from 'element-ui'
import { getInfoAll,uploadInfo,updateInfo,deleteInfo } from '@/api/api'
const modal_template = {
  visible: false,
  title: '',
  content: '',
  pic: [],
  category:"",
  description:"",
}
const edit_form_template = {
  visible: false,
  id: "",
  title:"",
  content:"",
  pic:[],
  pic_url:"",
  category:"",
  description:"",
}
export default {
  name: 'Work',
  components: {
    tinymce
  },
  data() {
    return {
      prefix: {
        video: 'https://speechdb-oss-video.oss-cn-beijing.aliyuncs.com/',
        image: 'https://speechdb-oss-image.oss-cn-beijing.aliyuncs.com/',
        text: 'https://speechdb-oss-text.oss-cn-beijing.aliyuncs.com/'
      },
      workList: [],
      categories: this.$store.state.categories.infocategories,
      search_condition: {
        category: '无',
        keyword: [],
        sort: 1,
        tagVisible: false,
        tagInput: ''
      },
      modal: JSON.parse(JSON.stringify(modal_template)),
      edit_form: JSON.parse(JSON.stringify(edit_form_template))
    }
  },
  computed: {
    itemWidth() {
      return (138 * 0.5 * (document.documentElement.clientWidth / 375))
    },
    gutterWidth() {
      return (9 * 0.5 * (document.documentElement.clientWidth / 375))
    }
  },
  mounted() {
    this.getWorks()
  },
  methods: {
    clearup(){
      this.search_condition.category="无"
      this.getWorks()
    },
    getWorks() {
      // getInfoAll().then(res => {
      //   this.workList = res.data.result
      //   var img = new Image()
      //   this.workList.forEach(value => {
      //     img.src = this.prefix.image + value.pic_url
      //     value.height = img.height + 330
      //   })
      //   console.log(this.workList)
      // })

      getInfoAll().then(res => {
        var that=this
        that.workList=[]
        res.data.result.forEach(element => {
          if(element.category==that.search_condition.category||that.search_condition.category=="无"){
            that.workList.push(element)
          }
        });
        // that.workList = res.data.result
        console.log(this.workList)
      })

    },
    handleClose(tag) {
      this.search_condition.keyword.splice(this.search_condition.keyword.indexOf(tag), 1)
    },
    showInput() {
      this.search_condition.tagVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm() {
      const inputValue = this.search_condition.tagInput
      if (!inputValue) {
        this.search_condition.tagVisible = false
        this.search_condition.tagInput = ''
        return
      }
      if (this.search_condition.keyword.indexOf(this.search_condition.tagInput) >= 0) {
        Message.warning('标签不可重复')
        return
      }
      if (inputValue.length < 10) {
        this.search_condition.keyword.push(inputValue)
        this.search_condition.tagVisible = false
        this.search_condition.tagInput = ''
      } else {
        Message.warning('标签长度过长')
      }
    },
    modalHandleClose(tag) {
      this.modal.keyword.splice(this.modal.keyword.indexOf(tag), 1)
    },
    modalShowInput() {
      this.modal.tagVisible = true
      this.$nextTick(_ => {
        this.$refs.modalTagInput.$refs.input.focus()
      })
    },
    modalHandleInputConfirm() {
      const inputValue = this.modal.tagInput
      if (!inputValue) {
        this.modal.tagVisible = false
        this.modal.tagInput = ''
        return
      }
      if (this.modal.keyword.indexOf(this.modal.tagInput) >= 0) {
        Message.warning('标签不可重复')
        return
      }
      if (inputValue.length < 10) {
        this.modal.tagVisible = false
        this.modal.tagInput = ''
        this.modal.keyword.push(inputValue)
      } else {
        Message.warning('标签长度过长')
      }
    },
    add_article: function() {
      this.modal = {
        visible: true,
        category: 1,
        description:"",
        // keyword: [],
        pic: [],
        // audio: [],
        // text: [],
        // tagInput: '',
        // tagVisible: false,
        // teacher:"",
        title: '',
        content:"",
        // author: ''
      }
    },
    update_article: function(work) {
      this.edit_form = {
        visible: true,
        work_id: work.id,
        // liek_num: work.liek_num,
        // repost_num: work.repost_num,
        category: work.category,
        pic_url: work.pic_url,
        // url: work.url,
        // text_url: work.text_url,
        // tag: work.tag,
        title: work.title,
        description: work.description,
        // keyword: work.tag.split(';'),
        // tagInput: '',
        // tagVisible: false,
        pic: [],
        // audio: [],
        // text: [],
        // teacher:work.teacher,
        content:work.text_url
      }
    },
    submitUpload() {
      // console.log(this.modal.content)
      console.log(this.modal)
      // if (this.modal.audio.length == 0) { Message.warning('未上传音频') }
      // if (this.modal.text.length == 0) { Message.warning('未上传文本') }
      if (this.modal.pic.length == 0) { Message.warning('未上传封图'); return }

      // if (this.modal.keyword.length == 0) { Message.warning('未添加标签'); return }
      if (!this.modal.category) { Message.warning('未选择分类'); return }
      // if (this.modal.teacher == '') {Message.warning('未填写教师');return}
      if (this.modal.description == '') {Message.warning('未填写简介');return}
      // this.modal.author = this.$store.state.user.name
      if (this.modal.title == '') { Message.warning('未填写标题'); return }
      const form_data = new FormData()
      form_data.append('text', this.modal.content)
      form_data.append('pic', this.modal.pic[0])
      // form_data.append('text', this.modal.text[0])
      form_data.append('category', this.modal.category)
      // form_data.append('tag', this.modal.keyword.join(';'))
      form_data.append('title', this.modal.title)
      // form_data.append('author', this.modal.author)
      // form_data.append('teacher', this.modal.teacher)
      form_data.append('description', this.modal.description)

      uploadInfo(form_data).then(res => {
        this.getWorks()
        Message.success('新增作品成功')
        this.modal.visible = false
      })
    },

    submitUpdate() {
      console.log(this.edit_form)
      // if (this.edit_form.audio.length == 0) { Message.warning('未上传音频') }
      // if (this.edit_form.text.length == 0) { Message.warning('未上传文本') }
      if (this.edit_form.pic.length == 0&&this.edit_form.pic_url=="") { Message.warning('未上传封图');return}
      // if (this.edit_form.teacher == '') {Message.warning('未填写教师');return}
      if (this.edit_form.description == '') {Message.warning('未填写简介');return}
      // if (this.edit_form.keyword.length == 0) { Message.warning('未添加标签'); return }
      if (!this.edit_form.category) { Message.warning('未选择分类'); return }
      if (this.edit_form.title == '') { Message.warning('未填写标题'); return }
      const form_data = new FormData()
      form_data.append('id', this.edit_form.work_id)
      // form_data.append('audio', this.edit_form.audio.length == 0 ? '' : this.edit_form.audio[0])
      form_data.append('pic', this.edit_form.pic.length == 0 ? '' : this.edit_form.pic[0])
      // form_data.append('text', this.edit_form.text.length == 0 ? '' : this.edit_form.text[0])
      form_data.append('category', this.edit_form.category)
      // form_data.append('tag', this.edit_form.keyword.join(';'))
      form_data.append('title', this.edit_form.title)
      form_data.append('description', this.edit_form.description)
      // form_data.append('teacher', this.edit_form.teacher)
      form_data.append('text', this.edit_form.content)
      // for (var p of form_data) {
      //   console.log(p)
      // }
      updateInfo(form_data).then(res => {
        this.getWorks()
        Message.success('更新课程成功')
        this.edit_form.visible = false
      })
    },


    delteWork() {
      deleteInfo({ id: this.edit_form.work_id }).then(res => {
        this.getWorks()
        Message.success('删除作品成功')
        this.edit_form.visible = false
      })
    },
    handlePicUpload: function(file) {
      console.log(file)
      this.modal.pic.push(file)
      return false
    },
    handleTextUpload: function(file) {
      console.log(file)
      this.modal.text.push(file)
      return false
    },
    handlePicUpdate: function(file) {
      console.log(file)
      this.edit_form.pic.push(file)
      return false
    },
    handleTextUpdate: function(file) {
      console.log(file)
      this.modal.text.push(file)
      return false
    },
    modalHandleInputConfirmUpdate() {
      const inputValue = this.modal.tagInput
      if (!inputValue) {
        this.modal.tagVisible = false
        this.modal.tagInput = ''
        return
      }
      if (this.modal.keyword.indexOf(this.modal.tagInput) >= 0) {
        Message.warning('标签不可重复')
        return
      }
      if (inputValue.length < 10) {
        this.modal.tagVisible = false
        this.modal.tagInput = ''
        this.modal.keyword.push(inputValue)
      } else {
        Message.warning('标签长度过长')
      }
    },
    modalHandleCloseUpdate(tag) {
      this.modal.keyword.splice(this.modal.keyword.indexOf(tag), 1)
    },

    modalShowInputUpdate() {
      this.modal.tagVisible = true
      this.$nextTick(_ => {
        this.$refs.modalTagInputUpdate.$refs.input.focus()
      })
    }
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
  .el-card{
    margin: 3px;
  }
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
      margin:5px 1px;
      background:rgba(0,0,0,0.1);
      text-align: center;
      padding:3px 5px;
      border-radius: 10px;
      float:left;
    }
  }
  .btn{
    margin-top:10px;
    width:100%;
  }
}
</style>
<style scoped>
  .el-dialog__wrapper >>> .el-dialog__body{
    padding: 0;
  }
  .el-dialog__wrapper >>> .el-header{
    height: 40px !important;
  }
  .el-dialog__wrapper >>> .el-footer{
    height: 40px !important;
  }
  .el-dialog__wrapper .editor{
    /* height: 77vh; */
  }
  .el-aside .el-form-item{
    margin-right: 10px;
  }
  .el-upload__tip {
    line-height: 20px;
  }
  .el-main{
    overflow:visible;
  }
</style>
<style>
  .tox-tinymce-aux {
    z-index: 3000 !important;
  }
</style>
