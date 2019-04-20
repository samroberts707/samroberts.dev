<template>
  <div id="web-projects">
    <div class="project" :class="{'open': project.opened}" v-for="project in projects" v-bind:key="project.title" :id="project.title">
      <div class="heading" @click="project.opened = !project.opened">
        <img :src="project.background" class="project-background"/>
        <div class="heading-overlay">
          <h1>{{ project.title }}</h1>
        </div>
      </div>
      <div class="content">
        <p>{{ project.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      projects: [
        {
          'title': 'Gerald Edelman',
          'url': 'https://www.geraldedelman.com/',
          'background': './images/gerald-edelman.jpg',
          'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl eget ipsum dapibus scelerisque. Pellentesque sodales sem tincidunt, dictum eros ac, tempus ipsum.',
          'opened': false
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  div#web-projects {
    position: relative;
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
    div.project {
      position: relative;
      left: 0;
      top: 0;
      width: 100%;
      height: auto;
      min-height: 100%;
      transition: all 0.5s ease-in-out;
      div.heading {
        position: relative;
        width: 100%;
        height: 50vw;
        &:hover {
          div.heading-overlay {
            left: 0;
          }
        }
        img.project-background {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        div.heading-overlay {
          position: absolute;
          left: -100%;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          transition: left 0.5s ease-in-out;
          cursor: pointer;
          h1 {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 3vw;
            color: #FFFFFF;
            white-space: nowrap;
          }
        }
      }
      div.content {
        position: relative;
        width: calc(100% - 60px);
        height: auto;
        max-height: 0;
        padding: 0;
        overflow: hidden;
        transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
      }
      &.open {
        position: absolute;
        left: 15%;
        top: 50px;
        width: 70%;
        div.heading {
          div.heading-overlay {
            left: 0;
          }
        }
        div.content {
          padding: 30px;
          max-height: 300px;
        }
      }
    }
  }
</style>
