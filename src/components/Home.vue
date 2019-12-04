<template>
  <div class="home-container">
    <el-tabs :tab-position="tabPosition" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="创建周报" name="first">
        <h3>周报</h3>
        <el-row>
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
            <div>内容</div>
          </el-col>
          <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
            <el-input
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 10}"
              placeholder="请输入内容"
              v-model="progress"
            ></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
            <div>日期</div>
          </el-col>
          <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
            <el-date-picker
              v-model="datePair"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width:100%"
            ></el-date-picker>
          </el-col>
        </el-row>

        <el-button type="primary" style="width:100%;">创建周报</el-button>
      </el-tab-pane>
      <el-tab-pane label="查询周报" name="second">
        <h3>查询周报</h3>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <div>查询用户</div>
        </el-col>
        <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
          <el-select v-model="username" placeholder="选择用户" style="width: 100%;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>

        <el-table :data="tableData" border style="width: 100%;" max-height="300">
          <el-table-column prop="datePair" label="起始日期"></el-table-column>
          <el-table-column prop="name" label="用户名"></el-table-column>
          <el-table-column prop="content" label="周报内容"></el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button @click="update(scope.row)" type="text" size="small">编辑</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-button type="primary" style="width:100%;">导出表格</el-button>
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
      datePair: "",

      tableData: [
        {
          datePair: "2016/05/03-2016/05/10",
          name: "王小虎",
          content: "划水"
        },
        {
          datePair: "2016/05/03-2016/05/10",
          name: "王小虎",
          content: "划水"
        },
        {
          datePair: "2016/05/03-2016/05/10",
          name: "王小虎",
          content: "划水"
        },
        {
          datePair: "2016/05/03-2016/05/10",
          name: "王小虎",
          content: "划水"
        },
        {
          datePair: "2016/05/03-2016/05/10",
          name: "王小虎",
          content: "划水"
        },
        {
          datePair: "2016/05/03-2016/05/10",
          name: "王小虎",
          content: "划水"
        },
        {
          datePair: "2016/05/03-2016/05/10",
          name: "王小虎",
          content: "划水"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    update(row) {
      console.log(row);
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
