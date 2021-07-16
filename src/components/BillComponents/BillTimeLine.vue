<template>
  <div style="
      padding: 24px;
      background-color: white;
      border-radius: 15px;
      position: absolute;
      width: 94%;
    ">
    <el-timeline>       
      <el-timeline-item v-for="(item,i) in tableData" :key="i" :timestamp="item.Date" color="#0bbd87" placement="top">
        {{ item.BillName }} : {{ item.Account }}
        <br>
        {{ item.Remarks }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts">
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
  methods: {
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
</style>