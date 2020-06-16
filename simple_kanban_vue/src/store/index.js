import Vue from 'vue'
import Vuex from 'vuex'

// # modules
import homeCarousel from './modules/homeCarousel'
import users from './modules/users'
import todos from './modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    SET_LOADING (state, bool) {
      state.loading = bool
    }
  },
  modules: {
    homeCarousel,
    users,
    todos
  }
})
