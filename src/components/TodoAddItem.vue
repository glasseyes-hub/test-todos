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
        @click="add"
        >добавить</v-btn
      >
    </template>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },

  methods: {
    add() {
      this.$emit("add", this.text);

      this.text = "";
    },
  },
};
</script>
