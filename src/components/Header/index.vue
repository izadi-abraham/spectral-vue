<script>
import ThemeToggle from "../ToggleSwitch/index.vue";

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
  }

};
</script>

<template>
  <header
    class="flex items-center justify-between py-2 px-4 bg-yellow-500 dark:bg-gray-700 fixed z-30 w-full drop-shadow-md">
    <div class="flex items-center">
      <router-link to="/">
        <img class="h-12 w-12" src="../../assets/logo.png" alt="logo" />
      </router-link>
      <h2 class="ml-4 text-lg md:text-2xl text-gray-700 dark:text-white">{{ msg }}</h2>
    </div>
    <ThemeToggle v-if="showToggle" />
  </header>
</template>