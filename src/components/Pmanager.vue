<template>
<!-- 产品经理 -->
  <div>
    <el-container>
      <el-header>
        <span class="sect"><slect></slect></span>
        <span>产品经理操作页面</span>
        <span class="touxiang"><img src="../assets/touxiang.gif" alt=""></span>
        <span class="name">晓东</span>
      </el-header>
      <el-main>
        <div class="shenti">
          <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick"  style="height:600px">
            <el-tab-pane label="待处理" name="1">
              <pending></pending>
            </el-tab-pane>
            <el-tab-pane label="已处理" name="2">
              <processed></processed>
            </el-tab-pane>
            <el-tab-pane label="已通过" name="3">
              <passed></passed>
            </el-tab-pane>
            <el-tab-pane label="未通过" name="4">
              <failed></failed>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import select from '../view/select'
import pending from '../components/pages/manager/Pending'
import processed from '../components/pages/manager/Processed'
import passed from '../components/pages/manager/Passed'
import failed from '../components/pages/manager/Failed'
export default {
    
  name: "service",
  data() {
    return {
      activeName: '1'
    };
  },
    components:{
        slect:select,
        pending:pending,
        processed:processed,
        passed:passed,
        failed:failed
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
.name {
  position: absolute;
  right: 30px;
}
.sect{
  position: absolute;
  left:30px;
}

.shenti /deep/ .el-tabs__item{
  width: 70%;
  height: 50px!important;
  line-height: 50px!important;
}
.touxiang{
  position: absolute;
  right:67px;
  width:50px;
  height:50px;
  line-height: 100px;
}
</style>