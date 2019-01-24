<template>
<div id="homepage">
  <Landing></Landing>
  <Experience></Experience>
</div>
</template>

<script>
import Landing from '../components/Landing.vue'
import Experience from '../components/Experience.vue'
export default {
  name: 'home',
  components: {
    Landing,
    Experience
  }
}
</script>
