<template>
  <el-row>
    <el-col :span="4">
      <el-input placeholder="User Name" v-model="userName" clearable>
      </el-input>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="4">
      <el-input
        placeholder="Password"
        v-model="password"
        show-password
      ></el-input>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="4">
      <el-checkbox v-model="remember">记住我</el-checkbox>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      userName: "",
      password: "",
      remember: false,
    };
  },
  methods: {},
});
</script>

<style>
</style>