<template>
  <v-list-item class="item rounded-xl px-2">
    <v-btn class="mr-2" icon @click="select(item)">
      <v-icon color="primary">{{
        item.completed ? icons.completed : icons.active
      }}</v-icon>
    </v-btn>
    <v-list-item-content>
      <v-list-item-title>{{ item.text }}</v-list-item-title>
    </v-list-item-content>
    <div class="controls ml-2">
      <v-btn rounded small plain color="primary" @click="archive(item)">
        <v-icon color="grey">{{
          item.archived ? icons.unarchive : icons.archive
        }}</v-icon>
      </v-btn>
      <v-btn rounded small plain color="primary" @click="remove(item)">
        <v-icon color="grey">{{ icons.delete }}</v-icon>
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
  mdiTrashCanOutline,
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
        delete: mdiTrashCanOutline,
      },
    };
  },
  methods: {
    select(item) {
      this.$store.dispatch("update", {
        ...item,
        completed: !item.completed,
      });
    },
    archive(item) {
      this.$store.dispatch("update", {
        ...item,
        archived: !item.archived,
      });
    },
    remove(item) {
      this.$store.dispatch("remove", item);
    },
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
