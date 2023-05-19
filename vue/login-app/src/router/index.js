import { createRouter, createWebHistory } from 'vue-router'
import KakaoLogin from '../views/KakaoLogin.vue'

const routes = [
  {
    path: '/login',
    name: KakaoLogin,
    component: KakaoLogin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
