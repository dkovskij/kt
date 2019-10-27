<template>
  <div id="app">
    <h1 v-if="loading">Загрузка...</h1>
    <router-view v-else></router-view>
  </div>
</template>

<script>

export default {
  computed: {
    loading() {
      return this.$store.state.loading
    }
  },
  created() {
    this.$store.commit('SET_LOADING', true)
    this.$store.dispatch('GET_TODOS').then(() => {
      this.$store.commit('SET_LOADING', false)
    })
  },
}
</script>

<style lang="scss">
@import '@/styles/main.scss';
</style>
