<template>
 <div class="swiper">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
  </van-swipe>
  </div>
</template>
<script type="text/javascript">

export default {

}
</script>

<style  scoped>
#swiper {
  padding-top: 6rem;
  width: 95%;
  height: 10rem;
  border-radius: 1rem;
}
#swiper img {
  width: 100%;
  height: 100%;
}
#swiper >>> .swiper-pagination-bullet-active {
  background-color: #75a342;
}

#swiper >>> .swiper-pagination-bullet {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 0;
}
</style>