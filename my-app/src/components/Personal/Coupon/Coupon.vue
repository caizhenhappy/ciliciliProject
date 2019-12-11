<template>
  <div class="CP">
    <header class="CP_header">
      <div @click.stop="goBack">
        <ICon into="back" class="back" />
      </div>
      <p>我的优惠券</p>
    </header>
    <div class="CP_listContainer">
      <van-tabs
        v-model="active"
        class="couponCard"
        swipeable
        animated
        sticky
        lazy-render
      >
        <!-- 可使用 -->
        <van-tab title="可使用优惠券" class="card">
          <div class="notCoupon">
            <p>暂无优惠券</p>
          </div>
        </van-tab>
        <!-- 不可使用 -->
        <van-tab title="不可使用优惠券" class="card">
          <!-- <div v-if="orders.length">
            <OrderItem />
          </div>-->
          <div class="notCoupon">
            <p>暂无优惠券</p>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import ICon from '../ICon/ICon'
export default {
  name: 'Coupon',
  data() {
    return {
      active: 0,
      coupons:[
        
      ]
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

<style lang="stylus" rel="stylesheet/stylus">
.CP
  box-sizing border-box
  width 100%
  height 100%
  background-color #f5f5f5
  border-top 47px solid #f5f5f5
  .CP_header
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
  .CP_listContainer
    width 100%
    height 100%
    .couponCard
      .card
        .notCoupon
          width 100%
          height 350px
          background url('../images/coupon-empty.png') center center no-repeat
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
</style>