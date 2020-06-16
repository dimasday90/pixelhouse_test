<template>
  <div>
      <b-modal
        centered
        hide-footer
        hide-header-close
        no-close-on-esc
        no-close-on-backdrop
        no-enforce-focus
        :title="modalTitle"
        v-model="openModal"
      >
        <div v-if="modalCommand === 'create'">
          <b-form @submit.prevent="submitNewTodo">
            <b-form-group
              label="Task Title:"
            >
              <b-form-input
              autoFocus
              required
              type="text"
              v-model="inputTitle"
              placeholder="Enter your title"
              />
            </b-form-group>
            <b-button-toolbar class="d-flex justify-content-center mt-3">
              <b-button class="ml-3 mr-3" type="submit" variant="outline-primary">Submit</b-button>
              <b-button class="ml-3 mr-3" @click="closeTodoModal" variant="outline-dark">Close</b-button>
            </b-button-toolbar>
          </b-form>
        </div>
        <div v-else-if="modalCommand === 'edit'">
          <b-form @submit.prevent="submitEditedTodo">
            <b-form-group
              label="Task Title:"
            >
              <b-form-input
              autoFocus
              required
              type="text"
              v-model="dataToEdit.title"
              placeholder="Enter your title"
              />
            </b-form-group>
            <b-button-toolbar class="d-flex justify-content-center mt-3">
              <b-button class="ml-3 mr-3" type="submit" variant="outline-primary">Edit</b-button>
              <b-button class="ml-3 mr-3" @click="closeTodoModal" variant="outline-dark">Close</b-button>
            </b-button-toolbar>
          </b-form>
        </div>
        <div v-if="modalCommand === 'delete'">
          <b-form>
            <b-form-input
             disabled
             type="text"
             v-model="dataToDelete.title"
            />
            <b-button-toolbar class="d-flex justify-content-center mt-3">
              <b-button class="ml-3 mr-3" @click="deleteTodo" variant="outline-danger">Delete</b-button>
              <b-button class="ml-3 mr-3" @click="closeTodoModal" variant="outline-secondary">Close</b-button>
            </b-button-toolbar>
          </b-form>
        </div>
      </b-modal>
  </div>
</template>

<script>
export default {
  name: 'todoModal',
  props: {
    dataToEdit: Object,
    dataToDelete: Object
  },
  computed: {
    openModal () {
      return this.$store.state.todos.showTodoModal
    },
    modalCommand () {
      return this.$store.state.todos.command
    },
    modalTitle () {
      return this.$store.state.todos.modalTitle
    }
  },
  data: () => {
    return {
      inputTitle: ''
    }
  },
  methods: {
    submitNewTodo () {
      this.$store.dispatch('todos/submitNewTodo',
        { title: this.inputTitle, userId: Number(this.$route.params.id) }
      )
        .then(response => {
          this.$store.commit('todos/SET_TODOS', response)
        })
        .finally(_ => {
          this.$store.commit('todos/SET_SHOWTODOMODAL', false)
        })
    },
    submitEditedTodo () {
      this.$store.dispatch('todos/submitEditedTodo', this.dataToEdit)
        .then(response => {
          this.$store.commit('todos/SET_TODOS', response)
        })
        .finally(_ => {
          this.$store.commit('todos/SET_SHOWTODOMODAL', false)
        })
    },
    deleteTodo () {
      this.$store.dispatch('todos/deleteTodo', this.dataToDelete)
        .then(response => {
          this.$store.commit('todos/SET_TODOS', response)
        })
        .finally(_ => {
          this.$store.commit('todos/SET_SHOWTODOMODAL', false)
        })
    },
    closeTodoModal () {
      this.$store.commit('todos/SET_SHOWTODOMODAL', false)
    }
  }
}
</script>

<style>

</style>
