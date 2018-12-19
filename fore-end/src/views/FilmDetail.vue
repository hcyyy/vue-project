<template>
<div class="film">
  <ul>
    <li
    v-for="(item,index) in details"
    :key="index"
    @click="getFilmDetail(item.filmId)">
    <div class="film-poster">
      <img :src="item.poster">
    </div>

    <div class="film-detail">
      <div class="col">
        <div class="film-name">
          <span class="name">{{item.name}}</span>
          <span class="item">{{item.filmType.name}}</span>
        </div>
        <div class="film-grade">
          <span class="grade">{{item.grade}}</span>
          <span class="grade-text">分</span>
        </div>
      </div>

      <div class="film-category grey-text">{{item.category}}</div>
      <div class="film-premiere-time grey-text">
        {{filmdeta(item.premiereAt)}}上映
      </div>
      <div class="film-nation-runtime grey-text">
        {{item.nation}}  | {{item.runtime}}分钟
      </div>
      <div class="film-synopsis grey-text">
        {{item.synopsis}}
      </div>
      <div class="toggle">
        <i class="iconfont icon-xiala"></i>
      </div>
    </div>
    <!-- <router-link to="/film/9898">我要看猫王</router-link> -->

    <div class="actors">
      <div class="actors-title-bar">
        <span>演职人员</span>
      </div>
      <div class="actors-list">
        <ul class="row-scroll-items-nav">
          <li class="row-scroll-item" v-for="(item,index) in item.actors" :key="index">
            <div class="actors-item">
              <div class="actors-img">
                <div class="lazy-img-wrap">
                  <img class="target-img" :src="item.avatarAddress">
                </div>
              </div>
              <span class="actors-name"> {{item.name}}</span>
              <span class="actors-role"> {{item.role}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="photos">
      <div class="photos-title-bar">
        <span class="photos-title-text">剧照</span>
        <span class="photos-to-all">
          全部(6)
          <i class="iconfont"></i>
        </span>
      </div>
      <div class="photos-list">
        <ul class="row-scroll-items-nav">
          <li class="photos-item-wrap" v-for="(item,index) in item.photos" :key="index">
            <div class="photos-item">
              <div class="photos-img">
                <div class="padding"></div>
                <div class="lazy-img-wrap">
                  <img :src="item" class="target-img">
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <a href="#">
      <div class="goSchedule">
        选座购票
      </div>
    </a>
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'FilmDetail',

  data () {
    return {
      filmName: '',
      details: []
    }
  },

  methods: {
    getFilmDetail () {
      axios
        .get('/api/film1/xqy', {
          params: {
            filmId: this.$route.params.filmId
          }
        })
        .then(response => {
          let result = response.data
          if (result.code === 0) {
            this.details = result.details
          } else {
            alert(result.msg)
          }
        })
    },

    filmdeta (premiereAt) {
      var date = new Date(premiereAt * 1000)
      var y = date.getFullYear() + '-'
      var m =
        (date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1) + '-'
      var d = date.getDate() + ''
      return y + m + d
    }
  },

  created () {
    this.getFilmDetail()
  }
}
</script>

<style lang="scss">
@import "@/styles/common/px2rem.scss";

