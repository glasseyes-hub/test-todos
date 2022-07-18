<template>
  <v-list flat subheader>
    <v-subheader>{{ title }}</v-subheader>

    <template v-if="items.length">
      <TodoItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        @select="$emit('select', $event)"
        @archive="$emit('archive', $event)"
        @edit="$emit('edit', $event)"
        @remove="$emit('remove', $event)"
      />
    </template>
    <div v-else class="d-flex justify-center">
      <span class="caption grey--text">Список пуст</span>
    </div>
  </v-list>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: { TodoItem },
  props: ["title", "items"],
};
</script>
