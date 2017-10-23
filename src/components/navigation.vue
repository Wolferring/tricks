<template>
  <div class="navbar">
    <div class="left">
      <a href="#/" class="link logo">
        <img src="../assets/images/logo.png" alt="">
      </a>
    </div>
    <div class="center">
      <router-link 
        class="nav-item link" 
        active-class="active"
        :to="nav.url" 
        v-for="(nav,index) in navs" 
        :key="index">
        {{nav.title}}
      </router-link>
    </div>     
    <div class="right">
      <transition name="slide-left">
      
      <router-link 
      to="/tricks/create" 
      class="link nav-item icon-only"
      v-if="$route.path!='/tricks/create'"
      >
        <i class="iconfont icon-add"></i>
      </router-link>
      </transition>
      <a href="javascript:void(0)" class="nav-item link icon-only">
        <i class="iconfont icon-profile"></i>
      </a>
    </div>    
  </div>
</template>
<script>
  export default {
    data () {
      return {
        navs: [
          {
            title: '首页',
            url: '/home',
            child: []
          },
          {
            title: 'Tricks',
            url: '/tricks'
          },
          {
            title: '文章',
            url: '/articles'
          },
          {
            title: '关于',
            url: '/about',
            child: []
          }
        ]
      }
    }
  }
</script>
<style lang="less">
  @import url('../assets/less/var.less');
  .navbar {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 15px;
    z-index: 5002;
    height: @nav-height;    
    background: #fff;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, .02);
    transition:background .3s ease;
    img{
      max-height: @nav-height;
    }
    .iconfont{
      font-size: 24px;
    }
    .link{
      display: inline-block;
      height: 100%;
      line-height: @nav-height;
      text-align: center;
    }
    .center,
    .left,
    .right{
      max-height: 100%;
      display: flex;
      justify-content:space-around;
      align-items:center;
      height: 100%;
    }
    .nav-item{
      margin-right: 15px;
      padding: 0 10px;
      &:last-child{
        margin-right: 0;
      }
      &:hover{
        background-color: #eee;
      }
    }
    .right{
    }
    .center{
      flex:1;
      display: flex;
      justify-content:flex-start;
      margin: 0 15px;
    }
    .logo{
      height: 40px;
      position: relative;
      &::after{
        content: "";
        position: absolute;
        left: -15px;
        right: -15px;
        top: -(@nav-height - 40px)/2;
        bottom: -(@nav-height - 40px)/2;

      }
      img{
        height: 100%;
      }
    }
  }  
</style>