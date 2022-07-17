<template>
  <div class="todolist">
    <v-container class="todolist__container">
      <v-row justify="center">
        <v-col cols="12">
          <v-text-field
            solo
            rounded
            placeholder="Новая задача"
            class="text-field pl-0"
            v-model="todo"
          >
            <template #append>
              <v-btn
                rounded
                small
                plain
                color="primary"
                :loading="false"
                :disabled="!todo.length"
                >добавить</v-btn
              >
            </template>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <v-card class="white rounded-xl px-4" cols="4">
            <v-list flat subheader>
              <TodoGroup title="Активные" :items="active" />
              <TodoGroup title="Выполненные" :items="completed" />
              <TodoGroup title="Архив" :items="archived" />
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TodoGroup from "./TodoGroup.vue";

export default {
  components: { TodoGroup },
  data() {
    return {
      todo: "",
      items: [
        {
          id: 1,
          text: "Задача 1 123  123123 123 12312312312312 31 wf wef wf wef wefw efwef ",
          completed: false,
          archived: false,
        },
        {
          id: 2,
          text: "Задача 2",
          completed: false,
          archived: false,
        },
        {
          id: 3,
          text: "Задача 3",
          completed: true,
          archived: false,
        },
        {
          id: 4,
          text: "Задача 4",
          completed: false,
          archived: true,
        },
        {
          id: 5,
          text: "Задача 5 qwd qwd qwd qwd qwdqwdq dqwd qwd qd",
          completed: true,
          archived: true,
        },
      ],
    };
  },
  computed: {
    active() {
      return this.items.filter((item) => !item.completed && !item.archived);
    },
    completed() {
      return this.items.filter((item) => item.completed && !item.archived);
    },
    archived() {
      return this.items.filter((item) => item.archived);
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
  width: 540px;
}

.text-field ::v-deep(.v-input__slot) {
  padding-right: 10px;
}
</style>
