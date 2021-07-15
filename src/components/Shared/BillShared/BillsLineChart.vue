<template>
  <div :id="name + index" style="width: 50%; height: 400px; float: left"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BillModel from "../../../service/BillModel";

export default {
  name: "BillLineChart",
  props: ["item", "index"],
  data() {
    return {
      value: new Object(),
      name: "BillLineChart",
    };
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
  watch: {
    item(newVal) {
      this.value = newVal;
      var i = new BillModel();
      i.showBillLineChart(this.value, this.index);
    },
  },
  mounted() {
    var i = new BillModel();
    i.showBillLineChart(this.item, this.index);
  },
};
</script>

<style>
</style>