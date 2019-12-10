<template>
  <div id="Nav">
    <ul class="list">
      <li class="listItem">
        <img src="../../../../images/nav/1.jpg" alt=""/>
        <span>菠菜豆制品</span>
      </li>
      <li class="listItem">
        <img src="../../../../images/nav/2.jpg" alt=""/>
        <span>肉禽蛋</span>
      </li>
      <li class="listItem">
        <img src="../../../../images/nav/3.jpg" alt=""/>
        <span>水产海鲜</span>
      </li>
      <li class="listItem">
        <img src="../../../../images/nav/4.jpg" alt=""/>
        <span>水果</span>
      </li>
      <li class="listItem">
        <img src="../../../../images/nav/5.jpg" alt=""/>
        <span>乳品烘焙</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
 
}
</script>

<style  scoped>
#Nav{
  width: 100%;
}
.list{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.listItem{
  width: 20%;
  margin:10px;
  float: left;
}
.listItem img{
  width: 100%;
}
.listItem span{
  font-size: 14px;
}
</style>
