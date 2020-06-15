<template>
  <div>
    <b-navbar variant="faded" type="light">
        <b-navbar-brand>
          <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
          PXH Kanban Test
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-button variant="primary" @click="showUserModal">Login</b-button>
        </b-navbar-nav>
    </b-navbar>
    <b-modal ref="userModal" hide-footer title="Choose User">
        <b-container fluid>
            <b-col col md="auto" class="user-btn" v-for="({id, username, name, email, address, phone}, index) in users" :key="index">
                <b-button variant="outline-primary" :id="'user'+id">{{username}}</b-button>
                <b-tooltip :target="'user'+id" triggers="hover" placement="right">
                    Name: {{name}} <br />
                    City: {{address.city}} <br />
                    Email: {{email}} <br />
                    Phone: {{phone}}
                </b-tooltip>
            </b-col>
        </b-container>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'HomeAppBar',
  computed: {
    users () {
      return this.$store.state.users.users
    }
  },
  methods: {
    showUserModal () {
      this.$refs.userModal.show()
    },
    fetchUsers () {
      this.$store.dispatch('users/fetchUsers')
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
