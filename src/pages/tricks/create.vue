<template>
  <div class="page page-create">
    <div class="section">
      <div class="title border">
        <h2>
          Create Trick
        </h2>
      </div>
      <div class="form form-column form-create">
        <w-input 
          v-model="models.title" 
          class="trick-title" 
          placeholder="标题"
          maxlength="11"
          valid="^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$"
        >
          
        </w-input>  
        <w-input 
          v-model="models.title" 
          placeholder="标题"
        >
          
        </w-input>              
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        models: {
          title: ''
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .trick-title{
    font-size: 24px;
  }
</style>