<template>
  <InvestmentPieChart :item="InvestmentValue" />
  <InvestmentHistogram :item="InvestmentValue" />
  <BillLineChart v-for="(item,index) in BillValue" :key="index" :item="item" :index="index" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import api from "../../api/index";
import BillLineChart from "../Shared/BillsLineChart.vue";
import InvestmentHistogram from "../Shared/InvestmentHistogram.vue";
import InvestmentPieChart from "../Shared/InvestmentPieChart.vue";
import moment from "moment";

export default defineComponent({
  name: "Home",
  components: {
    InvestmentPieChart,
    InvestmentHistogram,
    BillLineChart,
  },
  data() {
    return {
      InvestmentValue: new Object(),
      BillValue: [],
    };
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
  methods: {},
  mounted() {
    this.axios
      .post(api.getInvestments)
      .then((response) => {
        // 指定图表的配置项和数据
        this.InvestmentValue = response;
      })
      .catch((error) => {
        console.log(error);
      });
    this.axios
      .post(api.getFourMonthAllData)
      .then((response) => {
        var yearMonth: string = "0";
        var num: number = 0
        response.data.forEach((c) => {
          if (yearMonth == "0") {
            yearMonth =
              moment(c.Date).format("YYYY") + moment(c.Date).format("MM");
            (this.BillValue[num] as any[]) = [];
          }
          if (
            yearMonth != "0" &&
            yearMonth ==
              moment(c.Date).format("YYYY") + moment(c.Date).format("MM")
          ) {
            c.Date = moment(c.Date).format("yyyy-MM-DD");
            if (yearMonth != moment(c.Date).format("YYYY") + moment(c.Date).format("MM")) {
              (this.BillValue[num] as any[]) = [];
            }
            (this.BillValue[num] as any[]).push(c);
          } else {
            num ++
            yearMonth =
              moment(c.Date).format("YYYY") + moment(c.Date).format("MM");
            c.Date = moment(c.Date).format("yyyy-MM-DD");
            if (!(this.BillValue[num] as any[])) {
              (this.BillValue[num] as any[]) = [];
            }
            (this.BillValue[num] as any[]).push(c);
          }
        });
        this.BillValue;
        console.log(this.BillValue)
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>

<style scoped>
</style>
