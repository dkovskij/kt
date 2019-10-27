<template>
  <div class="edit-wrap">
    <div class="edit-container">
      <div class="edit-title">
        Редактировать задачу
      </div>
      <div class="edit-area">
        <textarea v-model="inputText" class="text-input" placeholder="Введите задачу..."></textarea>
      </div>
      <save-button></save-button>
    </div>
  </div>
</template>

<script>
import SaveButton from '@/components/SaveButton/SaveButton'
export default {
  components: {
    SaveButton
  },
  computed: {
    inputText: {
      get() {
        return this.$store.state.inputText
      },
      set(val) {
        this.$store.commit('SET_INPUT_TEXT', val)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/edit-todo.scss';
</style>
