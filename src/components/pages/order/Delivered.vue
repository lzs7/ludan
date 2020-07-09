<template>
     <el-table
    :data="tableData"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="commodityNumber"
      label="商品编号"
      width="130">
    </el-table-column>
    <el-table-column
      prop="commodityname"
      label="商品"
      width="130">
    </el-table-column>
    <el-table-column
      prop="orderNumber"
      label="订单号">
    </el-table-column>
    <el-table-column
      prop="mode"
      label="交易方式">
      <template slot-scope="scope">
        <p>{{scope.row.mode}}</p>
        <p>{{scope.row.cnumber}}</p>
      </template>
    </el-table-column>
    <el-table-column
      prop="onePrice"
      label="单价">
    </el-table-column>
    <el-table-column
      prop="number"
      label="数量">
    </el-table-column>
    <el-table-column
      prop="supplier"
      label="供应商信息">
       <template slot-scope="scope">
        <p>{{scope.row.supplier}}</p>
        <p>{{scope.row.sphone}}</p>
      </template>
    </el-table-column>
    <el-table-column
      prop="payment"
      label="实付款">
    </el-table-column>
    <el-table-column
      prop="user"
      label="用户信息"
      width="150">
      <template slot-scope="scope">
         <el-popover
          placement="top-start"
          title="地址"
          width="200"
          trigger="hover"
          :content="scope.row.address"
        >
          <p slot="reference">{{ scope.row.user }}</p>
          <p slot="reference">{{ scope.row.phone }}</p>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      prop="status"
      label="交易状态"
      >
    </el-table-column>
    <el-table-column
      prop="time"
      label="更新时间">
    </el-table-column>
    <el-table-column
      prop="remarks"
      label="备注">
    </el-table-column>

  </el-table>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          commodityNumber: '001',
          commodityname: '华为P30',
          orderNumber: '111222333',
          mode:'线下交易',
          onePrice:'5000',
          number:'1',
          supplier:'张飞',
          sphone:'18645162100',
          payment:'5000',
          user:'王二',
          phone:'15121365214',
          address:'湖南省长沙市芙蓉区',
          status:'已发货',
          time:'2012-02-03',
          remarks:'无',
        }, {
           commodityNumber: '002',
          commodityname: '华为P40',
          orderNumber: '00014121',
          mode:'顺丰快递',
          cnumber:'SF55236',
          onePrice:'5000',
          number:'1',
          supplier:'张大',
          sphone:'18645162200',
          payment:'5000',
          user:'王似 ',
          phone:'15122144442',
          address:'湖南省长沙市芙蓉区',
          status:'已发货',
          time:'2012-02-03',
          remarks:'无',
        }]
      }
    }
  }
</script>
<style scoped>
  p{
    margin :0
  }
</style>