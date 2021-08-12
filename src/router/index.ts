import { createRouter, createWebHashHistory, useRoute } from 'vue-router'
import About from '../components/About.vue'
import Home from '../components/HomeComponents/Home.vue'
import Investment from '../components/InvestmentComponents/Investment.vue'
import InvestmentDiagram from '../components/InvestmentComponents/InvestmentDiagram.vue'
import InvestmentTable from '../components/InvestmentComponents/InvestmentTable.vue'
import Target from '../components/TargetComponents/Target.vue'
import TargetData from '../components/TargetComponents/TargetData.vue'
import BudgetExpenditure from '../components/BillComponents/BudgetExpenditure.vue'
import Bill from '../components/BillComponents/Bill.vue'
import BillTable from '../components/BillComponents/BillTable.vue'
import BillDiagram from '../components/BillComponents/BillDiagram.vue'
import BillTimeLine from '../components/BillComponents/BillTimeLine.vue'
import Desire from '../components/DesireComponents/Desire.vue'
import DesireTable from '../components/DesireComponents/DesireTable.vue'
import Work from '../components/WorkComponents/Work.vue'
import BillSet from '../components/SetComponents/BillSet.vue'
import WorkAndService from '../components/WorkComponents/WorkAndService.vue'
import Login from '../components/UserComponents/Login.vue'
import User from '../components/UserComponents/User.vue'
import Filter from '../components/Filter.vue'

const routes = [
  { path: '/', redirect: '/Filter/Home' },
  {
    path: '/Filter', component: Filter,
    children: [
      { path: 'Home', component: Home },
      { path: 'About', component: About },
    ]
  },

  //Investment
  {
    path: '/Investment', component: Filter,
    children: [
      { path: 'InvestmentDiagram', component: InvestmentDiagram },
      { path: 'InvestmentTable', component: InvestmentTable },
    ]
  },

  //Bill
  {
    path: '/Bill', component: Filter,
    children: [
      { path: 'BudgetExpenditure', component: BudgetExpenditure },
      { path: 'BillTable', component: BillTable },
      { path: 'BillDiagram', component: BillDiagram },
      { path: 'BillTimeLine', component: BillTimeLine },
    ]
  },


  //Desire
  {
    path: '/Desire', component: Filter,
    children: [
      { path: 'DesireTable', component: DesireTable }
    ]
  },

  //Target
  {
    path: '/Target', component: Filter,
    children: [
      { path: 'TargetData', component: TargetData }
    ]
  },

  //WorkAndService
  {
    path: '/WorkAndService', component: Filter,
    children: [
      { path: 'Work', component: Work },
      { path: 'BillSet', component: BillSet },
    ]
  },
  //User
  {
    path: '/User', component: User,
    children: [
      { path: 'Login', component: Login }
    ]
  }
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router