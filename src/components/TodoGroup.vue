<template>
  <div>
    <v-list flat subheader>
      <v-subheader>{{ title }}</v-subheader>

      <TodoItem v-for="item in items" :key="item.id" :item="item" />
    </v-list>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: { TodoItem },
  props: ["title", "items"],
  data() {
    return {};
  },
};
</script>
