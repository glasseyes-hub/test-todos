<template>
  <v-list-item class="item rounded-xl">
    <v-list-item-icon>
      <v-btn icon @click="$emit('select', item)">
        <v-icon color="primary">{{
          item.completed ? icons.completed : icons.active
        }}</v-icon>
      </v-btn>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>{{ item.text }}</v-list-item-title>
    </v-list-item-content>
    <div class="controls">
      <v-btn rounded small plain color="grey" @click="$emit('archive', item)">
        {{ item.archived ? "восстановить" : "в архив" }}
      </v-btn>
    </div>
  </v-list-item>
</template>

<script>
import {
  mdiCircleOutline,
  mdiCheckboxMarkedCircleOutline,
  mdiArchiveArrowDownOutline,
  mdiArchiveArrowUp,
} from "@mdi/js";

export default {
  props: ["item"],
  data() {
    return {
      icons: {
        active: mdiCircleOutline,
        completed: mdiCheckboxMarkedCircleOutline,
        archive: mdiArchiveArrowDownOutline,
        unarchive: mdiArchiveArrowUp,
      },
    };
  },
};
</script>

<style scoped>
.controls {
  display: none;
  margin-left: 4px;
}
.item {
  transition: 300ms;
  cursor: pointer;
}
.item:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.item:hover .controls {
  display: block;
}
</style>
