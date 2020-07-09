<template>
<!-- 客服页面 -->
  <div>
    <el-container>
      <el-header>
        <span class="sect"><selct></selct></span>
        <span>客服操作页面</span>
        <span class="toux"><img src="../assets/touxiang.gif" alt=""></span>
        <span class="Name">和妹陀</span>
      </el-header>
      <el-main>
        <div class="shenti">
          <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
            <el-tab-pane label="录单" name="1">
              <Recording></Recording>
            </el-tab-pane>
            <el-tab-pane label="所有订单" name="2">
              <Allorders></Allorders>
            </el-tab-pane>
            <el-tab-pane label="待处理" name="3">
              <Pending></Pending>
            </el-tab-pane>
            <el-tab-pane label="已发货" name="4">
              <Delivered></Delivered>
            </el-tab-pane>
            <el-tab-pane label="结算" name="5">
              <settlement></settlement>
            </el-tab-pane>
            <el-tab-pane label="待补货订单" name="6">
              <replenishment></replenishment>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Recording from '../view/Recording';
import Allorders from '../view/Allorders';
import Pending from '../view/Pending';
import Delivered from '../view/Delivered';
import settlement from '../view/settlement';
import replenishment from '../view/replenishment';
import selct from '../view/select'
export default {
  name: "service",
  data() {
    return {
      activeName: '1'
    };
  },
    components:{
        Recording:Recording,
        Allorders:Allorders,
        Pending:Pending,
        Delivered:Delivered,
        settlement:settlement,
        replenishment:replenishment,
        selct:selct
    },
  methods: {
     handleClick(tab, event) {
        console.log(tab, event);
      }
  }
};
</script>

<style scoped>
img{
  width:100%;
  height:100%
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 37px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.Name {
  position: absolute;
  right: 30px;
}
.sect{
  position: absolute;
  left:30px;
}
.shenti /deep/ .el-tabs__item{
  width: 51%;
  height: 50px!important;
  line-height: 50px!important;
}
.toux{
  position: absolute;
  right:80px;
  width:50px;
  height:50px;
  line-height: 100px;
}
</style>