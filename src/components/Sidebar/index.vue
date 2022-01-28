<template>

  <aside class="drop-shadow-md fixed dark:bg-gray-600 bg-gray-50 flex w-64 h-full z-20 top-0 left-0 pt-16">
    <div class="flex flex-1 border-r dark:border-gray-400 border-gray-200 overflow-y-auto">
      <nav class="w-full" role="navigation">
        <SidebarNode :tree="tree"></SidebarNode>
      </nav>
    </div>
  </aside>
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
    const tree = api.getAssetsTree();
    return {
      tree
    };
  }
};
</script>
