<template>
  <v-list-item class="item rounded-xl px-2">
    <v-btn class="mr-2" icon @click="$emit('select', item)">
      <v-icon color="primary">{{
        item.completed ? icons.completed : icons.active
      }}</v-icon>
    </v-btn>
    <v-list-item-content>
      <v-list-item-title>{{ item.text }}</v-list-item-title>
    </v-list-item-content>
    <div class="controls ml-2">
      <v-btn rounded small plain color="grey" @click="$emit('archive', item)">
        <v-icon color="primary">{{
          item.completed ? icons.completed : icons.active
        }}</v-icon>
      </v-btn>
      <v-btn rounded small plain color="grey" @click="$emit('archive', item)">
        <v-icon color="primary">{{
          item.completed ? icons.completed : icons.active
        }}</v-icon>
      </v-btn>
      <v-btn rounded small plain color="grey" @click="$emit('archive', item)">
        <v-icon color="primary">{{
          item.completed ? icons.completed : icons.active
        }}</v-icon>
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
