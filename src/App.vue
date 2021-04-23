<template>
  <div id="app">
    <!-- <Home></Home> -->
	<router-view></router-view>
  </div>
</template>

<script>
import Home from './pages/home/index.vue'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
	width: 100vw;
	height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
