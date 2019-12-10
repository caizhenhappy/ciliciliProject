<template>
  <div id="flayBuy">
    <div class="titleWrapper">
      <div class="title">限时抢购</div>      
      <van-count-down class='countStyle' :time="time" />
      <!-- 更多按钮 -->
      <div class="more">更多</div>
      <FlashFood />
    </div>
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

<style  scoped>
#flayBuy {
  margin-top: 0.625rem;
  padding: 1.25rem 0 0.9375rem 0;
  background-color: white;
}

.titleWrapper {
  margin: 0 0.625rem 0.625rem 0.625rem;
  height: 1.5625rem;
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
.countStyle .item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #000;
  font-size: 12px;
  text-align: center;
  background-color: #000;
}
.countStyle {
  float: left;
  margin-left: 0.7rem;
  width: 20px;
  height: 20px;
}

.more {
  color: #3cb963;
  float: right;
  font-size: 0.8rem;
}
</style>