<template>
  <el-row>
    <el-col :span="24">
      <el-button @click="RefreshTable()">刷新</el-button>
    </el-col>
  </el-row>
  <div style="padding: 24px;background-color: white;border-radius: 15px;">
    <el-row>
      <el-col :span="24" v-if="showTable" style="background-color: white;padding: 0px;">
        <el-skeleton animated style="margin: 10px; width: 95%"
      /></el-col>
      <el-col :span="24" v-if="!showTable" style="padding: 0px;"
        ><el-table
          v-loading="showTable"
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'Date', order: 'descending' }"
          highlight-current-row
        >
          <el-table-column sortable prop="BillNumber" label="BillNumber">
          </el-table-column>
          <el-table-column sortable prop="BillName" label="BillName">
          </el-table-column>
          <el-table-column
            sortable
            prop="Account"
            label="Account"
          ></el-table-column>
          <el-table-column sortable prop="Date" label="Date"> </el-table-column>
          <el-table-column prop="Type" label="Type"> </el-table-column>
          <el-table-column prop="Remarks" label="Remarks">
          </el-table-column> </el-table
      ></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "../../api/index";
import BillTableData from "../../service/BillTableData";

const tableData: BillTableData[] = [];

export default defineComponent({
  data() {
    return {
      tableData: [],
      typeList: [],
      activityList: [],
      dialogFormVisible: false,
      dataTitle: "",
      addOrUpdate: true,
      showTable: true,
      itemList: [] as [],
    };
  },
  setup() {},
  methods: {
    formatter(row, column) {
      return row.address;
    },
    RefreshTable() {
      this.showTable = true;
      this.axios
        .post(api.getBillsAllData)
        .then((response) => {
          // 指定图表的配置项和数据
          this.tableData = [];
          response.data.forEach((c) => {
            (this.tableData as BillTableData[]).push(new BillTableData(c));
          });

          this.showTable = false;
          this.$forceUpdate();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Refresh() {
      this.$forceUpdate();
    },
  },
  mounted() {
    this.axios
      .post(api.getBillsAllData)
      .then((response) => {
        // 指定图表的配置项和数据
        response.data.forEach((c) => {
          (this.tableData as BillTableData[]).push(new BillTableData(c));
        });

        this.showTable = false;
        this.$forceUpdate();
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
</style>