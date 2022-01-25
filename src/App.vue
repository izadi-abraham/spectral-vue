<script>
import Header from "./components/Header/index.vue";
import Sidebar from "./components/Sidebar/index.vue";
import { api } from "./data/Api";
import store from "./store";

export default {
  name: "App",
  store: store,
  components: {
    Header,
    Sidebar: Sidebar
  },
  setup() {
   const tree = api.getAssetsTree()
    return {
     tree
    }
  }
};
</script>


<template>
  <Header msg="Spectral Front-End Assignment" />
  <main>
    <Sidebar :menuItemsTree="tree" />
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
