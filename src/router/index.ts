import { createRouter, createWebHashHistory } from 'vue-router'
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
import Desire from '../components/DesireComponents/Desire.vue'
import DesireTable from '../components/DesireComponents/DesireTable.vue'
import Work from '../components/WorkComponents/Work.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Home', component: Home },
  { path: '/About', component: About },
  //Investment
  {
    path: '/Investment', component: Investment,
    children: [
      { path: 'InvestmentDiagram', component: InvestmentDiagram },
      { path: 'InvestmentTable', component: InvestmentTable },     
    ]
  },

  //Bill
  {
    path: '/Bill', component: Bill,
    children: [
      { path: 'BudgetExpenditure', component: BudgetExpenditure },
      { path: 'BillTable', component: BillTable },
      { path: 'BillDiagram', component: BillDiagram },
    ]
  },


  //Desire
  {
    path: '/Desire', component: Desire,
    children: [
      { path: 'DesireTable', component: DesireTable }
    ]
  },

  //Target
  {
    path: '/Target', component: Target,
    children: [
      { path: 'TargetData', component: TargetData }
    ]
  },

  //WorkAndService
  {
    path: '/WorkAndService', component: Work,
    children: [
      { path: 'Work', component: Work }
    ]
  },
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