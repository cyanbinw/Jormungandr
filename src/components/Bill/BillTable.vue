<template>
  <el-row>
    <el-col :span="3">
      <el-select
        v-model="value"
        multiple
        collapse-tags
        style="margin-left: 20px"
        placeholder="Type"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-input v-model="input" placeholder="AccountMin"></el-input>
    </el-col>
    <el-col :span="4">
      <el-date-picker v-model="value1" type="date" placeholder="DateMin">
      </el-date-picker>
    </el-col>
    <el-col :span="4">
      <el-button @click="RefreshTable()">刷新</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="3">
      <el-select
        v-model="value"
        multiple
        collapse-tags
        style="margin-left: 20px"
        placeholder="BillName"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-input v-model="input" placeholder="AccountMax"></el-input>
    </el-col>
    <el-col :span="4">
      <el-date-picker v-model="value1" type="date" placeholder="DateMax">
      </el-date-picker>
    </el-col>
    <el-col :span="4">
      <el-button @click="RefreshTable()">查询</el-button>
    </el-col>
  </el-row>
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
    <el-row>
      <el-col :span="24" style="padding: 0px"
        ><el-table
          v-loading="showTable"
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'Date', order: 'descending' }"
          :height="tableHeight"
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
      <el-col>
        <el-pagination
          @size-change="SizeChange"
          @current-change="CurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { number } from "echarts";
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
      tableHeight: 0,
      pageSize: 100,
      total: 0,
      currentPage: 1,
    };
  },
  setup() {},
  methods: {
    formatter(row, column) {
      return row.address;
    },
    RefreshTable() {
      var data = {
        PageSize: this.pageSize,
        PageNumber: this.currentPage,
      };
      this.GetData(data);
    },
    Refresh() {
      this.$forceUpdate();
    },
    SizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    CurrentChange(val) {
      var data = {
        PageSize: this.pageSize,
        PageNumber: val,
      };
      this.GetData(data);
    },

    GetData(data: any) {
      this.showTable = true;

      this.axios
        .post(api.getBillsTable, data)
        .then((response) => {
          // 指定图表的配置项和数据
          this.tableData = [];
          response.data.BillDetail.forEach((c) => {
            (this.tableData as BillTableData[]).push(new BillTableData(c));
          });

          this.total = response.data.Total;

          this.showTable = false;
          var num = document.getElementById("table")?.clientHeight;
          this.tableHeight = Number(num) - 60;
          this.$forceUpdate();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    var data = {
      PageSize: this.pageSize,
      PageNumber: 1,
    };

    this.GetData(data);
  },
});
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
</style>