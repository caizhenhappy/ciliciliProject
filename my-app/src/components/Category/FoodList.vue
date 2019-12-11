<template>
  <div class="foodWrapper">
    <ul class="foodList">
      <li
        class="foodItem"
        v-for="(product,index) in products"
        :key="index"
        @click="goFoodDetail(product.id)"
      >
        <van-card
          :desc="product.spec"
          :title="product.name"
          :thumb="product.small_image"
          :origin-price="product.origin_price"
          :price="product.price"
          centered:true
        />
      </li>
    </ul>
  </div>
</template>
<script>
// 引入Bscroll
import BScroll from 'better-scroll'
// 引入接口
import { reqFoodList } from '../../api/index'
export default {
  name: 'FoodList',
  data() {
    return {
      /*  products:[] */
    }
  },
  props: {
    products: {
      type: Array,
      required: true,
      defalut: []
    }
  },
  async mounted() {
    // 初始化滑动对象
    this._initBScroll()
  },
  methods: {
    _initBScroll() {
      // 实例化 滑动对象
      this.rightscroll = new BScroll('.foodWrapper', {
        click: true,
        // 1 非实时
        // 2 实时的
        // 3 实时的  惯性,编码的设置
        probeType: 1
      })
    },
    goFoodDetail(id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>
<style scoped>
.foodWrapper {
  width: 100%;
  height: 100%;
}
.foodList {
  width: 100%;
}
.foodItem {
  width: 100%;
  margin: 5px 0px;
}
</style>