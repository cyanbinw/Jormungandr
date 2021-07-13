<template>
  <div
    id="table"
    style="
      padding: 24px;
      background-color: white;
      border-radius: 15px;
      position: absolute;
      width: 94%;
    "
  >
    <el-row>
      <el-col :span="3">
        <el-switch v-model="allService" active-text="运行所有服务"> </el-switch>
      </el-col>
    </el-row>
    <el-row >
      <el-button type="primary" @click="allWork" :loading="allWorkLoading" round
        >启动所有工作</el-button
      >
    </el-row>
    <el-row>
      <el-button type="primary" :loading="billWorkLoading" round
        >设置账本类别</el-button
      >
    </el-row>
  </div>
</template>

<script lang="ts">
import { ElNotification } from "element-plus";
import { defineComponent, h } from "vue";
import api from "../../api/index";

export default defineComponent({
  data() {
    return {
      allService: true,
      allWorkLoading: false,
      billWorkLoading: false,
    };
  },
  methods: {
    allWork() {
      ElNotification({
        title: "所有工作",
        message: h("i", { style: "color: teal" }, "已完成所有工作"),
      });
    },
    billWork() {
      this.billWorkLoading = true;
      this.axios
        .post(api.setBillNameWork)
        .then((response) => {
          this.billWorkLoading = false;
          ElNotification({
            title: "账本类别成功",
            message: h("i", { style: "color: teal" }, "已完成账本类别设置"),
          });
        })
        .catch((error) => {
          this.billWorkLoading = false;
          ElNotification({
            title: "账本类别失败",
            message: h("i", { style: "color: teal" }, error),
          });
        });
    },
  },
});
</script>

<style>
</style>