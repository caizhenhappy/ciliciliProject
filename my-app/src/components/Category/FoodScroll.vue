<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul >
          <li class="menu-item" v-for="(cate,index) in cates" :key="index">
            <span class="text bottom-border-1px">{{cate.name}}</span>
          </li>
        </ul>
      </div>
      <!-- <div class="foods-wrapper">
        <ul>
          <li class="food-list-hook">
            <h1 class="title">商品列表</h1>
            <ul>
              <li class="food-item" @click="goFoodDetail">
                <div class="icon">
                  <img src="https://picsum.photos/id/9/57/57" />
                </div>
                <div class="content">
                  <h2 class="name">商品名称2</h2>
                  <p class="desc">xxxxx</p>
                  <div class="price">
                    <span class="now">￥100</span>
                    <span class="old">￥200</span>
                  </div>
                </div>
              </li>
              <li class="food-item">
                <div class="icon">
                  <img src="https://picsum.photos/id/9/57/57" />
                </div>
                <div class="content">
                  <h2 class="name">商品名称2</h2>
                  <p class="desc">xxxxx</p>
                  <div class="price">
                    <span class="now">￥100</span>
                    <span class="old">￥200</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div> -->
      <FoodList />
    </div>
  </div>
</template>
<script>
// 引入BScroll
import BScroll from 'better-scroll'
import { reqCategory } from '../../api/index'
// 引入组件
import FoodList from './FoodList'
export default {
  name:'FoodScroll',
  data(){
    return{
      cates:[],
    }
  },
  components:{
    FoodList
  },
 async mounted() {
    // 发送异步请求
    // 初始化滑动对象
    this._initBScroll()
    const leftResult = await reqCategory() 
    const cates = leftResult.data.cate
    this.cates = cates
  },
  methods: {
    //初始化滑动对象
    _initBScroll() {
      // 实例化左侧滑动BScroll对象

      this.leftscroll = new BScroll('.menu-wrapper', {
        click: true
      })

      /* // 实例化右侧滑动BScroll 对象
      this.rightscroll = new BScroll('.foods-wrapper', {
        click: true,
        // 1 非实时
        // 2 实时的
        // 3 实时的  惯性,编码的设置
        probeType: 1
      }) */
      // 纵向滑动的时候获取y滑动的值
    },
    
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../assets/stylus/mixins.styl'
.goods
  display flex
  position absolute
  width 100%
  height 100%
  background #fff
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      height 54px
      width 56px
      padding 0 12px
      line-height 12px
      font-size 12px
      &.current
        position relative
        z-index 10
        margin-top -1px
        background #fff
        color $green
        font-weight 700
        .text
          border-none()
      .icon
        display inline-block
        vertical-align top
        width 12px
        height 12px
        margin-right 2px
        background-size 12px 12px
        background-repeat no-repeat
      .text
        display table-cell
        width 56px
        vertical-align middle
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        font-size 12px
  .foods-wrapper
    flex 1
    .title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size 12px
      color rgb(147, 153, 159)
      background #f3f5f7
    .food-item
      display flex
      margin 18px
      padding-bottom 14px
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      &:last-child
        border-none()
        margin-bottom 0
      .icon
        flex 0 0 57px
        margin-right 10px
      .content
        flex 1
        .name
          margin 2px 0 6px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .desc, .extra
          line-height 10px
          font-size 10px
          color rgb(147, 153, 159)
        .desc
          line-height 12px
          margin-bottom 8px
        .price
          font-weight 700
          line-height 14px
          .now
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old
            text-decoration line-through
            font-size 10px
            color rgb(147, 153, 159)
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom 12px
</style>