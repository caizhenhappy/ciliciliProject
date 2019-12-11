<template>
  <div class='discuss'>
    <div class="header">
      <van-icon name="arrow-left" @click="goback"/>
      <span class='headerText'>商品评价</span>
    </div>
    <ul class='dicussDetial'>
        <li class="dicussDetialItem">
          <img src="https://picsum.photos/id/4/45/45" alt="">
          <div class="right">
            <span>冉冉升起的希望之星</span>
            <van-rate v-model="value" />
            <p class='dicussText'>
              从来没有买过这么干净又鲜活的扇贝,连壳都是干净的,没有杂质,装的水送到家的!
            </p>
          </div>
        </li>
        <li class="dicussDetialItem">
          <img src="https://picsum.photos/id/4/45/45" alt="">
          <div class="right">
            <span>冉冉升起的希望之星</span>
            <van-rate v-model="value" />
            <p class='dicussText'>
              从来没有买过这么干净又鲜活的扇贝,连壳都是干净的,没有杂质,装的水送到家的!
            </p>
          </div>
        </li>
        <li class="dicussDetialItem">
          <img src="https://picsum.photos/id/4/45/45" alt="">
          <div class="right">
            <span>冉冉升起的希望之星</span>
            <van-rate v-model="value" />
            <p class='dicussText'>
              从来没有买过这么干净又鲜活的扇贝,连壳都是干净的,没有杂质,装的水送到家的!
            </p>
          </div>
        </li>
         <li class="dicussDetialItem">
          <img src="https://picsum.photos/id/4/45/45" alt="">
          <div class="right">
            <span>冉冉升起的希望之星</span>
            <van-rate v-model="value" />
            <p class='dicussText'>
              从来没有买过这么干净又鲜活的扇贝,连壳都是干净的,没有杂质,装的水送到家的!
            </p>
          </div>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name:'Discuss',
  data(){
    return{
      value: 3,
    }
  },
  methods:{
    goback(){
      this.$router.push('/category/foodDetail')
    },
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.discuss
  width 100%
  height 100%
  margin 0 5px
  .header
    vertical-align: middle
    padding 5px
    .headerText
      font-size 20px
      color #888
      vertical-align: middle
    .van-icon-arrow-left
      font-size 35px
      color #666
      vertical-align: middle
      margin 0 5px
  .dicussDetial
      margin 0 5px
      width 100%
      display flex
      flex-direction column
      .dicussDetialItem
        margin 15px 5px
        border-bottom 1px solid #ccc
        display flex
        text-align middle
        img 
          width 45px
          height 45px
          border-radius 50%
        .right
          margin 0 10px
          span 
            font-size 14px
            display block
            margin 10px 0
        .dicussText   
          width 100%
          font-size 16px
          margin 20px 0
          line-height 20px 
</style>