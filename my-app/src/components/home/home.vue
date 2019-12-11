<template>
  <div>
    <!-- 首页轮播图 -->
    <HomeSwiper />
    <!-- //特色专区 -->
    <Feature />
    <!-- //首页tab切换 -->
    <TabHome />
  </div>
</template>
<script>
import Feature from "../feature/feature";
import TabHome from "../tabHome/tabHome";
import HomeSwiper from "../homeSwiper/homeSwiper";
export default {
  components: {
    Feature,
    TabHome,
    HomeSwiper,
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>
