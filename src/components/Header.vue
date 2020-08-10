<template>
  <div id="menuContainer">
    <img src="../assets/icons/3pointsIcon.svg" @click="handleShowMenu()"/>
    <ul v-if="showMenu !== false" id="menu" >
        <li class="menu-item">
        <router-link class="nav-link" id="brandName" to="/"><h2>EC</h2></router-link>
        </li>
      <li class="menu-item">
        <router-link id="menuItem" to="/">HOME</router-link>
      </li>
      <li class="menu-item">
        <router-link id="menuItem" to="/algorithm">ALGORITHM</router-link>
      </li>
      <li class="menu-item">
        <router-link id="menuItem" to="/about">ABOUT</router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link id="menuItem" class="nav-link" to="/contact" data-toggle="collapse" data-target=".navbar-collapse.show">CONTACT</router-link>
      </li> -->
    </ul>
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
    right: -10%;
  }

  #menu {
    position: absolute;
    width: 200px;
  }

  #menu li {
    list-style-type: none;
  }
  
</style>
