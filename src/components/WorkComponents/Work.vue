<template>
  <div
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
    <el-row>
      <el-button type="primary" @click="allWork" :loading="allWorkLoading" round
        >启动所有工作</el-button
      >
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="3">
        <el-button
          type="primary"
          :loading="investmentItemWorkLoading"
          @click="investmentItemWork()"
          round
          >设置Investment Item</el-button
        >
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3">
        <el-button
          type="primary"
          :loading="billWorkLoading"
          @click="billWork()"
          round
          >设置账本类别</el-button
        >
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3">
        <el-button
          type="primary"
          :loading="userWorkLoading"
          @click="userWork()"
          round
          >设置用户初始化</el-button
        >
      </el-col>
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
      investmentItemWorkLoading: false,
      billWorkLoading: false,
      userWorkloading: false,
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
            message: h("i", { style: "color: red" }, error),
          });
        });
    },
    userWork() {
      this.userWorkloading = true;
      this.axios
        .post(api.setUserWork)
        .then((response) => {
          this.userWorkloading = false;
          ElNotification({
            title: "用户初始化成功",
            message: h("i", { style: "color: teal" }, "已完成用户初始化设置"),
          });
        })
        .catch((error) => {
          this.userWorkloading = false;
          ElNotification({
            title: "用户初始化失败",
            message: h("i", { style: "color: red" }, error),
          });
        });
    },
    investmentItemWork() {
      this.userWorkloading = true;
      this.axios
        .post(api.setInvestmentItemWork)
        .then((response) => {
          this.userWorkloading = false;
          ElNotification({
            title: "InvestmentItem更新成功",
            message: h("i", { style: "color: teal" }, "已完成InvestmentItem更新"),
          });
        })
        .catch((error) => {
          this.userWorkloading = false;
          ElNotification({
            title: "InvestmentItem更新失败",
            message: h("i", { style: "color: red" }, error),
          });
        });
    },
  },
});
</script>

<style>
</style>