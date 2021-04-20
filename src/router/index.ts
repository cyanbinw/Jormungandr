import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../components/About.vue'
import Home from '../components/HomeComponents/Home.vue'
import InvestmentDiagram from '../components/InvestmentComponents/InvestmentDiagram.vue'
import InvestmentTable from '../components/InvestmentComponents/InvestmentTable.vue'
import PastPresentFuture from '../components/InvestmentComponents/PastPresentFuture.vue'
import BudgetExpenditure from '../components/Bill/BudgetExpenditure.vue'
import BillTable from '../components/Bill/BillTable.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/Home', component: Home },
    { path: '/About', component: About },
    //Investment
    { path: '/Investment/InvestmentTable', component: InvestmentTable },
    { path: '/Investment/InvestmentDiagram', component: InvestmentDiagram },
    { path: '/Investment/PastPresentFuture', component: PastPresentFuture },

    //Bill
    { path: '/Bill/BudgetExpenditure', component: BudgetExpenditure },
    { path: '/Bill/BillTable', component: BillTable },
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