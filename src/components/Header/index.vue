<script>
export default {
  name: "Header",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <header
    class="flex items-center p-5 bg-blue-600 z-50 inset-0 fixed w-full h-20"
  >
    <img
      alt="Vue logo"
      class="header__logo"
      src="../../assets/logo.png"
      width="55"
      height="55"
    />
    <h2 class="text-2xl text-gray-800">{{ msg }}</h2>
  </header>
</template>