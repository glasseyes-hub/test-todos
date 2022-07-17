<template>
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
</template>

<script>
import { mdiCircleOutline, mdiCheckboxMarkedCircleOutline } from "@mdi/js";

export default {
  props: ["text", "completed"],
  data() {
    return {
      icons: {
        active: mdiCircleOutline,
        completed: mdiCheckboxMarkedCircleOutline,
      },
    };
  },
};
</script>
