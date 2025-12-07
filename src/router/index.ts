import { createRouter, createWebHistory } from 'vue-router'
import isLogin from '@/utils/auth.ts'
import DetailView from '@/views/sapce/app/detail/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/detail',
      name: 'detail',
      component: DetailView,
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  if (!isLogin() && to.name !== 'auth-login') {
    return { path: '/auth/login' }
  }
  console.log(from)
  next()
})
export default router
