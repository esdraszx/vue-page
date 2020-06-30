<template>
  <div id="app">
      <div id="bacK"></div>
      <div id="bacKTwo"></div>
      <div id="bacKThree"></div>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}

</script>

<style>
:root {
  --light-blue: #abd6f4;
  --dark-blue: #4e6db5;
}

#app {
  position: relative;
}

#bacK {
  width: 100vw;
  height: 70vh;
  background-color: var(--dark-blue);
  /* transform: skewY(7deg); */
  z-index: -3;
  position: absolute;
  top: 30%;
  left: 0px;
  transition: .5s ease-in;
}

#bacKTwo {
  width: 50vw;
  height: 50%;
  background-color: var(--light-blue);  
  transform: skewY(7deg);
  z-index: -2;
  position: absolute;
  top: -10%;
  left: 0px;
  transition: .5s ease-in;
}

#bacKThree {
  float: right;
  width: 50vw;
  height: 50%;
  background-color: var(--light-blue);  
  transform: skewY(-7deg);
  z-index: -2;
  position: absolute;
  top: -10%;
  right: 0px;
  transition: .5s ease-in;
}

.content {
  position: relative;
  width: 60%;
  margin: 50px auto auto auto;
  text-align: center;
}


#sideBar {
  position: fixed;
  margin-top: 15%;
  width: 80px;
  text-align: center;
  padding: 10px 0px 10px 0px;
}

#sideBar img {
  margin: 10px 0px 10px 0px;
  height: 40px;
  width: 40px
}

html, body {
  height: 100vh !important;
  overflow: hidden;
}

#app {
  height: 100%;
  overflow-y: scroll;
}

#app::-webkit-scrollbar {
  display: none;
}

a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
}

a:hover {
  color: royalblue;
}

.container {
  height: auto;
  margin-top: 95px;
  min-height: 100%;
  text-align: center;
}

#brandName {
  font-size: 30px !important;
}

.fwImg {
  width: 100%;
}

#footer {
  width: 100%;
  font-family: 'Righteous', cursive;
  text-align: center;
  padding-top: 2px;
  background-color: rgba(70, 179, 230, 1);
  position: relative;
  bottom: 0px !important;
  border: 1px solid green;
  margin: 0px !important;
}

/*MOBILLLLEEE*/
@media only screen and (max-width: 800px) {

  #app {
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .fwImg {
    display: none;
  }

  #footer {
    width: 100%;
    position: relative;
    bottom: 0px;
  }

  #bacK {
    width: 100vw;
    height: 300vh;
    background-color: var(--dark-blue);
    z-index: -2;
    position: absolute;
    top: 50%;
    left: 0px;
  }

  #bacKTwo {
    width: 50vw;
    height: 100%;
    background-color: var(--light-blue);  
    transform: skewY(7deg);
    z-index: -2;
    position: absolute;
    top: -10%;
    left: 0px;
    transition: .5s ease-in;
  }

  #bacKThree {
    float: right;
    width: 50vw;
    height: 100%;
    background-color: var(--light-blue);  
    transform: skewY(-7deg);
    z-index: -2;
    position: absolute;
    top: -10%;
    right: 0px;
    transition: .5s ease-in;
  }

  #projects {
    background-color: var(--dark-blue);
  }

}

/*PROJECT CSS*/
</style>
