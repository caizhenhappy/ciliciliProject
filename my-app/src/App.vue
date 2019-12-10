<template>
  <div id="app">
    <Home/>
    <!--路由视图:显示路由组件的-->
    <router-view />
  </div>
</template>

<script>
// 引入组件
import Home from "./components/Home/Home"
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
