<template>
  <div class="home_sw">
    <van-swipe :autoplay="3000" indicator-color="white" class="swiper_home">
      <van-swipe-item class="swiper_home_small">
        <img src="https://picsum.photos/id/4/340/160" alt="" />
      </van-swipe-item>
      <van-swipe-item class="swiper_home_small">
        <img src="https://picsum.photos/id/1/340/160" alt="" />
      </van-swipe-item>
      <van-swipe-item class="swiper_home_small">
        <img src="https://picsum.photos/id/2/340/160" alt="" />
      </van-swipe-item>
      <van-swipe-item class="swiper_home_small">
        <img src="https://picsum.photos/id/7/340/160" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.home_sw
  width 100%
  height 10rem
  .swiper_home
    margin 0 auto
    width 94%
    height 10rem
    background red
    .swiper_home_small
      width 100%
      height 100%
      margin 0 auto
</style>
