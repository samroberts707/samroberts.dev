<template>
  <nav id="navigation">
    <div class="logo">
      <h1>&#60;<span>SR</span>&#47;&#62;</h1>
    </div>
    <div class="menu">
      <ul class="nav-list" :class="{'open': navOpen}">
        <li><a href="#" class="nav-link">About Me</a></li>
        <li><a href="#" class="nav-link">Experience</a></li>
        <li><a href="#" class="nav-link">Projects</a></li>
        <li><a href="#" class="nav-link">Education</a></li>
        <li><a href="#" class="nav-link">Contact Me</a></li>
      </ul>
      <div class="hamburger" :class="{'open': navOpen}" @click="toggleNav">
        <div class="bar one"></div>
        <div class="bar two"></div>
        <div class="bar three"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data: function () {
    return {
      navOpen: false
    }
  },
  methods: {
    toggleNav () {
      this.navOpen = !this.navOpen
    }
  }
}
</script>

<style scoped lang="scss">
nav#navigation {
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
  position: sticky;
  width: auto;
  height: 80px;
  padding: 0 10%;
  div.logo {
    justify-self: start;
    h1 {
      font-family: 'Damion', sans-serif;
      color: #4E4E4E;
      font-size: 32px;
      line-height: 38px;
      cursor: pointer;
      span {
        transition: color 0.3s;
        @media screen and (max-width: 768px) {
          color: #f75d5d;
        }
      }
      &:hover span {
        color: #f75d5d;
      }
    }
  }
  div.menu {
    justify-self: end;
    div.hamburger {
      display: none;
      cursor: pointer;
      div.bar {
        width: 25px;
        height: 2px;
        background: #4E4E4E;
        margin: 7px 0;
        transition: transform 0.3s ease-in-out;
        &.two {
          width: 20px;
          margin-left: 5px;
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
        }
      }
      @media screen and (max-width: 768px) {
        display: block;
        &.open {
          div.bar.one {
            transform: rotate(-45deg) translate(-8px, 7px);
          }
          div.bar.two {
            opacity: 0;
          }
          div.bar.three {
            transform: rotate(45deg) translate(-5px, -5px);
          }
        }
      }
    }
    ul.nav-list {
      li {
        display: inline-block;
        a {
          position: relative;
          font-family: 'Montserrat', sans-serif;
          text-decoration: line-through;
          text-decoration-color: #f75d5d;
          padding: 7px;
          color: #787878;
          transition: color 0.3s;
          &::before, &::after {
            position: absolute;
            left: 0;
            width: 100%;
            height: 2px;
            background: #f75d5d;
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
            color: #f75d5d;
          }
          &:hover::before, &:focus::before, &:hover::after, &:focus::after {
            opacity: 1;
            -webkit-transform: translateY(0px);
            -moz-transform: translateY(0px);
            transform: translateY(0px);
          }
        }
      }
      @media screen and (max-width: 768px) {
        position: absolute;
        left: 10%;
        top: -200px;
        transition: top 0.5s ease-in-out;
        &.open {
          top: 80px;
        }
        li {
          display: block;
          margin: 20px 0;
        }
      }
    }
  }
}
</style>
