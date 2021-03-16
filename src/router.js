import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/404.vue'

Vue.use(Router)

export default new Router({
  saveScrollPosition: false,
  // base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
