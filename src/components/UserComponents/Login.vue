<template>
  <el-row style="margin-top: 400px;">
    <el-col :span="4" :offset="9">
      <el-input placeholder="User Name" v-model="userName" clearable>
      </el-input>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="4" :offset="9">
      <el-input
        placeholder="Password"
        v-model="password"
        show-password
      ></el-input>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="4" :offset="9">
      <el-checkbox v-model="remember">记住我</el-checkbox>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="4" :offset="9">
      <el-button type="primary" @loading="loading" @click="login()"
        >登陆</el-button
      >
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "../../router";
import api from "../../api/index";

export default defineComponent({
  data() {
    return {
      userName: "",
      password: "",
      loading: false,
      remember: false,
    };
  },
  methods: {
    login() {
      this.loading = true;
      var value = {
        userName: this.userName,
        password: this.password,
      };
      this.axios
        .post(api.login, value)
        .then((response) => {
          if (response.data.successful == true) {
            router.push({
              path: "/Filter/" + response.data.data + "/Home"
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
      return;
    },
  },
});
</script>

<style>
</style>