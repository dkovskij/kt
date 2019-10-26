<template>
  <div class="list-wrap">
    <div class="list-content">
      <div class="list-item" v-for="(item, index) in todoList" :key="'item' + index">
        <div class="active">
          <input type="checkbox" v-model="item.completed" @change="changeStatus(item)">
        </div>
        <div :class="[item.completed ? 'completed-class' : '', 'text']">{{ index + 1 }}) {{ item.text }}</div>
        <div class="edit-block">
          <div class="edit">
            <img src="@/assets/edit.png" class="edit-img">
          </div>
          <div class="close">
            <img class="close-img" src="@/assets/close.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable */

export default {
  computed: {
    todoList() {
      return this.$store.state.todoList;
    }
  },
  methods: {
    changeStatus(item) {
    this.$store.dispatch('SET_COMPLETED', item.id)
  }
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/list.scss";
</style>
