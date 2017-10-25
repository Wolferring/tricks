<template>
  <div id="app">
    <navigation>
      
    </navigation>
    <div class="view main-view">
      <transition :name="transition" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <transition name="fade-quick">
    <login v-if="!comConf.userHasLogin" v-show="comConf.isLoginScreenShow"></login>
    </transition>
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue'
import login from '@/components/login.vue'
export default {
  data () {
    return {
      transition: 'fade-quick'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (toDepth === fromDepth) {
        this.transition = 'fade-quick'
        return false
      }
      this.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  computed: {
    comConf () {
      return this.$store.getters.getComConf
    }
  },
  components: {
    navigation,
    login
  }
}
</script>

<style>
</style>
