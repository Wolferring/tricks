import * as types from '../types.js'
import api from '../api.js'
const state = {
  isLoginScreenShow: false,
  userHasLogin: false
}
const actions = {
  setComConf ({commit}, settings) {
    commit(types.COM_CONF, settings)
  },
  userLogin ({commit}, settings) {
    return new Promise((resolve, reject) => {
      api.login(function (data) {
        resolve(data)
      })
    })
  }
}

const getters = {
  getComConf: state => state
}

const mutations = {
  [types.COM_CONF] (state, settings) {
    state = Object.assign(state, settings)
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
