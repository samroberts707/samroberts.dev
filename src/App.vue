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
</style>
