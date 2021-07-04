import { createApp } from 'vue'
import App from './App.vue'
import route from './router/index'

import './index.css'


const app = createApp(App)


// 挂载路由
app.use(route)
app.mount('#app')