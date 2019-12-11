<template>
  <div id="home">
    <!-- 头部地理位置和搜索框 -->
    <div class="head">
      <Header></Header>
      <!-- 首页轮播图 -->
      <!-- 好的 -->
      <HomeSwiper />  
      <!-- tip -->
      <!-- 好的 -->
      <Tip />
    </div>
    <!-- Nav -->
    <!-- 好的 -->
    <Nav />
    <!-- 跳转到会员界面 -->
    <Vip></Vip>
    <!-- 限时抢购 -->
    <FlashBuy/>  
    <!-- //特色专区 -->
    <Feature />
    <!-- //首页tab切换 -->
    <TabHome />
  </div>
</template>
<script>
import Header from './components/Header/Header'
import Tip from './components/Tip/Tip'
import Nav from './components/Nav/Nav'
import Vip from './components/Vip/Vip'
import FlashBuy from './components/FlashBuy/FlashBuy'
import Feature from "../feature/feature";
import TabHome from "../tabHome/tabHome";
import HomeSwiper from "../homeSwiper/homeSwiper";
import axios from "axios"
export default {
  components: {
    Header,
    Tip,
    Nav,
    Vip,
    FlashBuy,
    Feature,
    TabHome,
    HomeSwiper,
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../assets/stylus/mixins.styl"
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



