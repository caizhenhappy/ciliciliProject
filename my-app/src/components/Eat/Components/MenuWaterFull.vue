/* vue-waterfall2     vue-lazyload
1.不需知道元素宽高，可宽高自适应
2.支持无图模式,内容自定义程度高
3.支持懒加载(lazy-src)
4.提供Event:loadmore (pc/android端滑动到底部触发，ios端需要上拉触发)
5.使用极为简便,适用于PC/ios/android */
<template>
    <div class="container-water-fall">
       <waterfall :col='col'
               :data="data"
               @loadmore="loadmore">
      <div class="cell-item"
           v-for="(item,index) in data"
           :key="index">
        <img v-lazy="item.image">
        <div class="item-body">
          <div class="item-desc">{{item.name}}</div>
          <div class="item-footer">
            <img class="avatar"
                 v-lazy="item.author_avatar"
                 alt="">
            <div class="name">{{item.author_name}}</div>
          </div>
        </div>
      </div>
    </waterfall>
        </div>
  
</template>
<script>
import waterfall from 'vue-waterfall2'
/* import VueLazyload from 'vue-lazyload' */
//Vue.use(waterfall)
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);


export default {
  data(){
    return{
      data: [
        {id:1,
        name:'奥利给',
        image:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
         {id:2,
        name:'奥利给2',
        image:'http://img1.imgtn.bdimg.com/it/u=397538209,1699549644&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
         {id:3,
        name:'奥利给',
        image:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
         {id:4,
        name:'奥利给2',
        image:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3727682839,1937007066&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
         {id:5,
        name:'奥利给',
        image:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
         {id:6,
        name:'奥利给2',
        image:'http://img1.imgtn.bdimg.com/it/u=397538209,1699549644&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
         {id:7,
        name:'奥利给',
        image:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
         {id:8,
        name:'奥利给2',
        image:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3727682839,1937007066&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
          {id:10,
        name:'奥利给',
        image:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
         {id:9,
        name:'奥利给2',
        image:'http://img1.imgtn.bdimg.com/it/u=397538209,1699549644&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
          {id:11,
        name:'奥利给',
        image:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
         {id:12,
        name:'奥利给2',
        image:'http://img1.imgtn.bdimg.com/it/u=397538209,1699549644&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
        {id:13,
        name:'奥利给',
        image:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
         {id:14,
        name:'奥利给2',
        image:'http://img1.imgtn.bdimg.com/it/u=397538209,1699549644&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
        {id:15,
        name:'奥利给',
        image:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3727682839,1937007066&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
         {id:16,
        name:'奥利给2',
        image:'http://img1.imgtn.bdimg.com/it/u=397538209,1699549644&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        }, 
        
          {id:18,
        name:'奥利给',
        image:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
         {id:19,
        name:'奥利给',
        image:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
         {id:20,
        name:'奥利给',
        image:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3727682839,1937007066&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
         {id:21,
        name:'奥利给',
        image:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
         {id:22,
        name:'奥利给',
        image:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3727682839,1937007066&fm=26&gp=0.jpg',
        author_name:'奥利给',
        author_avatar:'http://img3.imgtn.bdimg.com/it/u=1743215902,1200853451&fm=26&gp=0.jpg'
        },
      ],
      col: 2, //列数
      menulistDetail: [], //
      page: 1
    }
  },
  methods:{
     //滚动到底部触发
    loadmore(){
     Toast({
          message: "到底了,没东西了!" ,//提示内容
          duration: 1000, //展示时间+
          className:'findly'
        })
    }
   
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.container-water-fall 
  width: 100vw
  box-sizing: border-box
  background-color: #f5f5f5f5
  .cell-item
    width 100%
    background #ffffff
    overflow hidden
    box-sizing border-box
    margin-bottom: 1px
    padding 0.3rem
    img 
      border-radius 12px
      width 100%
      display block
      // 等比缩小图片来适应元素的尺寸
      background-size: contain;
 /*  background-image: url("../../../images/placeholderImg/product-img-load.png"); */
    .item-body
      padding 0.6rem
      .item-desc
        font-size 0.8 rem
        color #333333
        line-height 1rem
        font-weight bold
      .item-footer
        margin-top 1rem
        position relative
        display flex
        align-items center
        .avatar 
          width 2rem
          height 2rem
          border-radius 50%
        .name
          max-width 150px
          margin-left 10px
          font-size 0.75rem
          color #999999
.findly
  text-align center
  color #999999
</style>

