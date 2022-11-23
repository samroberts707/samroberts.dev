<template>
  <nav>
    <div class="navbar">
      <div class="hamburger" :class="{ active: isOpen }" data-cursor-text="Toggle" @click="toggleNav">
        <span />
        <span />
        <span />
      </div>
    </div>
    <div class="nav-menu" :class="{ active: isOpen }">
      <div class="content">
        <span>Menu</span>
        <nuxt-link to="#timeline" data-cursor="-lg">
          About
        </nuxt-link>
        <nuxt-link to="#web-projects" data-cursor="-lg">
          Work
        </nuxt-link>
        <a data-cursor-text="Coming Soon">Blog</a>
        <nuxt-link to="#contact-me" data-cursor="-lg">
          Contact
        </nuxt-link>
      </div>
      <div class="quick-contact">
        <span>Get in touch</span>
        <!-- <a href="mailto:samroberts707@gmail.com">samroberts707@gmail.com</a> TODO: SHOULD I KEEP EMAIL? -->
        <div class="socials">
          <a href="https://twitter.com/samroberts707" target="_blank"><img class="social twitter" src="~/assets/icons/twitter_icon.png" alt="Twitter" data-cursor="-lg"></a>
          <a href="https://www.linkedin.com/in/samroberts707/" target="_blank"><img class="social linkedin" src="~/assets/icons/linkedin_icon.png" alt="Twitter" data-cursor="-lg"></a>
          <a href="https://github.com/samroberts707" target="_blank"><img class="social github" src="~/assets/icons/github_icon.png" alt="Twitter" data-cursor="-lg"></a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavBar',
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleNav () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
<style lang="scss" scoped>
  nav {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    div.navbar {
      display: block;
      position: absolute;
      right: 60px;
      top: 60px;
      z-index: 12;
      div.hamburger {
        display: block;
        position: relative;
        width: 25px;
        height: auto;
        span {
          display: block;
          position: relative;
          width: 100%;
          height: 2px;
          margin: 5px 0 5px auto;
          top: 0;
          z-index: 1;
          background-color: #000;
          transition: width .2s ease-in-out;
        }
        &:hover {
          span:nth-child(2) {
            width: 75%;
          }
        }
      }
    }
    div.nav-menu {
      display: grid;
      position: absolute;
      right: -650px;
      top: 0;
      width: 650px;
      height: 100vh;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 150px;
      background-color: #FFFFFF;
      transition: right 0.3s ease-in-out;
      &.active {
        right: 0;
        div.content, div.quick-contact {
          opacity: 1;
          padding: 0px 120px;
        }
      }
      div.content {
        display: block;
        position: relative;
        align-self: center;
        padding: 0px 150px;
        opacity: 0;
        transition: opacity .9s ease-in-out, padding .9s ease-in-out;
        span {
          display: block;
          position: relative;
          font-size: 16px;
          color: rgba(0,0,0,.5);
          margin-bottom: 25px;
        }
        a {
          display: block;
          position: relative;
          font-size: 56px;
          line-height: 64px;
          text-decoration: none;
          margin: 0 0 10px;
        }
      }
      div.quick-contact {
        display: block;
        position: relative;
        align-self: start;
        padding: 0px 150px;
        opacity: 0;
        transition: opacity .9s ease-in-out, padding .9s ease-in-out;
        span {
          display: block;
          position: relative;
          font-size: 16px;
          color: rgba(0,0,0,.5);
          margin-bottom: 10px;
        }
        a {
          display: block;
          position: relative;
          font-size: 16px;
          line-height: 22px;
          margin-bottom: 15px;
        }
        div.socials {
          display: grid;
          position: relative;
          grid-template-columns: repeat(3, 40px);
          grid-gap: 0 15px;
          a {
            display: block;
            position: relative;
            img.social {
              display: block;
              position: relative;
              width: 100%;
              height: 100%;
              object-fit: contain;
              object-position: center center;
            }
          }
        }
      }
    }
  }
</style>
