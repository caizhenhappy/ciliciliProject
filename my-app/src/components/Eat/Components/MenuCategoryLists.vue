/** 
  下拉菜单分类
*/
<template>
  <div>
    <div class="menuLists">
      <div class='menuWrapper'>
        <span v-if="recentlyChooseLists.length>0">最近找过</span>
        <ul class="contentTip">
          <li v-for="(item,index) in recentlyChooseLists" :key='index'
            >
            {{item}}
          </li>
        </ul>
        <span>菜单分类</span>
        <ul class="contentTip">
          <li v-for="(item,index) in NameList" :key='index'
          @click="titleClick(index)"
          >{{item}}</li>
        </ul>
    
      </div>
    </div>
   <!--  <keep-alive> -->
     <!--  <MenuWaterFull v-show="showFlag"/> -->
   <!--  </keep-alive> -->
    
  </div>
    
     
   
</template>
<script>
/* import {setLocalStorage,getLocalStorage,removeLocalStore} from './LocalStore' */
/* import MenuWaterFull from './MenuWaterFull.vue' */
export default {
  props:['NameList','allSelect','nowTitle','showFlag'],
 /*  components:{
    MenuWaterFull
  }, */
  data(){
    return {
      //最近找过的菜单
      recentlyChooseLists:['奥利给','面对恐惧','最好的','办法','就是面对','巨魔','猪猡','公园'],
      name:'name'
    }
  },
  methods:{
    //选中的菜单分类标题
    titleClick(index){
      //console.log(this.NameList[index])
      //选中后,把选中的放入最近找到的标题中
      //最近找过不超过8项  注:同时数组去重
      this.click2(index)
     /*  if(this.recentlyChooseLists.length<=7){
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
      } */
      //点击下拉的title改变横动条
      this.$emit('allSelect',index) 

      //存储最近找过
      const ChooseLists=JSON.stringify(this.recentlyChooseLists)
      window.localStorage.setItem('recently', ChooseLists) 
      
      /* setLocalStorage(this.name,this.recentlyChooseLists) */
    },
    click2(index){
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
    }
  },
  mounted(){
    //console.log(this.nowTitle)
    //this.NameList[this.nowTitle]
    //读取最近找过
     this.recentlyChooseLists = JSON.parse(window.localStorage.getItem('recently'))
     this.click2(this.nowTitle)
  },//实时recentlyChooseLists改变,存储
  watch:{
     recentlyChooseLists(){
       //存储最近找过
      const ChooseLists=JSON.stringify(this.recentlyChooseLists)
      window.localStorage.setItem('recently', ChooseLists)
     } 
 
    }
  }
  

</script>
<style lang="stylus" rel="stylesheet/stylus">
.menuLists
  padding 1rem
  width 100%
  background-color white
  overflow auto
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