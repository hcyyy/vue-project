<template>
    <div class="cinema-list">
        <h1>我是影院页面</h1>
        <h2>我当前的定位城市是: {{curCity}}</h2>
        <h2>{{projectName}}</h2>
        <h2>{{cinemaCity}}</h2>
        <button @click="change">修改城市</button>
    </div>
</template>

<script>
// import store from '../store.js'
import {mapState} from 'vuex'
// var mapState = vuex.mapState
export default {
  name: 'Cinema',

  data () {
    return {
      cinemaName: '深圳-凤凰传奇'
    }
  },
  // computed: mapState({
  //   myCity: 'curCity',
  //   myName: 'projectName'
  // }),

  computed: {
    ...mapState([
      'curCity',
      'projectName'
    ]),
    cinemaCity () {
      return this.cinemaName.split('-')[0]
    }
  },

  methods: {
    change () {
      // this.xstore = 'zhangsan'
      // this.store.state.curCity = '长沙市'
      this.$store.commit('chgCurCity', {
        'cityName': '深圳市',
        'quName': '宝安区'
      })
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
