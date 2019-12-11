<template>
  <div id="category">
    <van-search placeholder="请输入搜索关键词" v-model="value" />
    <div class="middle">
      <div class='recommend'>
        推荐
      </div>
      <div class="like" >
        猜你喜欢
      </div>
      <div class="vip" >
        会员特价
      </div>
    </div>
    <FoodScroll :products="products"/>
  </div>
</template>
<script>
// 引入组件
import FoodScroll from './FoodScroll.vue'
// 引入BScroll
import BScroll from 'better-scroll'
// 引入mock
import { reqCategory } from '../../api/index'
export default {
  name: 'Category',
  data() {
    return {
      active: 2,
      value: '',
      activeId: 1,
      activeIndex: 0,
      category:[],
      products:[]
    }
  },
  components: {
    FoodScroll
  },
  /* async mounted() {
    // 发送异步请求
    const leftResult = await reqCategory()
    //console.log(leftResult);
    const cates = leftResult.data.cate
    this.cates = cates
    await this.$store.dispatch('getShop')
    const pro = this.$store.state.shop
    this.products = pro
  }, */
  /* mounted() {
    // 发送异步请求
    // 初始化滑动对象
    this._initBScroll()
  },
  methods: {
    //初始化滑动对象
    _initBScroll() {
      // 实例化左侧滑动BScroll对象

      this.leftscroll = new BScroll('.menu-wrapper', {
        click: true
      })

      // 实例化右侧滑动BScroll 对象
      this.rightscroll = new BScroll('.foods-wrapper', {
        click: true,
        // 1 非实时
        // 2 实时的
        // 3 实时的  惯性,编码的设置
        probeType: 1
      })
      // 纵向滑动的时候获取y滑动的值
    }
  } */

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../assets/stylus/mixins.styl'
#category
  width 100%
  height 100%
  .middle
    display flex
    justify-content space-around
    margin 10px
    .recommend
      font-size 14px
      line-height 14px
      font-weight 700
      color #000
    .like
      font-size 14px
      line-height 14px
      color green
    .vip
      font-size 14px
      line-height 14px
      color #000
</style>