<template>
  <el-row>
    <el-col :span="24">
      <div class="block">
        <span class="demonstration">月</span>
        <el-date-picker v-model="month" type="month" placeholder="选择月">
        </el-date-picker>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "../../api/index";
import InvestmentTableData, {
  InvestmentData,
} from "../../service/InvestmentTableData";
import InvestmentDiagramOffspring from "../Shared/InvestmentShared/InvestmentDiagramOffspring.vue";

export default defineComponent({
  components: { InvestmentDiagramOffspring },
  data() {
    return {
      tableData: [],
      month: '',
    };
  },
  mounted() {
    this.axios
      .post(api.getInvestmentDiagram)
      .then((response) => {
        // 指定图表的配置项和数据
        this.tableData = response.data.data;
        this.$forceUpdate();
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>

<style>
</style>