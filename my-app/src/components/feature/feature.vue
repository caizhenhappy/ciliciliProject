<template>
  <!-- 代码提示 -->
  <!-- 引入动态数据的时候注意，不要在父级组件直接遍历4个li,因为这4个li的样式都不一样 -->
  <div id="specialZone">
    <div class="titleWrapper">
      <div class="title">特色专区</div>
    </div>
    <!-- 新品尝鲜 -->
    <div class="wrapperItem">
      <div class="newItem">
        <span class="itemTitle">{{newItemList.title}}</span>
        <p class="itemSubTitle">{{newItemList.subtitle}}</p>
        <div>
          <img  class="itemImg" :src="newItemList.imageOne" alt="" />
          <img class="itemImg" :src="newItemList.imageTwo" alt="" />
        </div>
      </div>

      <!-- 九月热卖 -->
      <div class="hotItem">
         <span class="itemTitle">{{hotItemList.title}}</span>
        <p class="itemSubTitle">{{hotItemList.subtitle}}</p>
        <div>
          <img  class="itemImg" :src="hotItemList.imageOne" alt="" />
          <img class="itemImg" :src="hotItemList.imageTwo" alt="" />
        </div>
      </div>

      <!-- VIP专享 -->
      <div class="vipItem">
          <span class="itemTitle">{{vipItemList.title}}</span>
        <p class="itemSubTitle">{{vipItemList.subtitle}}</p>
        <div>
          <img  class="itemImg" :src="vipItemList.imageOne" alt="" />
          <img class="itemImg" :src="vipItemList.imageTwo" alt="" />
        </div>
      </div>

      <!-- 其他列表 -->
      <div class="otherItem">
        <p class="otherTitle">{{otherItemList.title}}</p>
        <p class="otherSubTitle">{{otherItemList.subtitle}}</p>
        <img class="otherImage" :src="lowPriceItemList.image" alt="" />
      </div>

      <!-- 平价菜场 -->
      <div class="lowPrice">
        <p class="otherTitle">{{lowPriceItemList.title}}</p>
        <p class="otherSubTitle">{{lowPriceItemList.subtitle}}</p>
        <img class="otherImage" :src="lowPriceItemList.image" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { reqFeature } from "../../api/index";
export default {
  data() {
    return {
      hotItemList: [], //十月爆款
      lowPriceItemList: [], //平价
      newItemList: [], //新鲜
      otherItemList: [], //吃什么
      vipItemList: [] //vip
    };
  },
  async mounted() {
    //请求特色专区的数据，通过mock
    const result = await reqFeature();
    //item 所有数据的集合
    const item = result.data.special_zone;
    console.log(item);
    const {
      hotItemList, //十月爆款
      lowPriceItemList, //平价
      newItemList, //新鲜
      otherItemList, //吃什么
      vipItemList //vip
    } = item;
    this.hotItemList = hotItemList[0]
    this.lowPriceItemList = lowPriceItemList[0]
    this.newItemList = newItemList[0]
    this.otherItemList = otherItemList[0]
    this.vipItemList = vipItemList[0]
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#specialZone
  margin-top 0.625rem
  padding 1.25rem 0 0.9375rem 0
  background-color white
.titleWrapper
  width 90px
  margin 0 0.625rem 0.625rem 0.625rem
  height 1.5625rem
.title
  display inline-block
  border-left 4px #3cb963 solid
  padding-left 0.3125rem
  height 1.3125rem
  line-height 1.3125rem
  vertical-align middle
  font-size 1.1875rem
.wrapperItem
  padding 0 5px
  width 90%
  height 10rem
  border 0.01rem solid #dddbc0
  margin-left 2.5%
.newItem
  float left
  display flex
  flex-direction column
  align-items flex-start
  width 49.9%
  height 5rem
  border-right 0.01rem solid #dddbc0
  border-bottom 0.01rem solid #dddbc0
.itemTitle
  font-size 0.625rem
  background-image linear-gradient(135deg, red, orange)
  -webkit-background-clip text
  color transparent
  padding-left 0.5rem
  padding-top 0.5rem
.itemSubTitle
  font-size 0.45rem
  color grey
  padding-left 0.5rem
  padding-top 0.3rem
.hotItem
  display flex
  flex-direction column
  align-items flex-start
  float left
  width 49.9%
  height 5rem
  border-bottom 0.01rem solid #dddbc0
.hotItemTitle
  background-image linear-gradient(150deg, #b2233f, #f70d3c)
  -webkit-background-clip text
  color transparent
.vipItem
  display flex
  flex-direction column
  align-items flex-start
  float left
  width 49.9%
  height 5rem
  border-right 0.01rem solid #dddbc0
.vipItemTitle
  background-image linear-gradient(150deg, #0e9e09, #51b14d)
  -webkit-background-clip text
  color transparent
.itemImg
  padding 0.3rem 0.5rem 0rem 0.7rem
  width 3rem
  height 2.5rem
.otherItem
  display flex
  flex-direction column
  align-items flex-start
  float left
  width 25%
  border-right 0.01rem solid #dddbc0
  height 5rem
.otherTitle
  font-size 0.625rem
  color black
  padding-left 0.5rem
  padding-top 0.5rem
.otherSubTitle
  font-size 0.45rem
  color grey
  padding-left 0.5rem
  padding-top 0.3rem
.otherImage
  width 2.5rem
  height 2.5rem
  padding-left 1rem
  border-radius 50%
.lowPrice
  display flex
  flex-direction column
  align-items flex-start
  float left
  width 24.5%
  height 5rem
</style>
