<template>
  <div id="app">
    <navigation>
      
    </navigation>
    <div class="view main-view">
      <transition name="fade-quick" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    navigation
  }
}
</script>

<style>
</style>
