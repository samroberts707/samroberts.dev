<template>
  <div class="__layout">
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import MouseFollower from 'mouse-follower'
import gsap from 'gsap'
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Navigation,
    Footer
  },
  mounted () {
    /* eslint-disable */
    MouseFollower.registerGSAP(gsap)
    const cursor = new MouseFollower({
      container: '#__layout',
      speed: 0.7,
      ease: "expo.out", // default ease (gsap)
    })
    /* eslint-enable */
  }
}
</script>
<style lang="scss">
  // @import "https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.css";
  .mf-cursor{position:fixed;top:0;left:0;z-index:250;direction:ltr;contain:layout style size;pointer-events:none;transition:opacity .3s,color .4s}.mf-cursor:before{content:"";position:absolute;top:-24px;left:-24px;display:block;width:48px;height:48px;transform:scale(0.2);background:currentColor;border-radius:50%;transition:transform .25s ease-in-out,opacity .1s}.mf-cursor.-inverse{color:#fff}@supports(mix-blend-mode: exclusion){.mf-cursor.-exclusion{mix-blend-mode:exclusion}.mf-cursor.-exclusion:before{background:#fff}}.mf-cursor.-pointer:before{transform:scale(0.15)}.mf-cursor.-text:before{opacity:.85;transform:scale(1.7)}.mf-cursor.-text.-active:before{transform:scale(1.6);transition-duration:.2s}.mf-cursor.-icon:before{transform:scale(1.5)}.mf-cursor.-icon.-active:before{transform:scale(1.4)}.mf-cursor.-hidden:before{transform:scale(0)}.mf-cursor-text{position:absolute;top:-18px;left:-18px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;transform:scale(0) rotate(10deg);opacity:0;color:#fff;font-size:16px;line-height:20px;text-align:center;transition:opacity .4s,transform .3s}.mf-cursor.-text .mf-cursor-text,.mf-cursor.-icon .mf-cursor-text{opacity:1;transform:scale(1)}.mf-cursor-media{position:absolute;width:400px;height:400px;margin:-200px 0 0 -200px}.mf-cursor-media img,.mf-cursor-media video{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);border-radius:50%}@supports(object-fit: cover){.mf-cursor-media img,.mf-cursor-media video{position:static;width:100%;height:100%;object-fit:cover;transform:translateZ(0)}}.mf-cursor-media-box{position:relative;width:100%;height:100%;overflow:hidden;transform:scale(0) translateZ(0);padding:1px;opacity:0;border-radius:50%;transition:transform .35s,opacity .2s .2s}.mf-cursor.-media .mf-cursor-media-box{opacity:1;transform:scale(0.696);transition-duration:.4s,.4s;transition-delay:0s,0s}/*# sourceMappingURL=mouse-follower.min.css.map */
  // NU CSS Grid from https://github.com/nu-creative/css-grid/blob/master/dist/nu-grid.min.css
  .container{display:block;width:100%;margin-left:auto;margin-right:auto}@media screen and (min-width:576px){.container{max-width:540px;padding-left:16px;padding-right:16px}}@media screen and (min-width:768px){.container{max-width:720px}}@media screen and (min-width:990px){.container{max-width:960px}}@media screen and (min-width:1400px){.container{max-width:1366px}}
  :root {
    --primary-color: #80d8ff;
  }
  * {
    font-family: 'Comfortaa', sans-serif;
    font-weight: 300;
    font-size: inherit;
    line-height: inherit;
    cursor: none;
    color: #3a3a3a;
  }
  .mf-cursor {
    &.-lg {
        &:before {
            transform:scale(.6);
        }
    }
  }

  html {
    scroll-behavior: smooth;
    cursor: none;
  }
</style>
