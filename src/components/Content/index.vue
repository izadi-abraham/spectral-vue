<template>
  <line-chart :seriesData="getValues" :categories="getDates"></line-chart>
  <h5 v-if="measurements.aggregated">This Asset has no data. Instead the sum of its children is used</h5>
</template>
<script>

import LineChart from '../Chart/index.vue'

export default {
  name: "Content",
  props: {
    measurements: {
      type: Object
    },
  },
  components: {
    LineChart
  },
  computed: {
    getDates () {
      return  Object.keys(this.measurements.meterReadings).map((date) => new Date(date).toLocaleString('default', { month: 'long', day: "2-digit" }))
    },
    getValues () {
      return Object.values(this.measurements.meterReadings)
    }

  }
}

</script>