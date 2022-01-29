
<script>
export default {
  name: "ToggleSwitch",
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    },
  },
};
</script>

<template>
  <button
    @click="toggleTheme"
    class="dark:text-gray-300 text-yellow-800">
    Theme Toggle
  </button>
</template>