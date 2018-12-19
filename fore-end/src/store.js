import Vue from 'vue'

import vuex from 'vuex'

Vue.use(vuex)

const store = new vuex.Store({
  // 状态,放置整个项目中所有能够全局共用的状态
  state: {
    curCity: '岳阳市'
  },

  // 对当前的state里面的某一个状态做派生,类似计算属性
  getters: {

  },

  // 唯一能修改state状态的地方
  mutations: {

  },

  // 异步操作处理
  actions: {

  },

  // 对store做拆分,拆分成一个个小的store
  modules: {

  }
})

// 暴露store实例对象
export default store
