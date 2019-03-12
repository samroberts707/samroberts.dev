<template>
<div id="homepage">
  <Landing></Landing>
  <Timeline></Timeline>
  <WebProjects></WebProjects>
</div>
</template>

<script>
import Landing from '../components/Landing.vue'
import Timeline from '../components/Timeline.vue'
import WebProjects from '../components/Web-Projects.vue'
export default {
  name: 'home',
  components: {
    Landing,
    Timeline,
    WebProjects
  }
}
</script>
