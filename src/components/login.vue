<template>
  <div class="view login-view">
    <div class="layer" @click="closeLogin">
      
    </div>
    <div class="login-form">
        <w-input 
          v-model="models.username" 
          placeholder="用户名"
          class="full"
          maxlength="11"
          must
          valid="^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$"
        >
        </w-input>
        <w-input 
          v-model="models.password" 
          placeholder="密码"
          type="password"
          must
          class="full"
        >
        </w-input>
        <div class="form-group grid form-buttons">
          <button class="btn btn-md btn-gradient" @click="userLogin">登录</button>
          <button class="btn btn-md border" @click="closeLogin">取消</button>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        models: {
          username: '',
          password: ''
        }
      }
    },
    computed: {
      comConf () {
        return this.$store.getters.getComConf
      }
    },
    methods: {
      closeLogin () {
        this.$store.commit('COM_CONF', {
          isLoginScreenShow: false
        })
      },
      userLogin () {
        this.$store.dispatch('userLogin', this.models)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import url('../assets/less/var.less'); 
  .login-view{
    position: fixed;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;  
    width: 100%;
    height: 100%;
    z-index: @login-index;
    top: 0;
    left: 0;
    background-color:transparent;
    .layer{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background-color: rgba(0,0,0,.7);
      cursor: pointer;
    }
  }
  .form-buttons{
    justify-content:center;
    width: 100%;
    .btn{
      margin: 0 15px;
    }
  }
  .login-form{
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position: relative;
    z-index: 1;
    background-color: #fff;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    padding:15px;
    color: #333;
    border-radius: 0px;
  }
</style>