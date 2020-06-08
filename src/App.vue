<template>
  <div id="app">
    <div class="container">
      <div id="bacK"></div>
      <div id="bacKTwo"></div>
      <router-view></router-view>
    </div>
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
  --dark-blue: #42657d;
}

#bacK {
  width: 100vw;
  height: 100vh;
  background-color: rgba(171, 214, 244, 1);
  transform: skewY(7deg);
  z-index: -2;
  position: absolute;
  top: 45%;
  left: 0px;
  transition: 1s ease-in;
}

#bacKTwo {
  width: 100vw;
  height: 100vh;
  background-color: var(--dark-blue);
  transform: skewY(-7deg);
  z-index: -2;
  position: absolute;
  top: -55%;
  left: 0px;
  transition: 1s ease-in;
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
    height: 600px;
    background-color: rgba(171, 214, 244, 1);
    transform: skewY(-7deg);
    z-index: -2;
    position: absolute;
    top: 5%;
    left: 0px;
  }

}

/*PROJECT CSS*/
</style>
