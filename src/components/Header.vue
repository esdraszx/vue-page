<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navBar">   
    <router-link class="nav-link" id="brandName" to="/"><h2>EC</h2></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <router-link id="menuItem" class="nav-link" to="/" data-toggle="collapse" data-target=".navbar-collapse.show">HOME</router-link>
        </li>
        <li class="nav-item">
          <router-link id="menuItem" class="nav-link" to="/project" data-toggle="collapse" data-target=".navbar-collapse.show">PROJECTS</router-link>
        </li>
        <li class="nav-item">
          <router-link id="menuItem" class="nav-link" to="/about" data-toggle="collapse" data-target=".navbar-collapse.show" >ABOUT</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link id="menuItem" class="nav-link" to="/contact" data-toggle="collapse" data-target=".navbar-collapse.show">CONTACT</router-link>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  nav {
    position: absolute;
    right: 0px;    
  }

  @media only screen and (min-width: 800px){


    #navBar {
      z-index: 1;
    }

    .nav-link {
      font-size: 18px !important;
    }


    #navBar {
      position: fixed;
      width: 100%;
      top: 0px;
    }

    #navbarNav {
      padding: 0px 20px !important;
      margin: 0px 15px !important;
      height: 50px;
    }
    
    #navBar {
      background-color: rgba(70, 179, 230, 1) !important;
      font-family: 'Righteous', cursive !important;
    }
  }

  /*MOBILLLLEEE*/
  @media only screen and (max-width: 800px) {

    #navbarNav {
      padding: 0px 5px !important;
      margin: 0px 10px !important;
    }

    #navBar {
      background-color: rgba(171, 214, 244, 1) !important;
      font-family: 'Righteous', cursive !important;
    }

    #navbarNav ul {
      display: block;
    }
  }
</style>
