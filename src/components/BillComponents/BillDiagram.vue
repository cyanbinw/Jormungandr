<template>
  <el-row>
    <el-col :span="3">
      <el-select
        v-model="billOption.billType"
        multiple
        collapse-tags
        style="margin-left: 20px"
        placeholder="Type"
      >
        <el-option
          v-for="item in typeList"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-input
        v-model="billOption.accountMin"
        placeholder="AccountMin"
      ></el-input>
    </el-col>
    <el-col :span="4">
      <el-date-picker
        v-model="billOption.dateMin"
        type="date"
        placeholder="DateMin"
      >
      </el-date-picker>
    </el-col>
    <el-col :span="2">
      <el-button @click="RefreshTable()">刷新</el-button>
    </el-col>
    <el-col :span="3">
      <el-input placeholder="请输入内容" v-model="total" :disabled="true">
        <template #prepend>金额:</template>
      </el-input>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="3">
      <el-select
        v-model="billOption.billName"
        multiple
        collapse-tags
        style="margin-left: 20px"
        placeholder="billName"
      >
        <el-option
          v-for="item in billNameList"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-input
        v-model="billOption.accountMax"
        placeholder="AccountMax"
      ></el-input>
    </el-col>
    <el-col :span="4">
      <el-date-picker
        v-model="billOption.dateMax"
        type="date"
        placeholder="DateMax"
      >
      </el-date-picker>
    </el-col>
    <el-col :span="4">
      <el-button @click="SelectTable()">查询</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <BillPieChart :item="value" />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "../../api/index";
import { BillOption } from "../../service/BillModel";
import BillTableData from "../../service/BillTableData";
import BillPieChart from "../Shared/BillPieChart.vue";

export default defineComponent({
  components: { BillPieChart },
  data() {
    return {
      value: {},
      typeList: [],
      billNameList: [],
      billOption: new BillOption(),
      dialogFormVisible: false,
      dataTitle: "",
      addOrUpdate: true,
      total: 0,
    };
  },
  setup() {},
  methods: {
    formatter(row, column) {
      return row.address;
    },
    RefreshTable() {
      var data = {
        BillName: this.billOption.billName,
        BillType: this.billOption.billType,
        AccountMax: this.billOption.accountMax,
        AccountMin: this.billOption.accountMin,
        DateMax: this.billOption.dateMax,
        DateMin: this.billOption.dateMin,
      };
      this.GetData(data);
    },
    SelectTable() {
      var data = {
        BillName: this.billOption.billName,
        BillType: this.billOption.billType,
        AccountMax: this.billOption.accountMax,
        AccountMin: this.billOption.accountMin,
        DateMax: this.billOption.dateMax,
        DateMin: this.billOption.dateMin,
      };
      this.GetData(data);
    },
    Refresh() {
      this.$forceUpdate();
    },
    SizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    GetData(data: any) {
      this.axios
        .post(api.getBillsDiagram, data)
        .then((response) => {
          // 指定图表的配置项和数据
          this.value = {};
          console.log(response);
          this.value = response.data.billCharts;
          this.total = response.data.total;
          this.$forceUpdate();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.GetData(new BillOption());

    this.axios
      .post(api.getBillsTableOption)
      .then((response) => {
        this.billNameList = response.data.BillName;
        this.typeList = response.data.BillType;
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>

<style>
</style>