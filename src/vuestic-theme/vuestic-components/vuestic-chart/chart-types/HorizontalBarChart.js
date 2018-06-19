import { HorizontalBar, mixins } from 'vue-chartjs';
import DefaultOptions from '../DefaultOptions';

export default HorizontalBar.extend({
  mixins: [mixins.reactiveProp],
  props: ['data', 'options'],

  data() {
    return {
      defaultOptions: {

      },
    };
  },

  mounted() {
    const options = Object.assign({}, DefaultOptions, this.defaultOptions, this.options);
    this.renderChart(this.chartData, options);
  },
});
