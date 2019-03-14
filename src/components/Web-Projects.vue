<template>
  <div id="web-projects">
    <div class="project" v-for="project in projects" v-bind:key="project.title">
      <div class="showcase">
        <div class="background-wrapper" style="background-image: url('{project.background}');">
          <img src="images/mac-front.png" />
        </div>
      </div>
      <div class="information">
        <h2>{ project.title }</h2>
        <div class="technologies">
          <img v-for="tech in project.technologies" :src="tech.image" :alt="tech.name" v-bind:key="tech.name" />
        </div>
        <p>{ project.content }</p>
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
          'background': './images/ge.png',
          'technologies': [
            {
              'name': 'Django',
              'image': 'https://www.djangoproject.com/s/img/logos/django-logo-positive.png'
            },
            {
              'name': 'Python',
              'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png'
            }
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
  padding: 0 10%;
    div.project {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      min-height: 100vh;
      justify-items: center;
      align-items: center;
      div.showcase {
        padding-right: 40px;
        div.background-wrapper {
          background-attachment: fixed;
          background-size: 36%;
          background-position: 18% top;
          background-repeat: no-repeat;
        }
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }
      div.information {
        padding-left: 40px;
        h2 {
          font-size: 2.3vw;
          margin-bottom: 20px;
          text-align: center;
        }
        p {
          font-size: 1.5vw;
          line-height: 120%;
          margin-bottom: 20px;
        }
        div.technologies {
          display: grid;
          // grid-template-columns: minmax(25%, 1fr);
          justify-items: center;
          align-items: center;
          margin-bottom: 20px;
          img {
            // display: block;
            // margin: 15px;
            grid-row: 1;
          }
        }
      }
    }
  }
</style>
