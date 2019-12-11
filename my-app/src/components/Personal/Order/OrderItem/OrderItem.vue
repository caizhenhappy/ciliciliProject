<template>
  <ul v-if="orders.length">
    <li v-for="(order) in orders" :key="order.time" class="order" >
      <!-- 订单头部 -->
      <p class="orderTime">
        <span>{{order.time}}</span>
        <span>待支付</span>
      </p>
      <!-- 订单内容(两种) -->
      <div class="orderProduct" v-if="order.products.length===1">
        <img :src="order.products[0].image" alt />
        <p class="proNP">
          <span>{{order.products[0].name}}</span>
          <span>¥{{order.products[0].price}}</span>
        </p>
        <p class="proNM">单价:¥{{order.products[0].price}} 数量:{{order.products[0].count}}</p>
      </div>
      <div class="orderProduct" v-else-if="order.products.length<=5">
        <img :src="product.img" v-for="(product,index) in order.products" :key="index" />
      </div>
      <div class="orderProduct" v-else>
        <img
          :src="product.img"
          alt
          v-for="(product,index) in order.products.slice(0,5)"
          :key="index"
        />
        <p class="many">...</p>
      </div>
      <p class="OD_account">
        <span>共{{order.allCount}}份商品</span>
        <span>
          应付
          <span class="MN">¥{{order.total}}</span>
        </span>
      </p>
      <!-- 订单底部 -->
      <div v-if="true" class="takeOrder border-1px">
        <van-button type="default" round class="takeBN">取消订单</van-button>
        <van-button type="default" round class="takeBN">修改送达时间</van-button>
        <van-button type="primary" round class="takeBN" @click="()=>{payFor(order.time)}">去支付</van-button>
      </div>
      <div v-else>
        <button class="takeBN">删除订单</button>
        <button class="takeBN">再次购买</button>
      </div>
    </li>
  </ul>
</template>

<script>
import dayjs from 'dayjs'
import { mapState } from 'vuex'
import { Dialog } from 'vant'
export default {
  name:"OrderItem",
  data(){
    return {
      // orders: [
      //   {
      //     //第一个订单
      //     products: [
      //       {
      //         name: '智利啥玩意车厘子J级', //商品名
      //         img: require('../../images/apple.jpg'), //商品图片
      //         weight: '260g', //商品单份含量
      //         price: '29.90', //单价
      //         count: 1 //数量
      //       },
      //       {
      //         name: '橙子',
      //         img: require('../../images/apple.jpg'),
      //         weight: '260g',
      //         price: '29.90',
      //         count: 2
      //       },
      //       {
      //         name: '橙子',
      //         img: require('../../images/apple.jpg'),
      //         weight: '260g',
      //         price: '29.90',
      //         count: 2
      //       },
      //       {
      //         name: '橙子',
      //         img: require('../../images/apple.jpg'),
      //         weight: '260g',
      //         price: '29.90',
      //         count: 2
      //       },
      //       {
      //         name: '橙子',
      //         img: require('../../images/apple.jpg'),
      //         weight: '260g',
      //         price: '29.90',
      //         count: 2
      //       },
      //       {
      //         name: '橙子',
      //         img: require('../../images/apple.jpg'),
      //         weight: '260g',
      //         price: '29.90',
      //         count: 2
      //       }
      //     ],
      //     time: '2019-12-10 21:23:36', //订单生成时间（结算）
      //     total: 23.23 //总价
      //   },
      //   {
      //     //第二份订单
      //     products: [
      //       {
      //         name: '智利啥玩意车厘子J级',
      //         img: require('../../images/apple.jpg'),
      //         weight: '260g',
      //         price: '29.90',
      //         count: 1
      //       }
      //     ],
      //     time: '2019-12-10 21:23:36',
      //     total: 23.23
      //   },
      //   {
      //     //第二份订单
      //     products: [
      //       {
      //         name: '智利啥玩意车厘子J级',
      //         img: require('../../images/apple.jpg'),
      //         weight: '260g',
      //         price: '29.90',
      //         count: 1
      //       }
      //     ],
      //     time: '2019-12-10 21:23:36',
      //     total: 23.23
      //   },
      //   {
      //     //第二份订单
      //     products: [
      //       {
      //         name: '智利啥玩意车厘子J级',
      //         img: require('../../images/apple.jpg'),
      //         weight: '260g',
      //         price: '29.90',
      //         count: 1
      //       }
      //     ],
      //     time: '2019-12-10 21:23:36',
      //     total: 23.23
      //   },
      //   {
      //     //第二份订单
      //     products: [
      //       {
      //         name: '智利啥玩意车厘子J级',
      //         img: require('../../images/apple.jpg'),
      //         weight: '260g',
      //         price: '29.90',
      //         count: 1
      //       }
      //     ],
      //     time: '2019-12-10 21:23:36',
      //     total: 23.23
      //   }
      // ],
    }
  },
  methods:{
    payFor(time){
        Dialog.confirm({
          title: '',
          message: '确认支付吗？'
        }).then(() => {
            this.$store.dispatch('delOrder', time)
        }).catch(() => {})
    }
  },
  computed:{
    ...mapState({
      orders:state=>state.order.orders
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../../../assets/stylus/mixins.styl'
.order
  width 100%
  height 210px
  background-color #fff
  margin 10px 0
  .orderTime, .OD_account
    width 100%
    height 44px
    line-height 46px
    display flex
    justify-content space-between
    font-size 14px
    span
      margin 0 10px
  .OD_account
    justify-content flex-end
    color #666
    font-size 14px
    span
      margin 0 10px 0 0
    .MN
      color #000
      margin 0
      font-size 16px
  .orderProduct
    width 95%
    height 74px
    margin 0 auto
    background-color #f5f5f5
    border-radius 5px
    clearFix()
    .many
      float right
      transform translate(-10px,24px)
    img
      float left
      width 54px
      height 54px
      margin 10px 0 10px 10px
    .proNM
      padding 10px 0 0 74px
      font-size 12px
      color #777
    .proNP
      font-size 14px
      color #000
      display flex
      justify-content space-between
      padding 15px 10px 0 10px
  .takeOrder
    width 100%
    height 44px
    top-border-1px(#f5f5f5)
    display flex
    justify-content flex-end
    .takeBN
      transform translateY(10px)
      height 30px
      line-height 30px
      margin-right 10px
</style>