<template>
  <div id="web-projects">
    <div class="project" v-for="project in projects" v-bind:key="project.title" :id="project.title">
      <div class="content">
        <h2 class="title">{{ project.title }}</h2>
        <!-- <h4>{{ project.url }}</h4> -->
        <a class="link" :href="project.url" target="_blank">{{ project.url }}</a>
        <ul class="technologies">
          <li class="tech" v-for="tech in project.technology" v-bind:key="tech">{{tech}}</li>
        </ul>
        <p class="text">{{ project.content }}
        </p>
      </div>
      <div class="mockup">
        <img :src="project.mockup" :alt="project.title"/>
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
          'mockup': 'https://gm.imgix.net/https%3A%2F%2Foriginalmockups.com%2Fmedia%2Fpages%2Fstock%2Foriginalmockups%2Fdevices%2Fiphone-xs-max-mockup-06%2F1516525845-1562975523%2F08-iphone-xs-max-mockup-06-poster.jpg?auto=format&fit=max&ixlib=php-2.3.0&q=90&w=1440&s=bb418c6188faadeb564b9a746643b63b',
          'technology': [
            'Django',
            'Bootstrap 4'
          ],
          'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl eget ipsum dapibus scelerisque. Pellentesque sodales sem tincidunt, dictum eros ac, tempus ipsum.'
        },
        {
          'title': 'Project 2',
          'url': 'https://google.com',
          'mockup': 'https://gm.imgix.net/https%3A%2F%2Foriginalmockups.com%2Fmedia%2Fpages%2Fstock%2Foriginalmockups%2Fdevices%2Fiphone-xs-max-mockup-06%2F1516525845-1562975523%2F08-iphone-xs-max-mockup-06-poster.jpg?auto=format&fit=max&ixlib=php-2.3.0&q=90&w=1440&s=bb418c6188faadeb564b9a746643b63b',
          'technology': [
            'Django CMS',
            'Bootstrap 4'
          ],
          'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl eget ipsum dapibus scelerisque. Pellentesque sodales sem tincidunt, dictum eros ac, tempus ipsum.'
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
    display: block;
    width: auto;
    position: relative;
    padding: 0 10%;
    div.project {
      position: relative;
      display: grid;
      grid-template-columns: 40% 60%;
      margin-bottom: 50px;
      div.content {
        padding: 30px 30px 30px 0;
        h2.title {
          font-size: 2.3vw;
          margin-bottom: 20px;
        }
        a.link {
          position: relative;
          font-size: 1.7vw;
          margin-bottom: 20px;
          color: #f75d5d;
          text-decoration: none;
          &::after {
            position: absolute;
            left: 0;
            width: 0;
            height: 2px;
            background: #f75d5d;
            content: '';
            opacity: 0;
            -webkit-transition: opacity 0.3s, width 0.3s;
            -moz-transition: opacity 0.3s, width 0.3s;
            transition: opacity 0.3s, width 0.3s;
            bottom: 0;
          }
          &:hover::after, &:focus::after {
            opacity: 1;
            width: 100%;
          }
        }
        ul.technologies {
          display: block;
          position: relative;
          padding: 15px;
          text-align: center;
          li.tech {
            display: inline-block;
            margin:10px;
            padding: 9px;
            background: #f75d5d;
            border-radius: 5px;
            color: #FFF;
          }
        }
        p.text {
          font-size: 1.4vw;
          line-height: 120%;
        }
      }
      div.mockup {
        display: block;
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }
    }
  }
</style>
