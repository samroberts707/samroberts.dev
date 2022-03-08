<template>
  <div class="__layout">
    <MouseFollow />
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import MouseFollow from '../components/MouseFollow.vue'
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Navigation,
    Footer,
    MouseFollow
  }
}
</script>
<style lang="scss">
  // NU CSS Grid from https://github.com/nu-creative/css-grid/blob/master/dist/nu-grid.min.css
  .container{display:block;width:100%;margin-left:auto;margin-right:auto}@media screen and (min-width:576px){.container{max-width:540px;padding-left:16px;padding-right:16px}}@media screen and (min-width:768px){.container{max-width:720px}}@media screen and (min-width:990px){.container{max-width:960px}}@media screen and (min-width:1400px){.container{max-width:1366px}}

  * {
    font-family: 'Comfortaa', sans-serif;
    font-weight: 300;
    font-size: inherit;
    line-height: inherit;
    cursor: none;
    color: #3a3a3a;
  }

  html {
    scroll-behavior: smooth;
    cursor: none;
  }
</style>
