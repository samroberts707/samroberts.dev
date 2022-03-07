<template>
  <div class="__layout">
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navigation,
    Footer
  }
}
</script>
<style lang="scss">
  // NU CSS Grid from https://github.com/nu-creative/css-grid/blob/master/dist/nu-grid.min.css
  .container{display:block;width:100%;margin-left:auto;margin-right:auto}@media screen and (min-width:576px){.container{max-width:540px;padding-left:16px;padding-right:16px}}@media screen and (min-width:768px){.container{max-width:720px}}@media screen and (min-width:990px){.container{max-width:960px}}@media screen and (min-width:1400px){.container{max-width:1366px}}

  * {
    font-family: 'Comfortaa', sans-serif;
    font-display: 'swap';
    font-weight: 300;
  }
</style>
