export default {
  namespaced: true,
  state: () => ({
    todos: [],
    showTodoModal: false,
    command: null,
    modalTitle: ''
  }),
  mutations: {
    SET_TODOS (state, payload) {
      state.todos = payload
    },
    SET_SHOWTODOMODAL (state, bool) {
      state.showTodoModal = bool
    },
    SET_COMMAND (state, command) {
      state.command = command
    },
    SET_MODALTITLE (state, title) {
      state.modalTitle = title
    }
  },
  actions: {
    setTodos ({ commit }, id) {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
          const data = json.filter(item => item.userId === Number(id)).map(item => {
            if (item.completed) {
              return { ...item, step: 4 }
            } else {
              return { ...item, step: 1 }
            }
          })
          commit('SET_TODOS', data)
        })
        .finally(_ => {
          commit('SET_LOADING', false, { root: true })
        })
    },
    submitNewTodo ({ state }, payload) {
      return new Promise((resolve) => {
        const findNewId = state.todos.sort((a, b) => a.id - b.id)[state.todos.length - 1].id + 1
        const newTodo = { ...payload, id: findNewId, step: 1, completed: false }
        const newTodoList = [...state.todos, newTodo]
        resolve(newTodoList)
      })
    },
    changeStep ({ state }, payload) {
      return new Promise((resolve) => {
        let changeTodo
        if (payload.move === 'next') {
          changeTodo = { ...payload.data, step: payload.data.step + 1 }
        } else {
          changeTodo = { ...payload.data, step: payload.data.step - 1 }
        }
        const filterTodo = state.todos.slice().filter(item => item !== payload.data)
        const change = [...filterTodo, changeTodo]
        if (change) {
          resolve(change)
        }
      })
    },
    submitEditedTodo ({ state }, payload) {
      return new Promise((resolve) => {
        const editTodoList = state.todos.slice().map(item => item.id === payload.id ? payload : item)
        if (editTodoList) {
          resolve(editTodoList)
        }
      })
    },
    deleteTodo ({ state }, payload) {
      return new Promise((resolve) => {
        const editTodoList = state.todos.slice().filter(item => item.id !== payload.id)
        if (editTodoList) {
          resolve(editTodoList)
        }
      })
    }
  },
  getters: {
    status: state => {
      return [
        {
          title: 'Backlog',
          data: state.todos.filter(todo => todo.step === 1),
          variant: 'info'
        },
        {
          title: 'Todo',
          data: state.todos.filter(todo => todo.step === 2),
          variant: 'warning'
        },
        {
          title: 'Doing',
          data: state.todos.filter(todo => todo.step === 3),
          variant: 'danger'
        },
        {
          title: 'Done',
          data: state.todos.filter(todo => todo.step === 4),
          variant: 'success'
        }
      ]
    }
  }
}
