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
          <li v-for="(shop, index) in shops" :key="index">
            <Shop :shop="shop" />
          </li>
        </ul>
      </van-tab>
      <van-tab title="晚餐">
        <ul class="shoplist">
          <li v-for="(shop, index) in shops" :key="index">
            <Shop :shop="shop" />
          </li>
        </ul>
      </van-tab>
      <van-tab title="人气">
        <ul class="shoplist">
          <li v-for="(shop, index) in shops" :key="index">
            <Shop :shop="shop" />
          </li>
        </ul>
      </van-tab>
      <van-tab title="心选">
        <ul class="shoplist">
          <li v-for="(shop, index) in shops" :key="index">
            <Shop :shop="shop" />
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";
//单个菜单组件
import Shop from "./shop/shop";
import { reqHomeTab } from "../../api/index";

export default {
  //VAN的TAB配置，m默认选中小标为0 的
  data() {
    return {
      active: 0,
      shops: []
    };
  },
  components: {
    "van-tabs": Tabs,
    "van-tab": Tab,
    Shop: Shop
  },
  async mounted() {
    const result = await reqHomeTab();
    const shops = result.data.data.cate[0].products;
    this.shops = shops;
    //this.initScroll();
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#tabbarItem
  width: 100%
  padding-bottom 3.125rem
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
