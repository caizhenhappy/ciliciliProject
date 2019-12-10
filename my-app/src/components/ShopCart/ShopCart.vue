<template>
  <div class="SC">
    <header class="SC_header">
      <h2 class="SC_title">购物车</h2>
      <a :class="isEmpty?'off':'SC_del'">删除</a>
    </header>
    <section class="SC_cartList">
      <!-- 购物车空了 -->
      <div class="SC_emptyCart" v-if="isEmpty">
        <img src="./images/cart.png" alt="">
        <p>购物车空空滴~</p>
        <a>去逛逛</a>
      </div>
      <!-- 购物车非空 -->
      <ul v-else class="SC_Cart">
        <li v-for="(ware,index) in wares" :key="index" class="SC_ware">
          <input type="radio" class="realRadio" id="index"/>
          <label for="index" class="radio select"></label>
          <img src="./images/midouzi.jpg" alt="">
          <div class="ware_data">
            <p>{{ware.name+' '+ware.weight}}</p>
            <p>{{`￥`+ware.price}}</p>
          </div>
          <div class="ware_num">
            -<div>3</div>+
          </div>
        </li>
      </ul>
      <div class="SC_division border-1px">
        猜你喜欢
      </div>
      <ul>
        <li v-for="(ware,index) in wares" :key="index">
          <!-- 未完成 -->
        </li>
      </ul>
    </section>
    <footer class="SC_footer off">
      <input type="radio" class="realRadio" id="selectAll"/>
      <label for="selectAll" class="radio select"></label>
      <p>全选</p>
      <div class="countMoney">
        合计：<span class="money">￥0.00</span>
      </div>
      <a class="account">结算</a>
    </footer>
  </div>
</template>

<script>
export default {
  name:'ShopCart',
  data(){
    return {
      isEmpty:false,
      wares:[
        {name:'祢豆子',weight:'130g/袋',price:2.39,image:'./images/midouzi.jpg'},
        {name:'祢豆子',weight:'130g/袋',price:2.39,image:'./images/midouzi.jpg'},
        {name:'祢豆子',weight:'130g/袋',price:2.39,image:'./images/midouzi.jpg'},
        {name:'祢豆子',weight:'130g/袋',price:2.39,image:'./images/midouzi.jpg'},
        {name:'祢豆子',weight:'130g/袋',price:2.39,image:'./images/midouzi.jpg'},
        {name:'祢豆子',weight:'130g/袋',price:2.39,image:'./images/midouzi.jpg'},
        {name:'祢豆子',weight:'130g/袋',price:2.39,image:'./images/midouzi.jpg'},
        {name:'祢豆子',weight:'130g/袋',price:2.39,image:'./images/midouzi.jpg'}
      ]
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
          background-color rgb(69,199,99)
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
            margin 0 16px
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
              width 36px
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
        &::before,&::after
          display block
          width 140px
          content:''
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
      top 560px
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
          //失效
          // &:first-letter
          //   font-size 12px
          //   margin 0 6px
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
  .off
    display none
  .realRadio
    display none
</style>