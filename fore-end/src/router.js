import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '',
          redirect: '/films/nowPlaying'
        },
        {
          path: 'films',
          // name: 'films',
          component: () => import('./views/Films.vue'),
          children: [
            {
              path: '',
              redirect: '/films/nowPlaying'
            },
            {
              path: 'nowPlaying',
              name: 'nowPlaying',
              component: () => import('./components/Nowplay/index.vue')
            },
            {
              path: 'comingSoon',
              name: 'comingSoon',
              component: () => import('./components/SoonPlay/index.vue')
            }
          ]
        },
        {
          // 影院页
          path: 'cinemas',
          name: 'cinemas',
          component: () => import('./views/Cinema.vue')
        },
        {
          // 个人中心页
          path: 'center',
          name: 'center',
          component: () => import('./views/Center.vue')
        },
        {
          // 拼团页
          path: 'spelling',
          name: 'spelling',
          component: () => import('./views/Spelling.vue')
        }
      ]
    },
    {
      // 详情页面
      path: '/film/:filmId',
      name: 'filmDetail',
      component: () => import('./views/FilmDetail.vue')
    },
    {
      // 登录页面
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '*',
      redirect: 'films/nowPlaying'
    }
  ]
})

export default router
