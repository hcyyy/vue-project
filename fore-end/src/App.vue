<template>
  <div id="app">
    <Films></Films>

    <Nav-bar></Nav-bar>
  </div>
</template>

<script>
import NavBar from './components/NavBar/index'
import Films from './views/Films'
import Cinema from './views/Cinema'
import Center from './views/Center'
export default {
  name: 'App',
  components: {
    NavBar,
    Films,
    Cinema,
    Center
  }
}
</script>

<style lang="scss">
@import "./styles/base.scss"
</style>
