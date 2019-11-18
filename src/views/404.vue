<template>
  <div class="wrapper">
    <div class="error">
      <img src="images/404-Page.jpg" />
      <h2>Hmm, looks like something has gone wrong</h2>
    </div>
    <div class="blog-list"></div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
div.wrapper {
  padding: 50px 10%;
  div.error {
    img {
      display: block;
      width: 75%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 50px;
    }
    h2 {
      font-size: 2vw;
      text-align: center;
      color: var(--primary-color);
    }
  }
}
</style>
