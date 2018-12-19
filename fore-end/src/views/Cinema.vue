<template>
    <div class="cinema-list">
        <h1>我是影院页面</h1>
        <h2>我当前的定位城市是: {{store.state.curCity}}</h2>
    </div>
</template>

<script>
import store from '../store.js'
export default {
  name: 'Cinema',

  data () {
    return {
      store: store
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/common/px2rem.scss';
.cinema-list{
    flex: 1;
}
</style>
