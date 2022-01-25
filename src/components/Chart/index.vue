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
    chartTitle: {
      type: String,
      default: 'test'
    },
    yAxisTitle: {
      type: String,
      default: ''
    }
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
        text: chartTitle,
      },
      xAxis: {
        categories: categories,
      },
      yAxis: {
        title: {
          text: yAxisTitle,
        },
      },
      series: [
        {
          name: '',
          data: seriesData,
        },
      ],
    }"
    :redrawOnUpdate="true"
    :oneToOneUpdate="false"
    :animateOnUpdate="true"
  />
</template>
