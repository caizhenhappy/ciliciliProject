/** 
  下拉菜单分类
*/
<template>
  <div class='box'>
    <div class="menuLists">
      <div class='menuWrapper'>
        <span v-if="recentlyChooseLists.length>0">最近找过</span>
        <ul class="contentTip">
          <li v-for="(item,index) in recentlyChooseLists" :key='index'
            >
            {{item.name}}
          </li>
        </ul>
        <span>菜单分类</span>
        <ul class="contentTip">
          <li v-for="(item,index) in todayMenuCategoryLists" :key='index'
          @click="menuTitleClick(index)"
          >{{item.name}}</li>
        </ul>
    
      </div>
    </div>
   <!--  <keep-alive> -->
     <!--  <MenuWaterFull v-show="showFlag"/> -->
   <!--  </keep-alive> -->
    
  </div>
    
     
   
</template>
<script>

/* import MenuWaterFull from './MenuWaterFull.vue' */
export default {
  props:['todayMenuCategoryLists','allSelect','nowTitle','showAll'],
 /*  components:{
    MenuWaterFull
  }, */
  data(){
    return {
      //最近找过的菜单
      recentlyChooseLists:[ {
      "id": "5b472209846c2e4b6a8d722f",
      "name": "早餐"
    }, {
      "id": "5b472230846c2eaa758d5d6d",
      "name": "下饭菜"
    }],
      name:'name'
    }
  },
  methods:{
    //选中的菜单分类标
   /*  click2(index){
        if(this.recentlyChooseLists.length<=7){
        //放在第一个
      this.recentlyChooseLists.unshift(this.NameList[index])
        //ES6 数组去重
        this.recentlyChooseLists = Array.from(new Set(this.recentlyChooseLists))
           //连点两次同样的时候,不变化
      } else if(this.recentlyChooseLists[0]===this.NameList[index]){
          //ES6 数组去重
        //this.recentlyChooseLists = Array.from(new Set(this.recentlyChooseLists))
      }else{
        //满8时,删去最后一个,加到最前面   注:同时数组去重
         this.recentlyChooseLists.pop()
         this.recentlyChooseLists.unshift(this.NameList[index])
          //ES6 数组去重
        this.recentlyChooseLists = Array.from(new Set(this.recentlyChooseLists))
      }
    }, */
    //点击标题
      menuTitleClick (index) {
    
          //点击下拉的title改变横动条
      this.$emit('allSelect',index) 
      //console.log(this.recentlyChooseLists.length)
      if(this.recentlyChooseLists.length<=7){
        //放在第一个
      this.recentlyChooseLists.unshift(this.todayMenuCategoryLists[index])
        //ES6 数组去重
      this.recentlyChooseLists = Array.from(new Set(this.recentlyChooseLists))

     /*  const ChooseLists=JSON.stringify(this.recentlyChooseLists)
      window.localStorage.setItem('recently', ChooseLists) */

      } else{
        //满8时,删去最后一个,加到最前面   注:同时数组去重
         this.recentlyChooseLists.pop()
         this.recentlyChooseLists.unshift(this.todayMenuCategoryLists[index])
          //ES6 数组去重
        this.recentlyChooseLists = Array.from(new Set(this.recentlyChooseLists))
     /*  const ChooseLists=JSON.stringify(this.recentlyChooseLists)
      window.localStorage.setItem('recently', ChooseLists) */
      }
      

        //存储最近找过
     /*  console.log(this.recentlyChooseLists)
       const ChooseLists=JSON.stringify(this.recentlyChooseLists)
      window.localStorage.setItem('recently', ChooseLists)
         // 2.通知父组件来隐藏当前菜单栏
        this.$emit('hiddenMenu'); */
    },
   /*  huancun(){
      
      console.log(this.recentlyChooseLists.length)
      this.recentlyChooseLists = JSON.parse(window.localStorage.getItem('recently'))
      
     
    }  */
    
  },
  mounted(){

    //this.recentlyChooseLists = JSON.parse(window.localStorage.getItem('recently'))
    //this.NameList[this.nowTitle]
    //读取最近找过
     //console.log(this.recentlyChooseLists.length)
     //this.click2(this.nowTitle)  
  }
  
  }
  

</script>
<style lang="stylus" rel="stylesheet/stylus">
.menuLists
  padding 1rem
  width 100%
  background-color white
  /* overflow auto */
  .menuWrapper
    span
      font-size 0.6rem
      color grey
    ul
      padding: 0.5rem
      display: flex
      flex-flow: row wrap;
      li
        text-align: center;
        margin-right: 1.45rem;
        margin-top: 0.4rem;
        width: 3.3rem;
        line-height: 1.5rem;
        height: 1.5rem;
        font-size: 0.6rem
        border-radius: 1rem;
        color: rgba(0, 0, 0, 0.7);
        border: 1px solid #dedede;
  
</style>