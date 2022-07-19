<template>
  <v-list-item class="item rounded-xl px-2">
    <v-btn icon class="mr-2" @click="$emit('select', item)">
      <v-icon color="primary">{{
        item.completed ? icons.completed : icons.active
      }}</v-icon>
    </v-btn>
    <v-list-item-content>
      <v-list-item-title>{{ item.text }}</v-list-item-title>
    </v-list-item-content>
    <div class="controls ml-2">
      <TodoItemButton :icon="icons.edit" @click="$emit('edit', item)" />
      <TodoItemButton
        :icon="item.archived ? icons.unarchive : icons.archive"
        @click="$emit('archive', item)"
      />
      <TodoItemButton :icon="icons.remove" @click="$emit('remove', item.id)" />
    </div>
  </v-list-item>
</template>

<script>
import {
  mdiCircleOutline,
  mdiCheckboxMarkedCircleOutline,
  mdiArchiveArrowDownOutline,
  mdiArchiveArrowUp,
  mdiTrashCanOutline,
  mdiPlaylistEdit,
} from "@mdi/js";
import TodoItemButton from "./TodoItemButton.vue";

export default {
  components: { TodoItemButton },
  props: ["item"],
  data() {
    return {
      icons: {
        active: mdiCircleOutline,
        completed: mdiCheckboxMarkedCircleOutline,
        archive: mdiArchiveArrowDownOutline,
        unarchive: mdiArchiveArrowUp,
        remove: mdiTrashCanOutline,
        edit: mdiPlaylistEdit,
      },
    };
  },
};
</script>

<style scoped lang="scss">
.controls {
  display: none;
  gap: 4px;
}
.item {
  transition: 300ms;
  cursor: pointer;
}
.item:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.item:hover .controls {
  display: flex;
}
</style>
