import 'uno.css'
import '@/styles/index.less'
import 'ant-design-vue/es/message/style/css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')