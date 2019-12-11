<template>
  <div id="app">
    <!-- 路由组件显示 -->
    <router-view></router-view>
    <!-- 底部导航 -->
    <Footer v-show="$route.meta.isShow === true" />
  </div>
</template>
<script>
//防止放大缩小
window.onload = function() {
  document.addEventListener("touchstart", function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener("gesturestart", function(event) {
    event.preventDefault();
  });
};

import Footer from "./components/footer/footer";
import { getShop } from "../src/store/index";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Footer
  },
  mounted() {
    this.$store.dispatch('getShop');
  }
};
</script>

<style></style>
