<template>
  <div class="home_sw">
    <van-swipe :autoplay="3000" indicator-color="white" class="swiper_home">
      <van-swipe-item class="swiper_home_small" v-for="(item,index) in oImg" :key="index">
        <img :src="item.icon_url" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
import { reqFlashFood } from "../../api/index.js"
export default {
  data() {
    return {
      oImg:[]
    };
  },
  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem
  },
  async mounted(){
    // 获取图片数据
    const swiperImg = await reqFlashFood()
    const oImg = swiperImg.data.data.list[0].icon_list.slice(2)
    this.oImg = oImg
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.home_sw
  width 100%
  .swiper_home
    width 100%
    height 100%
    .swiper_home_small
      margin 100px auto 0
      width 100% 
      height 100%
      img 
        width 100%
        height 100%
        background-size cover
</style>
