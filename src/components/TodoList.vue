<template>
  <div class="todolist">
    <v-container class="todolist__container rounded-xl px-6 py-6">
      <v-row class="mb-6">
        <v-col cols="12">
          <div class="d-flex justify-center mb-6">
            <h1 class="h1 white--text">todoapp</h1>
          </div>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2 class="h2 white--text mb-4 ml-4">Создать задачу</h2>
          <TodoAddItem />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <h2 class="h2 white--text mb-4 ml-4">Ваши задачи</h2>
          <v-card flat class="white rounded-xl px-4" cols="4">
            <TodoGroup title="Активные" :items="active" />
            <TodoGroup title="Выполненные" :items="completed" />
            <TodoGroup title="Архив" :items="archived" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TodoGroup from "./TodoGroup.vue";
import TodoAddItem from "./TodoAddItem.vue";

export default {
  components: { TodoGroup, TodoAddItem },
  data() {
    return {
      todo: "",
    };
  },
  computed: {
    active() {
      return this.$store.getters.active;
    },
    completed() {
      return this.$store.getters.completed;
    },
    archived() {
      return this.$store.getters.archived;
    },
  },
};
</script>

<style scoped>
.todolist {
  display: flex;
  width: 100%;
}
.todolist__container {
  width: 600px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(25px);
}

.text-field ::v-deep(.v-input__slot) {
  padding-right: 10px;
}
</style>
