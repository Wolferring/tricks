<template>
  <div class="page grid grid-center">
    <div class="text-center error-content">
      <img src="../assets/images/404.png" alt="">
      <h1>404 Not Found </h1>
      <button class="btn btn-md" @click="$router.back()">返回</button>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .page{
    min-height: 100%;
    .error-content{
      img{
        max-width: 100%;
        margin-bottom: 30px;
      }
      h1{
        font-size: 18px;
        margin: 10px 0;
      }
    }
  }
</style>