<template>
  <div class="add-todo">
    <div class="input-area">
      <textarea v-model="text" @input="transferText" class="text-input" placeholder="Введите задачу..."></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todoText: String
  },
  data() {
    return {
      text: this.todoText
    }
  },
  methods: {
    transferText() {
      this.$emit('on-transfer', this.text)
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/add-todo.scss';
</style>
