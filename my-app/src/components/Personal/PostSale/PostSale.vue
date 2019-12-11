<template>
  <div class="PS">
    <header class="PS_header">
      <div @click.stop="goBack">
        <ICon into="back" class="back" />
      </div>
      <p>售后/退款</p>
      <p>联系客服</p>
    </header>
    <div class="PS_listContainer">
      <van-tabs
        v-model="active"
        class="postSaleCard"
        swipeable
        animated
        color="#3BBA63"
        title-active-color="#3BBA63"
        sticky
        lazy-render
      >
        <!-- 售后申请 -->
        <van-tab title="售后申请" class="card">
          <div class="notCoupon">
            <p class="p1">没有符合退款条件的商品</p>
            <p>如有疑问请联系客服(07:00-22:00)</p>
          </div>
        </van-tab>
        <!-- 申请记录 -->
        <van-tab title="申请记录" class="card">
          <div class="notCoupon">
            <p>暂无申请记录</p>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import ICon from '../ICon/ICon'
export default {
  data() {
    return {
      active: 0
    }
  },
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

<style lang="stylus" rel="stylesheet/stylus" scoped>
.PS
  box-sizing border-box
  width 100%
  height 100%
  background-color #f5f5f5
  border-top 47px solid #f5f5f5
  .PS_header
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
  .PS_listContainer
    width 100%
    height 100%
    .postSaleCard
      .card
        .notCoupon
          width 100%
          height 350px
          background url('../images/coupon-empty.png') center center no-repeat
          background-size 225px 211px
          position relative
          p
            width 100%
            height 18px
            font-size 14px
            color #777
            text-align center
            position absolute
            top 300px
          .p1
            top 282px

</style>