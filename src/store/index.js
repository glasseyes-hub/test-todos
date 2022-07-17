import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const ITEMS = [
  {
    id: 1,
    text: "Задача 1 123  123123 123 12312312312312 31 wf wef wf wef wefw efwef ",
    completed: false,
    archived: false,
  },
  {
    id: 2,
    text: "Задача 2",
    completed: false,
    archived: false,
  },
  {
    id: 3,
    text: "Задача 3",
    completed: true,
    archived: false,
  },
  {
    id: 4,
    text: "Задача 4",
    completed: false,
    archived: true,
  },
  {
    id: 5,
    text: "Задача 5 qwd qwd qwd qwd qwdqwdq dqwd qwd qd",
    completed: true,
    archived: true,
  },
];

export default new Vuex.Store({
  state() {
    return {
      items: [],
    };
  },
  getters: {
    active: (state) => {
      return state.items.filter((item) => !item.completed && !item.archived);
    },
    completed: (state) => {
      return state.items.filter((item) => item.completed && !item.archived);
    },
    archived: (state) => {
      return state.items.filter((item) => item.archived);
    },
    lastId: (state) => {
      return Math.max(...state.items.map((item) => item.id));
    },
  },
  mutations: {
    set(state, items) {
      state.items = items;
    },
    add(state, item) {
      state.items.push(item);
    },
    delete(state, item) {
      state.items[item.id] = item;
    },
  },
  actions: {
    fetchAll({ commit }) {
      commit("set", ITEMS);
    },
    add({ commit, item }) {
      console.log(item);
      commit("add", item);
    },
  },
});
