<template>
  <el-row>
    <el-col :span="24">
      <el-button @click="InvestmentOpenAdd()">添加</el-button>
      <el-button @click="RefreshTable()">刷新</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24" v-if="showTable" style="background-color: white">
      <el-skeleton animated style="margin: 10px; width: 95%"
    /></el-col>
    <el-col :span="24" v-if="!showTable"
      ><el-table
        v-loading="showTable"
        :data="tableData"
        style="width: 100%"
        :default-sort="{ prop: 'Date', order: 'descending' }"
        height="700"
        highlight-current-row
      >
        <el-table-column sortable prop="Name" label="Name"> </el-table-column>
        <el-table-column sortable prop="Account" label="Account">
        </el-table-column>
        <el-table-column sortable prop="Share" label="Share"> </el-table-column>
        <el-table-column sortable prop="NetWorth" label="NetWorth">
        </el-table-column>
        <el-table-column sortable prop="Date" label="Date"> </el-table-column>
        <el-table-column prop="TypeName" label="Type"> </el-table-column>
        <el-table-column prop="ActivityName" label="ActivityStatus">
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

  <el-dialog :title="dataTitle" v-model="dialogFormVisible">
    <el-form :model="form">
      <el-row>
        <el-col :span="12">
          <el-input
            placeholder="Name"
            v-model="investmentData.name"
            class="input-with-select"
          >
            <template #prepend>
              <el-select style="width:180px;" v-model="investmentData.itemID" @change="SelectName(investmentData.itemID)" placeholder="现有选择">
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
        <el-date-picker
          v-model="investmentData.date"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
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
import InvestmentTableData, {
  InvestmentData,
} from "../../service/InvestmentTableData";

const tableData: InvestmentTableData[] = [];

export default defineComponent({
  data() {
    return {
      tableData: [],
      typeList: [],
      activityList: [],
      investmentData: new InvestmentData(),
      dialogFormVisible: false,
      dataTitle: "",
      addOrUpdate: true,
      showTable: true,
      itemList: [] as [],
    };
  },
  setup() {},
  methods: {
    InvestmentOpenEdit(index: number, data: InvestmentTableData) {
      this.dataTitle = "修改";
      this.dialogFormVisible = true;
      this.investmentData = new InvestmentData();
      this.investmentData.addForInvestmentTableData(data);
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
          if (response.data.data == true) {
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
          if (response.data.data == true) {
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
      var i = this.investmentData
      i.name = (this.itemList.find( (c:any) => c.ItemID == id) as any).Name
    },
    formatter(row, column) {
      return row.address;
    },
    RefreshTable() {
      this.showTable = true;
      this.axios
        .post(api.getInvestmentsTable)
        .then((response) => {
          // 指定图表的配置项和数据
          this.tableData = [];
          response.data.forEach((c) => {
            (this.tableData as InvestmentTableData[]).push(
              new InvestmentTableData(c)
            );
          });

          this.showTable = false;
          this.$forceUpdate();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Refresh() {
      this.$forceUpdate();
    },
  },
  mounted() {
    this.axios
      .post(api.getInvestmentsTable)
      .then((response) => {
        // 指定图表的配置项和数据
        response.data.forEach((c) => {
          (this.tableData as InvestmentTableData[]).push(
            new InvestmentTableData(c)
          );
        });

        this.showTable = false;
        this.$forceUpdate();
      })
      .catch((error) => {
        console.log(error);
      });

    this.axios
      .post(api.getInvestmentOption)
      .then((response) => {
        // 指定图表的配置项和数据
        this.typeList = response.data.type;
        this.activityList = response.data.activity;
        this.itemList = response.data.item;
        this.$forceUpdate();
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
</style>
