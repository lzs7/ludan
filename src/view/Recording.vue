<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" status-icon :rules="rules">
      <el-form-item label="订单编号" prop="order_number">
        <el-input v-model="form.order_number" placeholder="请输入订单编号"></el-input>
      </el-form-item>
      <el-form-item label="商品编号" prop="commodity_id">
        <el-input v-model="form.commodity_id" placeholder="请输入商品编号"></el-input>
      </el-form-item>
      <el-form-item label="商品数量" prop="commodity_number">
        <el-input v-model="form.commodity_number" placeholder="请输入商品数量"></el-input>
      </el-form-item>
      <el-form-item label="单价" prop="oneprice">
        <el-input v-model="form.oneprice" placeholder="请输入商品单价"></el-input>
      </el-form-item>
      <el-form-item label="总价" prop="headprice">
        <el-input v-model="form.headprice" placeholder="请输入商品总价"></el-input>
      </el-form-item>
      <el-form-item label="收货人" prop="order_name">
        <el-input v-model="form.order_name" placeholder="请输入收货人姓名"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="order_address">
        <el-input v-model="form.order_address" placeholder="请输入收货人地址"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="order_phone">
        <el-input v-model="form.order_phone" placeholder="请输入收货人电话"></el-input>
      </el-form-item>
      <el-form-item label="订单备注" prop="order_remark">
        <el-input type="textarea" v-model="form.order_remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
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
        order_number: "",
        commodity_id: "",
        commodity_number: "",
        oneprice: "",
        headprice: "",
        order_name: "",
        order_address: "",
        order_phone: "",
        order_remark: ""
      },
      rules: {
        order_number: [
          { required: true, message: "请输入订单编号", trigger: "blur" }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        commodity_id: [
          { required: true, message: "请输入商品编号", trigger: "blur" }
        ],
        commodity_number: [
          { required: true, message: "请输入商品数量", trigger: "blur" }
        ],
        oneprice: [
          { required: true, message: "请输入商品单价", trigger: "blur" }
        ],
        headprice: [
          { required: true, message: "请输入商品总价", trigger: "blur" }
        ],
        order_name: [
          { required: true, message: "请输入收货人姓名", trigger: "blur" }
        ],
        order_address: [
          { required: true, message: "请输入收货人地址", trigger: "blur" }
        ],
        order_phone: [
          {
            required: true,
            pattern: /^1[3-9]\d{9}$/,
            message: "请输入收货人电话",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      var _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          console.log(_this.form);
          // 发送axios请求
          var data = _this.form;
          let postData = this.$qs.stringify(data);
          console.log(postData);
          this.$axios({
            method: "post",
            url: "/HJshop/service/getentering",
            data: postData
          }).then(res => {
            console.log(res);
          });
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
  width: 600px;
  margin: 0 auto;
}
</style>