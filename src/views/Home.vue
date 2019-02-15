<template>
<div id="homepage">
  <Landing></Landing>
  <Timeline></Timeline>
</div>
</template>

<script>
import Landing from '../components/Landing.vue'
import Timeline from '../components/Timeline.vue'
export default {
  name: 'home',
  components: {
    Landing,
    Timeline
  }
}
</script>
