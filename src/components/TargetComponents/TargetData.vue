<template>
  <el-row>
    <el-col :span="24">
      <el-button @click="AddTarget()">添加</el-button>
      <el-button @click="UpdateTarget()">修改</el-button>
      <el-button @click="RefreshTarget()">刷新</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="Present" name="1">
          <el-row>
            <el-col :span="12">
              <h3>5年目标: {{ TargetData.Target }}</h3>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6"> 收入: {{ TargetData.Revenue }} </el-col>
            <el-col :span="6"> 资产: {{ TargetData.AssetsData }} </el-col>
          </el-row>
          <el-row>
            <el-col :span="6"> 支出: {{ TargetData.Expend }} </el-col>
            <el-col :span="6"> 负债: {{ TargetData.LiabilitiesData }} </el-col>
          </el-row>
          <el-row>
            <el-col :span="12"> 技能: {{ TargetData.Skill }} </el-col>
          </el-row>
          <el-row>
            <el-col :span="12"> 收入: {{ TargetData.Other }} </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="Future" name="2">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>
            清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
          </div>
          <div>
            帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="Past"
          name="3"
          v-for="(item, index) in tableData"
          :key="index"
          :item="item"
          :index="index"
        >
        </el-collapse-item>
      </el-collapse>
    </el-col>
  </el-row>

  <el-dialog :title="dataTitle" v-model="dialogFormVisible">
    <el-form :model="form">
      <el-row>
        <el-col :span="6"> 5年目标: </el-col>
        <el-col :span="6">
          <el-input placeholder="Target" v-model="TargetData.Target" clearable>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2"> 收入: </el-col>
        <el-col :span="2">
          <el-input placeholder="Revenue" v-model="TargetData.Revenue" clearable>
          </el-input
        ></el-col>
        <el-col :span="2"> 资产: </el-col>
        <el-col :span="18">
          <el-input
            placeholder="AssetsData"
            v-model="TargetData.AssetsData"
            clearable
          >
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2"> 支出: </el-col>
        <el-col :span="2">
          <el-input placeholder="Expend" v-model="TargetData.Expend" clearable>
          </el-input>
        </el-col>
        <el-col :span="2"> 负债: </el-col>
        <el-col :span="18">
          <el-input
            placeholder="LiabilitiesData"
            v-model="TargetData.LiabilitiesData"
            clearable
          >
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"> 技能: </el-col>
        <el-col :span="6">
          <el-input placeholder="Skill" v-model="TargetData.Skill" clearable>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"> 收入: </el-col>
        <el-col :span="12">
          <el-input placeholder="Other" v-model="TargetData.Other" clearable>
          </el-input>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="Cancel()">取 消</el-button>
        <el-button v-if="addOrUpdate" type="primary" @click="Add()"
          >确 定</el-button
        >
        <el-button v-if="!addOrUpdate" type="primary" @click="Edit()"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "../../api/index";
import TargetData from "../../service/Target";

export default defineComponent({
  components: {},
  data() {
    return {
      tableData: [],
      activeName: "1",
      TargetData: new TargetData(),
      dialogFormVisible: false,
    };
  },
  methods: {
    AddTarget() {
      this.dialogFormVisible = true;
    },
    UpdateTarget() {},
    RefreshTarget() {},
    Add() {
      
    },
    Edit() {
      
    },
    Cancel() {
      this.dialogFormVisible = false;
    },
  },
  mounted() {
    this.axios
      .post(api.getTarget)
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
.el-collapse-item__header {
  padding-left: 10px;
}

.el-col {
  padding-left: 15px;
}
</style>