<!--  -->
<template>
  <div>
    <el-dialog
        title="提示"
        :visible.sync="dialogShow"
        :modal-append-to-body='false'
        width="30%"
        center>
        <span>需要注意的是内容是默认不居中的</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogShow = false">取 消</el-button>
            <el-button type="primary" @click="dialogShow = false">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props:['dialogShow'],
  data () {
    return {
    };
  }
}

</script>
<style lang='scss' scoped>
</style>