<template>
  <div>
    <el-container>
      <el-header>
        <span class="sect"><slect></slect></span>
        <span>产品经理操作页面</span>
        <span class="name">晓东</span>
      </el-header>
      <el-main>
        <div class="shenti">
          <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick"  style="height:600px">
            <el-tab-pane label="待处理" name="1">
            </el-tab-pane>
            <el-tab-pane label="已处理" name="2">

            </el-tab-pane>
            <el-tab-pane label="已通过" name="3">

            </el-tab-pane>
            <el-tab-pane label="未通过" name="4">

            </el-tab-pane>
          </el-tabs>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import select from '../view/select'
export default {
    
  name: "service",
  data() {
    return {
      activeName: '1'
    };
  },
    components:{
        slect:select
    },
  methods: {
     handleClick(tab, event) {
        console.log(tab, event);
      }
  }
};
</script>

<style scoped>
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
</style>