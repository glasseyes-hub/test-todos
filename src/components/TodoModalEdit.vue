<template>
  <v-dialog :value="showModal" persistent max-width="400">
    <v-card class="pa-4">
      <v-card-title class="text-h6"> Редактировать задачу </v-card-title>
      <v-text-field
        class="mx-6"
        placeholder="Введите текст"
        v-model="newText"
      />

      <v-card-actions class="rounded-xl">
        <v-btn rounded color="grey" text @click="$emit('close')">
          Отмена
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          rounded
          color="primary"
          text
          :disabled="!newText"
          @click="confirm"
        >
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["show", "item"],

  watch: {
    show() {
      this.showModal = this.show;
      this.newText = this.item.text;
    },
  },

  data() {
    return {
      showModal: false,
      newText: "",
    };
  },

  methods: {
    confirm() {
      this.$emit("confirm", {
        ...this.item,
        text: this.newText,
      });
    },
  },
};
</script>
