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
          <el-button size="mini" @click="dialogFormVisible = true">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
    <!-- 弹窗 -->
    <el-dialog title="修改商品信息" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="80px"  ref="form">
        <!-- <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" ></el-input>
        </el-form-item>-->
        <el-form-item label="商品编号" prop="commodityNumber">
          <el-input v-model="form.commodityNumber"></el-input>
        </el-form-item>
        <el-form-item label="商品名称" prop="commodityname">
          <el-input v-model="form.commodityname"></el-input>
        </el-form-item>
        <el-form-item label="商品原价" prop="oprice">
          <el-input v-model="form.oprice"></el-input>
        </el-form-item>
        <el-form-item label="库存" prop="stock">
          <el-input v-model="form.stock"></el-input>
        </el-form-item>
        <el-form-item label="现价" prop="pprice">
          <el-input v-model="form.pprice"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remarks">
          <el-input v-model="form.remarks"></el-input>
        </el-form-item>
        <el-form-item label="商品类型" prop="region">
          <el-select v-model="form.region" placeholder="请选择商品类型">
            <el-option label="手机" value="phone"></el-option>
            <el-option label="电脑" value="computer"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">确认修改</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
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
      ],
      dialogFormVisible: false,
      form: {
        name: "",
        commodityname: "",
        oprice: "",
        stock: "",
        pprice: "",
        remarks: "",
        region: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },

    submitForm(formName) {
         console.log(formName.oprice)
        this.$refs[formName].validate((valid) => {
           
          if (valid) {
            alert('submit!');
             console.log(formName)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
};
</script>
<style scoped>
.el-form {
  width: 70%;
  margin-left:10%
}
.el-select{
    width:100%;
    
}
</style>