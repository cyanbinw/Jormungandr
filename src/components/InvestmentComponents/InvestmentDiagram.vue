<template>
    <InvestmentDiagramOffspring v-for="(item,index) in tableData" :key="index" :item="item" :index="index"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import api from "../../api/index";
import InvestmentTableData, {
  InvestmentData,
} from "../../service/InvestmentTableData";
import InvestmentDiagramOffspring from '../Shared/InvestmentDiagramOffspring.vue';

export default defineComponent({
  components: { InvestmentDiagramOffspring },
    data() {
        return {
            tableData: [],
        }
    },
    mounted() {
    this.axios
      .post(api.getInvestmentDiagram)
      .then((response) => {
        // 指定图表的配置项和数据
        this.tableData = response.data.data
        this.$forceUpdate();
      })
      .catch((error) => {
        console.log(error);
      });
  },
})
</script>

<style>

</style>