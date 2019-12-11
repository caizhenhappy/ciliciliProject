<template>
  <div id="flayBuy">
    <div class="titleWrapper">
      <div class="title">限时抢购</div>      
      <van-count-down :time="time" class="countStyle">
        <template v-slot="timeData">
          <span class="item">{{ timeData.hours }}</span>
          <span class="item">{{ timeData.minutes }}</span>
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <!-- 更多按钮 -->
      <div class="more">更多</div>
    </div>
    <FlashFood />
  </div>
</template>

<script type="text/javascript">
import FlashFood from './FlashFood'
import { CountDown } from 'vant'
export default {
  name:'FlashBuy',
  components: {
    FlashFood
  },
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  }
}

</script>

<style lang="stylus" scoped>
@import "../../../../assets/stylus/mixins.styl"
#flayBuy {
  margin-top: 0.625rem;
  padding: 1.25rem 0 0.9375rem 0;
  background-color: white;
}
.titleWrapper {
  margin: 0 0.625rem 0.625rem 0.625rem;
  height: 1.5625rem;
  width 90%;
}
.title {
  display: inline-block;
  border-left: 4px #3cb963 solid;
  padding-left: 0.3125rem;
  height: 1.3125rem;
  line-height: 1.3125rem;
  vertical-align: middle;
  font-size: 1.1875rem;
  float: left;
}
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: black;
}
.countStyle {
  float: left;
  margin-left: 0.7rem;
  margin 12px
}

.more {
  color: #3cb963;
  float: right;
  font-size: 0.8rem;
}
</style>