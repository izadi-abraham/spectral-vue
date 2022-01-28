<template>
  <button
    @click="toggleTheme"
    class="dark:text-red-400 text-cyan-200">
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

<style scoped>

</style>