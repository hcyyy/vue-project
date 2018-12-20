import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 状态,放置整个项目中所有能够全局共用的状态
  state: {
    curCity: '岳阳市',

    projectName: '卖座网',

    books: [
      {
        name: '很纯很暧昧',
        islove: 'true'
      },
      {
        name: '校花的贴身高手',
        islove: 'true'
      },
      {
        name: '霸道总裁爱上我',
        islove: 'true'
      }
    ]
  },

  // 对当前的state里面的某一个状态做派生,类似计算属性
  getters: {
    // myLoveBooks (state) {
    //   return state.books.filter(item => {
    //     return item.islove
    //   })
    // }
  },

  // 唯一能修改state状态的地方
  mutations: {
    chgCurCity (state, payload) {
      state.curCity = payload.cityName
    }
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
