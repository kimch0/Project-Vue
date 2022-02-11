<template>
  <div id="app" class="container">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: "App",
  components: {
    
    NavBar,
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.navbar{
  background-color: #FAFFD8;
}
.nav-link{
  color:#212529;
  font-size: 1.2em;
}
.dropdown-item{
  font-size: 1.2em;
}

.card-title{
  color:#212529;
  
}

#drinkInfo{
  text-decoration: none;
}
/*
#BF8D5E
#BF6F24
#8A6644
#744416
#40250C

*/
</style>
