<template>
  <div>
    <div class="shenti">
      <el-tabs type="border-card" style="height: 600px;">
        <el-tab-pane label="待处理">
          <pending></pending>
        </el-tab-pane>
        <el-tab-pane label="已发货">
          <delivered></delivered>
        </el-tab-pane>
        <el-tab-pane label="结算">
          <settlement></settlement>
        </el-tab-pane>
        <el-tab-pane label="退货">
          <returnorder></returnorder>
        </el-tab-pane>
        <el-tab-pane label="待补货订单">
          <replenished></replenished>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Pending from "./order/Pending"
import Delivered from "./order/Delivered"
import settlement from './order/settlement'
import Returnorder from './order/Returnorder'
import replenished from './order/replenished'
export default {
  data() {
    return {};
  },
  components: {
    pending : Pending,
    delivered : Delivered,
    settlement : settlement,
    returnorder : Returnorder,
    replenished:replenished
  }
};
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