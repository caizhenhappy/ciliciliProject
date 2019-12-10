<template>
  <div id="app">

    <!-- 路由组件显示 -->
    <router-view></router-view>
    <!-- 底部导航 -->
    <Footer />

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
      isShow:false
    }
  },
  components: {
    Footer
  }
  
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
html , body
  width 100%
  height 100%
  #app
    height 100%
    width 100%
</style>

