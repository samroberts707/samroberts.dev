<template>
  <div id="web-projects">
    <div class="project" v-for="project in projects" v-bind:key="project.title" :id="project.title">
      <div class="content">
        <h2 class="title">{{ project.title }}</h2>
        <!-- <h4>{{ project.url }}</h4> -->
        <a class="link" :href="project.url" target="_blank" rel="noreferrer">{{ project.url }}</a>
        <ul class="technologies">
          <li class="tech" v-for="tech in project.technology" v-bind:key="tech">{{tech}}</li>
        </ul>
        <div class="text" v-html="project.content"></div>
      </div>
      <div class="mockup">
        <!-- <img :src="project.mockup" :alt="project.title"/> -->
        <picture>
          <source media="(min-width: 768px)" v-bind:srcset="project.mockupWebP" type="image/webp"/>
          <source media="(min-width: 768px)" v-bind:srcset="project.mockup" type="image/png"/>
          <source media="(max-width: 768px)" v-bind:srcset="project.mockupMobileWebP" type="image/webp" />
          <source media="(max-width: 768px)" v-bind:srcset="project.mockupMobile" type="image/png" />
          <img :src="project.mockup" :alt="project.title" type="image/png" />
        </picture>
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
          'title': 'Piiq',
          'url': 'https://piiqrp.com',
          'mockup': './images/piiq.png',
          'mockupWebP': './images/piiq.webp',
          'mockupMobile': './images/piiq-mobile.png',
          'mockupMobileWebP': './images/piiq-mobile.webp',
          'technology': [
            'Craft CMS',
            'CSS Grid',
            'SASS',
            'PHP',
            'Apache'
          ],
          'content': '<p>Piiq is a aviation insurance firm that was a work project for NU Creative. This is the first public project we have done using Craft CMS, our new solution alternative to Wordpress for brochure sites. I was in charge of the complete build process, I took this opportunity to really hone my skills with CSS Grid and the entire site is built using it. I used a JS library to detect when elements entered the viewport and then animated them with pure CSS. This site was also entered for the AVA Awards to which it won gold.</p>'
        },
        {
          'title': 'Gerald Edelman',
          'url': 'https://www.geraldedelman.com',
          'mockup': './images/ge.png',
          'mockupWebP': './images/ge.webp',
          'mockupMobile': './images/ge-mobile.png',
          'mockupMobileWebP': './images/ge-mobile.webp',
          'technology': [
            'Django',
            'Nginx',
            'Bootstrap 4'
          ],
          'content': '<p>I worked on the Gerald Edelman website as a project with NU Creative. I was in charge of developing both the front and backend of the site. As well as managing any servers required for the build.</p><br /><p>The backend is built with Django to give the client complete control over all the content and is tailored to their specific needs.</p><br /><p>The frontend was built with Bootstrap as this allowed us to quickly get up and running with a grid system already in place.</p>'
        },
        {
          'title': 'NU Creative',
          'url': 'https://www.nucreative.co.uk',
          'mockup': './images/nu-creative.png',
          'mockupWebP': './images/nu-creative.webp',
          'mockupMobile': './images/nu-creative-mobile.png',
          'mockupMobileWebP': './images/nu-creative-mobile.webp',
          'technology': [
            'Django',
            'React',
            'Nginx'
          ],
          'content': '<p>For this project I was in charge of developing the backend REST API for React to hook up to. In this instance I used DRF (Django Rest Framework) to create endpoints for React to request data from.</p><br /><p>I was also in charge of setting up and configuring the server that the website runs on.</p>'
        },
        {
          'title': 'CoderDojo Rise',
          'url': 'https://coderdojorise.com/',
          'mockup': './images/cd-rise.png',
          'mockupWebP': './images/cd-rise.webp',
          'mockupMobile': './images/cd-rise-mobile.png',
          'mockupMobileWebP': './images/cd-rise-mobile.webp',
          'technology': [
            'Bootstrap',
            'SASS',
            'PHP'
          ],
          'content': '<p>I was part of the team that worked on the website for CoderDojo Rise, a London based CoderDojo event run monthly. The events are designed to teach children how to code.<p>We used the site to advertise when next Dojos were being run and to hook in to the Eventbrite API so people could book tickets from the site.</p>'
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
    padding: 10%;
    div.project {
      position: relative;
      display: grid;
      grid-template-columns: 40% 60%;
      padding-bottom: 10vh;
      margin-bottom: 10vh;
      &:after {
        position: absolute;
        content: '';
        width: 70%;
        left: 15%;
        bottom: 0vh;
        height: 2px;
        background: #5d5d5d;
      }
      &:last-child:after {
        display: none;
      }
      div.content {
        padding: 30px 30px 30px 0;
        h2.title {
          font-size: 2.3vw;
          margin-bottom: 20px;
        }
        a.link {
          position: relative;
          font-size: 1.5vw;
          margin-bottom: 20px;
          color: var(--primary-color);
          text-decoration: none;
          &::after {
            position: absolute;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary-color);
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
            background: var(--primary-color);
            border-radius: 5px;
            color: #FFF;
          }
        }
        div.text {
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
      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        div.content {
          h2.title {
            font-size: 5vw;
          }
          a.link {
            font-size: 4vw;
          }
          div.text {
            font-size: 3vw;
          }
        }
      }
    }
  }
</style>
