<template>
  <div id="menuContainer">
    <img id="menu-icon" src="../assets/icons/3pointsIcon.svg" @click="handleShowMenu()"/>
    <transition name="fade" enter-active-class="activeEnter" leave-active-class="activeLeave">
      <ul v-if="showMenu !== false" id="menu" >
        <!-- <li class="menu-item">
          <router-link class="menuItem" to="/">EC</router-link>
        </li> -->
        <li class="menu-item">
          <router-link class="menuItem" to="/">HOME</router-link>
        </li>
        <li class="menu-item">
          <router-link class="menuItem" to="/algorithm">ALGORITHMS</router-link>
        </li>
        <!-- <li class="menu-item">
          <a href="./rec2020.pdf" class="menuItem" target="_blank">RESUME</a>
        </li> -->
        <li class="menu-item">
          <button @click="handleShowMenu()" class="menuItem">CLOSE</button>
        </li>
        <li class="menu-item" id="media">
          <a href="https://www.linkedin.com/in/e-catala/" target="_blank">
            <img src="../assets/icons/linkedIcon.svg" width="30px" height="30px"/>
          </a>
          <a href="https://github.com/esdraszx" target="_blank">
            <img src="../assets/icons/gitIcon.svg" width="32px" height="30px"/>
          </a>
        </li>
        <!-- <li class="nav-item">
          <router-link id="menuItem" class="nav-link" to="/contact" data-toggle="collapse" data-target=".navbar-collapse.show">CONTACT</router-link>
        </li> -->
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      showMenu: false,
    }
  },
  methods: {
    handleShowMenu(){
      this.showMenu = !this.showMenu;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #menuContainer {
    position: absolute;
    right: -5%;
  }

  #menu-icon {
    margin-right: 10px;
  }

  #menu {
    position: absolute;
    text-align: right;
    top: 10px;
    left: 50px;
    width: 150px;
    height: 400px;
    padding: 0px;
    /* animation-duration: .7s; */
  }

  .menu-item {
    list-style-type: none;
    margin: 2px;
    width: 100%;
    height: 40px;
    background-color: var(--medium);
    display: flex;
    position: relative;
    border-radius: 5px;
    transition: ease .5s;
    /* animation-duration: .7s; */
    /* animation-name: appearIntoScreen; */
  }

  .menu-item:hover {
    background-color: var(--medium);
  }

  .menuItem {
    width: 100%;
    margin: auto 5px auto auto;
    color: white;
    background-color: transparent;
    border: none;
    outline: none;
    text-align: right;
    cursor: pointer;
    font-weight: 600;
  }

  a:hover {
    text-decoration: none;
  }

  #media {
    background-color: var(--medium);
  }

  #media a {
    margin: auto 5px auto 5px;
  }

  #media a img {
    border-radius: 50%;
  }

  .activeEnter {
    animation: enterScreen 1s;
  }

  .activeLeave {
    animation: leaveScreen 1s;
  }

  @keyframes enterScreen {
    0% {left:150px; opacity: 0; transform: skewY(10deg);}
    /* 50% {background-color: rgb(0, 175, 175);} */
    100% {left:50px; opacity: 1; transform: skewY(0deg);}  
  }

  @keyframes leaveScreen {
    0% {left:50px; opacity: 1;}
    /* 50% {background-color: rgb(0, 175, 175);} */
    100% {left: 150px; opacity: 0;}  
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  @media only screen and (max-width: 600px){
    #menuContainer {
      top: -0px;
      right: -5%;
    }

    #menu {
      position: fixed;
      top: 0px;
      left: 0px;
      text-align: center;
      background-color: var(--dark);
      height: 100vh;
      width: 100vw;
      border-radius: 0px;
      padding: 0px;
      border: 2px solid var(--dark);
      z-index: 20;
    }

    .menu-item {
      width: 99%;
      height: 50px;
    }

    .menuItem {
      width: 100%;
      margin: auto auto auto auto;
      /* color: white; */
      /* border-bottom: 1px solid rgba(255, 255, 255, 0.4); */
      /* font-weight: 500; */
      font-size: 15px;
      text-align: center;
    }

    #media {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--dark);
    }

    #media a {
      border: 1px solid white;
      border-radius: 50%;
    }

    @keyframes enterScreen {
      0% {left:0px; opacity: 0; transform: skewY(0deg);}
      /* 50% {background-color: rgb(0, 175, 175);} */
      100% {left: -0px; opacity: 1; transform: skewY(0deg);}  
    }

    @keyframes leaveScreen {
      0% {left: 0px; opacity: 1;}
      /* 50% {background-color: rgb(0, 175, 175);} */
      100% {left: 0px; opacity: 0;}  
    }
  }
  
</style>
