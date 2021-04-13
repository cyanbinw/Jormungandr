import axios from 'axios'
import ElementPlus, { ElButton, ElMessageBox, ElInfiniteScroll, ElLoading, ElMessage, ElNotification } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router/index'

var app = createApp(App)
app.use(router)
app.use(VueAxios,axios)
app.use(ElementPlus)
// app.component(ElMessageBox.name, ElMessageBox)

app.mount('#app')
