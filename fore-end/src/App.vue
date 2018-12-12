<template>
  <div id="app">
    <router-view></router-view>
    <Nav-bar></Nav-bar>
  </div>
</template>

<script>
import NavBar from './components/NavBar/index'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import "./styles/base.scss"
</style>
