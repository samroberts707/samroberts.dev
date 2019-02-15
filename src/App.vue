<template>
  <div id="app">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  components: {
    Navigation
  }
}
</script>

<style>
  @import url('./assets/sass/reset.scss');
  @import url('https://fonts.googleapis.com/css?family=Damion|Montserrat');
  body {
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
  }
</style>
