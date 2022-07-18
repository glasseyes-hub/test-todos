<template>
  <v-text-field
    solo
    rounded
    flat
    placeholder="Новая задача"
    class="text-field pl-0"
    v-model="text"
  >
    <template #append>
      <v-btn
        rounded
        small
        plain
        color="primary"
        :loading="false"
        :disabled="!text.length"
        @click="add()"
        >добавить</v-btn
      >
    </template>
  </v-text-field>
</template>

<script>
import { mdiCircleOutline, mdiCheckboxMarkedCircleOutline } from "@mdi/js";

export default {
  data() {
    return {
      text: "",
      icons: {
        active: mdiCircleOutline,
        completed: mdiCheckboxMarkedCircleOutline,
      },
    };
  },
  computed: {
    lastId() {
      return this.$store.getters.lastId;
    },
  },
  methods: {
    add() {
      this.$store.dispatch("add", {
        id: +this.$store.getters.nextId,
        text: this.text,
        completed: false,
        archived: false,
      });

      this.text = "";
    },
  },
};
</script>