.film {
  flex: 1;
  overflow-y: auto;

  .film-poster {
    height: px2rem(210);
    img {
      width: 100%;
      height: 100%;
    }
  }

  .film-detail {
    padding: px2rem(15);
    padding-top: px2rem(12);
    background-color: #fff;

    .col {
      display: flex;
      align-items: center;
    }

    .film-name {
      flex: 1;
      display: flex;
      align-items: center;

      .name {
        color: #191a1b;
        font-size: px2rem(18);
        height: px2rem(24);
        line-height: px2rem(24);
        margin-right: px2rem(8);
      }

      .item {
        font-size: px2rem(12);
        color: #fff;
        background-color: #d2d6dc;
        height: px2rem(14);
        line-height: px2rem(14);
        padding: 0 px2rem(2);
        border-radius: px2rem(2);
        display: inline-block;
      }
    }

    .film-grade {
      flex-shrink: 0;
      width: px2rem(100);
      text-align: right;
      color: #ffb232;
      font-size: px2rem(12);

      .grade {
        font-size: px2rem(18);
        font-style: italic;
      }
    }

    .grey-text {
      font-size: px2rem(13);
      line-height: px2rem(20);
      color: #797d82;
      margin-top: px2rem(4);
    }

    .film-synopsis {
      margin-top: px2rem(8);
      overflow: hidden;
      &.hide {
        height: px2rem(40);
      }
    }

    .toggle {
      text-align: center;
      &.hide {
        i {
          transform: translate(180deg);
        }
      }
    }
  }

  .actors {
    margin-top: 10px;
    background-color: #fff;
    .actors-title-bar {
      width: 100%;
      padding: 15px;
      .actors-title-text {
        display: inline-block;
        height: 22.5px;
        line-height: 22px;
        font-size: 16px;
        text-align: left;
        color: #191a1b;
      }
    }

    .actors-list {
      height: 140px;
      background: rgb(255, 255, 255);
      overflow-x: auto;
      overflow-y: hidden;
      .row-scroll-items-nav {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        width: 100%;
        margin: 0;
        padding-left: 15px;
        list-style: none;
        .row-scroll-item {
          width: 85px;
          min-width: 85px;
          position: relative;
          margin-right: 10px;
          cursor: pointer;
          display: block;
          float: left;
          .actors-item {
            text-align: center;
            .actors-img {
              width: 85px;
              height: 85px;
              position: relative;
              background: rgb(249, 249, 249);
              .lazy-img-wrap {
                width: 85px;
                height: 85px;
                background: rgb(249, 249, 249);
                opacity: 1;
                display: block;
                position: absolute;
                overflow: hidden;
                top: 0;
                .target-img {
                  width: 100%;
                  position: absolute;
                  left: 0;
                  top: 50%;
                  -webkit-transform: translateY(-50%);
                }
              }

              .actors-name {
                display: block;
                text-align: center;
                padding-top: 10px;
                font-size: 12px;
                color: #191a1b;
                width: 85px;
                height: 18px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }

              .actors-role {
                display: block;
                text-align: center;
                font-size: 10px;
                color: #797d82;
              }
            }
          }
        }
      }
    }
  }

  .photos {
    margin-top: 10px;
    margin-bottom: 60px;
    background-color: #fff;
    .photos-title-bar {
      height: 62px;
      width: 100%;
      padding: 15px;
      .photos-title-text {
        display: inline-block;
        height: 22.5px;
        line-height: 22px;
        font-size: 16px;
        text-align: left;
        color: #191a1b;
      }

      .photos-to-all {
        font-size: 13px;
        color: #797d82;
        float: right;
        display: inline-block;
        height: 22.5px;
        line-height: 22px;
        .iconfont {
          font-size: 13px;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
        }
      }
    }

    .photos-list {
      height: 115px;
      background: rgb(255, 255, 255);
      overflow-x: auto;
      overflow-y: hidden;
      .row-scroll-items-nav {
        display: flex;
        -webkit-box-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        align-items: center;
        position: relative;
        width: 100%;
        margin: 0;
        padding-left: 15px;
        list-style: none;
        .photos-item-wrap {
          min-width: 150px;
          position: relative;
          margin-right: 10px;
          width: auto !important;
          .photos-item {
            display: block;
            .photos-img {
              width: 150px;
              height: 100px;
              background: rgb(249, 249, 249);
              position: relative;
              .padding {
                width: 150px;
                height: 100px;
                background: rgb(249, 249, 249);
                display: flex;
                -webkit-box-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                align-items: center;
              }

              .lazy-img-wrap {
                width: 150px;
                height: 100px;
                background: rgb(249, 249, 249);
                opacity: 1;
                display: block;
                position: absolute;
                overflow: hidden;
                top: 0;
                justify-content: center;
                -webkit-box-align: center;
                align-items: center;
                .target-img {
                  width: 100%;
                  position: absolute;
                  top: 50%;
                  -webkit-transform: translateY(-50%);
                }
              }
            }
          }
        }
      }
    }
  }

  .goSchedule {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 49px;
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
  }
}
</style>
