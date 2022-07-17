<template>
  <v-app>
    <v-img
      class="bg"
      height="400"
      src="http://www.cita.com.ua/img/ntours/big/4/1599228157.jpg"
    ></v-img>

    <v-app-bar app>
      <span class="title"> Todo App </span>
    </v-app-bar>
    <v-main class="mt-16 h-screen">
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
};
</script>

<style scoped>
.bg {
  position: absolute;
}
</style>
