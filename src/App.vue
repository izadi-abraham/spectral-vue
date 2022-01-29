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
  <Header msg="Spectral Assignment" :show-toggle="true" />
  <main class="text-gray-700 dark:bg-gray-500 dark:text-gray-50 flex overflow-hidden pt-16">
    <Sidebar />
    <div class="h-full w-full relative overflow-y-auto ml-64">
      <router-view></router-view>
    </div>
  </main>
</template>
