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
                <li class="z-act"><span>正在热映</span></li>
                <li><span>即将上映</span></li>
            </ul>
        </div>
        <!-- 页面标签切换 -->
        <!-- list -->
        <div class="film-list-content">
            <ul>
                <li
                v-for="(item,index) in films"
                :key="index">
                    <div class="picture">
                        <img :src="item.poster">
                    </div>
                    <div class="introduce">
                        <div>
                            <span class="n-name">{{item.name}}</span>
                            <span class="n-item">{{item.filmType.name}}</span>
                        </div>
                        <div>
                            <span class="g-label">观众评分</span>
                            <span class="g-grade">{{item.grade}}</span>
                        </div>
                        <div>
                            <span class="a-label">
                                主演: {{ actorsList(item.actors) }}
                            </span>
                        </div>
                        <div>
                            <span class="d-label">{{item.nation}} | {{item.runtime}}</span>
                        </div>
                    </div>
                    <div class="buy">购票</div>
                </li>
            </ul>
        </div>
        <!-- list -->
    </div>
</template>

<script>
import Swiper from 'swiper'
import axios from 'axios'
export default {
  name: 'Films',

  data () {
    return {
      curCity: '',
      films: [],
      pageNum: 1,
      pageSize: 5,
      totalPage: 0
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

    getFilms () {
        axios.get('/api/film/list',{
            params: {
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }
        })
        .then((response) => {
            let result = response.data;
            if (result.code === 0) {
                this.films = result.data.films
            }else {
                alert(result.msg)
            }
        })
    },

    actorsList (list) {
        let arr = [];
        arr = list.map(item => {
            return item.name
        })

        return arr.join(' ');
    }
  },

  created () {
    this.getCityName();
    this.getFilms();
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

.film-list-content{
    border-bottom: px2rem(1) solid #ededed;
            ul{
                margin-left: px2rem(15);
                li{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    padding: px2rem(15) px2rem(15) px2rem(15) 0;
                    position: relative;
                    height: px2rem(124);
                    .picture{
                        flex-shrink: 0;
                        width: px2rem(66);
                        height: px2rem(94);
                        background: rgb(249, 249, 249);
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    //内容简介
                    .introduce{
                        height: px2rem(100);
                        width: px2rem(229);
                        padding: 0 px2rem(10);
                        div{
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        //电影名称                           
                            span{
                                display: inline-block;
                                vertical-align: middle;
                            }
                            .n-name{
                                max-width: calc(100% - px2rem(25));
                                color: #191a1b;
                                font-size: px2rem(16);
                                height: px2rem(22);
                                line-height:px2rem(22);
                                margin-right: px2rem(5);
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            .n-item{
                                font-size: px2rem(9);
                                color: #fff;
                                background-color: #d2d6dc;
                                height: px2rem(14);
                                line-height: px2rem(14);
                                padding: 0 px2rem(2);
                                border-radius: px2rem(2);
                            }
                        //评分栏
                            .g-label{
                                font-size: px2rem(13);
                                margin-top: px2rem(4);
                                color: #797d82;
                            }
                            .g-grade{
                                color: #ffb232;
                                font-size: px2rem(14);
                            }

                            .a-label{
                                font-size: px2rem(13);
                                margin-top: px2rem(4);
                                color: #797d82;
                            }

                            .d-label{
                                font-size: px2rem(13);
                                margin-top: px2rem(4);
                                color: #797d82;
                            }
                    }

                    //购票按钮
                    .buy{
                        flex-shrink: 0;
                        height: px2rem(25);
                        width: px2rem(50);
                        line-height: px2rem(25);
                        color: #ff5f16;
                        font-size: px2rem(13);
                        text-align: center;
                        border-radius: px2rem(2);
                        position: relative;
                        border: px2rem(1) solid #ff5f16;
                    }
                }
            }
        }
</style>
