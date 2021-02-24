import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'github-markdown-css'
import 'laby-ui/lib/laby.css'

const app = createApp(App)
app.use(router)
app.mount('#app')