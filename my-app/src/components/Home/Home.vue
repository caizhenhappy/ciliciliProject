<template>
  <div id="home">
    <div>
      <!-- 头部地理位置和搜索框 -->
      <div class="head">
        <Header></Header>
        <!-- 轮播图 -->
        <Swiper></Swiper>
        <!-- tip -->
        <Tip />
      </div>
      <!-- Nav -->
      <Nav />
      <!-- 跳转到会员界面 -->
      <Vip></Vip>
      <!-- 限时抢购 -->
      <FlashBuy/>
    </div>
  </div>
</template>

<script type="text/javascript">
// 引入页面组件
import Header from './components/header/Header'
import Swiper from './components/Swiper/Swiper.vue'
import Tip from './components/Tip/Tip'
import Nav from './components/nav/Nav'
import Vip from './components/Vip/Vip'
import FlashBuy from './components/FlashBuy/FlashBuy'

export default {
  name: 'Home',
  components: {
    Header,
    Swiper,
    Tip,
    Nav,
    Vip,
    FlashBuy
  }
}
</script>

<style  scoped>
#home {
  width: 100%;
  background-color: "#f5f5f5";
  padding-bottom: 3rem;
}
.head {
    margin-top: -3rem;
    width: 100%;
    background-image: url("http://518taole.7-orange.cn/backImage.png");
  }
.van-divider {
  background-color: #f5f5f5;
  margin: 0;
}
</style>
