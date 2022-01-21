<template>
  <line-chart :seriesData="getValues" :categories="getDates"></line-chart>
</template>
<script>

import LineChart from '../Chart/index.vue'

export default {
  name: "Content",
  props: {
    values: {
      type: Object
    },
  },
  components: {
    LineChart
  },
  computed: {
    getDates () {
      return  Object.keys(this.values).map((date) => new Date(date).toLocaleString('default', { month: 'long', day: "2-digit" }))
    },
    getValues () {
      return Object.values(this.values)
    }
  }
}

</script>