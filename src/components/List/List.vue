<template>
  <div class="list-wrap">
    <div class="list-content">
      <div class="list-item" v-for="(item, index) in todoList" :key="'item' + index">
        {{ index + 1 }}) {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    todoList() {
      return this.$store.state.todoList
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/list.scss';
</style>
