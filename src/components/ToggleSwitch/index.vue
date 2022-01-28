<template>
  <button
    @click="toggleTheme"
    class="dark:text-gray-300 text-yellow-800">
    Theme Toggle
  </button>
</template>

<script>
export default {
  name: "ThemeToggle",
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    },
  },
};
</script>