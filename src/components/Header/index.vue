<script>
import ThemeToggle from "../ToggleSwitch/index.vue";
import { XIcon, MenuIcon } from '@heroicons/vue/solid'

export default {
  name: "Header",
  props: {
    msg: {
      type: String,
      default: ""
    },
    showToggle: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ThemeToggle,
    XIcon, MenuIcon
  }

};
</script>

<template>
  <header
    class="flex items-center justify-between py-2 px-4 bg-yellow-500 dark:bg-gray-700 fixed z-30 w-full drop-shadow-md">
    <div class="flex items-center">
      <button type="button"
              class="hidden px-4 pt-1.5 pb-2 font-semibold rounded transition disabled:cursor-wait border border-black !px-2 flex items-center text-gray-400 hover:text-gray-600 hover:bg-yellow-400 border-0 mr-2 md:hidden">
        <span class="sr-only">menu</span>
        <XIcon class="h-6 w-6 text-gray-700 hidden"/>
        <MenuIcon class="h-6 w-6 text-gray-700"/>
      </button>
      <router-link to="/">
        <img class="h-12 w-12" src="../../assets/logo.png" alt="logo" />
      </router-link>
      <h2 class="ml-4 text-lg md:text-2xl text-gray-700 dark:text-white">{{ msg }}</h2>
    </div>
    <ThemeToggle v-if="showToggle" />
  </header>
</template>