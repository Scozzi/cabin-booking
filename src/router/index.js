import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Semantic from '@/components/Semantic'
import Dashboard from '@/components/dash/dashboard'
import CalenderTest from '@/components/CalenderTest'

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
    },
    {
      path: '/testing-calender',
      name: 'Testing-Calender',
      component: CalenderTest
    }
  ]
})
