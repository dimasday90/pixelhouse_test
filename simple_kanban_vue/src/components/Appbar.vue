<template>
  <div>
    <b-navbar variant="faded" type="light">
        <b-navbar-brand>
          <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
          PXH Kanban Test
        </b-navbar-brand>
        <b-nav-text v-if="user.username">{{user.username}}</b-nav-text>
        <b-navbar-nav class="ml-auto">
          <div v-if="user.username">
            <b-button variant="primary" @click="openNewTodoModal" class="mr-2">
              <b-icon icon="file-plus" />
              Create New Task
            </b-button>
            <b-button variant="danger" @click="logout" class="mr-2">
              Logout
              <b-icon icon="arrow-bar-left" variant="light" />
            </b-button>
          </div>
          <div v-else>
            <b-button variant="primary" @click="showUserModal" class="mr-2">
              Login
              <b-icon icon="arrow-bar-right" variant="light" />
            </b-button>
          </div>
        </b-navbar-nav>
    </b-navbar>
    <b-modal ref="userModal" centered hide-footer title="Choose User">
        <div v-if="loading">
          <h2>Fetching Users...</h2>
        </div>
        <div v-else>
          <b-container fluid>
              <b-col col md="auto" class="user-btn" v-for="({id, username, name, email, address, phone}, index) in users" :key="index">
                  <b-button variant="outline-primary" :id="'user'+id" @click="login(id)">{{username}}</b-button>
                  <b-tooltip :target="'user'+id" triggers="hover" placement="right">
                      Name: {{name}} <br />
                      City: {{address.city}} <br />
                      Email: {{email}} <br />
                      Phone: {{phone}}
                  </b-tooltip>
              </b-col>
          </b-container>
        </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
  computed: {
    loading () {
      return this.$store.state.loading
    },
    users () {
      return this.$store.state.users.users
    },
    user () {
      return this.$store.state.users.loginUser
    }
  },
  methods: {
    showUserModal () {
      this.$refs.userModal.show()
    },
    fetchUsers () {
      this.$store.commit('SET_LOADING', true)
      this.$store.dispatch('users/fetchUsers')
        .then(data => {
          this.$store.commit('users/SET_USERS', data)
          if (this.$route.params.id && !this.$store.state.users.loginUser.id) {
            this.$store.commit('SET_LOADING', true)
            this.$store.dispatch('users/login', Number(this.$route.params.id))
              .then(data => {
                this.$store.commit('users/SET_LOGINUSER', data)
              })
              .catch(error => {
                console.log(error)
              })
              .finally(_ => {
                this.$store.commit('SET_LOADING', false)
              })
          }
        })
        .finally(_ => {
          this.$store.commit('SET_LOADING', false)
        })
    },
    login (id) {
      this.$store.commit('SET_LOADING', true)
      this.$store.dispatch('users/login', id)
        .then(data => {
          this.$router.push(`user/${id}`)
          this.$store.commit('users/SET_LOGINUSER', data)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(_ => {
          this.$store.commit('SET_LOADING', false)
        })
    },
    logout () {
      this.$store.commit('users/SET_LOGINUSER', {})
      this.$store.commit('todos/SET_TODOS', [])
      this.$router.push('/')
    },
    openNewTodoModal () {
      this.$store.commit('todos/SET_MODALTITLE', 'Create New Task')
      this.$store.commit('todos/SET_COMMAND', 'create')
      this.$store.commit('todos/SET_SHOWTODOMODAL', true)
    }
  },
  created () {
    this.fetchUsers()
  }
}
</script>

<style scoped>
    .user-btn {
        margin: 7px 0px;
    }
</style>
