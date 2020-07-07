<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" status-icon :rules="rules">
      <el-form-item label="订单编号" prop="orderNumber">
        <el-input v-model="form.orderNumber" placeholder="请输入订单编号"></el-input>
      </el-form-item>
      <el-form-item label="商品编号" prop="commodityNumber">
        <el-input v-model="form.commodityNumber" placeholder="请输入商品编号"></el-input>
      </el-form-item>
      <el-form-item label="商品数量" prop="number">
        <el-input v-model="form.number" placeholder="请输入商品数量"></el-input>
      </el-form-item>
      <el-form-item label="单价" prop="onePrice">
        <el-input v-model="form.onePrice" placeholder="请输入商品单价"></el-input>
      </el-form-item>
      <el-form-item label="总价" prop="totalPrice">
        <el-input v-model="form.totalPrice" placeholder="请输入商品总价"></el-input>
      </el-form-item>
      <el-form-item label="收货人" prop="consignee">
        <el-input v-model="form.consignee" placeholder="请输入收货人姓名"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address" >
        <el-input v-model="form.address" placeholder="请输入收货人地址"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone" >
        <el-input v-model="form.phone" placeholder="请输入收货人电话"></el-input>
      </el-form-item>
      <el-form-item label="订单备注" prop="desc">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(form)">立即创建</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        orderNumber: "",
        commodityNumber:"",
        number:"",
        onePrice:"",
        totalPrice:"",
        consignee:"",
        address:"",
        phone:"",
        desc:"",
      },
      rules: {
        orderNumber: [
          { required: true, message: "请输入订单编号", trigger: "blur" }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        commodityNumber:[
            { required: true, message: "请输入商品编号", trigger: "blur" }
        ],
        number:[
            { required: true, message: "请输入商品数量", trigger: "blur" }
        ],
        onePrice:[
            { required: true, message: "请输入商品单价", trigger: "blur" }
        ],
        totalPrice:[
            { required: true, message: "请输入商品总价", trigger: "blur" }
        ],
        consignee:[
            { required: true, message: "请输入收货人姓名", trigger: "blur" }
        ],
        address:[
            { required: true, message: "请输入收货人地址", trigger: "blur" }
        ],
        phone:[
            { required: true,pattern:/^1[3-9]\d{9}$/, message: "请输入收货人电话", trigger: "blur" }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          console.log(formName)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.el-form {
  width: 590px;
}
</style>