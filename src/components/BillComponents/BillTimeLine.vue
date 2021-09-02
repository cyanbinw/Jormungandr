<template>
  <div
    style="
      padding: 24px;
      background-color: white;
      border-radius: 15px;
      position: absolute;
      width: 94%;
      height: 75%;
      overflow-y: auto;
    "
    @scroll="ScrollEvent"
  >
    <el-timeline>
      <el-timeline-item
        v-for="(item, i) in tableData"
        :key="i"
        :timestamp="item.Date"
        :color="item.Color"
        size="large"
        :icon="item.Icon"
        placement="top"
      >
        {{ item.Type }} - {{ item.BillName }} : {{ item.Account }}
        <br />
        {{ item.Remarks }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "../../api/index";
import { BillTimeLine } from "../../service/BillTableData";

const tableData: BillTimeLine[] = [];

export default defineComponent({
  data() {
    return {
      tableData: [],
      tableHeight: 0,
      pageSize: 100,
      currentPage: 1,
    };
  },
  methods: {
    ScrollEvent(e) {
      if (
        e.srcElement.scrollTop + e.srcElement.clientHeight >=
        e.srcElement.scrollHeight - 1
      ) {
        this.currentPage += 1;
        var data = {
          PageSize: this.pageSize,
          PageNumber: this.currentPage,
        };

        this.GetData(data);
      }
    },
    GetData(data: any) {

      this.axios
        .post(api.getBillsDataByPage, data)
        .then((response) => {
          // 指定图表的配置项和数据
          response.data.BillData.forEach((c) => {
            (this.tableData as BillTimeLine[]).push(new BillTimeLine(c));
          });

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
      PageNumber: this.currentPage,
    };

    this.GetData(data);
  },
});
</script>

<style>
</style>