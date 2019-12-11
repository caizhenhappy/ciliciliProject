<template>
   <div id="flashFood">
    <div class="flashItemwrapper">
      <ul class="itemWrapper" ref="ulWrapper">  
        <li class="itemInCovers" v-for="(food,index) in flash" :key="index" ref="productItem" >
          <img :src="food.small_image" alt="" @click="gotoFoodDetail">
          <span class="title-span" @click="gotoFoodDetail">{{food.name}}</span>
          <div class="price">
            <p class="nowPrice">{{food.price}}</p>
            <p class="originPrice">{{food.origin_price}}</p>
            <div class="buyCar" @click="addFood">
              <svg t="1575941789243" class="icon" style="width:1.3rem;height:1.3rem" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16704" width="32" height="32"><path d="M432.9 830.9m-66.4 0a66.4 66.4 0 1 0 132.8 0 66.4 66.4 0 1 0-132.8 0Z" p-id="16705" fill="#fff"></path><path d="M737.8 830.7m-66.4 0a66.4 66.4 0 1 0 132.8 0 66.4 66.4 0 1 0-132.8 0Z" p-id="16706" fill="#fff"></path><path d="M781.4 724.3H400c-14.1 0-27.6-4.5-39-12.9-11.3-8.4-19.5-20.1-23.5-33.6L223.3 295.9c-14.5-43.2-48.4-87.6-95.4-125.2l-9-6.3c-13.7-9.7-16.9-28.6-7.2-42.3 9.7-13.7 28.6-16.9 42.3-7.2l9.7 6.9c0.5 0.3 0.9 0.7 1.4 1 40 31.9 92.6 84.6 115.9 154.5l0.3 0.9 114.3 382.4c0.6 1.9 2.4 3.2 4.4 3.2h381.4c2 0 3.7-1.3 4.3-3.2l87.8-279c2.6-8.3 1.2-17.1-4-24.1-5.1-7-13.1-11-21.8-11H444c-16.8 0-30.3-13.6-30.3-30.3s13.6-30.3 30.3-30.3h403.8c28.2 0 54 13.1 70.7 35.8 16.7 22.8 21.4 51.3 12.9 78.2l-87.8 279c-8.6 27.1-33.6 45.4-62.2 45.4z" p-id="16707" fill="#fff"></path></svg>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
// 引入第三方组件
import BScroll from 'better-scroll'
import { Toast } from 'vant'
import { reqFlashFood } from "../../../../api/index.js"
export default {
  name:'FlashFood',
  data(){
    return{
      flash:[]
    }
  },
  async mounted(){
    // 获取mock数据
    const flashFood = await reqFlashFood()
    const flash = flashFood.data.data.list[11].product_list
    console.log(flash)
    this.flash = flash
    this.$nextTick(() => {
      let contentWrapperWidth = 0;
      let el = this.$refs.productItem;
      for (let i = 0; i < el.length; i++) {
        contentWrapperWidth += el[i].clientWidth;
      }
      // 给ul设置值
      this.$refs.ulWrapper.style.width = contentWrapperWidth + 'px';
      if (!this.scroll) {
        // 名字一定要唯一 和父组件独立
        this.scroll = new BScroll('.flashItemwrapper', {
          probeType: 2,
          startX: 0,
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: "vertical",
        });
      } else {
        this.scroll.refresh();
      }
    });
  },
  methods:{
    gotoFoodDetail(){
      // 跳转到详情页
      this.$router.push("/category/foodDetail")
    },
    addFood(){
      // 添加数据到购物车
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../../../../assets/stylus/mixins.styl"
#flashFood{
  width: 100%;
  overflow: hidden;
  position: relative;
  }
.itemWrapper {
  display: flex;
  justify-content: flex-start;
  }
.itemWrapper img{
  width: 100%;
  border-radius: 50%;
  background-size: contain;
  background-image: url("../../../../images/placeholderImg/product-img-load.png");
  }
.itemInCovers {
  flex: 0 0 6rem;
  align-items: center;
  padding-right: 0.5rem;
}
.itemInCovers img{
  width :70%
  }
.itemInCovers .title-span{
  padding: 0.2rem;
  display: inline-block;
  font-size: 0.6258rem;
  height: 1.8rem;
  line-height: 1rem;
  font-size: 0.625rem;
  word-break: break-all;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis; 
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  }
.price {
  position: relative;
  padding-left: 0.5rem;
}
.nowPrice {
  color: #f37078;
  font-size: 0.928rem;
}
.originPrice {
  font-size: 0.6875rem;
  color: #999999;
  text-decoration: line-through;
}
.buyCar {
  position: absolute;
  right: 0.6rem;
  top: 0.1rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color :#1afa29;
  border-radius :50%;
}
@keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(0.6);
  }
  75% {
    transform: scale(0.4);
  }
  100% {
    transform: scale(0.2);
  }
}
@-moz-keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(0.6);
  }
  75% {
    transform: scale(0.4);
  }
  100% {
    transform: scale(0.2);
  }
}
@-webkit-keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(0.6);
  }
  75% {
    transform: scale(0.4);
  }
  100% {
    transform: scale(0.2);
  }
}
@-o-keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(0.6);
  }
  75% {
    transform: scale(0.4);
  }
  100% {
    transform: scale(0.2);
  }
}  
</style>
