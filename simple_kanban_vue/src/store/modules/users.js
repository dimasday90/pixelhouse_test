export default {
  namespaced: true,
  state: () => ({
    loginUser: {},
    users: []
  }),
  mutations: {
    SET_LOGINUSER (state, payload) {
      state.loginUser = payload
    },
    SET_USERS (state, payload) {
      state.users = payload
    }
  },
  actions: {
    login ({ state }, id) {
      return new Promise((resolve, reject) => {
        const response = state.users.filter(user => user.id === id)[0]
        if (response) {
          resolve(response)
        } else {
          reject(new Error('unable to login'))
        }
      })
    },
    async fetchUsers ({ commit }) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      return response.json()
    }
  }
}
