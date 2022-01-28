<template>
  <div class="sidebar">
    <aside>
      <nav class="sidebar__content" role="navigation">
        <SidebarNode :tree="tree"></SidebarNode>
      </nav>
    </aside>
  </div>
</template>

<script>

import SidebarNode from "../SidebarNode/index.vue";
import { api } from "../../data/Api";

export default {
  name: "Sidebar",
  components: {
    SidebarNode
  },
  setup() {
    const tree = api.getAssetsTree()
    return {
      tree,
    }
  }
}
</script>

<style scoped>

.sidebar {
  width: 300px;
  position: fixed;
  top: 100px;
  left: 0;
  height: 100vh;
  z-index: 999;
  background-color: #2b3940;
  transition: width .3s;
  box-sizing: border-box;
  color: #f2f2f2;
  font-size: 18px;
}

</style>