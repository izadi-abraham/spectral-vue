import LineChart from '../../components/Chart';
import { categories, seriesData } from "../assets/constants";

export default {
  title: 'Chart',
  component: LineChart,
};

const Template = (args) => ({
  components: { LineChart },
  setup() {
    return { args };
  },
  template: '<line-chart :seriesData="args.seriesData" :categories="args.categories" :no-data="args.noData" :aggregated="args.aggregated"/>\n',
});

export const Default = Template.bind({});
export const Aggregated = Template.bind({});
export const Nodata = Template.bind({});

Default.args = {
  seriesData: seriesData,
  categories: categories,
  noData: false,
  aggregated: false
}

Aggregated.args = {
  seriesData: seriesData,
  categories: categories,
  noData: false,
  aggregated: true
}

Nodata.args = {
  seriesData: [],
  categories: [],
  noData: true,
  aggregated: false
}
