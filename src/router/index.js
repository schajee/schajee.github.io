import Vue from 'vue'
import VueRouter from 'vue-router'
import Short from '../views/Short.vue'
import Long from '../views/Long.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'short', component: Short },
  { path: '/cv', name: 'long', component: Long },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
