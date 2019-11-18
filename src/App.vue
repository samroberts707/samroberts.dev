<template>
  <div id="app" data-theme="">
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
  div#app {
    font-family: 'Montserrat', sans-serif;
    color: var(--primary-text);
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  div#app {
    --primary-color: #F75D5D;
    --secondary-blue: #17BEBB;
    --primary-text: #333;
    --soft-grey: #5D5D5D;
  }
  div#app[data-theme='blue'] {
    --primary-color: #17BEBB;
  }
</style>
