<template>
  <div class="AR">
    <header class="AR_header">
      <div @click.stop="goBack">
        <ICon into="back" class="back" />
      </div>
      <p>我的地址</p>
    </header>
    <div class="AR_listContainer">
     
    </div>
  </div>
</template>

<script>
import ICon from '../ICon/ICon'
export default {
  name:"Address",
  components:{
    ICon
  },
  methods:{
    goBack(){
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.AR
  box-sizing border-box
  width 100%
  height 100%
  background-color #f5f5f5
  border-top 47px solid #f5f5f5
  .AR_header
    height 44px
    width 100%
    line-height 44px
    text-align center
    color #232333
    width 100%
    background-color #fff
    position fixed
    top 0
    .back
      position absolute
      left 0
      top 3px
  .AR_listContainer
    width 100%
    height 100%
</style>