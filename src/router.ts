import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Document from './views/Document.vue'
import { guidances, components } from './Global'
import Guidance from './views/Guidance.vue'
import Content from './views/Content.vue'

const guidancesRoutes = Object.keys(guidances).map(item => {
  return {
    path: item,
    component: Guidance,
    props: guidances[item]
  }
})
const componentsRoutes = Object.keys(components).map(item => {
  const path = item.toLowerCase()
  return {
    path,
    component: Content,
    props: components[item]
  }
})

const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/document', component: Document, children: [
        { path: '', redirect: '/document/introduction' },
        ...guidancesRoutes,
        ...componentsRoutes
      ]
    }
  ]
})
export default router