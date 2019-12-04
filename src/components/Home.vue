<template>
  <div class="home-container">
    <el-tabs :tab-position="tabPosition" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="创建周报" name="first">
        <h3>用户管理</h3>
        <el-row>
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
            <div>内容</div>
          </el-col>
          <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
            <div>
              <el-input
                type="textarea"
                :autosize="{ minRows: 1, maxRows: 10}"
                placeholder="请输入内容"
                v-model="progress"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
            <div>日期</div>
          </el-col>
          <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
            <el-date-picker
              v-model="daterange"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
              style="width:100%"
            ></el-date-picker>
          </el-col>
        </el-row>

        <el-button
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleLogin"
          :loading="logining"
        >保存</el-button>
      </el-tab-pane>
      <el-tab-pane label="查询周报" name="second">
        <h3>查询周报</h3>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      tabPosition: "left",

      progress: "",
      daterange: ""
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
body {
  background: #DFE9FB;
}
.home-container {
  width: 80%;
  margin-left: 10%;
}
</style>
