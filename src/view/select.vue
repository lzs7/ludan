<template>
  <el-autocomplete
    class="inline-input"
    value-key="name"
    v-model="input"
    :fetch-suggestions="querySearch"
    placeholder="请输入内容"
    :trigger-on-focus="false"
    @select="handleSelect"
  ></el-autocomplete>
</template>
<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    async querySearch(queryString, cb) {
      var chId = "";
      var user = {
        mer_id: "",
        ch_id: chId
      };
      //这里是从后台获取数据
      await getMohu(queryString, user).then(res => {
        // this.restaurants = res
        this.restaurants = [
          {
            name: "粤A05965D"
          },
          {
            name: "粤A02637D"
          },
          {
            name: "粤A02891D"
          }
        ];
        var restaurants = this.restaurants;
        var results = queryString ? this.searchData(queryString) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      });
    },
    searchData(issue_content) {
      return this.restaurants.filter(function(product) {
        return Object.keys(product).some(function(key) {
          return (
            String(product[key])
              .toUpperCase()
              .indexOf(issue_content) > -1
          );
        });
      });
      return this.products;
    },
    handleSelect(item) {
      console.log(item);
    }
  }
};
</script>
