<template>
  <div id="container">
    <!--  -->
    <div class="inquire">
    <el-form :inline="true" :model="formInline" class="form-inline">
      <el-form-item label="用户名">
        <el-input v-model="formInline.user" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="部门"></el-input>
      </el-form-item>
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary blue" @click="onSubmit">查询</el-button>
        <el-button type="primary blue" @click="dialog('添加分机','add-edit')">添加分机</el-button>
        <el-button type="danger" @click="dialog('分机解绑','extensionUntie')">分机解绑</el-button>
      </el-form-item>
    </el-form>
    </div>
    <!-- #eef1f6 -->
  <div class="container">

   <el-table :header-cell-style="{background:'#eef1f6',color:'#606266'}"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      fixed="left"
      prop="name"
      label="用户名">
    </el-table-column>
    <el-table-column
      prop="ext"
      label=" 分机">
    </el-table-column>
    <el-table-column
      prop="password"
      label="密码">
    </el-table-column>
    <el-table-column
      prop="pname"
      label="部门">
    </el-table-column>
    <el-table-column
      prop="app"
      label="APP账号">
    </el-table-column>
    <el-table-column
      prop="callRecording"
      label="通话录音">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope" >
        <el-button type="text" size="small edit" @click="dialog('编辑','add-edit')">编辑</el-button>
        <!-- <el-button type="text" size="small delete" @click="dialog('删除','delete')">删除</el-button> -->
        <el-button type="text" size="small delete" @click="open2">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
  <!-- 模态框 -->
  <dialog-modal :title="title" :slotname="slotname" :dialogshow.sync="dialogshow">
    <span slot="extensionUntie">extensionUntie</span>
     <span slot="add-edit">
       <el-form ref="form" label-width="100px" label-position="left">
       <el-tabs v-model="activeName">
        <el-tab-pane label="用户管理" name="first">
          <!--  -->
            <el-form-item label="分机号">
              <el-input ></el-input>
            </el-form-item>
            <el-form-item label="用户名称">
              <el-input ></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input ></el-input>
            </el-form-item>
          <!--  -->
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
           <el-form-item label="语音留言：">
              <el-radio v-model="radio" label="1">打开</el-radio>
              <el-radio v-model="radio" label="2">关闭</el-radio>
            </el-form-item>
            <el-form-item label="远程分机">
              <el-radio v-model="radio" label="1">打开</el-radio>
              <el-radio v-model="radio" label="2">关闭</el-radio>
            </el-form-item>
            <el-form-item label="网页登陆">
              <el-radio v-model="radio" label="1">打开</el-radio>
              <el-radio v-model="radio" label="2">关闭</el-radio>
            </el-form-item>
             <el-form-item label="视频通话">
              <el-radio v-model="radio" label="1">打开</el-radio>
              <el-radio v-model="radio" label="2">关闭</el-radio>
            </el-form-item>
            <el-form-item label="通话录音">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="呼入" value="呼入"></el-option>
                <el-option label="呼出" value="呼出"></el-option>
                <el-option label="呼入和呼出" value="呼入和呼出"></el-option>
                <el-option label="关闭" value="关闭"></el-option>
              </el-select>
            </el-form-item>
           <el-form-item label="语言信箱密码">
              <el-input ></el-input>
            </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">
           <el-form-item label="挂机短信：">
              <el-radio v-model="radio" label="1">打开</el-radio>
              <el-radio v-model="radio" label="2">关闭</el-radio>
            </el-form-item>
            <el-form-item label="含分机号码：">
              <el-radio v-model="radio" label="1">打开</el-radio>
              <el-radio v-model="radio" label="2">关闭</el-radio>
            </el-form-item>
            <el-form-item label="挂机短信">
              <el-radio v-model="radio" label="1">打开</el-radio>
              <el-radio v-model="radio" label="2">关闭</el-radio>
            </el-form-item>
            <el-form-item label="方向">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="呼入" value="呼入"></el-option>
                <el-option label="呼出" value="呼出"></el-option>
                <el-option label="呼入和呼出" value="呼入和呼出"></el-option>
                <el-option label="关闭" value="关闭"></el-option>
              </el-select>
            </el-form-item>
        </el-tab-pane>
      </el-tabs>
      </el-form>
     </span>
  </dialog-modal>
  <!-- 分页 -->
    <div class="pagination">
      <div class="block">
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-size="100"
            layout="total, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
   </div>
</template>

<script>
  import dialogModal from '../../components/dialogModal'
  export default {
    data() {
      return {
        tableData: [{
          name: '王小虎',
          ext: '800',
          password: '123456',
          pname:'研发',
          app:'lqdlqd258',
          callRecording:'不开录音',

        },
        {
          name: '王小虎',
          ext: '800',
          password: '123456',
          pname:'研发',
          app:'lqdlqd258',
          callRecording:'不开录音',

        },
        {
          name: '王小虎',
          ext: '800',
          password: '123456',
          pname:'研发',
          app:'lqdlqd258',
          callRecording:'不开录音',

        },
        {
          name: '王小虎',
          ext: '800',
          password: '123456',
          pname:'研发',
          app:'lqdlqd258',
          callRecording:'不开录音',

        },
        {
          name: '王小虎',
          ext: '800',
          password: '123456',
          pname:'研发',
          app:'lqdlqd258',
          callRecording:'不开录音',

        },
        {
          name: '王小虎',
          ext: '800',
          password: '123456',
          pname:'研发',
          app:'lqdlqd258',
          callRecording:'不开录音',

        },
        {
          name: '王小虎',
          ext: '800',
          password: '123456',
          pname:'研发',
          app:'lqdlqd258',
          callRecording:'不开录音',

        },
        {
          name: '王小虎',
          ext: '800',
          password: '123456',
          pname:'研发',
          app:'lqdlqd258',
          callRecording:'不开录音',

        }],
        formInline: {
          user: '',
          region: ''
        },
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        formInline: {
          user: '',
          region: ''
        },
        //模态框
        dialogshow:false,
        title:null,
        slotname:null,
         //弹窗标签页
        activeName:'first',
        //单选框
        radio: '1',
        form: {
          region: ''
        }
      }
      
    },
    components:{
      dialogModal
    },
    methods:{
      //查询提交
      onSubmit() {
        console.log('submit!');
      },
      //分页
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      dialog(name,slotname){
        this.dialogshow = true;
        this.title = name;
        this.slotname = slotname;
      },
      open2(){
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',
            duration: 800
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
            duration: 800
          });
        });
      }
    }
  }

</script>
<style lang='' scoped>

</style>