<template>
    <div>
      <Header></Header>
      <div class="row normalRow">
          <div class="row">
              <div class="col-sm-6" id="aboutImg">
                  <img src="../assets/1esc.png" class="fwImg">
              </div>
              <div class="col-sm-6" id='aboutText'>
                  <h2><strong>About Me</strong></h2>
                  <p>I am pursuing a bachelor's degree in Information Technologhy from Brigham Young University
                  with a minor in Computer Science. Web development caught my attention right at the beginning of my school program. 
                  I like doing front-end development. Currently, I am learning how to work with Vue Js as my front-end framework. When it comes to back end, 
                  I have worked with Node.Js and ExpressJs, but I have also worked with PHP, ColdFusion, and Python.
                  </p>
              </div>
          </div>
          <br/><br/><br/>
          <div class="row">
              <div class="col-sm-4">
                  <img src="../assets/icons/book.png" width="25%">
                  <p class="overViewContent">this is the education part. Include education everything there is this is the education part. Include education everything there is</p>
              </div>
              <div class="col-sm-4">
                  <img src="../assets/icons/keyb.png" width="25%">
                  <p class="overViewContent">this is the group experience based on projects and working with a team of developers//this is the education part. Include education everything there is</p>
              </div>
              <div class="col-sm-4">
                  <img src="../assets/icons/tools.png" width="25%">
                  <p class="overViewContent">kjahsdfkjh akjsdhf jkahkjsdhf kjhakjsdhf kjahskdjfh ks kjahskdjfh ks kjahskdjfh ks kjahskdjfh ksjdhf kajskjahsdfkjh akjsdhf jkahkjsdhf kjhakjsdhf kjahskdjfh ksjdhf kajskjahsdfkjh akjsdhf jkahkjs</p>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import Header from '../components/Header'

export default {
    components: {
        'Header': Header,
    },
}
</script>

<style scoped>

    .sectionBlock {
        height: 400px; 
        display: flex;
    }

    .sectionBlock .row {
        margin: auto;
    }

    .sectionBlock .row div {
        vertical-align: top;
    }

    #aboutImg {
        display: flex;
    }

    #aboutImg img {
        margin: auto;
        width: 300px;
        border-radius: 50%;
    }

    #overView {
        width: 100%;
    }

    #overView .row {
        width: 100%;
        margin-left: 0%;
    }

    .overViewContent {
        padding: 30px;
    }

    .normalRow {
        font-family: 'Montserrat', sans-serif;
        margin: 10px;
    }

    @media only screen and (max-width: 1000px){
        
        #aboutImg {
            display: none;
        }

        #aboutText {
            height: auto;
            min-height: 300px;
            word-wrap: break-all;
            margin: auto;
        }

        #aboutText p {  
            height: inherit !important;
            word-wrap: wrap;
            word-break: break-all;
        }
    }

    @media only screen and (max-width: 574px){
        
    }

</style>
