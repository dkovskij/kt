<template>
  <div class="list-wrap">
    <div class="list-container">
      <add-todo @on-transfer="transferText"></add-todo>
      <div class="list-title-wrap">
        <div class="list-title">
        Задачи
      </div>
      <div class="dots">
        <img class="dots-img" src="../assets/dots.png" alt="dots">
      </div>
      </div>
      <list></list>
      <save-button :todo-text="todoText"></save-button>
    </div>
  </div>
</template>

<script>
import List from '@/components/List/List'
import AddTodo from '@/components/AddTodo/AddTodo'
import SaveButton from '@/components/SaveButton/SaveButton'
export default {
  components: {
    List, AddTodo, SaveButton
  },
  data() {
    return {
      todoText: ''
    }
  },
  methods: {
    transferText(text) {
      this.todoText = text
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/todo-list.scss';
</style>
