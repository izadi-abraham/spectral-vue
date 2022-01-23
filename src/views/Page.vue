<script>
import Content from "../components/Content/index.vue";
import list from "../data/measurements.json";
import assets from "../data/assets.json";
import { useRoute } from "vue-router";
import { api } from "../data/Api";

export default {
  name: "Page",
  components: {
    Content
  },
  props: {},

  computed: {
    getData() {
      const route = useRoute()
      const values = api.getMeasurements(Number(route.params.id));
      console.log(values);
      return values
    }
},
};
</script>

<template>
  <div class="page">
    <Content :measurements="getData"/>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
