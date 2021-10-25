<template>
  <el-row>
    <el-col :span="24">
      <el-button @click="InvestmentOpenAdd()">添加</el-button>
      <el-button @click="RefreshTable()">刷新</el-button>
    </el-col>
  </el-row>
  <div
    id="table"
    style="
      padding: 24px;
      background-color: white;
      border-radius: 15px;
      position: absolute;
      width: 94%;
      height: 75%;
    "
  >
    <el-row>
      <el-col :span="24" style="padding: 0px"
        ><el-table
          v-loading="showTable"
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
          :height="tableHeight"
          :row-class-name="tableRowClassName"
          highlight-current-row
        >
          <el-table-column sortable prop="code" label="Code"> </el-table-column>
          <el-table-column sortable prop="name" label="Name"> </el-table-column>
          <el-table-column sortable prop="account" label="Account">
          </el-table-column>
          <el-table-column sortable prop="share" label="Share">
          </el-table-column>
          <el-table-column sortable prop="netWorth" label="NetWorth">
          </el-table-column>
          <el-table-column sortable prop="serviceCharge" label="ServiceCharge">
          </el-table-column>
          <el-table-column sortable prop="date" label="Date"> </el-table-column>
          <el-table-column prop="typeName" label="Type"> </el-table-column>
          <el-table-column prop="activityName" label="ActivityStatus">
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <el-button
                size="mini"
                @click="InvestmentOpenEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
            </template>
          </el-table-column>
        </el-table></el-col
      >
    </el-row>
  </div>

  <el-dialog :title="dataTitle" v-model="dialogFormVisible">
    <el-form :model="form">
      <el-row>
        <el-col :span="12">
          <el-input placeholder="Name" v-model="investmentData.name">
            <template #prepend>
              <el-select
                style="width: 180px"
                v-model="investmentData.itemID"
                @change="SelectName(investmentData.itemID)"
                placeholder="现有选择"
              >
                <el-option
                  v-for="item in itemList"
                  :key="item.ItemID"
                  :label="item.Name"
                  :value="item.ItemID"
                >
                </el-option>
              </el-select>
            </template>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-input v-model="investmentData.code" placeholder="Code"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-input
            placeholder="Account"
            v-model="investmentData.account"
            clearable
          >
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-input
            placeholder="Share"
            v-model="investmentData.share"
            clearable
          >
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-input
            placeholder="NetWorth"
            v-model="investmentData.netWorth"
            clearable
          >
          </el-input>
        </el-col>
      </el-row>
      <el-divider content-position="left">Additional Cost</el-divider>
      <el-row>
        <el-col :span="4">
          <el-button type="primary" @click="AddServiceCharge()">添加</el-button>
        </el-col>
      </el-row>
      <el-row
        v-for="(item, i) in investmentData.serviceChargeList"
        :key="i"
        :label="item"
        :value="item"
      >
        <el-col :span="4">
          <el-select placeholder="Type" v-model="item.typeID">
            <el-option
              v-for="c in serviceChargeList"
              :key="c.TypeID"
              :label="c.TypeName"
              :value="c.TypeID"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="Cost" v-model="item.cost"> </el-input>
        </el-col>
        <el-col :span="2">
          <el-button
            icon="el-icon-delete"
            @click="DeleteServiceCharge(i)"
            circle
          ></el-button>
        </el-col>
      </el-row>
      <el-divider content-position="left">Additional Cost</el-divider>
      <el-row>
        <el-col :span="12">
          <el-select v-model="investmentData.type" placeholder="Type">
            <el-option
              v-for="item in typeList"
              :key="item.TypeID"
              :label="item.TypeName"
              :value="item.TypeID"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-select v-model="investmentData.activity" placeholder="Activity">
            <el-option
              v-for="item in activityList"
              :key="item.ActivityID"
              :label="item.ActivityName"
              :value="item.ActivityID"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-date-picker
            v-model="investmentData.date"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="InvestmentCancel()">取 消</el-button>
        <el-button v-if="addOrUpdate" type="primary" @click="InvestmentAdd()"
          >确 定</el-button
        >
        <el-button v-if="!addOrUpdate" type="primary" @click="InvestmentEdit()"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "../../api/index";
import {
  InvestmentData,
  InvestmentServiceCharge,
} from "../../service/InvestmentTableData";

