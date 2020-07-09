<template>
    <div>
         <el-row>
              <el-col :span="24">           
                <el-menu
                  :default-active="this.$route.path"
                  router
                  mode="horizontal"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                >
                  <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                    <template slot="title">
                      <i :class="[item.icon]"></i>
                      <span>{{ item.navItem }}</span>
                    </template>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        { name: "/commodity", navItem: "商品管理",icon:"el-icon-s-shop"},
        { name: "/order", navItem: "订单管理",icon:"el-icon-s-order"}
        // {name:'/components/Management',navItem:'权限管理'},
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.el-menu--horizontal>.el-menu-item{
    width:100%;
}
.el-row{
    height: 600px;
}
.el-menu.el-menu--horizontal{
  border:none
}
</style>