<template>
  <div class="page home">
    <Landing />
    <div id="timeline" class="section timeline">
      <div class="container">
        <div class="timeline-wrapper">
          <div
            v-for="(item, index) in experience"
            :id="index"
            :key="index"
            class="item in-viewport"
            :style="{'z-index': experience.length - index}"
          >
            <div class="content-wrapper">
              <h2>{{ item.jobTitle }}</h2>
              <h4><a :href="item.linkURL" target="_blank" rel="noreferrer" data-cursor-text="Link">{{ item.linkText }}</a></h4>
              <h4>{{ item.startDate }} - {{ item.endDate }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="web-projects">
      <div v-for="project in projects" :id="project.title" :key="project.title" class="project">
        <div class="content">
          <h2 class="title">
            {{ project.title }}
          </h2>
          <a class="link" :href="project.url" target="_blank" rel="noreferrer" data-cursor-text="Link">{{ project.url }}</a>
          <ul class="technologies">
            <li v-for="tech in project.technology" :key="tech" class="tech">
              {{ tech }}
            </li>
          </ul>
          <div class="text" v-html="project.content" />
        </div>
        <!-- <div :class="project.slug + '-mockup mockup'" @mouseover="mouseOverAnim(project.slug)" @mouseleave="mouseLeaveAnim(project.slug, project.mockupAngle)"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
import Landing from '@/components/homepage/Landing.vue'
export default {
  name: 'HomePage',
  components: {
    Landing
  },
  data () {
    return {
      experience: [
        {
          jobTitle: 'Full Stack Developer',
          linkText: 'NU Creative',
          linkURL: 'https://nucreative.co.uk',
          startDate: 'Oct 18',
          endDate: 'Present'
        },
        {
          jobTitle: 'Junior Web Developer',
          linkText: 'NU Creative',
          linkURL: 'https://nucreative.co.uk',
          startDate: 'Oct 15',
          endDate: 'Oct 18'
        },
        {
          jobTitle: 'Systems and Database Manager',
          linkText: 'Noord Group',
          linkURL: 'https://www.noord-dialogue.com/',
          startDate: 'Jun 15',
          endDate: 'Oct 15'
        },
        {
          jobTitle: 'Junior Android Developer',
          linkText: 'Panda Pay',
          linkURL: 'https://www.pandapayapp.com',
          startDate: 'Jan 15',
          endDate: 'Jun 15'
        },
        {
          jobTitle: 'BSc Computer Science Degree',
          linkText: 'University of Greenwich',
          linkURL: 'https://www.gre.ac.uk/',
          startDate: 'Sep 12',
          endDate: 'May 15'
        }
      ],
      projects: [
        {
          title: 'Piiq',
          slug: 'piiq',
          url: 'https://piiqrp.com',
          technology: [
            'Craft CMS',
            'CSS Grid',
            'SASS',
            'PHP',
            'Apache'
          ],
          content: '<p>Piiq is a aviation insurance firm that was a work project for NU Creative. This is the first public project we have done using Craft CMS, our new solution alternative to Wordpress for brochure sites. I was in charge of the complete build process, I took this opportunity to really hone my skills with CSS Grid and the entire site is built using it. I used a JS library to detect when elements entered the viewport and then animated them with pure CSS.</p><p>This site was also entered for the AVA Awards to which it won gold.</p>'
        },
        {
          title: 'Gerald Edelman',
          slug: 'gerald-edelman',
          url: 'https://www.geraldedelman.com',
          technology: [
            'Django',
            'Nginx',
            'Bootstrap 4'
          ],
          content: '<p>I worked on the Gerald Edelman website as a project with NU Creative. I was in charge of developing both the front and backend of the site. As well as managing any servers required for the build.</p><br /><p>The backend is built with Django to give the client complete control over all the content and is tailored to their specific needs.</p><br /><p>The frontend was built with Bootstrap as this allowed us to quickly get up and running with a grid system already in place.</p>'
        },
        {
          title: 'NU Creative',
          slug: 'nu-creative',
          url: 'https://www.nucreative.co.uk',
          technology: [
            'Django',
            'React',
            'Nginx'
          ],
          content: '<p>For this project I was in charge of developing the backend REST API for React to hook up to. In this instance I used DRF (Django Rest Framework) to create endpoints for React to request data from.</p><br /><p>I was also in charge of setting up and configuring the server that the website runs on.</p>'
        },
        {
          title: 'CoderDojo Rise',
          slug: 'coderdojo-rise',
          url: 'https://coderdojorise.com/',
          technology: [
            'Bootstrap',
            'SASS',
            'PHP'
          ],
          content: '<p>I was part of the team that worked on the website for CoderDojo Rise, a London based CoderDojo event run monthly. The events are designed to teach children how to code.<p>We used the site to advertise when next Dojos were being run and to hook in to the Eventbrite API so people could book tickets from the site.</p>'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  div.page.home {
    div.section.timeline {
      padding: 100px 0;
      div.container {
        div.timeline-wrapper {
        display: block;
        width: 100%;
        div.item {
          display: block;
          position: relative;
          width: 50%;
          max-width: 50%;
          opacity: 0;
          transition: all 1s ease-in-out;
          &.in-viewport {
            opacity: 1;
          }
          &::before {
            position: absolute;
            display: block;
            content: "";
            width: 50%;
            height: 2px;
            background-color: #5d5d5d;
            bottom: 0;
          }
          &::after {
            position: absolute;
            display: block;
            content: "";
            z-index: 2;
            bottom: -10px;
            width: 20px;
            height: 20px;
            background-color: var(--primary-color);
            border-radius: 50%;
          }
          &:nth-child(odd) {
            border-right: 2px solid #5d5d5d;
            margin-right: 50%;
            text-align: right;
            transform: translateX(-100px);
            &.in-viewport {
              transform: translateX(0);
            }
            &::before {
              right: 0;
            }
            &::after {
              right: -10px;
            }
          }
          &:nth-child(even) {
            border-left: 2px solid #5d5d5d;
            margin-left: 50%;
            text-align: left;
            transform: translateX(100px);
            &.in-viewport {
              transform: translateX(0);
            }
            &::after {
              left: -10px;
            }
          }
          div.content-wrapper {
            padding: 30px;
            h2 {
              font-size: 36px;
              line-height: 42px;
              margin-bottom: 20px;
            }
            h4 {
              font-size: 24px;
              line-height: 30px;
              margin-bottom: 20px;
              a {
                position: relative;
                color: var(--primary-color);
                text-decoration: none;
              }
            }
          }
        }
      }
    }
  }
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
        width: 100%;
        height: 600px;
        align-self: center;
        canvas {
          position: relative;
          z-index: 20;
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
}
</style>
