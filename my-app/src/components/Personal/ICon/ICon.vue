<template>
    <div style="color:#3BBA63" v-if="icon">
      <svg class="icon move" aria-hidden="true">
        <use :xlink:href="`#icon-`+icon" />
      </svg>
    </div>
    <div style="color:#333" v-else-if="beto">
      <svg class="icon beto" aria-hidden="true">
        <use :xlink:href="`#icon-`+beto" />
      </svg>
    </div>
    <div style="color:#777" v-else>
      <svg class="icon move" aria-hidden="true">
        <use :xlink:href="`#icon-`+into" />
      </svg>
    </div>
</template>

<script>
import './iconfont'
export default {
  name: 'ICon',
  props: ['icon', 'beto', 'into']
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.icon
  width 1em
  height 1em
  vertical-align -0.15em
  fill currentColor
  overflow hidden
  font-size 20px
.move
  margin 0 8px 0 16px
.beto
  font-size 30px
</style>