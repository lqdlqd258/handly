<!--  -->
<template>
  <div>
    <el-dialog
    :title=title
    :visible.sync="centerDialogVisible"
    width="20%"
    @close="closeDialog"
    center>
    <span>
      <slot name="main"></slot>
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      <el-button @click="centerDialogVisible = false">取 消</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
export default {
  props:['dialogshow','title'],
  data () {
    return {
      centerDialogVisible:false
    };
  },
  watch:{
    dialogshow(){
       this.centerDialogVisible = this.dialogshow;
    }
  },
  methods:{
    closeDialog(){
      this.$emit('update:dialogshow',this.centerDialogVisible);
    }
  }
}

</script>
<style lang='scss'>
@import '../assets/css/components/modal';
</style>