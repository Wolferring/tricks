// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import config from './assets/js/config.js'
import wInput from './components/input'
// main style
import '@/assets/less/style.less'

Vue.use(wInput)
Vue.config.productionTip = true
// Vue.prototype.config = config
/* eslint-disable no-new */
const app = new Vue({
  router,
  template: '<App/>',
  components: { App }
})
app.$mount('#app')
