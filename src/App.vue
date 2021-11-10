<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  background-image: linear-gradient(to bottom right,rgba(255, 255, 0, 0.507), rgba(128, 0, 0, 0.685))
}
</style>
