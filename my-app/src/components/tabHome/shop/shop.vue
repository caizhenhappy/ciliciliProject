<template>
  <div id="produceItem">
    <div class="item">
      <img src="https://picsum.photos/id/4/300/300" alt="" />
      <p class="itemsTitle">手杆面 300g/盒</p>
      <p class="itemSubTitle">够劲到的面</p>
      <div>
        <span class="price">￥8.90</span>
        <span class="originPrice">￥8.90</span>
        <div class="buyCar">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#produceItem
  height auto
  padding 2%
  border-top 0.6rem solid 	#F5F5F5
  border-left 0.3rem solid 	#F5F5F5
  border-right 0.3rem solid 	#F5F5F5
  .item
    position relative
    display flex
    flex-direction column
    align-items flex-start
    width 100%
    margin-right 2%
    margin-bottom 0.5rem
    // background-color white
    border-radius 0.3rem
    padding-bottom 0.6rem
    img
      width 100%
      height 100%
    .itemsTitle
      font-size 12px
      font-weight bold
      margin 0.31rem 0rem 0.18rem 0.37rem
      align-self
      line-height 1rem
      word-break break-all
      display -webkit-box
      overflow hidden
      color black
      text-overflow ellipsis
      -webkit-line-clamp 2
      -webkit-box-orient vertical
    .itemTitle
      line-height 1rem
      word-break break-all
      display -webkit-box
      overflow hidden
      text-overflow ellipsis
      -webkit-line-clamp 2
      -webkit-box-orient vertical
    .itemSubTitle
      padding-left 0.5rem
      padding-right 0.5rem
      color gray
      padding-top 0.2rem
      font-size 0.45rem
      line-height 1rem
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
      word-break break-all
      margin-bottom 1.5rem
    .price
      padding-left 0.5rem
      color #f37078
      font-size 0.928rem
    .tagEat
      margin-left 0.5rem
      padding 0.09rem
      color orangered
      width 2.5rem
      height 0.1rem
      border-radius 0.2rem
      font-size 0.3rem

    .originPrice
      font-size 0.6875rem
      color #999999
      text-decoration line-through
    .buyCar
      position absolute
      height 1.5rem
      width 1.5rem
      right 1rem
      bottom 0.5rem
      font-size 0.625rem
</style>
