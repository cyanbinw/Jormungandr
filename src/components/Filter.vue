<template>
  <el-container>
    <el-header>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#000000"
      >
        <el-menu-item index="1" @click="goToHome()">JORMUNGANDR</el-menu-item>
        <el-submenu index="2">
          <template #title>投资</template>
          <el-menu-item index="2-1" @click="goToInvestmentTable()"
            >投资表</el-menu-item
          >
          <!-- <el-menu-item index="2-1-2" @click="goToInvestmentDiagram()">投资资金曲线图</el-menu-item>
            <el-menu-item index="2-1-3" @click="goToTarget()">愿望</el-menu-item> -->
        </el-submenu>
        <el-submenu index="3">
          <template #title>账本</template>
          <el-menu-item index="3-1" @click="goToBudgetExpenditure()"
            >预算与开支</el-menu-item
          >
          <el-menu-item index="3-2" @click="goToBillTable()"
            >账本表</el-menu-item
          >
          <el-menu-item index="3-3" @click="goToBillDiagram()"
            >账本图表</el-menu-item
          >
          <el-menu-item index="3-4" @click="goToBillTimeLine()"
            >账本时间线</el-menu-item
          >
          <!-- <el-menu-item index="3-1-4">每月简报</el-menu-item> -->
          <!-- <el-menu-item index="2-3" @click="goToDesireTable()">愿望</el-menu-item>
          <el-submenu index="2-4">
            <template #title>选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu> -->
        </el-submenu>
        <el-submenu index="4">
          <template #title>工作台</template>
          <el-menu-item index="4-1" @click="goToWork()">工作</el-menu-item>
          <el-submenu index="4-2">
            <template #title>设置</template>
            <el-menu-item index="4-2-1" @click="goToBillSet()"
              >账本设置</el-menu-item
            >
          </el-submenu>
        </el-submenu>
        <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"
          ><a href="#" target="_blank">内容管理</a></el-menu-item
        > -->
      </el-menu>
      <div class="line"></div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "../router";
import api from "../api/index";

export default defineComponent({
  data() {
    return {
      id: "",
    };
  },

  methods: {
    goToHome() {
      router.push({ path: "/Filter/Home", params: { id: this.id } });
    },
    goToInvestmentTable() {
      router.push({
        path: "/Investment/InvestmentTable",
        params: { id: this.id },
      });
    },
    goToInvestmentDiagram() {
      router.push({
        path: "/Investment/InvestmentDiagram",
        params: { id: this.id },
      });
    },
    goToTarget() {
      router.push({ path: "/Target/TargetData", params: { id: this.id } });
    },
    goToBudgetExpenditure() {
      router.push({ path: "/Bill/BudgetExpenditure", params: { id: this.id } });
    },
    goToBillTable() {
      router.push({ path: "/Bill/BillTable", params: { id: this.id } });
    },
    goToBillDiagram() {
      router.push({ path: "/Bill/BillDiagram", params: { id: this.id } });
    },
    goToBillTimeLine() {
      router.push({ path: "/Bill/BillTimeLine", params: { id: this.id } });
    },
    goToDesireTable() {
      router.push({ path: "/Desire/DesireTable", params: { id: this.id } });
    },
    goToWork() {
      router.push({ path: "/WorkAndService/Work"});
    },
    goToBillSet() {
      router.push({ path: "/WorkAndService/BillSet", params: { id: this.id } });
    },
  },

  mounted() {
    var data = this.$route.params.id;
    if (typeof data == "string" && data != null && data != "") {
      this.axios
        .post(api.validateToken, data)
        .then((response) => {
          if ((response.data.Successful as boolean) == true) {
            data = response.data.Data;
          } else router.push({ path: "/User/LogIn" });
        })
        .catch((error) => {
          router.push({ path: "/User/LogIn" });
        });
      return;
    }
    router.push({ path: "/User/LogIn" });
    this.id = data as string;
  },
});
</script>

<style>
body {
  background-color: #51264b;
}
.el-header {
  margin: bottom 0px;
}
.el-menu {
  border-bottom: 0px !important;
}
</style>