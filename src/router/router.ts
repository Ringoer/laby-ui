import { createWebHashHistory, createRouter } from 'vue-router'
import index from '../components/index.vue'
import helloWorld from '../components/HelloWorld.vue'

const history = createWebHashHistory()
export default createRouter({
  history,
  routes: [
    { path: '/', component: index },
    { path: '/hello', component: helloWorld }
  ]
})