<template>
  <div id="web-projects">
    <a
      v-for="project in projects"
      :id="project.title"
      :key="project.title"
      class="project"
      :href="project.url"
      target="_blank"
      data-cursor-text="Link"
    >
      <picture>
        <img class="project-background" :alt="project.title" :src="'/projects/' + project.slug + '.jpg'">
      </picture>
      <h2>{{ project.title }}</h2>
    </a>
  </div>
</template>
<script>
export default {
  name: 'ProjectsComponent',
  data () {
    return {
      projects: [
        {
          title: 'Piiq',
          slug: 'piiq',
          url: 'https://piiqrp.com'
        },
        {
          title: 'Gerald Edelman',
          slug: 'gerald-edelman',
          url: 'https://www.geraldedelman.com'
        },
        {
          title: 'NU Creative',
          slug: 'nu-creative',
          url: 'https://www.nucreative.co.uk'
        },
        {
          title: 'CoderDojo Rise',
          slug: 'coderdojo-rise',
          url: 'https://coderdojorise.com/'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
div#web-projects {
    display: grid;
    position: relative;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    .project {
      display: flex;
      position: relative;
      width: calc(100% - 100px);
      height: 50vw;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      padding: 50px;
      img.project-background {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        z-index: 1;
      }
      h2 {
        display: block;
        position: relative;
        z-index: 2;
        font-size: 120px;
        line-height: 140px;
        font-weight: 500;
        color: #FFFFFF;
        text-align: center;
        font-family: 'Poppins', sans-serif;
      }
    }
}
</style>
