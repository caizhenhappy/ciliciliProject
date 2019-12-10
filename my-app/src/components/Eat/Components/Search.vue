<template>

  <div id="search">
    <div class="searchBox">
      <svg class="icon-1"
           aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <input type="search"
             placeholder="搜索菜谱、食材" />
            
     <svg class="icon-2" 
           aria-hidden="true">
        <use xlink:href="#icon-saoyisao"></use>
      </svg>
           
 
    </div>
    <div class="todyMenu">
      今日菜单
    </div>
  </div>

  
</template>

<script>

import '../../../assets/fonts/iconfont-saoyisao.js'


export default {
  name: 'Search',
  methods:{
   
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" >
#search
  padding 0.5rem 0.625rem
  background #fff
  position fixed
  top 0
  left 0
  right 0
  z-index 999
  .searchBox
    position relative
    .icon-1
      width 1.2rem
      height 1.2rem
      vertical-align -0.15rem
      fill currentColor
      overflow hidden
      color #999999
      position absolute
      left 0.3rem
      top 0.3rem
    input
      border-radius 1.75rem
      height 1.75rem
      line-height 1.75rem
      box-sizing borderbox
      width 90%
      padding 0 0.875rem 0 1.75rem
      background-color #f2f2f2
    .icon-2
      width 1.2rem
      height 1.2rem
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
      color #999999
      position absolute
      top 0.35rem
      right 0.2rem
  .todyMenu
    margin-top: 0.9rem;
    padding-left: 0.4rem;
    font-size: 0.6728;
    font-weight: 2000;
    height 1.5rem
    line-height 1.5rem
    border-left 0.25rem solid #75a342
    padding-left 0.4rem
</style>