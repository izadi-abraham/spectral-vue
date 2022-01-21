<script>

export default {
  name: "SideBarNode",
  props: {
    node: {
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
  <div v-for="item in node" :key="item.id">
    <div class="sidebar__item">
      <span class="sidebar__item-toggle" v-if="item.child && item.child.length" @click="toggle()">{{ isOpen ? '-' : '+' }}</span>
      <router-link :to="{name: 'Page', params: {id: item.id}}" :name="item.name">{{ item.name }}</router-link>
    </div>
    <SideBarNode v-if="item.child && item.child.length && isOpen" :node="item.child"/>
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