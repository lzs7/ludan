<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="commodityNumber" label="商品编号" width="180"></el-table-column>
      <el-table-column prop="commodityname" label="商品名" width="180"></el-table-column>
      <el-table-column prop="oprice" label="原价"></el-table-column>
      <el-table-column prop="pprice" label="现价"></el-table-column>
      <el-table-column prop="stock" label="库存"></el-table-column>
      <el-table-column prop="remarks" label="商品备注" width="180"></el-table-column>
      <el-table-column prop="classification" label="分类"></el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          commodityNumber: "A15156151",
          commodityname: "iphonex max",
          oprice: "5000",
          pprice: "4900",
          remarks: "官方标配",
          classification: "手机"
        },
        {
          commodityNumber: "A1156151",
          commodityname: "iphonex11 pro",
          oprice: "9000",
          pprice: "8000",
          remarks: "官方标配",
          classification: "手机"
        }
      ]
    };
  }
};
</script>