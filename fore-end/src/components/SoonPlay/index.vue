<template>
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
                    <div class="buy">预约</div>
                </li>
            </ul>

            <div class="load-more" @click="loadMore">{{loadMoreText}}</div>
        </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SoonPlay',

  data () {
    return {
      films: [],
      loadMoreText: '点击,加载下一页',
      pageNum: 1,
      pageSize: 3,
      totalPage: 0
    }
  },

  methods: {
    getFilms () {
      axios.get('/api/film/list', {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          type: 2
        }
      })
        .then(response => {
          let result = response.data

          this.totalPage = Math.ceil(result.data.total / this.pageSize)

          if (this.pageNum >= this.totalPage) {
            this.loadMoreText = '页面加载完毕'
          }

          if (result.code === 0) {
            this.films = this.films.concat(result.data.films)
          } else {
            alert(result.msg)
          }
        })
    },

    actorsList (list) {
      let arr = []
      arr = list.map(item => {
        return item.name
      })

      return arr.join(' ')
    },

    loadMore () {
      this.pageNum++
      this.getFilms()
    }
  },

  created () {
    this.getFilms()
  }
}
</script>

<style lang="scss">
@import '@/styles/common/px2rem.scss';
.film-list-content {
  border-bottom: px2rem(1) solid #ededed;
  ul {
    margin-left: px2rem(15);
    li {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: px2rem(15) px2rem(15) px2rem(15) 0;
      position: relative;
      height: px2rem(124);
      border-bottom: px2rem(1) solid #d2d6dc;
      .picture {
        flex-shrink: 0;
        width: px2rem(66);
        height: px2rem(94);
        background: rgb(249, 249, 249);
        img {
          width: 100%;
          height: 100%;
        }
      }
      //内容简介
      .introduce {
        height: px2rem(100);
        width: px2rem(200);
        padding: 0 px2rem(10);
        div {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        //电影名称
        span {
          display: inline-block;
          vertical-align: middle;
        }
        .n-name {
          max-width: calc(100% - px2rem(25));
          color: #191a1b;
          font-size: px2rem(16);
          height: px2rem(22);
          line-height: px2rem(22);
          margin-right: px2rem(5);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .n-item {
          font-size: px2rem(9);
          color: #fff;
          background-color: #d2d6dc;
          height: px2rem(14);
          line-height: px2rem(14);
          padding: 0 px2rem(2);
          border-radius: px2rem(2);
        }
        //评分栏
        .g-label {
          font-size: px2rem(13);
          margin-top: px2rem(4);
          color: #797d82;
        }
        .g-grade {
          color: #ffb232;
          font-size: px2rem(14);
        }

        .a-label {
          font-size: px2rem(13);
          margin-top: px2rem(4);
          color: #797d82;
        }

        .d-label {
          font-size: px2rem(13);
          margin-top: px2rem(4);
          color: #797d82;
        }
      }

      //购票按钮
      .buy {
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

.load-more{
  height: px2rem(30);
  line-height: px2rem(30);
  text-align: center;
}
</style>
