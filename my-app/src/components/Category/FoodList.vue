<template>
  <div class="foodWrapper">
    <ul class="foodList">
      <li class="foodItem" v-for="(product,index) in products" :key="index"  @click="goFoodDetail">
        <van-card
          :price="product.price"
          :desc="product.spec"
          :title="product.name"
          :thumb="product.small_image"
          :origin-price="product.origin_price"
          centered:true
        />
      </li>
    </ul>
  </div>
</template>
<script>
// 引入Bscroll
import BScroll from "better-scroll"
// 引入接口
import {reqFoodList} from "../../api/index"
export default {
  name: 'FoodList',
  data(){
    return{
      products:[]
    }
  },
  async mounted(){
    // 初始化滑动对象
    this._initBScroll()
    const rightResult = await reqFoodList()
    const products = rightResult.data.data.cate[0].products
    this.products = products
  },
  methods:{
    _initBScroll(){
      // 实例化 滑动对象
       this.rightscroll = new BScroll('.foodWrapper',{
        click:true,
        // 1 非实时
        // 2 实时的
        // 3 实时的  惯性,编码的设置
        probeType:1
      })
    },
    goFoodDetail() {
      this.$router.push('/category/foodDetail')
    }
  },
  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.foodWrapper
  width 100%
  height 100%
  .foodList
    width 100%
    .foodItem
      width 100%
      margin 5px 0
</style>