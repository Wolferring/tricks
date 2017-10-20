import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import TrickIndex from '@/pages/tricks/index'
import TrickCreate from '@/pages/tricks/create'
import TrickDetail from '@/pages/tricks/detail'
import NotFoundPage from '@/pages/404'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active-exact',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    { path: '*', component: NotFoundPage },
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/home',
      component: Home,
      alias: '/'
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/tricks/detail/:id',
      component: TrickDetail
    },
    {
      path: '/tricks',
      component: TrickIndex
    },
    {
      path: '/tricks/create',
      component: TrickCreate
    }
  ]
})
