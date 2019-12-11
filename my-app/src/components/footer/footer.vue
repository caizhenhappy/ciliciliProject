<template>
  <!-- <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
    <van-tabbar-item icon="home-o">
      <router-link to="/home">首页</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="coupon-o">
      <router-link to="/classify">分类</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="smile-o">
      <router-link to="/classify">吃什么</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="cart-o">
      <router-link to="/classify">购物车</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="manager-o">
      <router-link to="/classify">我的</router-link>
    </van-tabbar-item>
  </van-tabbar>

  <router-view /> -->

  <van-tabbar route  v-model="active" active-color="#07c160" inactive-color="#000">
    <van-tabbar-item replace to="/home" icon="home-o">
      首页
    </van-tabbar-item>
    <van-tabbar-item replace to="/category" icon="coupon-o">
      分类
    </van-tabbar-item>
    <van-tabbar-item replace to="/eat" icon="smile-o">
      吃什么
    </van-tabbar-item>
    <van-tabbar-item replace to="/shopcart" icon="cart-o">
      购物车
    </van-tabbar-item>
    <van-tabbar-item replace to="/personal" icon="manager-o">
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem
  },
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>
