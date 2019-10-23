<template>
  <div class="add-todo">
    <div class="input-area">
      <textarea v-model="todoText" @input="transferText" class="text-input" placeholder="Введите задачу..."></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoText: ''
    }
  },
  methods: {
    transferText() {
      this.$emit('on-transfer', this.todoText)
    },
    addTodo() {
      if (this.todoText === '') {
        return
      }
      this.$store.dispatch('ADD_TODO', this.todoText)
      this.todoText = ''
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/add-todo.scss';
</style>
