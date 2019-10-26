<template>
  <div class="list-wrap">
    <div class="list-content">
      <div v-for="(item, index) in todoList" :key="'item' + index">
        <template v-if="index < 10">
      <div class="list-item">
        <div class="active">
          <input type="checkbox" v-model="item.completed" @click="changeStatus(item)" />
        </div>
        <div
          :class="[item.completed ? 'completed-class' : '', 'text']"
        >{{ index + 1 }}) {{ item.text }}</div>
        <div class="edit-block">
          <div class="edit">
            <img src="@/assets/edit.png" class="edit-img" />
          </div>
          <div class="close" @click="removeTodo(item)">
            <img class="close-img" src="@/assets/close.png" />
          </div>
        </div>
      </div>
      </template>
    </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable */

export default {
  data() {
    return {};
  },
  computed: {
    todoList() {
      return this.$store.state.todoList;
    }
  },
  created() {
    this.$route.params.page = 1
  },
  methods: {
    changeStatus(item) {
      this.$store.dispatch("SET_COMPLETED", item);
    },
    removeTodo(item) {
      this.$store.dispatch("DELETE_TODO", item);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/list.scss";
</style>
