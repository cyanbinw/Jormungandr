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
        {{ item.position }}
      </el-descriptions-item>
      <el-descriptions-item
        label="总投资"
        label-align="center"
        align="center"
        :span="2"
        >{{ item.totalPositionInvestment }}</el-descriptions-item
      >
      <el-descriptions-item
        label="收回"
        label-align="center"
        align="center"
        :span="2"
      >
        {{ item.positionSell }}
      </el-descriptions-item>
      <el-descriptions-item
        label="手续费"
        label-align="center"
        align="center"
        :span="2"
      >
        {{ item.positionServiceCharge }}
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
        >
        {{ item.positionInformation }}
      </el-descriptions-item>
      <el-descriptions-item label="清空" label-align="center" align="center">
        {{ item.clearance }}
      </el-descriptions-item>
      <el-descriptions-item
        label="总投资"
        label-align="center"
        align="center"
        :span="2"
        >{{ item.totalClearanceInvestment }}</el-descriptions-item
      >
      <el-descriptions-item label="收益" label-align="center" align="center"
        >{{ item.clearanceSell }}</el-descriptions-item
      >
      <el-descriptions-item label="手续费" label-align="center" align="center">
        {{ item.clearanceServiceCharge }}
      </el-descriptions-item>
      <el-descriptions-item
        label="名称"
        label-align="center"
        align="center"
        :span="4"
        >
        {{ item.clearanceInformation }}
      </el-descriptions-item>
      <el-descriptions-item label="总计" label-align="center" align="center">
        {{ item.total }}
      </el-descriptions-item>
      <el-descriptions-item
        label="总投资"
        label-align="center"
        align="center"
        :span="2"
        >{{ item.totalTotalInvestment }}</el-descriptions-item
      >
      <el-descriptions-item label="收益" label-align="center" align="center"
        >{{ item.totalSell }}</el-descriptions-item
      >
      <el-descriptions-item label="手续费" label-align="center" align="center">
        {{ item.totalServiceCharge }}
      </el-descriptions-item>
      <el-descriptions-item label="收益展示" label-align="center" align="center"
        >
        {{ item.totalInformation }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "../../api/index";
import { InvestmentReportForm } from "../../service/InvestmentTableData";

export default defineComponent({
  data() {
    return {
      item: new InvestmentReportForm(),
    };
  },
  setup() {},
  mounted() {
    this.axios
      .post(api.getInvestmentReportForm)
      .then((response) => {
        // 指定图表的配置项和数据
        if(response.data.successful == true){
            this.item = response.data.data;
        this.$forceUpdate();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>

<style>
</style>