<template>
  <div class="loginContent">
    <div class="main">
      <img src="./images/normal.png" alt="" class="topImg">
      <!-- 关闭按钮 -->
        <!-- <van-icon name="close" class="closeButton" @click="close" /> -->
      <!--帐号密码输入框-->
      <van-tabs @click="loginInp" class="inpBox">
        <form action="">
        <van-tab title="登录" class="inpBoxText">
             <van-cell-group>
                <van-field
                  v-model="username"
                  required
                  clearable
                  label="用户名"
                  right-icon="question-o"
                  placeholder="请输入用户名"
                  @click-right-icon="$toast('question')"
                />

                <van-field
                  v-model="password"
                  type="password"
                  label="密码"
                  placeholder="请输入密码"
                  required
                />
            </van-cell-group>
             <van-button type="info" size="large" class="inpBoxText" @click.prevent="login" >登录</van-button>
        </van-tab>
        </form>

        <van-tab title="注册" class="inpBox">
           <van-cell-group class="inpBoxText">
              <van-field
                v-model="username"
                required
                clearable
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名"
                @click-right-icon="$toast('question')"

              />

              <van-field
                v-model="password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
              />

               <van-field
                v-model="rePassword"
                type="rePassword"
                label="确认密码"
                placeholder="请再次确认密码"
                required
              />
          </van-cell-group>
          <van-button type="info" size="large" class="inpBoxText" @click="registered">注册</van-button>

        </van-tab>
      </van-tabs>

      <!-- 底部声明 -->
        <p class="agreement"> 温馨提示：<br>未注册的手机号，登录时将自动注册，且代表同意<a @click.stop="agreement(0)"
             class="agreement-box">用户协议</a>、<a @click.stop=agreement(1)
             class="agreement-box">隐私策略</a>
        </p>

    </div>
  </div>
</template>

<script>
// 引入Vant的组件
import { Toast } from 'vant'
// 引入API调用接口
//import { pwdLogin } from '../../api/index.js'
//引入axios
import axios from 'axios'
  export default {
    name:"Login",
    data() {
      return {
        username:'',
        password:'',
        rePassword:'',
        oken:localStorage.getItem('token_key')
      }
    },
    methods: {
      close(){
        console.log('关闭调用')
      },
      loginInp(name, title) {
        // this.$toast(title);
        console.log(title)
      },
      login(username,password){
        if(this.username!=='' || !this.password!==''){
            axios.get('/api/login',{
              params:{
                username:this.username,
                password:this.password
              }
            }).then((response)=>{
              console.log(response);
              if(response.data.code === 0){
                this.$toast('登录成功')
                console.log(response.data.data)
                //登录成功后保存用户信息
                this.$store.dispatch('saveUser',response.data.data)
                //跳转页面
                this.$router.replace('/home')
              }else if(response.data.code === 1){
                this.$toast('登录名或密码错误,请重新登录')
              }else{
                this.$toast('未知错误,请联系管理员')
              }
            })
        }else{
          this.$toast("用户名或者密码不能为空");
        }
      },
      registered(username,password,rePassword){
        if(this.username!=='' || this.password!=='' || this.rePassword!==''){
          axios.get('/api/registered',{
            params:{
                username:this.username,
                password:this.password
              }
          }).then((response)=>{
            console.log(response)
              if(response.data.code===1){
                this.$toast('用户名已存在')
                this.username=''
                this.password=''
                return
              }else if(response.data.code===0){
                this.$toast('注册成功')
                this.username=''
                this.password=''
                this.rePassword=''
              }
            })
        }else{
          this.$toast("用户名、密码、确认密码不能为空");
        }
      },
      agreement(index){
        if(index == 0){
          Toast({
          message: '用户协议-哈喽哈喽',
          duration: 800
        });
        }else{
          Toast({
          message: '隐私策略-一起嗨',
          duration: 800
        });
        }
      }
    },
    mounted() {
      //自动登录,判断是否存在token
      //存在就调用接口把token作为参数传过去
      if(this.oken){
          axios.get('/api/auto_login',{
              params:{
                token:this.oken
              }
            }).then((response)=>{
              console.log(response.data)
              if(response.data.code===0){
                //登录成功后保存用户信息
                this.$store.dispatch('saveUser',response.data)
                //跳转页面
                this.$router.replace('/home')
              }else if(response.data.status===401){
                this.$toast("token失效,请重新登录");
              }
            })
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loginContent
    height 100%
    width 100%
    background url('./images/back2.jpg') no-repeat center
    background-size 100% 100%
    overflow hidden
    display flex
    flex-direction column
    justify-content center
    align-items center
    .main
      height 75%
      width 90%
      background-color #fff
      border-radius 2%
      position relative
      .topImg
        height 6rem
        width 8rem
        position relative
        left 50%
        transform translateX(-50%)
        top -2rem

      .inpBox
        padding 0 1rem
        .inpBoxText
          margin-top:25px
        .van-tabs__line
          background-color #1989fa !important

      .agreement
        line-height 1rem
        color #767676
        font-size 0.867rem
        position absolute
        bottom 0.2rem
        width 90%
        margin-left 1.25rem
        .agreement-box
          color blue









</style>
