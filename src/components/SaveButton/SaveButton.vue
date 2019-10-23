<template>
  <div @click="addTodo" class="btn">
      Добавить
    </div>
</template>

<script>
export default {
  props: {
    todoText: String
  },
  methods: {
    addTodo() {
      if (!this.todoText) {
        return
      }
      this.$store.dispatch('ADD_TODO', this.todoText)
    },
    clearText() {
      this.$emit('clear-text')
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/save-button.scss'
</style>
