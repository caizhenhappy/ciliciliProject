<template>
  <div id="Search">
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
      />
    </form>
    <div slot="action" @click="onSearch">搜索</div>
  </div>
</template>

<script type="text/javascript">
import { Search } from 'vant';
export default {
}
</script>
<style scoped>
  
</style>