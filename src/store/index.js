import Vue from 'vue'
import Vuex from 'vuex'
import com from './modules/com.js'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    com
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
