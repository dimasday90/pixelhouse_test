<template>
    <div>
        <b-container>
            <b-row>
                <b-col
                  v-for="({title, variant, data}, index) in status"
                  :key="index"
                  col xs="12" sm="12" md="6" lg="3"
                >
                    <b-card
                    :header="title"
                    :border-variant="variant"
                    :header-bg-variant="variant"
                    header-text-variant="white"
                    align="center"
                    class="main-board"
                    >
                        <div v-if="loading">
                            <b-spinner
                              style="width: 3rem; height: 3rem;"
                              label="Large Spinner"
                              :variant="variant"
                            />
                        </div>
                        <div v-else>
                            <b-card no-body class="board">
                                <b-card v-for="(todo, index) in data"
                                :key="index"
                                class="mx-1 my-2"
                                >
                                    <b-card-text>{{todo.title}}</b-card-text>
                                    <b-button-toolbar
                                    class="d-flex justify-content-center mt-2"
                                    >
                                        <b-button-group>
                                            <b-button
                                            v-if="todo.step !== 1"
                                            variant="outline-light"
                                            @click="changeStep(todo, 'previous')"
                                            >
                                                <b-icon
                                                icon="arrow-left"
                                                variant="primary"
                                                />
                                            </b-button>
                                            <b-button
                                            variant="outline-light"
                                            @click="openEditModal(todo)"
                                            >
                                                <b-icon
                                                icon="pencil"
                                                variant="dark"
                                                />
                                            </b-button>
                                            <b-button
                                            variant="outline-light"
                                            @click="openDeleteModal(todo)"
                                            >
                                                <b-icon
                                                icon="trash-fill"
                                                variant="danger"
                                                />
                                            </b-button>
                                            <b-button
                                            v-if="todo.step !== 4"
                                            variant="outline-light"
                                            @click="changeStep(todo, 'next')"
                                            >
                                                <b-icon
                                                icon="arrow-right"
                                                variant="success"
                                                />
                                            </b-button>
                                        </b-button-group>
                                    </b-button-toolbar>
                                </b-card>
                            </b-card>
                        </div>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  name: 'KanbanTable',
  data () {
    return {
      inputTitle: ''
    }
  },
  computed: {
    loading () {
      return this.$store.state.loading
    },
    status () {
      return this.$store.getters['todos/status']
    }
  },
  methods: {
    fetchTodos () {
      this.$store.commit('SET_LOADING', true)
      this.$store.dispatch('todos/setTodos', this.$route.params.id)
    },
    changeStep (todo, move) {
      this.$store.dispatch('todos/changeStep', { data: todo, move })
        .then(response => {
          this.$store.commit('todos/SET_TODOS', response)
        })
    },
    openEditModal (todo) {
      this.$emit('openEditModal', { ...todo })
      this.$store.commit('todos/SET_MODALTITLE', 'Edit Task')
      this.$store.commit('todos/SET_COMMAND', 'edit')
      this.$store.commit('todos/SET_SHOWTODOMODAL', true)
    },
    openDeleteModal (todo) {
      this.$emit('openDeleteModal', { ...todo })
      this.$store.commit('todos/SET_MODALTITLE', 'Delete this task?')
      this.$store.commit('todos/SET_COMMAND', 'delete')
      this.$store.commit('todos/SET_SHOWTODOMODAL', true)
    }
  },
  created () {
    this.fetchTodos()
  }
}
</script>

<style scoped>
  .main-board {
      margin-top: 3rem;
  }

  .board {
      max-height: 25rem;
      overflow: auto;
  }
</style>
