import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const ITEMS = {
  1: {
    id: 1,
    text: "Задача 1",
    completed: false,
    archived: false,
  },
  2: {
    id: 2,
    text: "Задача 2",
    completed: false,
    archived: false,
  },
  3: {
    id: 3,
    text: "Задача 3",
    completed: true,
    archived: false,
  },
  4: {
    id: 4,
    text: "Задача 4",
    completed: false,
    archived: true,
  },
  5: {
    id: 5,
    text: "Задача 5",
    completed: true,
    archived: true,
  },
};

export default new Vuex.Store({
  state() {
    return {
      items: {},
    };
  },
  getters: {
    active: (state) => {
      return Object.values(state.items)
        .filter((item) => !item.completed && !item.archived)
        .reverse();
    },
    completed: (state) => {
      return Object.values(state.items)
        .filter((item) => item.completed && !item.archived)
        .reverse();
    },
    archived: (state) => {
      return Object.values(state.items)
        .filter((item) => item.archived)
        .reverse();
    },
    nextId: (state) => {
      const keys = Object.keys(state.items);

      return keys.length ? Math.max(...keys) + 1 : 1;
    },
  },
  mutations: {
    set(state, items) {
      state.items = items;
    },
    add(state, item) {
      state.items = { ...state.items, [item.id]: item };
    },
    update(state, item) {
      state.items[item.id] = item;
    },
    remove(state, id) {
      delete state.items[id];

      state.items = { ...state.items };
    },
  },
  actions: {
    fetchAll({ commit }) {
      commit("set", ITEMS);
    },
    add({ commit }, item) {
      commit("add", item);
    },
    update({ commit }, item) {
      commit("update", item);
    },
    remove({ commit }, id) {
      commit("remove", id);
    },
    save({ state }) {
      console.log(
        Object.values(state.items).map((item) => {
          return {
            field_num: item.id,
            field_value: item.text,
            field_completed: item.completed,
            field_archived: item.archived,
          };
        })
      );
    },
  },
});
