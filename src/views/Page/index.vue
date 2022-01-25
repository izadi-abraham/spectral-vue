<script>
import { useRoute } from "vue-router";
import { api } from "../../data/Api";
import LineChart from "../../components/Chart/index.vue";


export default {
  name: "Page",
  components: {
    LineChart
  },

  computed: {
    getData() {
      const route = useRoute()
      return api.getMeasurements(Number(route.params.id))
    },
    getDates () {
      return  Object.keys(this.getData.meterReadings).map((date) => new Date(date).toLocaleString('default', { month: 'long', day: "2-digit" }))
    },
    getValues () {
      return Object.values(this.getData.meterReadings)
    }
},
};
</script>

<template>
  <div class="page">
    <line-chart :seriesData="getValues" :categories="getDates"></line-chart>
    <h5 v-if="getData.aggregated">This Asset has no data. Instead the sum of its children is used</h5>
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
