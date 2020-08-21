<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <h1>TITLE</h1>
    <Search></Search>
  </div>
</template>

<script>
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
      Search
  }
}
</script>

<style>
.header-img {
    /*height: 10vh;*/
    width: 50vw;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 60px 60px;
}
</style>
