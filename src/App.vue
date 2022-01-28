<script>
import Header from "./components/Header/index.vue";
import Sidebar from "./components/Sidebar/index.vue";
import store from "./store";
import { mapGetters } from "vuex";

export default {
  name: "App",
  store,
  components: {
    Header,
    Sidebar: Sidebar
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(newTheme, oldTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
  },
  methods: {},
  beforeMount() {
    this.$store.dispatch("initTheme");
  },

};
</script>


<template>
  <Header msg="Spectral Front-End Assignment" :show-toggle="true" />
  <main class="min-h-screen bg-green-50 text-gray-700 dark:bg-gray-900 dark:text-purple-50">
    <Sidebar />
    <router-view></router-view>
  </main>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
