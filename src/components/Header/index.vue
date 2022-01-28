<script>
import ThemeToggle from "../ThemeToggle/index.vue"
export default {
  name: "Header",
  props: {
    msg: {
      type: String,
      default: ''
    },
    showToggle: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ThemeToggle
  },

};
</script>

<template>
  <header class="flex items-center p-5 bg-blue-600 z-50 inset-0 fixed w-full h-20">
    <router-link to="/">
      <img alt="Vue logo" class="header__logo" src="../../assets/logo.png" width="55" height="55"/>
    </router-link>
    <h2 class="text-2xl text-gray-800">{{msg}}</h2>
    <ThemeToggle v-if="showToggle"/>
  </header>
</template>