import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Semantic from '@/components/Semantic'
import Dashboard from '@/components/dash/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/testing-semantic',
      name: 'Semantic',
      component: Semantic
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})