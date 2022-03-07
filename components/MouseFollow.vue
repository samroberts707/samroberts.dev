<template>
  <div class="mouse-follow" :style="transform">

  </div>
</template>
<script>
export default {
  name: 'MouseFollow',
  data () {
    return {
      x: 0,
      y: 0
    }
  },
  computed: {
    transform () {
      return `transform: translate(${this.x}px, ${this.y}px)`
    }
  },
  mounted () {
    document.addEventListener('mousemove', this.onMouseMove)
  },
  methods: {
    onMouseMove (ev) {
      this.x = ev.clientX
      this.y = ev.clientY
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
