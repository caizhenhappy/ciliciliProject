<template>
  <div>
    <div id="todayMenu">
      <!-- 下拉菜单 -->
      <div class="todayMenuWrapper">
        <div class="menuList"
             ref="scroll">
          <ul ref='menuUlContent'>
            <li class='menuItem'
                v-for="(item,index) in NameList"
                :key="index"
                ref="menuTitle"
                 :class='{selectClass:nowTitle===index}'
                @click='selectTitle(index)'
                >
              {{item}}
            </li>
          </ul>
        </div>
        <div class="menuAll"
             @click="showAll">
          {{msg}}
          <span class="downMenu"
                v-if="showFlag">
            ∧
          </span>
          <span class="upMenu"
                v-else>
            ∨
          </span>
        </div>
      </div>


 <MenuCategoryuList v-if='showFlag'
                         :NameList='NameList'
                         :nowTitle='nowTitle'
                         @allSelect='allSelect'
                         :showFlag='showFlag'
                         />
 

  <MenuWaterFull v-show="!showFlag" />
    
    </div>

    <!-- /loading/ -->
  </div>
</template>
<script>
import MenuCategoryuList from './MenuCategoryLists'
 import MenuWaterFull from './MenuWaterFull' 

import BScroll from 'better-scroll'
export default {
  components: {
    MenuCategoryuList,
    MenuWaterFull
  },
  data () {
    return {
      showFlag: false,
      msg: '全部',
      NameList: [
        '家常菜', '快手菜', '粤菜', '私房菜', '凉拌菜', '奥利给', '巨魔', '冬泳怪鸽', '奥利给', '面对恐惧', '冬泳怪鸽', '办法', '就是面对', '巨魔', '猪猡', '动用拐哥', '奥利给', '面对恐惧', '最好的', '办法', '就是面对', '巨魔', '猪猡', '公园', '奥利给', '面对恐惧', '最好的', '办法', '冬泳怪鸽', '巨魔', '猪猡', '公园'
      ],
      nowTitle:0 //现在横向索引
    }

  },
  methods: {
    //展开下拉菜单
    showAll () {
      this.showFlag = !this.showFlag
      
    },
    //选中的横向滚动条标题
    selectTitle(index){
      //点击改变横向位置
      this.nowTitle=index
      let el = this.$refs.menuTitle[index]
      this.menuTitleScroll.scrollToElement(el,400)
/* scrollToElement(el, time, offsetX, offsetY, easing) 滚动到指定的目标元素。
{DOM | String} el 滚动到的目标元素, 如果是字符串，则内部会尝试调用 querySelector 转换成 DOM 对象。
{Number} time 滚动动画执行的时长（单位 ms）
{Number | Boolean} offsetX 相对于目标元素的横轴偏移量，如果设置为 true，则滚到目标元素的中心位置
{Number | Boolean} offsetY 相对于目标元素的纵轴偏移量，如果设置为 true，则滚到目标元素的中心位置
{Object} easing 缓动函数，一般不建议修改，如果想修改，参考源码中的 ease.js 里的写法 */
    
    
    //点击横动条的时候,如果showAll显示就隐藏
     if(!this.showflag){
      this.showFlag=false

    } 
    
    
    },
    //自定义事件,让子组件传值
    allSelect(index){
      this.selectTitle(index)
      this.showFlag=false
      console.log(index)
    }
  },
  mounted () {
    //初始化菜单横向滑动
    /* initMenuTitleScroll(){ */
      //到整个视图都渲染完毕
      this.$nextTick(() => {
        if (!this.menuTitleScroll) {
          let startWidth = 100 //默认宽度
          for (let i = 0; i < this.$refs.menuTitle.length; i++) {
            startWidth += (this.$refs.menuTitle[i].clientWidth * 1.27)
          }
          //给UL设置宽度,保证横向滚动
          this.$refs.menuUlContent.style.width = startWidth + 'px';
          //scroll ul外的包裹元素
          this.menuTitleScroll = new BScroll(this.$refs.scroll, {
            probeType: 3, //在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件
            startX: 0, //横轴方向初始化位置。
            click: true, //true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed
            scrollX: true, //当设置为 true 的时候，可以开启横向滚动
          })
        } else {
          //重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
          this.menuTitleScroll.refresh()
        }

    })
    }
  }



</script>
<style lang="stylus" rel="stylesheet/stylus" >
#todayMenu
  width 100%
  overflow hidden
  margin-top 6.5rem
  margin-bottom 3rem
  .todayMenuWrapper
    width 100%
    height 1.5rem
    display inline-block
    border-bottom solid 0.01rem #e8e9e8
    white-space nowrap
    position fixed
    z-index 999
    top 5.1rem
    background-color white
    .menuList
      width 80%
      overflow hidden
      .menuItem
        margin-right 0.5rem
        display inline-block
        font-size 0.73rem
        padding 0.3rem
        border 1px solid #999999
        border-radius 0.6rem
        &.selectClass
          color #3cb963
          border 1px solid #3cb963
    .menuAll
      position absolute
      top 25%
      right 0
      margin-right 0.9rem
      font-size 0.7rem
      color gray
      .downMenu
        width 1rem
        height 1rem
</style>