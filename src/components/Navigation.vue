<template>
  <nav id="navigation">
    <ul>
      <li><a href="#" class="nav-link">About Me</a></li>
      <li><a href="#" class="nav-link">Experience</a></li>
      <li><a href="#" class="nav-link">Projects</a></li>
      <li><a href="#" class="nav-link">Education</a></li>
      <li><a href="#" class="nav-link">Contact Me</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped lang="scss">
nav#navigation {
  display: block;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  ul {
    li {
      display: inline-block;
    }
  }
}
</style>
