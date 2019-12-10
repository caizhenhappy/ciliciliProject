<template>
  <div class="OD">
    <header class="OD_header">
      <div @click="goBack">
        <ICon into="back" class="back" />
      </div>
      <p>我的订单</p>
    </header>

    <ul class="OD_type">
      <li>
        <span class="choose">全部</span>
      </li>
      <li>
        <span>待支付</span>
      </li>
      <li>
        <span>待收货</span>
      </li>
      <li>
        <span>待评价</span>
      </li>
    </ul>
    <div class="OD_listContainer">
      <ul>
        <li class="OD_all">全部</li>
        <li class="OD_bePaied">待支付</li>
        <li class="OD_beGot">待收货</li>
        <li class="OD_BeRated">待评价</li>
      </ul>
    </div>
    <div class="notOrder off">
      <p>暂时还没有相关订单</p>
    </div>
  </div>
</template>

<script>
import ICon from '../ICon/ICon'
import { Swipe, SwipeItem } from 'vant'
export default {
  name: 'Order',
  components: {
    ICon
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.off
  display none
.OD
  width 100%
  height 100%
  background-color #f5f5f5
  position relative
  
  .OD_header
    height 44px
    width 100%
    line-height 44px
    text-align center
    color #232333
    width 100%
    background-color #fff
    position fixed
    top 0
    .back
      position absolute
      left 0
      top 3px
  .OD_type
    width 100%
    height 40px
    line-height 44px
    position fixed
    top 46px
    display flex
    background-color #fff
    li
      flex-grow 1
      span
        font-size 14px
        margin 0 auto
        text-align center
        display block
        height 37px
        width 47px
        &.choose
          border-bottom 3px solid #28BE57
          color #28BE57
  .notOrder
    width 100%
    height 350px
    transform translateY(150px)
    background url('../images/notOrder.jpeg') center center no-repeat
    background-size 225px 211px
    position relative
    p
      width 100%
      height 30px
      font-size 14px
      color #777
      text-align center
      position absolute
      top 280px
  .OD_listContainer
    width 100%
    height 100%
    overflow hidden
    background-color red
    ul
      width 400%
      height 100%
      display flex
      li
        width 25%
        height 100%
        line-height 100%
</style>