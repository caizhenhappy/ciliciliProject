<template>
  <div id="app">

    <!-- 路由组件显示 -->
    <router-view></router-view>
    <!-- 底部导航 -->
    <Footer v-if="$route.meta.isShow"/>

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

export default {
  name: "App",
  data() {
    return {
    }
  },
  components: {
    Footer
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html,body,#app
    width 100%
    height 100%

</style>

