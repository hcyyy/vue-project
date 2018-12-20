<template>
    <div class="films-list">
        <!-- 轮播图 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../images/a1.jpg">
            </div>
            <div class="swiper-slide">
                <img src="../images/a2.jpg">
            </div>
            <div class="swiper-slide">
                <img src="../images/a3.jpg">
            </div>
            <div class="swiper-slide">
                <img src="../images/a4.jpg">
            </div>
            <div class="swiper-slide">
                <img src="../images/a5.jpg">
            </div>
            <div class="swiper-slide">
                <img src="../images/a6.jpg">
            </div>
            <div class="swiper-slide">
                <img src="../images/a7.jpg">
            </div>
            <div class="swiper-slide">
                <img src="../images/a8.jpg">
            </div>
            <div class="swiper-slide">
                <img src="../images/a9.jpg">
            </div>
            </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <!-- 轮播图 -->

        <!-- 定位城市 -->
        <div class="city-fixed">
            <span>{{curCity}}</span>
            <i class="iconfont zc-xiangxia"></i>
        </div>
        <!-- 定位城市 -->
        <!-- 页面标签切换 -->
        <div class="tab-bar-wrapper">
            <ul class="tab-bar">
                <li :class="{ 'z-act': $route.path === '/films/nowPlaying' }" @click="switchList('now')"><span>正在热映</span></li>
                <li :class="{ 'z-act': $route.path === '/films/comingSoon' }" @click="switchList('soon')"><span>即将上映</span></li>
            </ul>
        </div>
        <!-- 页面标签切换 -->

        <router-view></router-view>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Films',

  data () {
    return {
      curCity: ''
    }
  },

  methods: {
    getCityName () {
      /* eslint-disable */ 
      let myCity = new BMap.LocalCity()
      myCity.get((result) => {
      this.curCity = result.name;
      })
    },

    switchList (type) {
        if (type === 'now') {
            this.$router.push({
                name: 'nowPlaying'
            })
        } else {
            this.$router.push('/films/comingSoon')
        }
    }
  },

  created () {
    this.getCityName();
  },

  mounted () {
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>

<style lang="scss">
@import '@/styles/common/px2rem.scss';
@import 'swiper/dist/css/swiper.min.css';
.films-list{
    flex: 1;
    overflow-y: auto;
}

.swiper-container{
    height: px2rem(210);
    .swiper-pagination-bullet{
        width: px2rem(10);
        height: px2rem(10) !important;
    }
    img{
        width: 100%;
    }
}

.city-fixed{
    position: absolute;
    top: px2rem(18);
    left: px2rem(18);
    z-index: 999;
    height: px2rem(30);
    line-height: px2rem(30);
    font-size: px2rem(14);
    color: #fff;
    border-radius: px2rem(15);
    text-align: center;
    padding: 0 px2rem(5);
    background: rgba(0,0,0,0.2)
}

.tab-bar-wrapper{
    position: sticky;
    z-index: 999;
    top:px2rem(0);
    height: px2rem(50);
    border-bottom: px2rem(1) solid #ededed;
    background: #fff;
    .tab-bar{
        display: flex;
        height: px2rem(50);
        align-items: center;
        li{
            flex: 1;
            text-align: center;
            font-size: px2rem(14);
            span{
                padding: 0 px2rem(10);
            }
            &.z-act{
                color: #ff5f16;
            }
        }
    }
}
</style>
