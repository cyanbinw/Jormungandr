<template>
  <div id="BillPieChart" style="width: 100%; height: 800px;float:left;"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BillModel from "../../service/BillModel";

export default {
  name: "BillPieChart",
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
        var i = new BillModel()
        i.showBillPieChart(this.value)
      }
  }
};
</script>

<style>

</style>