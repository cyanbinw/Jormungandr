<template>
  <div :id="nameAcount + index" style="width: 50%; height: 400px; float: left"></div>
  <div :id="nameNetWorth + index" style="width: 50%; height: 400px; float: left"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InvestmentModel from "../../service/InvestmentModel";

export default defineComponent({
  name: "InvestmentDiagramOffspring",
  props: ["item", "index"],
  data() {
    return {
      tableData: [],
      showTable: true,
      nameAcount: "InvestmentAcount",
      nameNetWorth: "InvestmentNetWorth",
    };
  },
  mounted() {
    var i = new InvestmentModel();
    i.showInvestmentLineChart(this.item, this.index, this.index);
  },
});
</script>

<style>
</style>