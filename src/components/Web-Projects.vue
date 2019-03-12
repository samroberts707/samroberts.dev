<template>
  <div id="web-projects">
    <div class="project">
      <div class="showcase">
        <img src="images/mac-example.jpg" />
      </div>
      <div class="information">
        <h2>Case Study</h2>
        <div class="technologies">
          <img src="http://via.placeholder.com/100"/>
          <img src="http://via.placeholder.com/100"/>
          <img src="http://via.placeholder.com/100"/>
          <img src="http://via.placeholder.com/100"/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl eget ipsum dapibus scelerisque. Pellentesque sodales sem tincidunt, dictum eros ac, tempus ipsum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl eget ipsum dapibus scelerisque. Pellentesque sodales sem tincidunt, dictum eros ac, tempus ipsum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl eget ipsum dapibus scelerisque. Pellentesque sodales sem tincidunt, dictum eros ac, tempus ipsum.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
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
