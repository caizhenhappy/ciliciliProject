<template>
  <div id="app">

    <!-- 路由组件显示 -->
    <router-view></router-view>
    <!-- 底部导航 -->
    <Footer />

  </div>
</template>
<script>

//防止放大缩小
window.onload = function() {
  document.addEventListener("touchstart", function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener("gesturestart", function(event) {
    event.preventDefault();
  });
};

import Footer from "./components/footer/footer";
import axios from 'axios'
export default {
  name: "App",
  data() {
    return {
      token:localStorage.getItem('token_key'),
    }
  },
  components: {
    Footer
  },
  mounted(){
    
    if (this.$route.path!=='/login') {
       if (this.token) {
         console.log('jinlai')
         axios.get('/api/auto_login',{
              params:{
                token:this.token
              }
            }).then((response)=>{
              console.log('haha')
              console.log(response.data)
              if(response.data.code===0){
                //登录成功后保存用户信息
                this.$store.dispatch('saveUser',response.data)
                
              }else if(response.data.status===401){
                this.$toast("token失效,请重新登录");
              }
            })
            
       }else{
         //跳转页面
         //this.$router.replace('/home')
        
       }
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html,body,#app
    width 100%
    height 100%

</style>

