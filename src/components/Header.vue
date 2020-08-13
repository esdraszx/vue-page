<template>
  <div id="menuContainer">
    <img src="../assets/icons/3pointsIcon.svg" @click="handleShowMenu()"/>
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
        <li class="menu-item">
          <a href="./rec2020.pdf" class="menuItem" target="_blank">RESUME</a>
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
    background-color: var(--dark-blue);
    display: flex;
    position: relative;
    border-radius: 5px;
    /* animation-duration: .7s; */
    /* animation-name: appearIntoScreen; */
  }

  .menuItem {
    width: 100%;
    margin: auto 5px auto auto;
    color: white;
  }

  #media {
    background-color: var(--light-blue);
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
      right: -5%;
    }

    #menu {
      text-align: center;
      left: -290px;
      background-color: var(--light-blue);
      height: 50px;
      width: 310px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      padding: 2px;
      border: 2px solid var(--dark-blue);
    }

    .menuItem {
      width: 100%;
      margin: auto auto auto auto;
      color: white;
      font-size: 15px;
    }

    #media {
      display: none;
    }

    @keyframes enterScreen {
      0% {left:150px; opacity: 0; transform: skewY(10deg);}
      /* 50% {background-color: rgb(0, 175, 175);} */
      100% {left: -290px; opacity: 1; transform: skewY(0deg);}  
    }

    @keyframes leaveScreen {
      0% {left:-290px; opacity: 1;}
      /* 50% {background-color: rgb(0, 175, 175);} */
      100% {left: 150px; opacity: 0;}  
    }
  }
  
</style>
