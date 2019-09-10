import Vue from 'vue'
import App from './App.vue'
import router from './router'
import inViewportDirective from 'vue-in-viewport-directive'
import VueAnime from 'vue-animejs'

Vue.directive('in-viewport', inViewportDirective)
Vue.config.productionTip = false
Vue.use(VueAnime)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
