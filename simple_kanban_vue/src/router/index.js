import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Kanban from '../views/Kanban.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:id',
    name: 'Kanban',
    component: Kanban
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
