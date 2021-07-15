<template>
  <div
    style="
      padding: 24px;
      background-color: white;
      border-radius: 15px;
      position: absolute;
      width: 94%;
      height: 80%;
    "
  >
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="Bill Name 设置" name="1">
        <BillNameConfig />
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback" name="2"> </el-collapse-item>
      <el-collapse-item title="效率 Efficiency" name="3"> </el-collapse-item>
      <el-collapse-item title="可控 Controllability" name="4">
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BillNameConfig from "./SubComponents/BillNameConfig.vue"

export default defineComponent({
  components: { BillNameConfig },
  data() {
    return {
      activeNames: ["0"],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
});
</script>
