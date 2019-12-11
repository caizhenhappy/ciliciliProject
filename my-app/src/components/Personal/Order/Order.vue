<template>
  <div class="OD">
    <header class="OD_header">
      <div @click.stop="goBack">
        <ICon into="back" class="back" />
      </div>
      <p>我的订单</p>
    </header>
    <div class="OD_listContainer">
      <van-tabs
        v-model="active"
        class="orderCard"
        swipeable
        color="#3BBA63"
        title-active-color="#3BBA63"
        animated
        sticky
        lazy-render
      >
        <!-- 全部 -->
        <van-tab title="全部" class="card" name="0">
          <div v-if="orders.length">
            <OrderItem />
          </div>
          <div class="notOrder" v-else>
            <p>近三个月无订单记录</p>
          </div>
        </van-tab>
        <!-- 待支付 -->
        <van-tab title="待支付" class="card" name="1">
          <div v-if="orders.length">
            <OrderItem />
          </div>
          <div class="notOrder" v-else>
            <p>暂时还没有待支付订单</p>
          </div>
        </van-tab>
        <!-- 待收货 -->
        <van-tab title="待收货" class="card" name="2">
          <div class="notOrder">
            <p>暂时还没有待收货订单</p>
          </div>
        </van-tab>
        <!-- 待评价 -->
        <van-tab title="待评价" class="card" name="3">
          <div class="notOrder">
            <p>暂时还没有待评价订单</p>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import ICon from '../ICon/ICon'
import OrderItem from './OrderItem/OrderItem'
import {mapState} from 'vuex'
export default {
  name: 'Order',
  data() {
    return {
      active:3,
    }
  },
  components: {
    OrderItem,
    ICon
  },
  methods:{
    goBack(){
      this.$router.back()
    }
  },
  mounted(){
    const active = this.$route.params.id
    this.active = active
  },
  computed:{
    //引入订单数据
    ...mapState({
      orders:state=>state.order.orders
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.OD
  box-sizing border-box
  width 100%
  height 100%
  background-color #f5f5f5
  border-top 47px solid #f5f5f5
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
  .OD_listContainer
    width 100%
    height 100%
    .orderCard
      .card
        .notOrder
          width 100%
          height 350px
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
</style>