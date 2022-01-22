<script>
import { Chart } from "highcharts-vue";

export default {
  name: "LineChart",
  props: {
    seriesData: {
      type: Array,
    },
    categories: {
      type: Array,
    },
  },
  components: {
    Chart,
  },
};
</script>

<template>
  <Chart
    type="chart"
    :options="{
      chart: {
        type: 'line',
      },
      title: {
        text: '',
      },
      xAxis: {
        categories: categories,
      },
      yAxis: {
        title: {
          text: 'Number of stars',
        },
      },
      series: [
        {
          name: 'New project stars',
          data: seriesData,
        },
      ],
    }"
    :redrawOnUpdate="true"
    :oneToOneUpdate="false"
    :animateOnUpdate="true"
  />
</template>
