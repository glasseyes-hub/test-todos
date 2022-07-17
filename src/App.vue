<template>
  <v-app>
    <div class="bg"></div>

    <v-main class="my-16">
      <TodoList class="todo" />
    </v-main>
  </v-app>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",

  components: {
    TodoList,
  },

  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("fetchAll");
  },
};
</script>

<style scoped>
.bg {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-position: fixed;
  background-image: url(http://www.cita.com.ua/img/ntours/big/4/1599228157.jpg);
}
</style>
