<template>
  <div id="Nav">
    <ul class="list">
      <li class="listItem" v-for="(item,index) in navItem" :key="index" @click="gotoCateList" >
         <img :src="item.icon_url" alt=""/>
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import { reqHomeHeaderTop } from "../../../../api/index.js"
export default {
  name:"Nav",
  data(){
    return{
      navItem:[]
    }
  },
  async mounted(){
    // 获取数据
    const navList = await reqHomeHeaderTop()
    const navItem = navList.data.icon_list
    console.log(navItem);
    
    this.navItem = navItem
   },
   methods:{
    gotoCateList(){
      this.$router.push('/category')
    }
   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
@import "../../../../assets/stylus/mixins.styl"
#Nav{
  width: 100%
}
.list{
  width: 100%
  display flex
  justify-content space-around
  flex-wrap wrap
  clearFix()
}
.listItem{
  width 17%
  height 50%
  text-align center
  margin 10px 0
}
.listItem img{
  width: 100%
  height 100%
}
.listItem span{
  font-size 14px
}
</style>
