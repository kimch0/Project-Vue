import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/drink/:selected',
    name: 'Drink',
    component: () => import(/* webpackChunkName: "drink" */ '../views/Drink.vue')
  },
  {
    path: '/category/:selected',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue')
  },
  {
    path: '/alcohol/:selected',
    name: 'Alcohol',
    component: () => import(/* webpackChunkName: "alcohol" */ '../views/Alcohol.vue')
  },
  {
    path: '/details/:id',
    name: 'Detailed',
    component: () => import(/* webpackChunkName: "detailed" */ '../views/Detailed.vue')
  },
  {
    path: '/search/:searching',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
