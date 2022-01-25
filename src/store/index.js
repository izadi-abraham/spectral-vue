import { createStore } from "vuex";

export default createStore({
  state: {
    theme: 'light'
  },
  mutations: {
    changeTheme () {
      state.theme === 'light' ? state.theme = 'dark' : state.theme = 'light'
    }
  },
  actions: {},
  modules: {},
});
