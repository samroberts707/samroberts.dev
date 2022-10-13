<template>
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
</template>
<script>
export default {
  name: 'TimeLine',
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
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
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
</style>
