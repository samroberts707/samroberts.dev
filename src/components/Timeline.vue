<template>
  <div id="experience">
    <h1>Experience</h1>
    <div class="timeline">
      <div class="item" v-for="(item, index) in experience" :key="index" :id="index" v-in-viewport.once v-bind:style="{'z-index': experience.length - index}">
        <div class="content-wrapper">
          <h2>{{ item.jobTitle }}</h2>
          <h4><a :href="item.linkURL" target="_blank" rel="noreferrer">{{ item.linkText }}</a></h4>
          <h4>{{ item.startDate }} - {{ item.endDate }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Timeline',
  data: function () {
    return {
      experience: [
        {
          'jobTitle': 'Full Stack Developer',
          'linkText': 'NU Creative',
          'linkURL': 'https://nucreative.co.uk',
          'startDate': 'Oct 18',
          'endDate': 'Present'
        },
        {
          'jobTitle': 'Junior Web Developer',
          'linkText': 'NU Creative',
          'linkURL': 'https://nucreative.co.uk',
          'startDate': 'Oct 15',
          'endDate': 'Oct 18'
        },
        {
          'jobTitle': 'Systems and Database Manager',
          'linkText': 'Noord Group',
          'linkURL': 'https://www.noordgroup.co.uk',
          'startDate': 'Jun 15',
          'endDate': 'Oct 15'
        },
        {
          'jobTitle': 'Junior Android Developer',
          'linkText': 'Panda Pay',
          'linkURL': 'https://www.pandapayapp.com',
          'startDate': 'Jan 15',
          'endDate': 'Jun 15'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
div#experience {
  display: block;
  position: relative;
  background: #EAEAEA;
  padding: 10%;
  h1 {
    font-size: 3vw;
    margin-bottom: 50px;
    text-align: center;
  }
  div.timeline {
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
        height: 1px;
        background-color: #000;
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
        background-color: #f75d5d;
        border-radius: 50%;
      }
      &:nth-child(odd) {
        border-right: 1px solid #000;
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
        border-left: 1px solid #000;
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
          font-size: 2.3vw;
          margin-bottom: 20px;
        }
        h4 {
          font-size: 1.8vw;
          margin-bottom: 20px;
          a {
            position: relative;
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
        }
        p {
          font-size: 1.4vw;
          line-height: 140%;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 7vw;
    }
    div.timeline {
      div.item {
        width: 100%;
        max-width: 100%;
        &:nth-child(odd) {
          border-left: 1px solid #000;
          border-right: none;
          margin-right: 0;
          text-align: left;
          transform: translateX(100px);
          &::before {
            left: 0;
          }
          &::after {
            left: -10px;
          }
        }
        &:nth-child(even) {
          border-left: 1px solid #000;
          margin-left: 0;
          text-align: left;
        }
        div.content-wrapper {
          h2 {
            font-size: 5vw;
          }
          h4 {
            font-size: 4vw;
          }
          p {
            font-size: 3.5vw;
          }
        }
      }
    }
  }
}
</style>
