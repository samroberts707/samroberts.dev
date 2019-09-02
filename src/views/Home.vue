<template>
<div id="homepage">
  <Landing></Landing>
  <Timeline></Timeline>
  <WebProjects></WebProjects>
  <!-- <Blogs></Blogs> -->
  <ContactMe></ContactMe>
</div>
</template>

<script>
import Landing from '../components/Landing.vue'
import Timeline from '../components/Timeline.vue'
import WebProjects from '../components/Web-Projects.vue'
// import Blogs from '../components/Blogs.vue'
import ContactMe from '../components/Contact-Me.vue'

export default {
  name: 'home',
  components: {
    Landing,
    Timeline,
    WebProjects,
    // Blogs,
    ContactMe
  }
}
</script>
