<script>
import { MinusIcon, PlusIcon } from "@heroicons/vue/solid";

export default {
  name: "SidebarNode",
  props: {
    tree: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      isOpen: true
    };
  },
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen;
    }
  },
  components: {
    MinusIcon,
    PlusIcon
  },

};
</script>

<template>
  <div v-for="node in tree" :key="node.id">
    <div class="h-12 font-normal transition text-gray-800 hover:text-gray-500 hover:font-bold flex justify-between items-center w-full pl-4"
      data-test="sidebar-item">
      <router-link active-class="font-bold text-yellow-600 dark:text-yellow-500" class="py-4 w-full text-left dark:text-gray-300 dark:hover:text-gray-200" :to="{name: 'Page', params: {id: node.id}}" :name="node.name" data-test="link">
        {{ node.name }}
      </router-link>
      <div v-if="node.child" class="hover:cursor-pointer mr-3 p-2 rounded-full bg-gray-200 hover:bg-gray-200 hover:text-yellow-500 transition-colors dark:bg-gray-500" @click="toggle()">
        <MinusIcon class="h-4 text-yellow-600 hover:text-yellow-500" v-if="isOpen" />
        <PlusIcon class="h-4" v-if="!isOpen" />
      </div>
    </div>
    <div class="pl-6" v-if="node.child && isOpen">
      <SidebarNode :tree="node.child" />
    </div>
  </div>
</template>
