<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// 禁止手机端扩大和缩小手势
window.onload = function () {
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  document.addEventListener('gesturestart', function (event) {
    event.preventDefault()
  })
}
export default {
  name: 'App'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
html , body
  width 100%
  height 100%
  #app
    height 100%
    width 100%
</style>
