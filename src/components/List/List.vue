<template>
  <div class="list-wrap">
    <div class="list-content" v-if="todoList && todoList.length > 0">
      <div v-for="(item, index) in paginatedList" :key="'item' + index">
        <template>
          <div class="list-item">
            <div class="active">
              <input type="checkbox" v-model="item.completed" @click="changeStatus(item)" />
            </div>
            <div
              :class="[item.completed ? 'completed-class' : '', 'text']"
            >{{ currentPage > 1 ?  (currentPage - 1) * 10 + index + 1 : index + 1 }}) {{ item.text }}</div>
            <div class="edit-block">
              <div class="edit" @click="editTodo(item)">
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
    <div class="buttons">
      <div class="prev" @click="changePage('prev')">Предыдущая</div>
      <div class="next" @click="changePage('next')">Следующая</div>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import { db } from "@/main";

export default {
  data() {
    return {
      resultCount: 0,
      currentPage: 1,
      itemsPerPage: 10,
      offset: 0,
      limit: 10
    };
  },
  computed: {
    todoList() {
      return this.$store.state.todoList;
    },
    pages() {
      return Math.ceil(this.todoList.length / 10);
    },
    paginatedList() {
      this.resultCount = this.todoList.length;
      let page = this.currentPage - 1
      if (page >= this.pages) {
        page = this.pages - 1;
      }
      let index = page * this.itemsPerPage;
      return this.todoList.slice(index, index + this.itemsPerPage);
    }
  },
  created() {
  },
  methods: {
    changeStatus(item) {
      this.$store.dispatch("SET_COMPLETED", item);
    },
    removeTodo(item) {
      this.$store.dispatch("DELETE_TODO", item);
    },
    editTodo(item) {
      this.$store.commit('SET_INPUT_TEXT', item.text)
      this.$router.push('/edit-todo/' + item.id)
    },
    changePage(page) {
      if (this.pages === 1) {
        return
      }
      if (page === 'next') {
        if (this.currentPage === this.pages) {
          return
        }
        this.currentPage++
      } else if (page === 'prev') {
        if (this.currentPage - 1 === 0) {
          return
        }
        this.currentPage--
      }
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/list.scss";
</style>
