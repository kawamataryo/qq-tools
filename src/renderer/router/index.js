import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    name: 'index',
    component: require('@/components/Index')
  },
  {
    path: '/db',
    name: 'db',
    component: require('@/components/Db')
  },
  {
    path: '/write',
    name: 'write',
    component: require('@/components/Write')
  },
  {
    path: '/disease',
    name: 'disease',
    component: require('@/components/Disease')
  },
  {
    path: '*',
    redirect: '/'
  }
  ]
})
