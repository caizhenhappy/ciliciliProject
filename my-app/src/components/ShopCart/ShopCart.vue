<template>
  <div class="SC">
    <header class="SC_header">
      <h2 class="SC_title">购物车</h2>
      <a v-if="cartList.length" class="SC_del" @click="resetCart">删除</a>
    </header>
    <section class="SC_cartList">
      <!-- 购物车空了 -->
      <div class="SC_emptyCart" v-if="!cartList.length">
        <img src="./images/cart.png" alt />
        <p>购物车空空滴~</p>
        <a>去逛逛</a>
      </div>
      <!-- 购物车非空 -->
      <ul v-else class="SC_Cart">
        <li v-for="(cartItem) in cartList" :key="cartItem.id" class="SC_ware">
          <input type="radio" class="realRadio" id="index" />
          <label
            for="index"
            class="radio"
            :class="{select:cartItem.isSelect}"
            @click="()=>{selectItem(cartItem.id)}"
          ></label>
          <img :src="cartItem.image" alt />
          <div class="ware_data">
            <p>{{cartItem.name}}</p>
            <p>{{`￥`+cartItem.price}}</p>
          </div>
          <div class="ware_num">
            <van-stepper
              v-model="cartItem.count"
              @change="(e)=>{upDateItem(e,cartItem.id)}"
              integer
              min="0"
              name="cartItem.id"
            />
          </div>
        </li>
      </ul>
      <div class="SC_division border-1px">猜你喜欢</div>
      <ul>
        <li>
          <!-- 未完成 -->
          <button @click="todo">测试使用</button>
        </li>
      </ul>
    </section>
    <footer class="SC_footer" v-if="cartList.length">
      <input type="radio" class="realRadio" id="selectAll" />
      <label for="selectAll" class="radio" :class="{select:isSelectAll}" @click="selectAll"></label>
      <p>全选</p>
      <div class="countMoney">
        合计：
        <span class="money">￥{{total}}</span>
      </div>
      <a class="account" @click="settle">结算</a>
    </footer>
  </div>
</template>

<script>
import { Dialog } from 'vant'
import { mapState } from 'vuex'
import dayjs from 'dayjs'
export default {
  name: 'ShopCart',
  methods: {
    todo() {
      const cartItem = {
        id: '163123',
        name: '祢豆子',
        price: 2.39,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3739812277,923348386&fm=26&gp=0.jpg',
        isSelect: true
      }
      this.$store.dispatch('addCart',cartItem)
    },
    //单选
    selectItem(id) {
      this.cartList.forEach(cartItem => {
        if (cartItem.id === id) {
          cartItem.isSelect = !cartItem.isSelect
        }
      })
    },
    //全选
    selectAll() {
      if (this.isSelectAll) {
        this.cartList.forEach(cartItem => (cartItem.isSelect = false))
      } else {
        this.cartList.forEach(cartItem => (cartItem.isSelect = true))
      }
    },
    //商品数量0时是否删除商品
    upDateItem(e, id) {
      if (!e) {
        Dialog.confirm({
          title: '',
          message: '确认删除该商品吗？'
        })
          .then(() => {
            this.$store.dispatch('delCart', id)
          })
          .catch(() => {
            this.cartList.forEach(cartItem => {
              if (cartItem.id === id) {
                cartItem.count = 1 //这里最好是恢复原数据
              }
            })
          })
      }
      //更新购物车商品数量
      this.$store.dispatch('updateCount', { count: e, id })
    },
    //结算
    settle() {
      const order = {}
      order.time = dayjs(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
      console.log(order.time)
      order.products = this.cartList
      order.allCount = this.allCount
      order.total = this.total
      console.log(order)
      Dialog.confirm({
        title: '',
        message: '确认生成订单吗？'
      })
        .then(() => {
          // 将order添加到state的orders
          this.$store.dispatch('addOrder',order)
          this.$store.dispatch('resetCart')
        })
        .catch(() => {})
    },
    //左上角清空购物车
    resetCart() {
      Dialog.confirm({
        title: '',
        message: '确认清空购物车吗？'
      })
        .then(() => {
          this.$store.dispatch('resetCart')
        })
        .catch(() => {})
    }
  },
  computed: {
    //获取购物车数据
    ...mapState({
      cartList: state => state.cart.cartList
    }),
    //监控全选
    isSelectAll: {
      get() {
        return this.cartList.every(cartItem => cartItem.isSelect === true)
      }
    },
    //监控总价
    total: {
      get() {
        let accountMoney = 0
        accountMoney = this.cartList.reduce((currMN, cartItem) => {
          const money = cartItem.count * cartItem.price
          return currMN + money
        }, 0)
        return accountMoney.toFixed(2)
      }
    },
    //监控总数量
    allCount: {
      get() {
        return this.cartList.reduce((currNM, cartItem) => {
          return currNM + cartItem.count
        }, 0)
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../assets/stylus/mixins.styl'
.select
  &::before
    content ''
    background url('./images/select.png') no-repeat
    background-size cover
.SC
  width 100%
  height 100%
  background-color #f5f5f5
  .SC_header
    width 100%
    height 46px
    line-height 46px
    position fixed
    z-index 10
    background-color #fff
    top 0
    .SC_title
      width 100%
      height 46px
      font-size 18px
      text-align center
    .SC_del
      float right
      margin -46px 10px 0 0
      color #3bba63
  .SC_cartList
    padding-top 50px
    padding-bottom 200px
    .SC_emptyCart
      width 100%
      height 226px
      text-align center
      padding-top 30px
      img
        width 187px
        height 145px
      p
        font-size 18px
        margin 10px 0
      a
        display block
        font-size 18px
        color #fff
        width 106px
        height 36px
        border-radius 18px
        line-height 36px
        margin 0 auto
        background-color rgb(69, 199, 99)
    .SC_Cart
      width 100%
      .SC_ware
        height 110px
        margin-bottom 10px
        background-color #fff
        display flex
        position relative
        align-items center
        .radio
          margin 0 10px
          &::before
            content ''
            display block
            width 14px
            height 14px
            border 1px solid #ccc
            border-radius 50%
        img
          width 90px
          height 90px
        .ware_data
          height 80px
          line-height 40px
          margin 0 16px
        .ware_num
          height 26px
          position absolute
          right 10px
          bottom 10px
          display flex
          font-size 20px
          line-height 26px
          div
            height 26px
            text-align center
            background-color #f5f5f5
            margin 0 6px
    .SC_division
      width 100%
      height 48px
      text-align center
      line-height 48px
      font-size 14px
      position relative
      &::before, &::after
        display block
        width 140px
        content ''
        border-top 1px solid rgb(128, 128, 128)
        position absolute
        top 24px
      &::before
        left 10px
      &::after
        right 10px
  // 感觉这里容易出bug
  .SC_footer
    width 100%
    height 54px
    line-height 54px
    background-color #fff
    position fixed
    top 564px
    z-index 10
    .radio
      position absolute
      left 12px
      top 16px
      &::before
        content ''
        display block
        width 20px
        height 20px
        border 1px solid #ccc
        border-radius 50%
    p
      margin-left 38px
    .countMoney
      font-size 14px
      position absolute
      top 0
      right 120px
      .money
        color red
        font-size 20px
        // 失效
        // &:first-letter
        // font-size 12px
        // margin 0 6px
    .account
      hegiht 54px
      width 100px
      position absolute
      right 0
      top 0
      line-height 54px
      text-align center
      background-color red
      color #fff
  .van-submit-bar
    bottom 50px
.realRadio
  display none
</style>