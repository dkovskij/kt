<template>
  <div class="add-todo">
    <div class="input-area">
      <textarea v-model="inputText" class="text-input" placeholder="Введите задачу..."></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
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
  },
  methods: {
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/add-todo.scss';
</style>
