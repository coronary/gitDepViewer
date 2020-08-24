<template>
  <div id="app">
    <h1>DEPENDENCY VIEWER</h1>
    <Search></Search>
  </div>
</template>

<script>
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
      Search
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

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    #app {
      margin: 60px 60px 60px;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    #app {
      margin: 60px 60px 60px;
    }
}
</style>
