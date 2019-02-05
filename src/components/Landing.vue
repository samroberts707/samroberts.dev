<template>
  <div id="landing" class="section">
    <transition appear name="slide-fade">
      <div class="content">
        <h1>Hi, I'm Sam.</h1>
        <p>I'm a Full Stack Web Developer, currently living in London.</p>
        <p>I currently work for <a href="https://nucreative.co.uk" target="_blank" rel="noreferrer">NU Creative</a>, a design agency based at London Bridge.</p>
        <p>My current favourite web stack to work in is, <a href="https://vuejs.org/" target="_blank" rel="noreferrer">VueJS</a>, <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">Django</a>, <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">PostgreSQL</a> and <a href="https://www.nginx.com/" target="_blank" rel="noreferrer">NGINX</a>. This site is currently built using VueJS.</p>
      </div>
    </transition>
    <transition appear name="fade">
      <div class="illustration">
        <img src="images/programming.svg" alt="Source -- https://undraw.co/illustrations" />
      </div>
    </transition>
  </div>
</template>
<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 1.5s ease;
}
.slide-fade-enter {
  transform: translateX(-50px);
  opacity: 0;
}
.fade-enter-active {
  transition: all 1.5s ease;
}
.fade-enter {
  opacity: 0;
}

div#landing {
  display: grid;
  position: relative;
  padding: 0 10%;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  height: calc(100vh - 80px);
  div.content {
    font-family: 'Montserrat', sans-serif;
    padding-right: 40px;
    h1 {
      font-size: 3vw;
      margin-bottom: 30px;
    }
    p {
      font-size: 1.5vw;
      line-height: 120%;
      margin-bottom: 30px;
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
  }
  div.illustration {
    padding-left: 40px;
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    div.content {
      padding-right: 0;
      h1 {
        font-size: 7vw;
      }
      p {
        font-size: 5vw;
      }
    }
    div.illustration {
      padding-left: 0;
    }
  }
}
</style>
