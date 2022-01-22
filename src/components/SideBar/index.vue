<template>
  <div class="sidebar">
    <aside>
      <nav class="sidebar__content" role="navigation">
        <SideBarNode :node="menuItemsTree"></SideBarNode>
      </nav>
    </aside>
  </div>
</template>

<script>

import SideBarNode from "../SidebarNode/index.vue";

export default {
  name: "SideBar",
  components: {
    SideBarNode
  },
  props: {
    menuItemsTree: {
      type: Array,
      required: true
    }
  },
  setup(props) {

  },
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