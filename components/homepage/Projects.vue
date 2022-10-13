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
        <img class="project-background" :alt="project.title" :src="'/projects/' + project.img">
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
          title: 'Advance Consultancy',
          slug: 'advance-consultancy',
          img: 'advance-consultancy.gif',
          url: 'https://www.advance-consultancy.com'
        },
        {
          title: 'Known Media',
          slug: 'known-media',
          img: 'known-media.gif',
          url: 'https://known-media.com'
        },
        {
          title: 'Xenia',
          slug: 'xenia',
          img: 'xenia.jpg',
          url: 'https://xeniabroking.com'
        },
        {
          title: 'Wellbeing of Women',
          slug: 'wellbeing-of-women',
          img: 'wellbeing-of-women.jpg',
          url: 'https://wellbeingofwomen.org.uk'
        },
        {
          title: 'Dugdale Centre',
          slug: 'dugdale',
          img: 'dugdale.jpg',
          url: 'https://www.dugdalecentre.co.uk'
        },
        {
          title: 'Youth Engagement Toolkit',
          slug: 'youth-engagement-toolkit',
          img: 'youth-engagement-toolkit.jpg',
          url: 'https://voiceopportunitypower.com'
        },
        {
          title: 'Gerald Edelman',
          slug: 'gerald-edelman',
          img: 'gerald-edelman.jpg',
          url: 'https://www.geraldedelman.com'
        },
        {
          title: 'Piiq',
          slug: 'piiq',
          img: 'piiq.jpg',
          url: 'https://piiqrp.com'
        },
        {
          title: 'NU Creative',
          slug: 'nu-creative',
          img: 'nu-creative.jpg',
          url: 'https://www.nucreative.co.uk'
        },
        {
          title: 'CoderDojo Rise',
          slug: 'coderdojo-rise',
          img: 'coderdojo-rise.jpg',
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
    width: calc(100% - 20%);
    grid-template-columns: 1fr 1fr;
    gap: 3px;
    padding: 0 10% 50px 10%;
    .project {
      display: flex;
      position: relative;
      width: calc(100% - 100px);
      height: 30vw;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      padding: 50px;
      transition: transform .3s ease;
      &:nth-child(even) {
        transform: translateY(50px);
      }
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
        font-size: 50px;
        line-height: 60px;
        font-weight: 500;
        color: #FFFFFF;
        text-align: center;
        font-family: 'Poppins', sans-serif;
      }
    }
  @media screen and (max-width: 1300px) {
    .project {
      h2 {
        font-size: 40px;
        line-height: 55px;
      }
    }
  }
  @media screen and (max-width: 990px) {
    grid-template-columns: 1fr;
    padding: 0 3px 50px 3px;
    width: calc(100% - 6px);
    .project {
      width: calc(100% - 60px);
      padding: 30px;
      height: 75vw;
      &:nth-child(even) {
        transform: translateY(0);
      }
      h2 {
        font-size: 40px;
        line-height: 55px;
      }
    }
  }
}
</style>
