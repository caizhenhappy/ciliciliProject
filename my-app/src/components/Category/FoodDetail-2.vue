<template>
  <div class='fooddetail'>
    <div class="header">
      <van-icon name="arrow-left" @click="goback"/>
    </div>
    <van-swipe :autoplay="3000" >
      <!-- <van-swipe-item v-for="(image, index) in images" :key="index">
      </van-swipe-item> -->
      <van-swipe-item>
        <img src="" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="" alt="">
      </van-swipe-item>
    </van-swipe>
    <div class="detail">
      <h2 class="title">阳江鲜活白贝(20-30头)500g</h2>
      <p class='detail-text'>口味鲜咸,自然风味~</p>
      <span class='new'>$9.90</span>
      <span class='old'>$10.08</span>
      <div class='small'>
        <span class='time'>最快半小时内送达</span>
        <span>称重退差价</span>
        <i></i>
      </div>
    </div>
    <div class="discuss">
      <h2>评价</h2>
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
        <van-button round type="info" size='small' @click="goDiscuss">查看更多</van-button>
      </ul>
    </div>
    
  </div>
</template>
<script>
export default {
  name:'FoodDetail',
  data() {
    return {
      value: 3,
      images: [
        // '../../images/my/1.jpg',
        // '../../images/my/2.jpg',
        // '../../images/my/3.jpg',
        // '../../images/my/4.jpg'
      ]
    }
  },
  methods: {
    goback(){
      console.log(this);
      
      this.$router.back()
    },
    goDiscuss(){
      // this.$router.push('/category/discuss')
    }
  },
  mounted(){

   
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.fooddetail
  width 100%
  height 100%
  .van-icon-arrow-left
    font-size 35px
    position fixed
    left 0
    top 5px
    z-index 99
    color #666
  .van-swipe
    width 100%
    height 200px !important
    .van-swipe__track
      width 100%
      height 200px
      img
        height 100%
        width 100%
  .detail
    width 100%
    margin 30px 0px 0 
    padding 5px
    box-sizing border-box
    .title
      font-size 18px
      font-weight 700
      margin 10px 0
    .detail-text
      font-size 14px
      color #666
      padding 10px 0
    .new
      padding 10px 0
      color red
      font-size 16px
    .old
      color #666
      font-size 12px
      margin 0 4px
    .small
      margin 10px 0
      font-size 12px
      color #666
      span 
        margin 4px 2px
  .discuss
    margin 30px 5px
    .van-button
      background-color #ffffff
      color #666
      font-size 16px
    h2
      font-size 18px
      margin 10px 0px
    .dicussDetial
      width 100%
      display flex
      flex-direction column
      .dicussDetialItem
        margin 15px 15px
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