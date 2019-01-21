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
    text-align: right;
    padding-right: 30px;
    li {
      display: inline-block;
      margin: 30px 10px;
      a {
        position: relative;
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
        padding: 7px;
        color: #787878;
        transition: color 0.3s;
        &::before, &::after {
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: red;
          content: '';
          opacity: 0;
          -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
          -moz-transition: opacity 0.3s, -moz-transform 0.3s;
          transition: opacity 0.3s, transform 0.3s;
          -webkit-transform: translateY(-10px);
          -moz-transform: translateY(-10px);
          transform: translateY(-10px);
        }
        &::before {
          top: 0;
          -webkit-transform: translateY(-10px);
          -moz-transform: translateY(-10px);
          transform: translateY(-10px);
        }
        &::after {
          bottom: 0;
          -webkit-transform: translateY(10px);
          -moz-transform: translateY(10px);
          transform: translateY(10px);
        }
        &:hover, &:focus {
          color: red;
        }
        &:hover::before, &:focus::before, &:hover::after, &:focus::after {
          opacity: 1;
          -webkit-transform: translateY(0px);
          -moz-transform: translateY(0px);
          transform: translateY(0px);
        }
      }
    }
  }
}
</style>
