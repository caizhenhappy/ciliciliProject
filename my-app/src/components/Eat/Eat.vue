<template>
  <div id="box">
    <Search>
    </Search> 
    <TodayMenu />
  </div>
</template>
<script>
import Search from './Components/Search'
import TodayMenu from './Components/TodayMenu'
export default {
  name:'Eat',
  components:{
    Search,
    TodayMenu
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" >
#box
  background-color: "#f5f5f5";
</style>