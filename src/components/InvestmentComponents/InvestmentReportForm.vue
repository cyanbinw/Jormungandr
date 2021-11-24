<template>
  <div
    id="table"
    style="
      padding: 24px;
      background-color: white;
      border-radius: 15px;
      position: absolute;
      width: 94%;
      height: 75%;
    "
  >
    <el-descriptions title="投资总览" :column="4" border>
      <el-descriptions-item label="持有" label-align="center" align="center">
        6个
      </el-descriptions-item>
      <el-descriptions-item
        label="总投资"
        label-align="center"
        align="center"
        :span="2"
        >15000</el-descriptions-item
      >
      <el-descriptions-item
        label="收回"
        label-align="center"
        align="center"
        :span="2"
      >
        4000
      </el-descriptions-item>
      <el-descriptions-item
        label="手续费"
        label-align="center"
        align="center"
        :span="2"
      >
        20
      </el-descriptions-item>
      <el-descriptions-item
        label="盈余"
        label-align="center"
        align="center"
        :span="2"
        >500</el-descriptions-item
      >
      <el-descriptions-item
        label="仓位"
        label-align="center"
        align="center"
        :span="4"
        >特变电工 (20%) 生物医药 (10%) 特变电工 (20%) 生物医药 (10%) 特变电工
        (20%) 生物医药 (10%)
      </el-descriptions-item>
      <el-descriptions-item label="清空" label-align="center" align="center">
        3个
      </el-descriptions-item>
      <el-descriptions-item
        label="总投资"
        label-align="center"
        align="center"
        :span="2"
        >15000</el-descriptions-item
      >
      <el-descriptions-item label="收益" label-align="center" align="center"
        >500</el-descriptions-item
      >
      <el-descriptions-item label="手续费" label-align="center" align="center">
        20
      </el-descriptions-item>
      <el-descriptions-item
        label="名称"
        label-align="center"
        align="center"
        :span="4"
        >特变电工 (20%) 生物医药 (10%) 特变电工 (20%) 生物医药 (10%) 特变电工
        (20%) 生物医药 (10%)
      </el-descriptions-item>
      <el-descriptions-item label="总计" label-align="center" align="center">
        9个
      </el-descriptions-item>
      <el-descriptions-item
        label="总投资"
        label-align="center"
        align="center"
        :span="2"
        >15000</el-descriptions-item
      >
      <el-descriptions-item label="收益" label-align="center" align="center"
        >500</el-descriptions-item
      >
      <el-descriptions-item label="手续费" label-align="center" align="center">
        20
      </el-descriptions-item>
      <el-descriptions-item label="收益展示" label-align="center" align="center"
        >特变电工 (20%) 生物医药 (10%) 特变电工 (20%) 生物医药 (10%) 特变电工
        (20%) 生物医药 (10%)
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElDatePicker } from "element-plus";

export default defineComponent({});
</script>

<style>
</style>