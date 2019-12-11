<template>

  <div id="search">
    <div class="searchBox">
      <svg class="icon-1"
           aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <input id='searchFood' type="search"
             v-model="content"
             placeholder="搜索菜谱、食材" />
             <svg v-if='content' @click='clearSearch'  class="icon-3" aria-hidden="true">
  <use xlink:href="#icon-close"></use>
</svg>
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

import '../../../assets/iconfont.js'


export default {
  name: 'Search',
  data(){
    return {
      content:'',
      icon3Show:false
    }
   
  },
  methods:{
    clearSearch(){
      this.content=''
    }
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
      top 0.2rem
    #searchFood
      border-radius 1.75rem
      height 1.75rem
      line-height 1.75rem
      box-sizing borderbox
      width 90%
      padding 0 0.875rem 0 1.75rem
      background-color #f2f2f2
    input::-webkit-search-cancel-button
      display none 
    .icon-3 
      width: 1.4rem;
      height: 1.4rem;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
      color #999999
      position absolute
      top 0.2rem
      right 2.3rem
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