import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Blogs from './blogs/blogs.json'

Vue.use(Router)

export default new Router({
  saveScrollPosition: false,
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    ...Blogs.map(entry => ({
      path: `/${entry.id}`,
      name: entry.id,
      component: () => import(`./blogs/${entry.id}.md`)
    }))
  ]
})
