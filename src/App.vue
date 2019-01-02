<template>
  <div id="app">
    <!-- Nav Goes Here -->
    <nav id="navigation">
      <ul>
        <li><a href="#" class="nav-link">About Me</a></li>
        <li><a href="#" class="nav-link">Experience</a></li>
        <li><a href="#" class="nav-link">Projects</a></li>
        <li><a href="#" class="nav-link">Education</a></li>
        <li><a href="#" class="nav-link">Contact Me</a></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
  @import url('./assets/sass/reset.scss');
  nav#navigation {
    display: block;
    position: fixed;
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
