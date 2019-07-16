<template>
  <div id="web-projects">
    <div class="project" v-for="project in projects" v-bind:key="project.title" :id="project.title">
      <div class="content">
        <h2>{{ project.title }}</h2>
        <h4>{{ project.url }}</h4>
        <ul>
          <li v-for="tech in project.technology" v-bind:key="tech">{{tech}}</li>
        </ul>
        <p>{{ project.content }}
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
