<template>
  <nav id="navigation">
    <div class="logo">
      <h1>&#60;<span>SR</span>&#47;&#62;</h1>
    </div>
    <div class="menu">
      <div class="nav-wrapper" :class="{'open': navOpen}">
        <ul class="nav-list">
          <li><a href="/#landing" class="nav-link">About Me</a></li>
          <li><a href="/#experience" class="nav-link">Timeline</a></li>
          <li><a href="/#web-projects" class="nav-link">Projects</a></li>
          <li><a href="/#contact-me" class="nav-link">Contact Me</a></li>
        </ul>
        <!-- <select>
          <option>Red Theme</option>
          <option>Blue Theme</option>
        </select> -->
      </div>
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
  background-color: #FFF;
  z-index: 1;
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
          color: var(--primary-color);
        }
      }
      &:hover span {
        color: var(--primary-color);
      }
    }
  }
  div.menu {
    justify-self: end;
    div.hamburger {
      display: none;
      z-index: 2;
      cursor: pointer;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      &:focus {
        outline: none;
      }
      div.bar {
        width: 25px;
        height: 2px;
        background: #4E4E4E;
        margin: 7px 0;
        transition: transform 0.3s ease-in-out;
        &.one {
          width: 12px;
        }
        &.two {
          width: 25px;
        }
        &.three {
          width: 12px;
          margin-left: 13px;
        }
      }
      @media screen and (max-width: 768px) {
        display: block;
        &.open {
          div.bar.one {
            transform: rotate(-135deg) translate(-4px, 0px);
          }
          div.bar.two {
            opacity: 1;
            transform: rotate(-45deg) translate(2px, 0px);
          }
          div.bar.three {
            transform: rotate(-135deg) translate(4px, 4px);
          }
        }
      }
    }
    div.nav-wrapper {
      ul.nav-list {
        li {
          display: inline-block;
          a {
            position: relative;
            font-family: 'Montserrat', sans-serif;
            text-decoration: none;
            padding: 7px;
            color: #787878;
            transition: color 0.3s;
            &.disable {
              text-decoration: line-through;
              text-decoration-color: var(--primary-color);
            }
            &::before, &::after {
              position: absolute;
              left: 0;
              width: 100%;
              height: 2px;
              background: var(--primary-color);
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
              color: var(--primary-color);
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
      @media screen and (max-width: 768px) {
        position: absolute;
        width: 80%;
        left: 10%;
        top: -200px;
        transition: top 0.5s ease-in-out;
        background-color: #FFF;
        &.open {
          top: 80px;
        }
        ul.nav-list {
          li {
            display: block;
            margin: 20px 0;
          }
        }
      }
    }
  }
}
</style>
