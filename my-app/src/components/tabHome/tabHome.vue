<template>
  <div id="tabbarItem">
    <van-tabs
      animated
      swipeable
      sticky
      :border="false"
      ref="tabs"
      type="line"
      color="#28BE57"
      title-active-color="#28BE57"
      animated:yes
    >
      <van-tab title="全部">
        <ul class="shoplist">
          <li><Shop /></li>
          <li><Shop /></li>
          <li><Shop /></li>
          <li><Shop /></li>
        </ul>
      </van-tab>
      <van-tab title="晚餐">
        <ul class="shoplist">
          <li><Shop /></li>
          <li><Shop /></li>
          <li><Shop /></li>
          <li><Shop /></li>
        </ul>
      </van-tab>
      <van-tab title="人气">
        <ul class="shoplist">
          <li><Shop /></li>
          <li><Shop /></li>
          <li><Shop /></li>
          <li><Shop /></li>
        </ul>
      </van-tab>
      <van-tab title="心选">
        <ul class="shoplist">
          <li><Shop /></li>
          <li><Shop /></li>
          <li><Shop /></li>
          <li><Shop /></li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";
//单个菜单组件
import Shop from "./shop/shop";
export default {
  //VAN的TAB配置，m默认选中小标为0 的
  data() {
    return {
      active: 0
    };
  },
  components: {
    "van-tabs": Tabs,
    "van-tab": Tab,
    Shop: Shop
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
#tabbarItem
  width: 100%
  display flex
  flex-direction column
  .shoplist
    width 100%
    display flex
    flex-wrap wrap
    li
      width 50%
      height 100%
</style>
