import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Blogs from './blogs/blogs.json'
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
    ...Blogs.map(entry => ({
      path: `/${entry.id}`,
      name: entry.id,
      component: () => import(`./blogs/${entry.id}.md`)
    })),
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
