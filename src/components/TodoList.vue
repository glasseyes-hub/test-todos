<template>
  <div class="todolist">
    <TodoModalEdit
      :item="editItem"
      :show="showEditModal"
      @confirm="onEdit"
      @close="showEditModal = false"
    />
    <v-container class="todolist__container rounded-xl px-6 py-6">
      <v-row class="mb-6">
        <v-col cols="12">
          <div class="d-flex justify-center mb-6">
            <h1 class="h1 white--text">todoapp</h1>
          </div>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2 class="h2 white--text mb-4 ml-4">Создать задачу</h2>
          <TodoAddItem @add="onAdd" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <h2 class="h2 white--text mb-4 ml-4">Ваши задачи</h2>
          <v-card flat class="white rounded-xl pa-4" cols="4">
            <TodoGroup
              v-for="([type, title], index) in Object.entries(groups)"
              :key="index"
              :title="title"
              :items="$store.getters[type]"
              @select="onSelect"
              @archive="onArchive"
              @edit="onShowEditModal"
              @remove="onRemove"
            />
          </v-card>
          <div class="d-flex justify-center mt-6">
            <v-btn rounded plain @click="onSave">Сохранить</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TodoGroup from "./TodoGroup.vue";
import TodoAddItem from "./TodoAddItem.vue";
import TodoModalEdit from "./TodoModalEdit.vue";

export default {
  components: { TodoGroup, TodoAddItem, TodoModalEdit },
  data() {
    return {
      editItem: null,
      showEditModal: false,
      groups: {
        active: "Активные",
        completed: "Выполненные",
        archived: "Архив",
      },
    };
  },

  methods: {
    onAdd(text) {
      try {
        this.$store.dispatch("add", {
          id: this.$store.getters.nextId,
          text,
          completed: false,
          archived: false,
        });
      } catch (e) {
        console.error(e);
      }
    },
    onSelect(item) {
      try {
        this.$store.dispatch("update", {
          ...item,
          completed: !item.completed,
        });
      } catch (e) {
        console.error(e);
      }
    },
    onArchive(item) {
      try {
        this.$store.dispatch("update", {
          ...item,
          archived: !item.archived,
        });
      } catch (e) {
        console.error(e);
      }
    },

    onEdit(item) {
      try {
        this.$store.dispatch("update", {
          ...item,
        });
      } catch (e) {
        console.error(e);
      } finally {
        this.showEditModal = false;
      }
    },
    onRemove(id) {
      try {
        this.$store.dispatch("remove", id);
      } catch (e) {
        console.error(e);
      }
    },
    onSave() {
      try {
        this.$store.dispatch("save");
      } catch (e) {
        console.error(e);
      }
    },

    onShowEditModal(item) {
      this.editItem = item;
      this.showEditModal = true;
    },
  },
};
</script>

<style scoped>
.todolist {
  display: flex;
  width: 100%;
}

.todolist__container {
  width: 600px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(25px);
}

.text-field ::v-deep(.v-input__slot) {
  padding-right: 10px;
}
</style>
