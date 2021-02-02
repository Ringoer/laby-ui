import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Document from './views/Document.vue'
import Introduction from './components/guidance/Introduction.vue'
import Install from './components/guidance/Install.vue'
import Start from './components/guidance/Start.vue'
import Switch from './components/Switch.vue'
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/Tabs.vue'
import Card from './components/Card.vue'

const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/document', component: Document, children: [
        { path: 'introduction', component: Introduction },
        { path: 'install', component: Install },
        { path: 'start', component: Start },
        { path: 'switch', component: Switch },
        { path: 'button', component: Button },
        { path: 'dialog', component: Dialog },
        { path: 'tabs', component: Tabs },
        { path: 'card', component: Card },
      ]
    }
  ]
})
router.afterEach(to => {
  if (to.fullPath === '/document') {
    router.replace(('/document/introduction'))
  }
})
export default router