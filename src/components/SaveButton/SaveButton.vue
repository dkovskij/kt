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
      this.$store.dispatch('ADD_TODO', this.todoText)
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/save-button.scss'
</style>
