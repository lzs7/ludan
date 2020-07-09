<template>
  <div class="ctent">
    <el-container>
      <el-header>
        <span>管理员操作页面</span>
        <span class="name">小智</span>
        <span class="touxiang"><img src="../assets/touxiang.gif" alt=""></span>
      </el-header>
      <el-main>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="商品编号" prop="commodityNumber">
            <el-input v-model="ruleForm.commodityNumber"></el-input>
          </el-form-item>
          <el-form-item label="商品名称" prop="commodityname">
            <el-input v-model="ruleForm.commodityname"></el-input>
          </el-form-item>
          <el-form-item label="商品规格" prop="specifications">
            <el-input v-model="ruleForm.specifications"></el-input>
          </el-form-item>
          <el-form-item label="商家ID" prop="commodityid">
            <el-input v-model="ruleForm.commodityid"></el-input>
          </el-form-item>
          <el-form-item label="商品原价" prop="oprice">
            <el-input v-model="ruleForm.oprice"></el-input>
          </el-form-item>
          <el-form-item label="库存" prop="stock">
            <el-input v-model="ruleForm.stock"></el-input>
          </el-form-item>
          <el-form-item label="现价" prop="pprice">
            <el-input v-model="ruleForm.pprice"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择手机类型">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        commodityNumber: "",
        commodityname: "",
        specifications: "",
        commodityid: "",
        oprice: "",
        stock: "",
        pprice: "",
        desc: ""
      },
      rules: {
        commodityNumber: [
          { required: true, message: "请输入商品编号", trigger: "blur" }
        ],
        commodityname: [
          { required: true, message: "请输入商品名", trigger: "blur" }
        ],
        specifications: [
          {
            required: true,
            message: "请输入商品规格",
            trigger: "blur"
          }
        ],
        commodityid: [
          {
            required: true,
            message: "请输入商家ID",
            trigger: "chblurange"
          }
        ],
        oprice: [
          {
            required: true,
            message: "请输入商品原价",
            trigger: "blur"
          }
        ],
        stock: [{ required: true, message: "请输入库存", trigger: "blur" }],
        pprice: [
          { required: true, message: "请填写商品现价", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择商品类型", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          console.log(this.ruleForm)
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
img{
  width:100%;
  height:100%
}
.ctent {
  width: 100%;
}
.el-form {
  width: 40%;
  margin: 0 auto;
  margin-top:10px;
}
.el-header {
  background-color: #545c64;
  color: #fff;
  line-height: 60px;
}
.name {
  position: absolute;
  right: 30px;
}
.touxiang{
  position: absolute;
  right:67px;
  width:50px;
  height:50px;
  line-height: 100px;
}
.el-select{
  width:100%
}
</style>