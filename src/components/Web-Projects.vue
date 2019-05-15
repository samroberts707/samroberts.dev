<template>
  <div id="web-projects">
    <div class="project" :class="{'open': project.opened}" v-for="project in projects" v-bind:key="project.title" :id="project.title">
      <div class="heading">
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
          'title': 'Project 1',
          'url': 'https://google.com',
          'background': 'https://www.geraldedelman.com/static/images/hero/landing-section.jpg',
          'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl eget ipsum dapibus scelerisque. Pellentesque sodales sem tincidunt, dictum eros ac, tempus ipsum.',
          'opened': false
        },
        {
          'title': 'Project 2',
          'url': 'https://google.com',
          'background': 'https://elementscommunications.com/media/filer_public/1e/ad/1ead472a-f0f5-4ed7-b806-d87c7be0b2e8/header-elements.jpg',
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
      position: absolute;
      width: 50%;
      height: auto;
      min-height: 100%;
      transition: all 0.5s ease-in-out;
      div.heading {
        position: relative;
        width: 100%;
        height: 50vw;
        img.project-background {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        div.heading-overlay {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.75);
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
      &:first-child {
        left: 0;
        top: 0;
        div.heading {
          div.heading-overlay {
            left: -100%;
            transition: left 0.5s ease-in-out;
          }
          &:hover {
            div.heading-overlay {
              left: 0;
            }
          }
        }
      }
      &:nth-child(2) {
        right: 0;
        top: 0;
        div.heading {
          div.heading-overlay {
            right: -100%;
            transition: right 0.5s ease-in-out;
          }
          &:hover {
            div.heading-overlay {
              right: 0;
            }
          }
        }
      }
    }
  }
</style>
