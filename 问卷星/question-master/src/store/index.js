import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active: window.localStorage.getItem('active')
  },
  mutations: {
    setState(state, payload) {
      state.active = payload
    }
  },
  actions: {},
  modules: {}
})