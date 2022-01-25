<script>

export default {
  name: "SidebarNode",
  props: {
    tree: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      isOpen: true
    };
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen;
    }
  },
}
</script>

<template>
  <div v-for="node in tree" :key="node.id">
    <div class="sidebar__item" data-test="sidebar-item">
      <span class="sidebar__item-toggle" v-if="node.child && node.child.length" @click="toggle()">{{ isOpen ? '-' : '+' }}</span>
      <router-link :to="{name: 'Page', params: {id: node.id}}" :name="node.name" data-test="link">{{ node.name }}</router-link>
    </div>
    <SidebarNode v-if="node.child && node.child.length && isOpen" :tree="node.child" />
  </div>
</template>




<style scoped>


.sidebar__item {
  margin: 24px 0 24px 24px;
}

.sidebar__item a {
  margin-left: 12px;
}

.sidebar__item > a {
  color: white;
}

.sidebar__item :hover {
  background-color: #24a0f5;
}

.sidebar__item-toggle {
  margin-right: 8px;
}

.router-link-active {
  background-color: darkblue;
}

.bold {
  font-weight: bold;
}

</style>