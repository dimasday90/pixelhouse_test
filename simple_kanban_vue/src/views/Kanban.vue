<template>
    <div>
        <Appbar />
        <KanbanTable @openEditModal=setEditTodoData @openDeleteModal=setDeleteTodoData />
        <todoModal :dataToEdit=editTodoData :dataToDelete=deleteTodoData />
    </div>
</template>

<script>
import Appbar from '../components/Appbar'
import KanbanTable from '../components/KanbanTable'
import todoModal from '../components/todoModal'
export default {
  name: 'Kanban',
  components: {
    Appbar,
    KanbanTable,
    todoModal
  },
  data: () => {
    return {
      editTodoData: {},
      deleteTodoData: {}
    }
  },
  methods: {
    setEditTodoData (todo) {
      this.editTodoData = todo
    },
    setDeleteTodoData (todo) {
      this.deleteTodoData = todo
    }
  }
}
</script>

<style></style>