export default defineComponent({
  data() {
    return {
      tableData: [],
      typeList: [],
      activityList: [],
      serviceChargeList: [],
      investmentData: new InvestmentData(),
      dialogFormVisible: false,
      dataTitle: "",
      addOrUpdate: true,
      showTable: true,
      itemList: [] as [],
      tableHeight: 0,
    };
  },
  setup() {},
  methods: {
    InvestmentOpenEdit(index: number, data: InvestmentData) {
      this.dataTitle = "修改";
      this.investmentData = new InvestmentData();
      this.investmentData.add(data);
      this.GetServiceCharge(data.id);
      this.dialogFormVisible = true;
      this.addOrUpdate = false;
    },
    InvestmentOpenAdd() {
      this.dataTitle = "添加";
      this.investmentData = new InvestmentData();
      this.dialogFormVisible = true;
      this.addOrUpdate = true;
    },
    InvestmentAdd() {
      this.showTable = true;
      var value = new InvestmentData();
      value.add(this.investmentData);
      this.axios
        .post(api.addInvestmentsTable, value)
        .then((response) => {
          if (response.data.successful == true) {
            this.dialogFormVisible = false;
            this.investmentData = new InvestmentData();
            this.RefreshTable();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    InvestmentEdit() {
      this.showTable = true;
      var value = new InvestmentData();
      value.add(this.investmentData);
      this.axios
        .post(api.updateInvestmentsTable, value)
        .then((response) => {
          if (response.data.successful == true) {
            this.dialogFormVisible = false;
            this.investmentData = new InvestmentData();
            this.RefreshTable();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    InvestmentCancel() {
      this.dialogFormVisible = false;
    },
    SelectName(id: number) {
      var i = this.investmentData;
      i.code = (
        this.tableData.find((c: InvestmentData) => c.itemID == id) as any
      ).code;
      i.name = (
        this.tableData.find((c: InvestmentData) => c.itemID == id) as any
      ).name;
      i.type = (
        this.tableData.find((c: InvestmentData) => c.itemID == id) as any
      ).typeID;
    },
    formatter(row, column) {
      return row.address;
    },
    RefreshTable() {
      this.GetData();
      this.GetOption();
    },
    Refresh() {
      this.$forceUpdate();
    },
    GetServiceCharge(itemID: Number) {
      var value = { ItemID: itemID };
      this.axios
        .post(api.getInvestmentServiceCharge, value)
        .then((response) => {
          // 指定图表的配置项和数据
          if (response.data.successful == true) {
            this.investmentData.setServiceChargeList(response.data.data);
            this.$forceUpdate();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    GetData() {
      this.showTable = true;
      this.axios
        .post(api.getInvestmentsTable)
        .then((response) => {
          // 指定图表的配置项和数据
          this.tableData = [];
          response.data.forEach((c) => {
            (this.tableData as InvestmentData[]).push(
              new InvestmentData().set(c)
            );
          });

          this.showTable = false;
          var num = document.getElementById("table")?.clientHeight;
          this.tableHeight = Number(num) - 48;
          this.$forceUpdate();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    GetOption() {
      this.axios
        .post(api.getInvestmentOption)
        .then((response) => {
          // 指定图表的配置项和数据
          this.typeList = [];
          this.activityList = [];
          this.itemList = [];
          this.serviceChargeList = [];
          this.typeList = response.data.type;
          this.activityList = response.data.activity;
          this.itemList = response.data.item;
          this.serviceChargeList = response.data.serviceCharge;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    AddServiceCharge() {
      var value = new InvestmentServiceCharge(null);
      value.itemID = this.investmentData.id as number;
      value.typeID = this.investmentData.serviceChargeList.length + 1;
      (this.investmentData.serviceChargeList as InvestmentServiceCharge[]).push(
        value
      );
      this.$forceUpdate();
    },
    DeleteServiceCharge(i: number) {
      this.investmentData.serviceChargeList =
        this.investmentData.serviceChargeList.filter((item, c) => c !== i);
      this.$forceUpdate();
    },
    tableRowClassName({ row, rowIndex }) {
      if (row.activity === 1) {
        return "buy-row";
      } else if (row.activity === 2) {
        return "sell-row";
      } else if (row.activity === 4) {
        return "empty-row";
      }
      return "";
    },
  },
  mounted() {
    this.GetData();

    this.GetOption();
  },
});
</script>

<style>
.el-row {
  margin-bottom: 20px;
}

  .el-table .buy-row {
    background: #fdb35e;
  }

  .el-table .sell-row {
    background: #5efd9b;
  }

  .el-table .empty-row {
    background: #71fd5e;
  }
</style>
