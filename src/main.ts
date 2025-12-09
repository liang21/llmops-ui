import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router/index'
import '@/assets/styles/main.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ArcoVueIcon)

app.mount('#app')
