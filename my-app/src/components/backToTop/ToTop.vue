<template>
  <div class="scrollTop" v-show="showTop" @click="toTop">
    <!-- 回到顶部的小突变 -->
    <van-icon name="arrow-up" />
  </div>
</template>
<script>
export default {
  name: 'ToTop',
  data() {
    return {
      scrollTop: 0,
      time: 0,
      dParams: 20,
      scrollState: 0
    }
  },
  computed: {
    showTop: function() {
      let value = this.scrollTop > 200 ? true : false
      return value
    }
  },
  mounted() {
    window.addEventListener('scroll', this.getScrollTop)
  },
  methods: {
    toTop(e) {
      if (!!this.scrollState) {
        return
      }
      this.scrollState = 1
      e.preventDefault()
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop
      let _this = this
      this.time = setInterval(function() {
        _this.gotoTop(_this.scrollTop - _this.dParams)
      }, 10)
    },
    gotoTop (distance) {
      this.dParams += 20
      distance = distance>0?distance:0
      document.documentElement.scrollTop = document.body.scrollTop = window.pageXOffset = distance
      if(this.scrollTop<10){
        clearInterval(this.time)
        this.dParams = 20
        this.scrollState = 0
      }
  },
   getScrollTop(){
      this.scrollTop = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop
    }
  },
}
</script>
<style scoped>
.scrollTop {
  right: 10px;
  position: fixed;
  bottom: 5rem;
  cursor: pointer;
  z-index: 100;
  font-size:30px;
  color:#000;
}
/* .van-icon van-icon-arrow-up{
  fon
} */
</style>