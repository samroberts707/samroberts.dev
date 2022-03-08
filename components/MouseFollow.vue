<template>
  <div class="mouse-follow" :style="transform" :class="{ expand: mouseExpand }">

  </div>
</template>
<script>
export default {
  name: 'MouseFollow',
  data () {
    return {
      x: 0,
      y: 0,
      mouseExpand: false
    }
  },
  computed: {
    transform () {
      return `transform: translate(${this.x}px, ${this.y}px)`
    }
  },
  mounted () {
    document.addEventListener('mousemove', this.onMouseMove)
    document.addEventListener('mouseover', this.onMouseEnter)
  },
  methods: {
    onMouseMove (ev) {
      this.x = ev.clientX
      this.y = ev.clientY
    },
    onMouseEnter (ev) {
      // TODO: There must a better way of doing this!!!
      if (
        ev.path[0].className === 'hamburger' ||
        ev.path[0].className === 'hamburger active' ||
        ev.path[1].className === 'hamburger' ||
        ev.path[1].className === 'hamburger active' ||
        ev.path[0].className === 'navbar' ||
        ev.target.nodeName === 'A' ||
        ev.path[0].className === 'social twitter' ||
        ev.path[0].className === 'social linkedin' ||
        ev.path[0].className === 'social github'
      ) {
        this.mouseExpand = true
      } else {
        this.mouseExpand = false
      }
      console.log(ev)
    }
  }
}
</script>
<style lang="scss" scoped>
  div.mouse-follow {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    pointer-events: none;
    will-change: transform;
    &.expand {
      &::before {
        transform: scale(1);
      }
    }
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -24px;
      left: -24px;
      width: 48px;
      height: 48px;
      background-color: gray;
      opacity: .8;
      border-radius: 50%;
      transform: scale(.2);
      transition: transform 0.2s ease-in-out;
    }
  }
</style>
