<template>
  <el-row>
    <el-select
      v-model="selectedBillNameID"
      @change="change"
      placeholder="请选择"
    >
      <el-option
        v-for="item in billNameList"
        :key="item.ID"
        :label="item.BillName"
        :value="item.ID"
      >
      </el-option>
    </el-select>
  </el-row>
  <el-row>
    <el-col :span="3">
      <el-input
        placeholder="Bill Name"
        v-model="selectedBillName.BillName"
        :disabled="true"
      >
      </el-input>
    </el-col>
    <el-col :span="1"> </el-col>
    <el-col :span="2">
      <el-color-picker v-model="selectedBillName.Color"></el-color-picker>
    </el-col>
    <el-col :span="5">
      <el-select v-model="selectedBillName.Icon" placeholder="图标">
        <el-option v-for="item in iconList" :key="item" :value="item">
          <i :class="item"></i>
          <span>{{ item }}</span>
        </el-option>
      </el-select>
    </el-col>
  </el-row>
  <el-row>
    <el-button @click="save()">保存</el-button>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import api from "../../../api/index";
import { BillNameConfig } from "../../../service/BillTableData";
import { ElNotification } from "element-plus";
import { Icon } from "../../../service/Common";
import { h } from "vue";

export default {
  name: "BillNameConfig",
  data() {
    return {
      selectedBillNameID: null,
      selectedBillName: new BillNameConfig(),
      billNameList: [],
      iconList: Icon,
    };
  },
  methods: {
    change() {
      this.selectedBillName = this.billNameList.find(
        (c: BillNameConfig) => c.ID == this.selectedBillNameID
      ) as any;
      console.log(this.selectedBillName);
    },
    save() {
      this.axios
        .post(api.updateBillName, this.selectedBillName)
        .then((response) => {
          // 指定图表的配置项和数据
          if (response.data.successful) {
            ElNotification({
              title: "保存成功",
            });
          } else {
            ElNotification({
              title: "保存失败",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.axios
      .post(api.getBillNameList)
      .then((response) => {
        // 指定图表的配置项和数据
        this.billNameList = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>