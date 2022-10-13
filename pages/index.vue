<template>
  <div class="page home">
    <Landing />
    <Timeline />
    <Projects />
  </div>
</template>
<script>
import Landing from '@/components/homepage/Landing.vue'
import Timeline from '@/components/homepage/Timeline.vue'
import Projects from '@/components/homepage/Projects.vue'
export default {
  name: 'HomePage',
  components: {
    Landing,
    Timeline,
    Projects
  }
}
</script>
