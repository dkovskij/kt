<template>
  <div @click="addTodo" class="btn">
      Добавить
    </div>
</template>

<script>
/* eslint-disable*/
export default {
  methods: {
    addTodo() {
      if (this.$route.path.indexOf('edit-todo') !== -1) {
        this.$store.dispatch('EDIT_TODO', this.$route.params.id)
        this.$store.commit('CLEAR_INPUT')
        this.$router.push('/')
        return
      }
      this.$store.dispatch('ADD_TODO')
      this.$store.commit('CLEAR_INPUT')
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/save-button.scss'
</style>
