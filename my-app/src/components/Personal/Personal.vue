<template>
  <div class="PS">
    <header class="PS_header">
      <h2 class="PS_title">我的</h2>
      <div class="PS_user">
        <img src="./images/avatar.jpeg" class="avatar" alt="avatar" />
        <div>
          <p>{{userInfo.username?userInfo.username:'未登录'}}</p>
          <p v-if="userInfo.username">{{userInfo.phone?userInfo.phone:'未绑定手机'}}</p>
        </div>
      </div>
    </header>
    <article>
      <div class="PS_order">
        <div class="PS_list" @click="toShowOrder">
          <ICon icon="order" />
          <span>我的订单</span>
          <div class="showOrder">
            <span class="allOrder">查看全部订单</span>
            <ICon into="into" />
          </div>
        </div>
        <ul class="orderList">
          <li @click="()=>{toShowOrder(1)}">
            <van-icon name="" :info="orders.length?orders.length:''" class="info"/>
            <ICon beto="bePay" class="beto" />
            <p>待支付</p>
          </li>
          <li @click="()=>{toShowOrder(2)}">
            <van-icon name="" :info="gets.length?gets.length:''" class="info"/>
            <ICon beto="beTakeOver" class="beto" />
            <p>待收货</p>
          </li>
          <li @click="()=>{toShowOrder(3)}">
            <van-icon name="" :info="rates.length?rates.length:''" class="info"/>
            <ICon beto="beRated" class="beto" />
            <p>待评价</p>
          </li>
          <li @click="toShowPS">
            <ICon beto="postSale" class="beto" />
            <p>售后/退款</p>
          </li>
        </ul>
      </div>
      <ul>
        <li class="PS_list" @click="toShowCou">
          <ICon icon="coupon" />
          <span>我的优惠券</span>
          <div class="showOrder">
            <ICon into="into" class="into" />
          </div>
        </li>
        <li class="PS_list" @click="toShowAdd">
          <ICon icon="address" />
          <span>我的收货地址</span>
          <div class="showOrder">
            <ICon into="into" class="into" />
          </div>
        </li>
        <li class="PS_list seg">
          <ICon icon="card" />
          <span>我的绿卡</span>
          <div class="showOrder">
            <ICon into="into" class="into" />
          </div>
        </li>
        <li class="PS_list">
          <ICon icon="phone" />
          <span>联系客服</span>
          <span class="lineTime">客服时间 07:00-22:00</span>
          <div class="showOrder">
            <ICon into="into" class="into" />
          </div>
        </li>
        <li class="PS_list">
          <ICon icon="opinion " />
          <span>意见反馈</span>
          <div class="showOrder">
            <ICon into="into" class="into" />
          </div>
        </li>
      </ul>
    </article>
    <van-button type="danger" size="large" class="loginOut" @click.prevent="loginOut" v-if="userInfo.username">退出</van-button>
    <p class="PS_version">当前版本1.2.0</p>
  </div>
</template>

<script>
import ICon from './ICon/ICon'
import {mapState} from 'vuex'
import {Dialog} from 'vant'
export default {
  data(){
    return {
      gets:[],
      rates:[]
    }
  },
  components: {
    ICon
  },
  methods:{
    toShowOrder(index){
      this.$router.push(`/personal/order/${index}`)
    },
    toShowCou(){
      this.$router.push('/personal/coupon')
    },
    toShowAdd(){
      this.$router.push('/personal/address')
    },
    toShowPS(){
      this.$router.push('/personal/postsale')
    },
    loginOut(){
      Dialog.confirm({
        message: '确定退出吗?'
      }).then(() => {
       this.$store.dispatch('setUser')
        //跳转页面
        this.$router.replace('/login')
      }).catch(() => {
        // on cancel
      })
    }
  },
  computed: {
    ...mapState({
      userInfo:state=>state.Login.userInfo,
      orders:state=>state.order.orders
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.PS
  width 100%
  height 100%
  article
    background-color #f5f5f5
  .PS_order
    .orderList
      height 80px
      width 100%
      background #fff
      display flex
      justify-content space-around
      align-items center
      li
        width 25%
        text-align center
        position relative
        .info
          position absolute
          top 0
          right 30px
        p
          margin-top 6px
          font-size 14px
          color #777
  .PS_list
    width 100%
    height 44px
    line-height 44px
    font-size 14px
    display flex
    background-color #fff
    border-bottom 1px solid #f5f5f5
    position relative
    .showOrder
      color #999
      display flex
      position absolute
      top 1px
      right 10px
      .allOrder
        transform translate(10px, -2px)
    .lineTime
      color #999
      transform translateX(96px)
  .seg
    margin 10px 0
  .PS_header
    width 100%
    height 136px
    background-color #3BBA63
    color #fff
    .PS_title
      width 100%
      height 46px
      line-height 46px
      font-size 18px
      text-align center
    .PS_user
      height 90px
      img
        float left
        border-radius 50%
        height 70px
        width 70px
        margin 10px 15px
      div
        height 60px
        font-size 14px
        padding-top 20px
        line-height 30px
  .PS_order
    margin-bottom 10px
  .loginOut
    margin-top 20px
  .PS_version
    height 20px
    line-height 20px
    font-size 12px
    color #555
    text-align center
</style>
