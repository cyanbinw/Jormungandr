<template>
  <el-row>
    <el-col>
      <el-table
        :data="billNameList"
        border
        style="width: 100%"
        max-height="400"
      >
        <el-table-column fixed prop="ID" label="ID"> </el-table-column>
        <el-table-column fixed prop="BillName" label="Name"> </el-table-column>
        <el-table-column fixed prop="Color" label="Color">
          <template #default="scope">
            <div style="width: 80%; height:90%;"> 
              <el-tag :color="scope.row.Color">颜色展示</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column fixed prop="Icon" label="Icon">
          <template #default="scope">
            <i :class="scope.row.Icon"></i>
            <span>{{ scope.row.Icon }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="mini" @click="openEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>

  <el-dialog
    title="更新"
    v-model="dialogVisible"
    width="60%"
    :before-close="handleClose"
  >
    <el-row>
      <el-col :span="3">
        <el-input
          placeholder="Bill Name"
          v-model="selectedBillName.BillName"
          :disabled="true"
        >
        </el-input>
      </el-col>
      <el-col :span="1"> </el-col>
      <el-col :span="2">
        <el-color-picker v-model="selectedBillName.Color"></el-color-picker>
      </el-col>
      <el-col :span="5">
        <el-select v-model="selectedBillName.Icon" placeholder="图标">
          <el-option v-for="item in iconList" :key="item" :value="item">
            <i :class="item"></i>
            <span>{{ item }}</span>
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button @click="save()">保存</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import api from "../../../api/index";
import { BillNameConfig } from "../../../service/BillTableData";
import { ElNotification } from "element-plus";
import { Icon } from "../../../service/Common";
import { h } from "vue";

export default {
  name: "BillNameConfig",
  data() {
    return {
      selectedBillNameID: null,
      selectedBillName: new BillNameConfig(),
      billNameList: [],
      iconList: Icon,
      dialogVisible: false,
    };
  },
  methods: {
    change() {
      this.selectedBillName = this.billNameList.find(
        (c: BillNameConfig) => c.ID == this.selectedBillNameID
      ) as any;
      console.log(this.selectedBillName);
    },
    openEdit(index: number, data: BillNameConfig) {
      this.selectedBillName = data;
      this.dialogVisible = true;
    },
    save() {
      this.axios
        .post(api.updateBillName, this.selectedBillName)
        .then((response) => {
          // 指定图表的配置项和数据
          if (response.data.successful) {
            ElNotification({
              title: "保存成功",
            });
            this.dialogVisible = false;
          } else {
            ElNotification({
              title: "保存失败",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.axios
      .post(api.getBillNameList)
      .then((response) => {
        // 指定图表的配置项和数据
        this.billNameList = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>