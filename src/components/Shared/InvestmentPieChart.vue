<template>
  <div id="InvestmentPieChart" style="width: 100%; height: 800px;float:left;"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import InvestmentModel from "../../service/InvestmentModel";

export default {
  name: "InvestmentPieChart",
  props: ["item"],
  data() {
    return {
      value: new Object(),
    };
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
  watch: {
      item: function(newVal,oldVal){
        this.value = newVal; //newVal即是chartData
        var i = new InvestmentModel()
        i.showInvestmentPieChart(this.value)
      }
  }
};
</script>

<style>
</style>