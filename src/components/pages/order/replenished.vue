<template>
  <el-table :data="tableData" height="250" border style="width: 100%">
    <el-table-column prop="commodityNumber" label="商品编号"></el-table-column>
    <el-table-column prop="commodityname" label="商品名"></el-table-column>
    <el-table-column prop="Specifications" label="商品规格"></el-table-column>
    <el-table-column prop="number" label="数量"></el-table-column>
    <el-table-column label="操作" width="130">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">接单</el-button>
        <el-button @click="returnorder(scope.row)" type="text" size="small">退单</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          commodityNumber: "001",
          commodityname: "华为P30",
          Specifications: "128G+6G",
          number: "20"
        },
        {
          commodityNumber: "002",
          commodityname: "128G+6G",
          Specifications: "00014121",
          number: "20"
        }
      ]
    };
  },
  methods: {
    handleClick(index, row) {
      console.log(index, row);
    },
    returnorder(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style scoped>
p {
  margin: 0;
}
</style>