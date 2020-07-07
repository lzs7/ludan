<template>
        <div>
          <div class="shenti">
              <el-tabs  type="border-card" style="height: 600px;">
                <el-tab-pane label="个人商品">
                  <personal></personal>
                </el-tab-pane>
                <el-tab-pane label="待审核商品">
                  <breviewed></breviewed>
                </el-tab-pane>
                <el-tab-pane label="已通过审核">
                  <reviewed></reviewed>
                </el-tab-pane>
                <el-tab-pane label="未通过审核">
                  <failed></failed>
                </el-tab-pane>
              </el-tabs>
           </div>
        </div>
</template>
<script>
import Personal from './comment/Personal'
import Breviewed from './comment/Breviewed'
import Reviewed from './comment/Reviewed'
import Failed from './comment/Failed'
export default {
  data () {
    return {

    }
  },
  components : {
    personal:Personal,
    breviewed:Breviewed,
    reviewed:Reviewed,
    failed:Failed,
  }
}
</script>
<style scoped>
.shenti /deep/ .el-tabs__item {
  width: 58%;
  height: 50px !important;
  line-height: 50px !important;
}
/* .shenti{
    width:80%;
    margin-left: 10%;
} */
</style>