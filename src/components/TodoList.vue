<template>
  <div class="list-wrap">
    <div class="list-container">
      <add-todo @on-transfer="transferText" :todo-text="todoText"></add-todo>
      <div class="list-title-wrap">
        <div class="list-title">
        Задачи
      </div>
      <div class="dots">
        <img class="dots-img" src="../assets/dots.png" alt="dots">
      </div>
      </div>
      <list></list>
      <save-button></save-button>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import List from '@/components/List/List'
import AddTodo from '@/components/AddTodo/AddTodo'
import SaveButton from '@/components/SaveButton/SaveButton'
export default {
  components: {
    AddTodo, SaveButton, List  },
  data() {
    return {
      todoText: ''
    }
  },
  methods: {
    transferText(text) {
      this.todoText = text
    },
    clearText() {
      this.todoText = ''
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/todo-list.scss';
</style>
