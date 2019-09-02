<template>
  <div class="section" id="blogs">
    <div class="blog">
      <span class="release-date">12/12/2020</span>
      <h3 class="title">Blog Title</h3>
      <p
        class="synopsis"
      >Synopsis -- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis eros non dui molestie pharetra non a turpis. Etiam ac elementum libero, eget elementum quam. Praesent volutpat ex eu ex bibendum, vel condimentum neque blandit. Morbi quis est a augue maximus pellentesque. Curabitur eros lacus, tincidunt nec auctor nec, ornare vel tellus. Donec ut ligula odio.</p>
    </div>
    <div v-for="blog in blogEntries" :key="blog.id" class="blog">
      <span class="release-date">{{ blog.date }}</span>
      <router-link tag="h3" :to="blog.id" class="title">{{ blog.title }}</router-link>
      <p class="synopsis">{{ blog.description }}</p>
    </div>
  </div>
</template>

<script>
import BlogList from "../blogs/blogs.json";
export default {
  name: "Blogs",
  computed: {
    blogEntries() {
      return BlogList;
    }
  }
};
</script>

<style lang="scss" scoped>
div#blogs {
  display: block;
  position: relative;
  padding: 50px 10%;
  .blog {
    display: block;
    position: relative;
    margin-bottom: 60px;
    span.release-date {
      display: block;
      font-size: 1.2vw;
      color: #787878;
      margin-bottom: 10px;
    }
    h3.title {
      position: relative;
      display: inline-block;
      font-size: 2.3vw;
      color: #f75d5d;
      margin-bottom: 20px;
      cursor: pointer;
      &::after {
        position: absolute;
        left: 0;
        width: 0;
        height: 2px;
        background: #f75d5d;
        content: "";
        opacity: 0;
        -webkit-transition: opacity 0.3s, width 0.3s;
        -moz-transition: opacity 0.3s, width 0.3s;
        transition: opacity 0.3s, width 0.3s;
        bottom: 0;
      }
      &:hover::after,
      &:focus::after {
        opacity: 1;
        width: 100%;
      }
    }
    p.synopsis {
      display: block;
      font-size: 1.4vw;
      line-height: 120%;
      // color: black;
    }
  }
}
</style>
