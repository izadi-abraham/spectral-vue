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
  <div class="pt-6 px-4 w-full grid min-h-[calc(100vh-64px)]">
    <line-chart :seriesData="getValues" :categories="getDates"></line-chart>
    <h5 class="pt-6" v-if="getData.aggregated">This Asset has no data. Instead the sum of its children is used</h5>
  </div>
</template>

