import { Bubble, mixins } from 'vue-chartjs';
import DefaultOptions from '../DefaultOptions';

export default Bubble.extend({
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],

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
