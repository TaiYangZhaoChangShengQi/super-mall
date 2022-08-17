import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import('../views/home/home')
const cart  = () => import('../views/cart/cart')
const classify = () => import('../views/classify/classify')
const profile = () => import('../views/proflie/profile')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component:home
  },
  {
    path: '/cart',
    component:cart
  },
  {
    path: '/classify',
    component:classify
  },
  {
    path: '/profile',
    component:profile
  }

]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
