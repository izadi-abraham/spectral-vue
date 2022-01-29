<script>
import { Chart } from "highcharts-vue";

export default {
  name: "LineChart",
  props: {
    seriesData: {
      type: Array
    },
    categories: {
      type: Array
    },
    chartTitle: {
      type: String,
      default: "Asset's Data"
    },
    yAxisTitle: {
      type: String,
      default: ""
    },
    aggregated: {
      type: Boolean
    },
    noData: {
      type: Boolean
    }
  },
  components: {
    Chart
  },
  computed: {
    getTitle() {
      const aggregatedMessage = "This Asset has no data. Instead the sum of its children is used";
      return  this.aggregated ? aggregatedMessage : this.noData ? "No data found" : this.chartTitle;
    }
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
        text: getTitle,
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
