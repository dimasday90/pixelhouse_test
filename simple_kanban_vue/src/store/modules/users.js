export default {
  namespaced: true,
  state: () => ({
    users: []
  }),
  mutations: {
    SET_USERS (state, payload) {
      state.users = payload
    }
  },
  actions: {
    fetchUsers ({ commit }) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          commit('SET_USERS', json)
        })
    }
  }
}
