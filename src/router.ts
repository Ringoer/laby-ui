import { createWebHistory, createRouter } from 'vue-router'
import { components } from './Global'
import Home from './views/Home.vue'
import Document from './views/Document.vue'
import Introduction from './components/guidance/Introduction.vue'
import Install from './components/guidance/Install.vue'
import Start from './components/guidance/Start.vue'
import Content from './views/Content.vue'

const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/document', component: Document, children: [
        { path: '', redirect: '/document/introduction' },
        { path: 'introduction', component: Introduction },
        { path: 'install', component: Install },
        { path: 'start', component: Start },
        { path: 'button', component: Content, props: components['button'] },
        { path: 'card', component: Content, props: components['card'] },
        { path: 'dialog', component: Content, props: components['dialog'] },
        { path: 'switch', component: Content, props: components['switch'] },
        { path: 'tabs', component: Content, props: components['tabs'] },
      ]
    }
  ]
})
export default router