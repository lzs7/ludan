<template>
  <div>
    <div>
      <el-container>
        <el-header>
          <span class="name">欢迎您：小明</span>
          <span>供应商操作页面</span>
          
        </el-header>
        <el-container>
          
          <el-aside width="200px">
           <sidebar></sidebar>
          </el-aside>
          <el-main>
            <router-view class="menu-right" />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script>
import sidebar from './pages/sidebar'
export default {
  data() {
    return {
    
    };
  },
 components:{
   sidebar:sidebar
 }
};
</script>
 
<style>
.el-header {
  background-color: #545c64;
  color: #fff;
  line-height: 60px;
}
.name {
  position: absolute;
  left: 30px;
}
.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 37px;
  padding: 0;
}
.el-col-2 {
  width: 11%;
}
.el-aside{
  background-color: #545c64
}
</style>