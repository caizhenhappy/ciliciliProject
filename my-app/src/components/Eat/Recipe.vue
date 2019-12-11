<template>
  <div class='fooddetail'>
    <!-- 返回分享收藏导航 -->
  <!--  <van-action-sheet v-model="show" :actions="actions" /> -->
   <van-action-sheet v-model="show" :actions="actions" title="分享至">
      <div class="share" @click="show=!show">
          <van-icon name="friends" size="2rem" color='green'/>
         <p>好友</p>
      </div>
     </van-action-sheet>

   <van-row >
  <van-col span="2" ><van-icon size='1.3rem' name="arrow-left"   color="#FFFFF" @click="$router.go(-1)" /></van-col>
  <van-col span="2" offset="18"><van-icon size='1.4rem' name="share" color="#FFFFF"  @click='show=!show' /></van-col>
  <van-col span="1" > <van-icon size='1.3rem' :name="star" color="#FFFFF"  @click='collect' />
 <!--  <van-col span="1" > <van-icon size='1.3rem' name="star"   @click='collect' color="red" />   -->
</van-col>
</van-row>
    <div>
      <img v-lazy="nowDate.image"
           alt="">
    </div>
    <div class="detail">
      <h2 class="title">{{nowDate.name}}</h2>
      <div class='user'>
         <img v-lazy="nowDate.author_avatar"
                 alt="">
        <p class='detail-text'>{{nowDate.author_name}}</p>
      
      </div>
      
      <div class="discuss">
        <svg class="icon" aria-hidden="true">
       <use xlink:href="#icon-lihe"></use>
      </svg>
        <h2>做法</h2> 

      </div>
<van-divider dashed  :style="{   borderColor: '	#A9A9A9', padding: '0 16px' ,margin:'10px 0' }"/>

       </div>
       <div class="food_desc"><span class="food_desc-1">食材:</span> <span class="food_desc-2">{{nowDate.food_desc}}</span></div>
        <ul class="step" >
          <li class="step-1">
            <div><span class="step-2">步骤1</span><span class="step-3">/5</span></div>
              
              <div class="step-content">羊肉切薄片，用清水反复冲洗去除血水后挤干水分，加入少许白胡椒，1勺料酒，1个蛋清，少许淀粉抓匀，腌制10分钟。大葱斜刀切段，姜切丝</div>
          </li>
          <li class="step-1">
            <div><span class="step-2">步骤2</span><span class="step-3">/5</span></div>
              
              <div class="step-content">再拿小碗加入1勺香醋，1勺生抽，半勺蚝油，少许文蛤粉，适量盐搅拌均匀调成料汁备用</div>
          </li>
          <li class="step-1">
            <div> <span class="step-2">步骤3</span><span class="step-3">/5</span></div>
             
              <div class="step-content">
热锅热油倒入腌制好的羊肉迅速翻炒至变色盛出</div>
          </li>
          <li class="step-1">
            <div> <span class="step-2">步骤4</span><span class="step-3">/5</span></div>
             
              <div class="step-content">另起锅烧热油，下入姜丝和和大葱段，倒入炒好的羊肉，翻炒至均匀受热</div>
          </li>
          <li class="step-1">
            <div> <span class="step-2">步骤5</span><span class="step-3">/5</span></div>
             
              <div class="step-content">倒入调好的料汁，翻炒均匀即可出锅
肉片因为用蛋清和淀粉腌制过，特别鲜嫩，配上浓浓的葱香味，米饭又要遭殃了</div>
          </li>
        </ul>
        
        <van-divider :style="{ width:'7rem' ,borderColor: '#A9A9A9' , padding: '0 7rem' }">
            <van-icon name="smile-o"  size="1.5rem" />
</van-divider>

    </div>
   
</template>
<script>
import '../../assets/iconfont.js'
import { Divider ,Skeleton, Icon , Row, Col ,ActionSheet,Toast   } from 'vant';
import { getTodayMenuDetail} from '../../api/index'
export default {
  name: 'FoodDetail',
  data () {
    return {
      value: 3,
      show: false,
      collectClass:false,
      star:'star-o',
      //lowB的我拉进来全部的数据
      waterFull:[],
      //当前页面的数据
      nowDate:[],
      actions: [
       /*  { name: '分享至',disabled: true },
        { icon: 'friends-o' },
        { name: '微信好友' } */
      ]

    }
  },
  methods: {
    //收藏
    collect(){
      this.collectClass=!this.collectClass
      this.star=this.collectClass?'star':'star-o'
      Toast(this.collectClass?'收藏成功':'取消成功')
      //缓存收藏
    /*   const collectId=JSON.stringify(JSON.parse(this.$route.query.id))
      const collecflag=JSON.stringify(this.collectClass)
      window.localStorage.setItem(collectId,collecflag )  */
      let collectId=this.$route.query.id
      window.localStorage.setItem(collectId,this.collectClass) 
    },
    //lowb操作 全部recipe拉过来
    async waterFullDate(){
      let result = await getTodayMenuDetail()
      this.waterFull=result.data.big_recommend.list
      //console.log( this.waterFull)
       this.$nextTick(() => {
          this. _initRecipe()
          //缓存
          this._initCollect()
        });
    },
    //当前recipe
    _initRecipe(){
    //console.log(this.$route.query)
    let _recipeIndex=this.$route.query.id
    this.nowDate= this.waterFull[_recipeIndex]
    //console.log(this.nowDate)
    },
    //收藏缓存
    _initCollect(){
    this.star=this.collectClass?'star':'star-o'
    }

  },
  mounted(){
    this.waterFullDate()
   // console.log(window.localStorage.getItem(this.$route.query.id))
    this.collectClass = window.localStorage.getItem(this.$route.query.id)
  }
   

  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.fooddetail
  width 100%
  height 100%
  overflow-x hidden  //禁止横向滚动条 ,我都不知道为什么有横向滚动条
  .share
    height 5rem
    display flex
    flex-direction column
    align-items center
    justify-content center
  .van-row
    width 100%
    color white
    position fixed
    top 1px

  img
    height 15rem
    width 100%
  .detail
    width 100%
    margin 30px 5px 0
    .title
      font-size 24px
      font-weight 700
      margin 10px 0
      text-align center
    .user
      display flex
      justify-content center
      img 
        width 2rem
        height 2rem  
        border-radius 50%
        margin-right 14px
      .detail-text
        font-size 14px
        color #666
        padding 10px 0
        text-align center
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
      margin 1px 5px
      display flex
      .icon 
        width: 1.3rem
        height: 1.3rem
        vertical-align: -0.15rem
        fill: currentColor
        overflow: hidden
      h2
        font-size 18px
        margin 5px 0px
        font-weight bold
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
  .food_desc
    margin 0 14px
    
    .food_desc-1
      font-weight bold
      font-size 16px
    .food_desc-2
      font-size 16px
      color #808080
  .step
    margin 6px 14px
    .step-1
      .step-content
        margin 8px 0
        color #808080
        font-size 14px
      .step-2
        font-weight bold
        font-size 16px
      .step-3
        font-size 16px
        color #808080



</style>