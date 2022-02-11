<template>
  <div class="home">
    <Main/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Main
  }
}
</script>
