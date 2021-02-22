import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Document from './views/Document.vue'
import { guidances, components } from './Global'
import Guidance from './views/Guidance.vue'
import Content from './views/Content.vue'

const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/document', component: Document, children: [
        { path: '', redirect: '/document/introduction' },
        { path: 'introduction', component: Guidance, props: guidances['introduction'] },
        { path: 'install', component: Guidance, props: guidances['install'] },
        { path: 'start', component: Guidance, props: guidances['start'] },
        { path: 'button', component: Content, props: components['Button'] },
        { path: 'card', component: Content, props: components['Card'] },
        { path: 'dialog', component: Content, props: components['Dialog'] },
        { path: 'switch', component: Content, props: components['Switch'] },
        { path: 'table', component: Content, props: components['Table'] },
        { path: 'tabs', component: Content, props: components['Tabs'] },
      ]
    }
  ]
})
export default router