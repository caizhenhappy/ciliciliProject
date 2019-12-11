<template>
  <div class="detail">
    <van-nav-bar
      title="商品详情"
      left-text=""
      right-text=""
      left-arrow
      fixed
      @click-left="onClickLeft"
    />
    <div class="headerImage">
      <img :src="detailShop.small_image" alt="" />
    </div>
    <div class="de_main">
      <ul class="de_shop">
        <li>
          <p>{{ detailShop.product_name }}</p>
          <p class="hei">{{ detailShop.spec }}</p>
          <p class="jiage">
            <span class="new">{{ detailShop.price }}</span>
            <span class="old">{{ detailShop.origin_price }} </span>
          </p>
        </li>
        <li>此商品按500g/份计价,如实收少于500g将退还差价</li>
        <li>最快29分钟内送达</li>
      </ul>
      <ul class="gg">
        <li>
          <h3>规格</h3>
        </li>
        <li>
          <span>保持环境</span>
          <span>冷藏</span>
        </li>
        <li>
          <span>保持时间</span>
          <span>18小时</span>
        </li>
      </ul>
      <p></p>
    </div>
    <div class="headerImage">
      <img :src="detailShop.small_image" alt="" />
    </div>
    <div class="footer_img">
      <img
        src="https://img.ddimg.mobi/3f280ff77ab3d1571213379189.jpg?width=750&height=1869"
        alt=""
      />
    </div>
    <div
      data-v-091be844=""
      class="van-goods-action van-goods-action--safe-area-inset-bottom"
      style="z-index: 100;"
    >
      <div
        data-v-091be844=""
        role="button"
        tabindex="0"
        class="van-goods-action-icon"
      >
        <div class="van-icon van-icon-cart-o van-goods-action-icon__icon">
          <!---->
        </div>
      </div>
      <button
        data-v-091be844=""
        class="van-button van-button--warning van-button--large van-button--square van-goods-action-button van-goods-action-button--first van-goods-action-button--last van-goods-action-button--warning"
      >
        <span class="van-button__text">加入购物车</span>
      </button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { NavBar, Tabbar, TabbarItem, Button } from "vant";

export default {
  name: "FoodDetail",
  data() {
    return {
      detailShop: {},
      value: 3
    };
  },
  methods: {
    goDiscuss() {
      // this.$router.push('/category/discuss')
    },

    onClickLeft() {
      this.$router.back();
    }
  },
  mounted() {
    //获取所有的数据
    const shop = this.$store.state.shop;
    //获取路由传过来的id
    const id = this.$route.params.id;
    if (shop && id) {
      const detailShop = shop.find((item, index) => item.id === id);
      if (detailShop) {
        this.detailShop = detailShop;
      }
    }
  },
  destroyed(){
    this.destroyed={}
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.detail
  width 100%
  height 100%
  .de_header
    width 70%
    line-height 50px
    display flex
    justify-content space-around
    .van-icon-arrow-left
      margin-top 15px
      margin-right 60px
      font-size 20px
  .headerImage
    padding-top 50px 
    width 100%
    height 40%
    img
      width 100%
      height 100%
  .de_main
    width 100%
    height 100%
    border-top 0.0625rem solid 	#F5F5F5
    .de_shop
      background-color: #fff;
      padding: .5rem;
      li
        width 100%
        border-bottom 0.1rem solid #f5f5f5
        &:nth-child(1)
          padding 10px 0
          font-size 0.825rem
          line-height 23px
          .hei
            color #A9A9A9
          .jiage
            .new
              color red
            .old
              color #A9A9A9
              margin-left 0.36rem
        &:nth-child(2)
          line-height 35px
          color grey
          font-size 0.825rem
        &:nth-child(3)
          line-height 35px
          font-size 0.825rem
          color grey
    .gg
      width 100%
      border-top 15px solid 	#F5F5F5
      border-bottom  15px solid 	#F5F5F5
      li
        padding 0 10px
        line-height 45px
        border-bottom 0.1rem solid #f5f5f5
        color #A9A9A9
        font-size 0.7rem
        h3
          font-size 16px
          color black
  .footer_img
    width 100%
    border-top 0.125rem solid 	#F5F5F5
    img
      width 100%
  .footer_buttom
    width 100%
    van-tabbar-item
    width 100%
    .f_btn
      background red
      width 100%
</style>
