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
    <el-col :span="4">
      <el-button @click="RefreshTable()">刷新</el-button>
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
import moment from "moment";
import { defineComponent } from "vue";
import api from "../../api/index";
import { BillOption } from "../../service/BillModel";
import BillTableData from "../../service/BillTableData";

const tableData: BillTableData[] = [];

export default defineComponent({
  data() {
    return {
      tableData: [],
      typeList: [],
      billNameList: [],
      billOption: new BillOption(),
      dialogFormVisible: false,
      dataTitle: "",
      addOrUpdate: true,
      showTable: true,
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
        PageSize: this.pageSize,
        PageNumber: this.currentPage,
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
    CurrentChange(val) {
      var data = {
        PageSize: this.pageSize,
        PageNumber: val,
        BillName: this.billOption.billName,
        BillType: this.billOption.billType,
        AccountMax: this.billOption.accountMax,
        AccountMin: this.billOption.accountMin,
        DateMax: this.billOption.dateMax,
        DateMin: this.billOption.dateMin,
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
.el-row {
  margin-bottom: 20px;
}
</style>