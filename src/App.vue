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
          <!-- <el-menu-item index="2-3" @click="goToDesireTable()">愿望</el-menu-item>
          <el-submenu index="2-4">
            <template #title>选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu> -->
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
import router from "./router";

export default defineComponent({
  name: "App",
  methods: {
    goToHome() {
      router.push({ path: "/Home" });
    },
    goToInvestmentTable() {
      router.push({ path: "/Investment/InvestmentTable" });
    },
    goToInvestmentDiagram() {
      router.push({ path: "/Investment/InvestmentDiagram" });
    },
    goToTarget() {
      router.push({ path: "/Target/TargetData" });
    },
    goToBudgetExpenditure() {
      router.push({ path: "/Bill/BudgetExpenditure" });
    },
    goToBillTable() {
      router.push({ path: "/Bill/BillTable" });
    },
    goToBillDiagram() {
      router.push({ path: "/Bill/BillDiagram" });
    },
    goToBillTimeLine() {
      router.push({ path: "/Bill/BillTimeLine" });
    },
    goToDesireTable() {
      router.push({ path: "/Desire/DesireTable" });
    },
    goToWork() {
      router.push({ path: "/WorkAndService/Work" });
    },
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