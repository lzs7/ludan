<template>
  <el-table :data="tableData" height="250" border style="width: 100%">
    <el-table-column prop="shopname" label="店铺名"></el-table-column>
    <el-table-column prop="commodityNumber" label="商品编号" width="130"></el-table-column>
    <el-table-column prop="commodityname" label="宝贝名称" width="130"></el-table-column>
    <el-table-column prop="oprice" label="原价(元)"></el-table-column>
    <el-table-column prop="pprice" label="现价(元)"></el-table-column>
    <el-table-column prop="stock" label="库存"></el-table-column>
    <el-table-column prop="remarks" label="商品备注"></el-table-column>
    <el-table-column prop="classification" label="分类"></el-table-column>
    <el-table-column prop="state" label="状态"></el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          shopname: "m1",
          commodityNumber: "001",
          commodityname: "华为P30",
          oprice: "5000",
          pprice: "4900",
          stock: "8",
          remarks: "无",
          classification: "手机",
          state:"已通过"
        },
        {
          shopname: "m1",
          commodityNumber: "002",
          commodityname: "iphone11",
          oprice: "9000",
          pprice: "8800",
          stock: "8",
          remarks: "无",
          classification: "手机",
          state:"已通过"
        }
      ]
    };
  },
  methods: {
  
  }
};
</script>
<style scoped>
p {
  margin: 0;
}
</style>